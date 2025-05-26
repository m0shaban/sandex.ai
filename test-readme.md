# Sandex AI Hybrid Chatbot Test

This is a testing environment for the Sandex AI chatbot system designed to function effectively without relying on the DeepSeek API. The hybrid system prioritizes keyword-based responses while providing intelligent fallbacks to ensure a smooth user experience.

## How to Run the Test

1. Open `test-chatbot.html` in a web browser
2. Use the test buttons to see how the chatbot responds to different types of queries
3. Toggle the debug panel to view detailed information about response sources and confidence scores

## Hybrid Chatbot System Features

### 1. Advanced Keyword Matching
The system uses a sophisticated algorithm to match user queries with pre-defined keywords, even when they appear within larger contexts or with spelling variations. The matching process calculates confidence scores based on the relevance of the matches.

### 2. Context-Aware Responses
When a query doesn't match exact keywords, the system analyzes the context to provide the most relevant response from its knowledge base. This ensures that users receive helpful information even when their queries don't contain exact keyword matches.

### 3. Bilingual Support
The chatbot automatically detects whether the user is typing in English or Arabic and responds in the appropriate language. All pre-defined responses are available in both languages.

### 4. Multi-Level Fallbacks
The system implements multiple levels of fallbacks:
- Primary: Keyword-based direct matches
- Secondary: Context-aware intelligent fallbacks
- Tertiary: Emergency fallbacks with diplomatic responses

## Configuration Options

The hybrid system can be configured in `js/env.js`:

```javascript
const DEEPSEEK_CONFIG = {
  // API Settings - These can be placeholder values
  API_KEY: 'your_deepseek_api_key_here',  // Not required for hybrid mode
  API_ENDPOINT: 'https://api.deepseek.com/v1/chat/completions',
  MODEL: 'deepseek-chat',
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7,
  
  // Hybrid System Configuration
  HYBRID_MODE: true,               // Enable hybrid mode (keywords + API fallback)
  KEYWORD_THRESHOLD: 0.6,          // Confidence threshold for keyword matching (0-1)
  PREFER_KEYWORDS: true,           // Always use keyword responses when available
  SIMULATE_API_LATENCY: true,      // Add realistic typing delays for natural interaction
  DEBUG_MODE: false                // Enable/disable detailed console logging
};
```

## Test Cases

The test page provides buttons to test different aspects of the chatbot:

1. **AI Services** - Tests responses about Sandex's AI capabilities
2. **Cybersecurity** - Tests knowledge about security services
3. **Company Info** - Tests information about Sandex as a company
4. **Arabic** - Tests responses to Arabic queries
5. **Random Query** - Selects a random question to test varied responses

## Implementation Details

### Keyword Database Structure
The keyword database is organized by categories with metadata for confidence scoring:

```javascript
const SANDEX_KEYWORDS_DATABASE = {
    category_name: {
        keywords: ["keyword1", "keyword2", "keyword3"], 
        responses: {
            en: "English response...",
            ar: "Arabic response..."
        },
        confidence: 0.95  // Base confidence for this category
    },
    // More categories...
};
```

### Matching Algorithm
The system uses a sophisticated algorithm to:
1. Score direct matches with highest confidence
2. Recognize partial matches with proportional confidence
3. Consider word position and proximity for context relevance
4. Apply language-specific matching techniques

### Fallback Mechanisms
When no direct matches are found:
1. The system analyzes query context to determine the most relevant topic
2. It selects appropriate responses based on context similarity
3. If context analysis fails, it provides a diplomatic general response

## Project Integration

To integrate this hybrid chatbot into your project:
1. Include the required JS files: `sandex-hybrid-chatbot.js`, `env.js`, and `chatbot-ui.js`
2. Initialize the chatbot system with `new SandexHybridChatbot()`
3. Call `generateResponse(message)` to get AI responses that work with or without API
