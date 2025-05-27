// This file ensures that the SandexHybridChatbot class is properly instantiated as a global object
document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing Sandex Hybrid Chatbot global instance...");
    
    // Make sure we have the SandexHybridChatbot constructor
    if (typeof SandexHybridChatbot === 'function') {
        try {
            // Create a global instance if it doesn't exist yet
            if (!window.sandexBot) {
                console.log("Creating global sandexBot instance");
                window.sandexBot = new SandexHybridChatbot();
                
                // Ensure the constructor ran correctly
                if (!window.sandexBot.generateResponse || !window.sandexBot.getEmergencyFallback) {
                    console.error("SandexBot instance missing required methods, recreating...");
                    window.sandexBot = new SandexHybridChatbot();
                }
                
                console.log("SandexBot initialized successfully:", window.sandexBot);
            } else {
                console.log("Global sandexBot instance already exists");
            }
        } catch (error) {
            console.error("Error initializing SandexBot:", error);
            // Try one more time
            window.sandexBot = new SandexHybridChatbot();
        }
    } else {
        console.error("SandexHybridChatbot class not found! Make sure sandex-hybrid-chatbot.js is loaded first.");
    }
    
    // Add debug helpers to window
    window.debugChatbot = function() {
        console.log("Global sandexBot instance:", window.sandexBot);
        return window.sandexBot ? "Chatbot is initialized" : "Chatbot is NOT initialized";
    };
    
    // Add an explicit initialization helper
    window.initSandexBot = function() {
        window.sandexBot = new SandexHybridChatbot();
        return "SandexBot re-initialized";
    };
});
