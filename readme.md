# Sandex AI Landing Page

This is the landing page for Sandex AI, featuring the Shabani Design style with a DeepSeek AI-powered chatbot.

## Project Structure

```
sandex-ai/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # CSS styles
└── js/
    ├── script.js       # JavaScript functionality
    ├── env.js          # DeepSeek API configuration
    └── env-example.js  # Example API configuration
```

## Features

- Responsive design that works on all devices
- Theme toggle between light and dark modes
- Interactive AI chatbot powered by DeepSeek API
- Modern futuristic "Shabani Design" style
- Accessibility-compliant interface

## Deployment Instructions for GoDaddy

### Step 1: Log in to GoDaddy

1. Go to [GoDaddy.com](https://www.godaddy.com/)
2. Log in to your account

### Step 2: Access File Manager

1. Go to your hosting control panel
2. Find and click on "File Manager"

### Step 3: Upload Files

1. Navigate to your website's root directory (usually `public_html`)
2. Create directories for `css` and `js` if they don't already exist
3. Upload all files to their respective directories:
   - `index.html` to the root directory
   - `css/styles.css` to the `css` directory
   - `js/script.js`, `js/env.js`, and other js files to the `js` directory

### Step 4: DeepSeek API Integration

Before full deployment, you need to implement the DeepSeek API integration:

1. Obtain a DeepSeek API key
2. Modify the `callDeepSeekAPI` function in `js/script.js` to use your actual API key and endpoint
3. For security, consider implementing the API calls through a server-side proxy

## DeepSeek API Integration (Backend Required)

The current implementation includes a placeholder for the DeepSeek API integration. For production use:

1. Create a backend service (Node.js, Python, etc.) to handle API calls to DeepSeek
2. Update the `callDeepSeekAPI` function in `script.js` to call your backend endpoint
3. Store your DeepSeek API key securely on the server-side

## Customization

- Update contact information and social media links in `index.html`
- Modify service descriptions in the Services section
- Update color scheme by changing variables in `styles.css`

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Design: Shabani Design Style
- Icons: Font Awesome
- Animations: GSAP and custom CSS
- Particle effects: particles.js
#   s a n d e x . a i 
 
 #   s a n d e x . a i 
 
 