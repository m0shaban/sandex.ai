// SANDEX AI HYBRID CHATBOT CONFIGURATION
// =================================================
// 1. Rename this file to env.js
// 2. Configure the settings below
// 3. Add your file to .gitignore in production environment

const DEEPSEEK_CONFIG = {
  // API Settings
  // ------------
  // These can be left as placeholders if you're not using the API
  // The chatbot will automatically use the keyword-based system
  API_KEY: 'your_deepseek_api_key_here',
  API_ENDPOINT: 'https://api.deepseek.com/v1/chat/completions',
  MODEL: 'deepseek-chat',
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7,
  
  // Hybrid System Configuration
  // --------------------------
  // These settings control how the chatbot behaves
  HYBRID_MODE: true,               // Enable hybrid mode (keywords + API fallback)
  KEYWORD_THRESHOLD: 0.6,          // Confidence threshold for keyword matching (0-1)
  PREFER_KEYWORDS: true,           // Always use keyword responses when available, even with API
  SIMULATE_API_LATENCY: true,      // Add realistic typing delays for more natural interaction
  DEBUG_MODE: false                // Enable/disable detailed console logging
};
