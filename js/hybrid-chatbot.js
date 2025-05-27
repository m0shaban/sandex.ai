// ========== HYBRID CHATBOT IMPLEMENTATION ==========

import { FALLBACK_RESPONSES, FALLBACK_SCENARIOS } from './fallback-responses.js';

class HybridChatbot {
    constructor(config = {}) {
        this.config = {
            apiEnabled: true,
            preferKeywords: false,
            confidenceThreshold: 0.7,
            ...config
        };
        
        this.diplomaticResponses = FALLBACK_RESPONSES.diplomatic;
        this.emergencyResponses = FALLBACK_RESPONSES.emergency;
        this.quickActions = FALLBACK_RESPONSES.quickActions;
        this.keyboardShortcuts = FALLBACK_RESPONSES.keyboardShortcuts;
        this.relatedTopics = FALLBACK_RESPONSES.relatedTopics;
        this.scenarios = FALLBACK_SCENARIOS;
        
        this.conversationHistory = [];
        this.lastIntent = null;
    }

    // ========== CORE RESPONSE GENERATION ==========
    
    async generateResponse(userMessage) {
        // Add message to conversation history
        this.conversationHistory.push({ role: 'user', content: userMessage });
        
        try {
            // First attempt to match from keyword database
            const keywordMatch = this.findKeywordMatch(userMessage);
            
            // If we have a good keyword match and prefer keywords, use it
            if (keywordMatch && keywordMatch.confidence > this.config.confidenceThreshold && 
                (this.config.preferKeywords || !this.config.apiEnabled)) {
                return this.formatResponse(keywordMatch);
            }
            
            // Try API if enabled
            if (this.config.apiEnabled) {
                try {
                    const apiResponse = await this.callAPI(userMessage);
                    return this.formatResponse({
                        response: apiResponse,
                        source: 'api',
                        confidence: 1.0
                    });
                } catch (error) {
                    console.warn('API call failed:', error);
                    // Enhanced diplomatic fallback based on error type
                    if (error.name === 'TimeoutError') {
                        return this.getDiplomaticFallback(userMessage, 'timeout');
                    } else if (error.name === 'APIError') {
                        return this.getDiplomaticFallback(userMessage, 'apiError');
                    } else {
                        return this.getDiplomaticFallback(userMessage, 'error');
                    }
                }
            }
            
            // Use intelligent fallback system
            const intelligentFallback = this.getIntelligentFallback(userMessage);
            if (intelligentFallback) {
                return this.formatResponse(intelligentFallback);
            }
            
            // Last resort: diplomatic emergency fallback
            return this.formatResponse(this.getEmergencyFallback());
            
        } catch (error) {
            console.error('Error generating response:', error);
            return this.formatResponse(this.getEmergencyFallback('error'));
        }
    }

    // ========== FALLBACK MECHANISMS ==========
    
    getDiplomaticFallback(userMessage, type = 'apiUnavailable') {
        const topic = this.extractTopic(userMessage);
        let response;
        
        // Get specific scenario response if available
        const scenario = this.detectSpecificScenario(userMessage);
        if (scenario && this.specificScenarios[scenario]) {
            response = this.specificScenarios[scenario][
                Math.floor(Math.random() * this.specificScenarios[scenario].length)
            ];
        } else {
            // Get general diplomatic response
            response = this.diplomaticResponses[type][
                Math.floor(Math.random() * this.diplomaticResponses[type].length)
            ].replace('{topic}', topic);
        }
        
        return {
            response: response,
            source: 'fallback',
            confidence: 0.8,
            suggestions: this.getFallbackSuggestions(topic)
        };
    }
    
    getIntelligentFallback(userMessage) {
        // Check for common intents
        const intent = this.detectIntent(userMessage);
        if (intent && this.scenarios.intents[intent]) {
            return {
                response: this.scenarios.intents[intent].response,
                source: 'intent',
                confidence: 0.9,
                suggestions: this.scenarios.intents[intent].suggestions
            };
        }
        
        // Check for related topics
        const relatedTopics = this.findRelatedTopics(userMessage);
        if (relatedTopics.length > 0) {
            return {
                response: this.diplomaticResponses.fallbackOptions[
                    Math.floor(Math.random() * this.diplomaticResponses.fallbackOptions.length)
                ].replace('{topic}', relatedTopics[0]),
                source: 'related',
                confidence: 0.7,
                suggestions: relatedTopics
            };
        }
        
        return null;
    }
    
    getEmergencyFallback(type = 'noMatch') {
        const responses = this.emergencyResponses[type];
        const response = responses[Math.floor(Math.random() * responses.length)];
        
        return {
            response: response,
            source: 'emergency',
            confidence: 0.6,
            suggestions: Object.keys(this.quickActions)
        };
    }

    // ========== UTILITY FUNCTIONS ==========
    
    formatResponse(response) {
        // Add keyboard shortcuts if confidence is low
        if (response.confidence < 0.8) {
            response.keyboardShortcuts = this.keyboardShortcuts;
        }
        
        // Add to conversation history
        this.conversationHistory.push({ role: 'assistant', content: response.response });
        
        return response;
    }
    
    extractTopic(message) {
        // Simple topic extraction - can be enhanced with NLP
        const words = message.toLowerCase().split(' ');
        for (const word of words) {
            if (this.relatedTopics[word]) {
                return word;
            }
        }
        return 'our services';
    }
    
    detectIntent(message) {
        const lowerMessage = message.toLowerCase();
        
        // Pricing related
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || 
            lowerMessage.includes('pricing') || lowerMessage.includes('budget')) {
            return 'pricing';
        }
        
        // Services related
        if (lowerMessage.includes('service') || lowerMessage.includes('offer') || 
            lowerMessage.includes('capability') || lowerMessage.includes('solution')) {
            return 'services';
        }
        
        // Contact related
        if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || 
            lowerMessage.includes('email') || lowerMessage.includes('phone') || 
            lowerMessage.includes('address')) {
            return 'contact';
        }
        
        // Projects related
        if (lowerMessage.includes('project') || lowerMessage.includes('case study') || 
            lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
            return 'projects';
        }
        
        // Partners related
        if (lowerMessage.includes('partner') || lowerMessage.includes('client') || 
            lowerMessage.includes('collaboration') || lowerMessage.includes('alliance')) {
            return 'partners';
        }
        
        // Technology related
        if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || 
            lowerMessage.includes('programming') || lowerMessage.includes('development') || 
            lowerMessage.includes('ai') || lowerMessage.includes('cybersecurity')) {
            return 'technology';
        }
        
        return null;
    }
    
    findRelatedTopics(message) {
        const words = message.toLowerCase().split(' ');
        const related = new Set();
        
        // Check for technology keywords
        const techKeywords = ['ai', 'ml', 'machine learning', 'cybersecurity', 'cloud', 'devops', 'software'];
        if (techKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
            related.add('technology');
        }
        
        // Check for project keywords
        const projectKeywords = ['petrojet', 'pms', 'arab union', 'ton', 'toor travel'];
        if (projectKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
            related.add('projects');
        }
        
        // Check for partner keywords
        const partnerKeywords = ['ministry', 'government', 'university', 'agency', 'foundation'];
        if (partnerKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
            related.add('partners');
        }
        
        // Check for service keywords
        for (const word of words) {
            if (this.relatedTopics[word]) {
                this.relatedTopics[word].forEach(topic => related.add(topic));
            }
        }
        
        return Array.from(related);
    }
    
    getFallbackSuggestions(topic) {
        return {
            keyboard: this.keyboardShortcuts,
            relatedTopics: this.findRelatedTopics(topic),
            quickActions: Object.keys(this.quickActions)
        };
    }

    detectSpecificScenario(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('technical') || lowerMessage.includes('technology') || 
            lowerMessage.includes('stack') || lowerMessage.includes('expertise')) {
            return 'technical';
        }
        
        if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || 
            lowerMessage.includes('case study') || lowerMessage.includes('work')) {
            return 'projects';
        }
        
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || 
            lowerMessage.includes('pricing') || lowerMessage.includes('budget')) {
            return 'pricing';
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || 
            lowerMessage.includes('email') || lowerMessage.includes('phone')) {
            return 'contact';
        }
        
        return null;
    }

    // ========== API INTERACTION ==========
    
    async callAPI(message) {
        // Implement your API call here
        throw new Error('API not implemented');
    }
    
    findKeywordMatch(message) {
        // Implement your keyword matching logic here
        return null;
    }
}

// Export the HybridChatbot class
export default HybridChatbot; 