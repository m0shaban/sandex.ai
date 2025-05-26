document.addEventListener('DOMContentLoaded', function() {    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#EF571B'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: 'F3C846',
                    opacity: 0.2,
                    width: 1
                },                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 180,
                        line_linked: {
                            opacity: 0.8
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 150,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // تم إزالة جميع الأكواد الخاصة بواجهة الشات من هذا الملف:
    // - Chat Interface Toggle
    // - دالة openChatWithWelcome
    // - sendChatMessage و callDeepSeekAPI
    // - ربط الأحداث مع sendMessage و chatInput

    // Enhanced mouse movement effect for particles
    document.addEventListener('mousemove', (e) => {
        if (window.pJSDom && window.pJSDom.length > 0) {
            // Get mouse position
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Update the particles.js mouse position
            window.pJSDom[0].pJS.interactivity.mouse.pos_x = mouseX;
            window.pJSDom[0].pJS.interactivity.mouse.pos_y = mouseY;
            
            // Simulate mouse hover to make particles react
            window.pJSDom[0].pJS.interactivity.status = 'mousemove';
            
            // Create a gentle attraction effect
            const particles = window.pJSDom[0].pJS.particles.array;
            
            // Add subtle movement toward cursor for nearby particles
            particles.forEach(p => {
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                  // Only affect particles within a certain range
                if (distance < 200) {
                    const forceX = dx / (isLightTheme ? 100 : 80);
                    const forceY = dy / (isLightTheme ? 100 : 80);
                    
                    // Apply gentle force toward cursor
                    p.vx += forceX * 0.02;
                    p.vy += forceY * 0.02;
                }
            });
        }
    });
    
    // Hide the effect when cursor leaves the window
    document.addEventListener('mouseleave', () => {
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.interactivity.status = 'mouseleave';
        }
    });

    // Add custom mouse interaction handler 
    function enhanceParticleInteraction() {
        // Wait until particles are initialized
        if (window.pJSDom && window.pJSDom.length > 0) {
            const canvas = document.querySelector('#particles-js canvas');
            if (!canvas) return;
            
            // Add enhanced touch support for mobile devices
            canvas.addEventListener('touchmove', function(e) {
                if (e.touches.length > 0 && window.pJSDom && window.pJSDom.length > 0) {
                    // Get touch position
                    const rect = canvas.getBoundingClientRect();
                    const touchX = e.touches[0].clientX - rect.left;
                    const touchY = e.touches[0].clientY - rect.top;
                    
                    // Update the particles.js mouse position
                    window.pJSDom[0].pJS.interactivity.mouse.pos_x = touchX;
                    window.pJSDom[0].pJS.interactivity.mouse.pos_y = touchY;
                    
                    // Simulate mouse hover to make particles react
                    window.pJSDom[0].pJS.interactivity.status = 'mousemove';
                    
                    // Prevent default behavior to avoid scrolling
                    e.preventDefault();
                }
            }, { passive: false });
            
            // Reset on touch end
            canvas.addEventListener('touchend', function() {
                if (window.pJSDom && window.pJSDom.length > 0) {
                    window.pJSDom[0].pJS.interactivity.status = 'mouseleave';
                }
            });
        } else {
            // If particles not yet initialized, try again in a moment
            setTimeout(enhanceParticleInteraction, 500);
        }
    }

    // Call this after particles are initialized
    setTimeout(enhanceParticleInteraction, 1000);

    // Add entrance animations to page elements
    function applyEntranceAnimations() {
        // Header elements
        const header = document.querySelector('header');
        if (header) {
            header.classList.add('fade-in-down');
        }
        
        // Hero section elements
        const heroTitle = document.querySelector('#home h1');
        const heroText = document.querySelector('#home p');
        const heroButtons = document.querySelectorAll('#home a.cyber-button');
        
        if (heroTitle) heroTitle.classList.add('fade-in-up', 'delay-300');
        if (heroText) heroText.classList.add('fade-in-up', 'delay-500');
        
        heroButtons.forEach((button, index) => {
            button.classList.add('fade-in-up', `delay-${(index + 7) * 100}`);
        });
        
        // Hero image/animation
        const heroImage = document.querySelector('#home .holographic-card');
        if (heroImage) heroImage.classList.add('zoom-in', 'delay-800');
        
        // Add fade-in effects to all section titles
        const sectionTitles = document.querySelectorAll('section h2');
        sectionTitles.forEach(title => {
            title.classList.add('fade-in-up');
        });
    }
    
    // Apply entrance animations after a short delay
    setTimeout(applyEntranceAnimations, 300);    // Automatically open chat after 3 seconds, but only on first load
    if (!sessionStorage.getItem('chatShown')) {
        setTimeout(() => {
            openChatWithWelcome();
            sessionStorage.setItem('chatShown', 'true');
        }, 3000);
    }

    // Chat Functionality with DeepSeek API    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');    // Function to add a message to the chat interface
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'flex mb-4';
        
        // Add emojis to AI responses
        let formattedMessage = message;
        if (sender === 'ai') {
            // Process message text (convert line breaks to <br>)
            formattedMessage = message.replace(/\n/g, '<br>');
            
            // Add emojis based on content
            if (formattedMessage.toLowerCase().includes('hello') || formattedMessage.toLowerCase().includes('hi')) {
                formattedMessage = '👋 ' + formattedMessage;
            } else if (formattedMessage.toLowerCase().includes('thank')) {
                formattedMessage = '🙏 ' + formattedMessage;
            } else if (formattedMessage.toLowerCase().includes('help')) {
                formattedMessage = '🤝 ' + formattedMessage;
            } else if (formattedMessage.toLowerCase().includes('sorry')) {
                formattedMessage = '😔 ' + formattedMessage;
            } else if (formattedMessage.toLowerCase().includes('success') || formattedMessage.toLowerCase().includes('great')) {
                formattedMessage = '🎉 ' + formattedMessage;
            } else if (formattedMessage.toLowerCase().includes('important')) {
                formattedMessage = '⚠️ ' + formattedMessage;
            } else if (formattedMessage.length < 50) {
                // For short responses, add a friendly emoji
                const shortEmojis = ['✨', '👍', '💡', '✅', '🔍', '💯'];
                formattedMessage = shortEmojis[Math.floor(Math.random() * shortEmojis.length)] + ' ' + formattedMessage;
            } else if (formattedMessage.length > 200) {
                // For longer, detailed responses
                formattedMessage = '📝 ' + formattedMessage;
            } else {
                // For medium length responses, randomly select
                const randomEmojis = ['🤖', '💬', '🔆', '📊', '🚀', '🌟', '💡', '✨'];
                const randomIndex = Math.floor(Math.random() * randomEmojis.length);
                formattedMessage = randomEmojis[randomIndex] + ' ' + formattedMessage;
            }
        }
        
        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="ml-auto bg-yellow-500/10 rounded-lg px-4 py-3 text-sm max-w-xs border border-yellow-500/30">
                    ${message}
                </div>
                <div class="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center ml-2">
                    <i class="fas fa-user text-yellow-400"></i>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-2">
                    <i class="fas fa-robot text-orange-400"></i>
                </div>
                <div class="bg-orange-500/10 rounded-lg px-4 py-3 text-sm max-w-xs border border-orange-500/30">
                    ${formattedMessage}
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }// Function to handle sending a message
    async function sendChatMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Add user's message to chat
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Add typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'flex mb-4 typing-indicator';
        typingIndicator.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-2">
                <i class="fas fa-robot text-orange-400"></i>
            </div>
            <div class="bg-orange-500/10 rounded-lg px-4 py-3 text-sm max-w-xs border border-orange-500/30">
                <span class="typing-dot">.</span>
                <span class="typing-dot">.</span>
                <span class="typing-dot">.</span>
            </div>
        `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
          try {
            // DeepSeek API integration
            const response = await callDeepSeekAPI(message);
            
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Add AI response
            addMessage(response, 'ai');
            
        } catch (error) {
            console.error('Error communicating with DeepSeek API:', error);
            chatMessages.removeChild(typingIndicator);
            
            // Show a more user-friendly error message
            const errorMessage = error.message && error.message.includes('API key') 
                ? 'There seems to be an issue with the AI service authentication. Please contact the administrator.'
                : 'Sorry, I encountered an error while processing your request. Please try again later.';
                
            addMessage(errorMessage, 'ai');
        }
    }
      // Function to display env.js file error
    function showEnvFileError() {
        console.warn("=== CHATBOT CONFIGURATION ERROR ===");
        console.warn("Missing or invalid env.js file. Please follow these steps:");
        console.warn("1. Copy the js/env-example.js file to js/env.js");
        console.warn("2. Open js/env.js and add your DeepSeek API key");
        console.warn("3. Refresh the page to apply the changes");
        console.warn("See README.md for more detailed instructions");
        
        // Add visual error message in chatbot
        if (document.getElementById('chatMessages')) {
            const errorMsg = document.createElement('div');
            errorMsg.className = 'message error-message';
            errorMsg.innerHTML = `
                <div class="message-content bot-content">
                    <strong>⚠️ Configuration Error:</strong>
                    <p>The chatbot configuration file (env.js) is missing or invalid.</p>
                    <p>Please check the browser console for setup instructions.</p>
                </div>
            `;
            document.getElementById('chatMessages').appendChild(errorMsg);
        }
    }

    // Function to call DeepSeek API
    async function callDeepSeekAPI(userMessage) {
        try {
            // Check if the DeepSeek configuration exists
            if (typeof DEEPSEEK_CONFIG === 'undefined') {
                console.error('DeepSeek configuration not found. Please ensure env.js is loaded correctly.');
                showEnvFileError();
                return 'Sorry, there was an issue with the AI configuration. Please check the console for setup instructions.';
            }
            
            // Prepare API request to DeepSeek
            const response = await fetch(DEEPSEEK_CONFIG.API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DEEPSEEK_CONFIG.API_KEY}`
                },
                body: JSON.stringify({
                    model: DEEPSEEK_CONFIG.MODEL,                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful and engaging AI assistant for Sandex for Artificial Intelligence and Digital Transformation. Your personality is friendly, professional, and occasionally witty. Customize your responses based on the query type:\n\n1. For simple questions: Provide brief, direct answers (1-2 sentences)\n2. For complex technical questions: Offer detailed, structured explanations with bullet points where helpful\n3. For inquiries about services: Highlight relevant Sandex AI offerings with clear benefits\n\nYou provide information about Sandex AI services, including artificial intelligence solutions, digital transformation, technology training, cybersecurity, custom software development, and system testing. When uncertain, suggest contacting Sandex directly for more information. Use professional but conversational language that reflects the futuristic and innovative nature of Sandex."
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ],
                    max_tokens: DEEPSEEK_CONFIG.MAX_TOKENS,
                    temperature: DEEPSEEK_CONFIG.TEMPERATURE
                })
            });
            
            // Parse the API response
            const data = await response.json();
            
            // Handle errors
            if (!response.ok) {
                console.error('DeepSeek API error:', data);
                return `Sorry, there was an error with the AI service. (${data.error?.message || 'Unknown error'})`;
            }
            
            // Return the AI's response
            return data.choices[0].message.content;
            
        } catch (error) {
            console.error('DeepSeek API error:', error);
            return 'Sorry, I encountered an error while processing your request. Please try again later.';
        }
    }
      // Event listeners for chat
    sendMessage.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    // Add animation to elements already in view on page load
    animateOnScroll();
    
    // Trigger animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize GSAP animations for holographic cards
    const cards = document.querySelectorAll('.holographic-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) - 0.5;
            const y = ((e.clientY - rect.top) / rect.height) - 0.5;
            
            gsap.to(card, {
                rotationY: x * 5,
                rotationX: -y * 5,
                duration: 0.5,
                ease: 'power1.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.5,
                ease: 'power1.out'
            });
        });
    });

    // ========== ADVANCED FLOATING + MAGNETIC ICONS (HERO SECTION) ==========
    (function () {
        const magneticIcons = document.querySelectorAll('.magnetic-float');
        const strength = 80;
        const maxDist = 120;
        const floats = [];
        let mouse = { x: 0, y: 0, active: false };
        let animating = false;

        // Assign each icon a random base position and floating parameters
        magneticIcons.forEach((icon, i) => {
            // Exclude the main logo icon from magnetic effect if it has a special class
            if (icon.classList.contains('main-logo-float')) return;
            const base = icon.getBoundingClientRect();
            floats.push({
                el: icon,
                baseX: 0,
                baseY: 0,
                floatRadius: 8 + Math.random() * 10,
                floatSpeed: 0.5 + Math.random() * 0.7,
                floatAngle: Math.random() * Math.PI * 2,
                tx: 0,
                ty: 0
            });
        });

        function animate() {
            if (window.innerWidth <= 768) return;
            floats.forEach(f => {
                // Floating animation
                f.floatAngle += 0.008 * f.floatSpeed;
                const floatX = Math.cos(f.floatAngle) * f.floatRadius;
                const floatY = Math.sin(f.floatAngle) * f.floatRadius;
                let tx = floatX, ty = floatY;
                // Magnetic repulsion
                if (mouse.active) {
                    const rect = f.el.getBoundingClientRect();
                    const iconCenter = {
                        x: rect.left + rect.width / 2 + window.scrollX,
                        y: rect.top + rect.height / 2 + window.scrollY
                    };
                    const dx = mouse.x - iconCenter.x;
                    const dy = mouse.y - iconCenter.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        const angle = Math.atan2(dy, dx);
                        const repel = (1 - dist / maxDist) * strength;
                        tx += Math.cos(angle) * -repel;
                        ty += Math.sin(angle) * -repel;
                        f.el.style.zIndex = 10;
                        f.el.style.transform = `translate(${tx}px, ${ty}px) scale(1.15)`;
                        return;
                    } else {
                        f.el.style.zIndex = '';
                    }
                }
                f.el.style.transform = `translate(${tx}px, ${ty}px)`;
            });
            requestAnimationFrame(animate);
        }

        function handleMouseMove(e) {
            if (window.innerWidth <= 768) return;
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            mouse.active = true;
        }
        function handleMouseLeave() {
            mouse.active = false;
            floats.forEach(f => {
                f.el.style.zIndex = '';
            });
        }
        function handleResize() {
            mouse.active = false;
            floats.forEach(f => {
                f.el.style.transform = '';
                f.el.style.zIndex = '';
            });
        }
        if (floats.length > 0) {
            animating = true;
            requestAnimationFrame(animate);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
            window.addEventListener('resize', handleResize);
        }
    })();

    // ========== MAGNETIC REPULSION FOR SERVICE ICONS ==========
    (function () {
        const serviceIcons = document.querySelectorAll('.floating-service-icon');
        const strength = 40; // Reduced strength for service icons
        const maxDist = 80;  // Reduced max distance for service icons
        const iconsData = [];
        let mouse = { x: 0, y: 0, active: false };

        serviceIcons.forEach((icon) => {
            // Store initial position and create floating animation using GSAP
            const rect = icon.getBoundingClientRect();
            const initialX = icon.offsetLeft;
            const initialY = icon.offsetTop;

            const floatRadius = 4 + Math.random() * 6; // Smaller float radius
            const floatSpeed = 0.8 + Math.random() * 0.5;
            const floatAngle = Math.random() * Math.PI * 2;

            const data = {
                el: icon,
                initialX: initialX,
                initialY: initialY,
                floatRadius: floatRadius,
                floatSpeed: floatSpeed,
                floatAngle: floatAngle,
                currentFloatX: 0,
                currentFloatY: 0,
                magneticTX: 0,
                magneticTY: 0,
                gsapTween: null, // To store the main position tween
                floatTween: null // To store the floating animation tween
            };

            // Create GSAP floating animation
            data.floatTween = gsap.to(data, { 
                floatAngle: data.floatAngle + Math.PI * 2,
                duration: 4 + Math.random() * 3, // Random duration
                repeat: -1,
                ease: "none",
                onUpdate: () => {
                    data.currentFloatX = Math.cos(data.floatAngle) * data.floatRadius;
                    data.currentFloatY = Math.sin(data.floatAngle) * data.floatRadius;
                }
            });

            iconsData.push(data);

            // Add hover effects
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, { scale: 1.15, duration: 0.3, ease: "back.out(1.7)" });
                icon.style.zIndex = 10; // Bring hovered icon to front
            });

            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
                 // Use a small delay before resetting zIndex to avoid flickering
                setTimeout(() => { icon.style.zIndex = 3; }, 300);
            });
        });

        function animateIcons() {
            if (window.innerWidth <= 768) return; // Disable on small screens

            iconsData.forEach(data => {
                const iconCenter = {
                    x: data.el.getBoundingClientRect().left + data.el.getBoundingClientRect().width / 2,
                    y: data.el.getBoundingClientRect().top + data.el.getBoundingClientRect().height / 2
                };

                let targetX = data.currentFloatX;
                let targetY = data.currentFloatY;

                // Apply magnetic repulsion if mouse is active
                if (mouse.active) {
                    const dx = mouse.x - iconCenter.x;
                    const dy = mouse.y - iconCenter.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const angle = Math.atan2(dy, dx);
                        const repel = (1 - dist / maxDist) * strength;
                        targetX += Math.cos(angle) * -repel;
                        targetY += Math.sin(angle) * -repel;
                    }
                }

                // Animate icon to the target position using GSAP
                // If a tween is already running, kill it and create a new one
                if (data.gsapTween) data.gsapTween.kill();
                data.gsapTween = gsap.to(data.el, { 
                    x: targetX,
                    y: targetY,
                    duration: mouse.active ? 0.3 : 0.6, // Faster animation on mouse active
                    ease: mouse.active ? "power2.out" : "power1.inOut"
                });
            });

             // Request next frame
            requestAnimationFrame(animateIcons);
        }

        function handleMouseMove(e) {
             if (window.innerWidth <= 768) return;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        }

        function handleMouseLeave() {
             if (window.innerWidth <= 768) return;
            mouse.active = false;
             // Animate icons back to their floating positions
             iconsData.forEach(data => {
                 if (data.gsapTween) data.gsapTween.kill();
                 data.gsapTween = gsap.to(data.el, { 
                     x: data.currentFloatX,
                     y: data.currentFloatY,
                     duration: 0.6,
                     ease: "power2.out"
                 });
             });
        }
        
        function handleResize() {
             // Restart animations or reset positions on resize if needed
             // For now, just disable magnetic effect on small screens handled in animateIcons
        }

        // Start the animation loop and event listeners
        requestAnimationFrame(animateIcons);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);

    })();
});
