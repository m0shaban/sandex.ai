// Rename this file to env.js and add your DeepSeek API key
// This file should be added to .gitignore in a production environment

const DEEPSEEK_CONFIG = {
  API_KEY: 'your_deepseek_api_key_here',
  API_ENDPOINT: 'https://api.deepseek.com/v1/chat/completions', // Replace with actual endpoint
  MODEL: 'deepseek-chat', // Replace with the appropriate model name
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7,
  // Add any other configuration parameters
};
