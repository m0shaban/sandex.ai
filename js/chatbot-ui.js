// ========== CHATBOT UI INTEGRATION ==========
(function() {
    // متغيرات عامة
    let sandexBot;
    let analytics;
    let isTyping = false;
    let chatOpen = false;
    let welcomeMessageShown = false;

    // عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM loaded, initializing chatbot');
        // إنشاء عناصر واجهة المستخدم للشات بوت
        createChatInterface();
        
        // تهيئة النظام الهجين
        initHybridChatSystem();
        
        // تفعيل أزرار الدردشة في الصفحة
        initPageChatButtons();
    });

    // تهيئة أزرار الدردشة في الصفحة
    function initPageChatButtons() {
        try {
            console.log('Initializing page chat buttons');
            const chatToggle = document.getElementById('chatToggle');
            
            if (chatToggle) {
                console.log('Chat toggle button found, adding event listener');
                chatToggle.addEventListener('click', function() {
                    console.log('Chat toggle clicked');
                    toggleChatWindow();
                });
            } else {
                console.warn('Chat toggle button not found in the page');
            }
        } catch (error) {
            console.error('Error initializing page chat buttons:', error);
        }
    }

    // تهيئة نظام الشات بوت الهجين
    function initHybridChatSystem() {
        try {
            console.log('Initializing hybrid chat system');
            
            // التأكد من وجود الملفات اللازمة
            if (typeof SandexHybridChatbot !== 'function') {
                console.error('SandexHybridChatbot class not found. Make sure sandex-hybrid-chatbot.js is loaded before chatbot-ui.js');
                return;
            }
            
            if (typeof ChatbotAnalytics !== 'function' && typeof SandexHybridChatbot.ChatbotAnalytics === 'function') {
                window.ChatbotAnalytics = SandexHybridChatbot.ChatbotAnalytics;
            }
            
            // إنشاء كائنات الشات بوت والتحليلات
            sandexBot = new SandexHybridChatbot();
            
            if (typeof ChatbotAnalytics === 'function') {
                analytics = new ChatbotAnalytics();
            } else {
                console.warn('ChatbotAnalytics not found, analytics will be disabled');
                analytics = {
                    logInteraction: function() { console.log('Analytics disabled'); }
                };
            }
            
            // ربط الأحداث
            const chatInput = document.getElementById('chatInput');
            const sendBtn = document.getElementById('sendMessage');
            const floatingBtn = document.getElementById('floatingChatBtn');
            const closeBtn = document.getElementById('closeChat');
            
            // تفعيل زر الشات العائم
            if (floatingBtn) {
                console.log('Adding event listener to floating button');
                floatingBtn.addEventListener('click', function(e) {
                    console.log('Floating button clicked');
                    e.preventDefault();
                    toggleChatWindow();
                });
            } else {
                console.warn('Floating chat button not found');
            }
            
            // تفعيل زر الإغلاق
            if (closeBtn) {
                closeBtn.addEventListener('click', toggleChatWindow);
            }
            
            // تفعيل زر الإرسال
            if (sendBtn) {
                sendBtn.addEventListener('click', handleSendMessage);
            }
            
            // تفعيل إرسال الرسالة بالضغط على Enter
            if (chatInput) {
                chatInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                    }
                });
                
                // تفعيل زر الإرسال عند الكتابة
                chatInput.addEventListener('input', function() {
                    if (sendBtn) {
                        sendBtn.disabled = this.value.trim() === '';
                    }
                });
            }
            
            // تفعيل أزرار الرد السريع
            document.addEventListener('click', function(e) {
                if (e.target && e.target.classList.contains('quick-reply-btn')) {
                    const replyText = e.target.textContent.trim();
                    handleQuickReply(replyText);
                }
            });
            
            // عرض رسالة الترحيب عند فتح الشات
            document.addEventListener('chatWindowOpened', function() {
                if (!welcomeMessageShown) {
                    setTimeout(function() {
                        showWelcomeMessage();
                        welcomeMessageShown = true;
                    }, 500);
                }
            });

            console.log('Chat system initialized successfully');
        } catch (error) {
            console.error('Error initializing chat system:', error);
        }
    }

    // إنشاء واجهة الشات
    function createChatInterface() {
        try {
            console.log('Creating chat interface');
            // التحقق من وجود العناصر - واجهة الشات موجودة بالفعل في HTML
            let chatInterface = document.getElementById('chatInterface');
            if (chatInterface) {
                console.log('Chat interface found in HTML, no need to create dynamically');
                return;
            }
            
            // في حالة عدم وجود واجهة الشات في HTML
            console.log('Chat interface not found in HTML, creating dynamically');
            
            // إنشاء عنصر الشات الرئيسي
            chatInterface = document.createElement('div');
            chatInterface.id = 'chatInterface';
            chatInterface.className = 'fixed bottom-0 right-0 z-50 w-full max-w-md hidden';
            
            chatInterface.innerHTML = `
                <div class="chat-container holographic-card p-6 bg-gray-900/95 backdrop-blur-2xl border border-orange-500/40 rounded-t-3xl mx-4 shadow-2xl">
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg pulse-soft">
                                <i class="fas fa-robot text-white text-xl"></i>
                            </div>
                            <h3 class="text-orange-400 font-exo font-bold text-xl tracking-tight">Sandex AI Assistant</h3>
                        </div>
                        <button id="closeChat" aria-label="Close Chat" title="Close chat window" class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all rounded-full bg-gray-800/60 hover:bg-orange-500/20 shadow-md">
                            <i class="fas fa-times text-lg"></i>
                        </button>
                    </div>
                    <div id="chatMessages" class="chat-messages h-96 overflow-y-auto mb-6 space-y-4 px-1 custom-scrollbar">
                        <!-- Messages will be added here dynamically -->
                    </div>
                    <div class="chat-input flex gap-2">
                        <input id="chatInput" type="text" placeholder="Type your message..." class="flex-1 px-4 py-3 bg-gray-800/70 border border-orange-500/30 focus:border-orange-400 rounded-2xl text-light outline-none transition-all text-base shadow-inner font-exo">
                        <button id="sendMessage" aria-label="Send Message" title="Send message" class="px-5 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl text-white font-bold hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 glow-hover shadow-lg flex items-center justify-center text-lg">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            `;
            
            // إضافة عنصر الشات إلى الصفحة
            document.body.appendChild(chatInterface);
            console.log('Chat interface created and added to the page');

            // Add event listeners to the newly created elements
            const closeBtn = document.getElementById('closeChat');
            const sendBtn = document.getElementById('sendMessage');
            const chatInput = document.getElementById('chatInput');

            if (closeBtn) {
                closeBtn.addEventListener('click', toggleChatWindow);
            }

            if (sendBtn) {
                sendBtn.addEventListener('click', handleSendMessage);
            }

            if (chatInput) {
                chatInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                    }
                });
            }
        } catch (error) {
            console.error('Error creating chat interface:', error);
        }
    }

    // إظهار/إخفاء نافذة الشات
    function toggleChatWindow() {
        try {
            console.log('Toggling chat window');
            const chatInterface = document.getElementById('chatInterface');
            const floatingBtn = document.getElementById('floatingChatBtn');
            
            if (!chatInterface) {
                console.error('Chat interface element not found');
                return;
            }
            
            console.log('Chat interface found, current state:', chatInterface.classList.contains('hidden') ? 'hidden' : 'visible');
            
            if (chatInterface.classList.contains('hidden')) {
                console.log('Opening chat window');
                chatInterface.classList.remove('hidden');
                
                if (floatingBtn) {
                    floatingBtn.classList.add('floating-chat-btn-shifted');
                } else {
                    console.warn('Floating button element not found');
                }
                
                chatOpen = true;
                
                // تمرير إلى أسفل المحادثة
                scrollToBottom();
                
                // إرسال حدث فتح نافذة الشات
                document.dispatchEvent(new Event('chatWindowOpened'));
                
                // تركيز حقل الإدخال
                setTimeout(() => {
                    const chatInput = document.getElementById('chatInput');
                    if (chatInput) {
                        chatInput.focus();
                    }
                }, 300);
            } else {
                console.log('Closing chat window');
                chatInterface.classList.add('hidden');
                
                if (floatingBtn) {
                    floatingBtn.classList.remove('floating-chat-btn-shifted');
                }
                
                chatOpen = false;
            }
        } catch (error) {
            console.error('Error toggling chat window:', error);
        }
    }

    // عرض رسالة الترحيب
    function showWelcomeMessage() {
        try {
            console.log('Showing welcome message');
            // تحديد اللغة بناءً على إعدادات المتصفح
            const userLang = navigator.language || navigator.userLanguage;
            const lang = userLang.startsWith('ar') ? 'ar' : 'en';
            
            // عرض تأثير التحميل أولاً
            const chatMessages = document.getElementById('chatMessages');
            if (!chatMessages) {
                console.error('Chat messages container not found');
                return;
            }
            
            const loadingElement = document.createElement('div');
            loadingElement.className = 'message bot-message';
            loadingElement.innerHTML = `
                <div class="message-avatar bot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content bot-content">
                    <div class="message-text">${lang === 'ar' ? 'جاري تشغيل مساعد ساندكس الذكي...' : 'Initializing Sandex AI Assistant...'}</div>
                    <div class="progress-bar"><div class="progress-fill"></div></div>
                </div>
            `;
            
            // Animate the progress bar
            const progressFill = loadingElement.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.width = '0%';
                setTimeout(() => {
                    progressFill.style.transition = 'width 2.5s ease-in-out';
                    progressFill.style.width = '100%';
                }, 100);
            }
            
            chatMessages.appendChild(loadingElement);
            scrollToBottom();
            
            // محاكاة التحميل
            setTimeout(() => {
                // إزالة عنصر التحميل
                loadingElement.remove();
                
                // البحث عن رد ترحيبي في قاعدة البيانات
                let welcomeResponse = "Welcome to Sandex AI Assistant!";
                
                // Try to get greeting from database
                if (typeof SANDEX_KEYWORDS_DATABASE !== 'undefined' && 
                    SANDEX_KEYWORDS_DATABASE.greetings && 
                    SANDEX_KEYWORDS_DATABASE.greetings.responses &&
                    SANDEX_KEYWORDS_DATABASE.greetings.responses[lang]) {
                    welcomeResponse = SANDEX_KEYWORDS_DATABASE.greetings.responses[lang];
                }
                
                // عرض رسالة الترحيب
                displayBotMessage(welcomeResponse);
                console.log('Welcome message displayed');
                
                // إضافة أزرار رد سريع
                setTimeout(() => {
                    const quickReplies = lang === 'ar' ? 
                        ['خدمات الذكاء الاصطناعي', 'الأمن السيبراني', 'تطوير البرمجيات', 'عن الشركة'] : 
                        ['AI Services', 'Cybersecurity', 'Software Development', 'About Sandex'];
                    
                    displayQuickReplyButtons(quickReplies);
                }, 1000);
            }, 3000);
        } catch (error) {
            console.error('Error showing welcome message:', error);
        }
    }

    // معالجة إرسال الرسالة
    function handleSendMessage() {
        try {
            console.log('Handling send message');
            const chatInput = document.getElementById('chatInput');
            if (!chatInput) {
                console.error('Chat input element not found');
                return;
            }
            
            const userMessage = chatInput.value.trim();
            
            if (!userMessage || isTyping) {
                console.log('Empty message or already typing, ignoring');
                return;
            }
            
            // إعادة تعيين حقل الإدخال
            chatInput.value = '';
            
            // عرض رسالة المستخدم
            displayUserMessage(userMessage);
            
            // معالجة الرسالة وعرض الرد
            processUserQuery(userMessage);
        } catch (error) {
            console.error('Error handling send message:', error);
        }
    }

    // معالجة الرد السريع
    function handleQuickReply(replyText) {
        try {
            console.log('Handling quick reply:', replyText);
            if (isTyping) {
                console.log('Already typing, ignoring');
                return;
            }
            
            // عرض الرد كرسالة مستخدم
            displayUserMessage(replyText);
            
            // معالجة الرسالة وعرض الرد
            processUserQuery(replyText);
        } catch (error) {
            console.error('Error handling quick reply:', error);
        }
    }

    // معالجة استعلام المستخدم
    async function processUserQuery(userInput) {
        try {
            console.log('Processing user query:', userInput);
            const startTime = Date.now();
            showTypingIndicator();
            if (!sandexBot || typeof sandexBot.generateResponse !== 'function') {
                console.error('SandexBot not properly initialized or missing generateResponse method');
                if (typeof SandexHybridChatbot === 'function') {
                    console.log('Attempting to reinitialize SandexBot');
                    sandexBot = new SandexHybridChatbot();
                }
                if (!sandexBot || typeof sandexBot.generateResponse !== 'function') {
                    throw new Error('Chat system not initialized properly');
                }
            }
            try {
                const result = await sandexBot.generateResponse(userInput);
                hideTypingIndicator();
                if (!result || typeof result !== 'object' || !result.response) {
                    console.error('Invalid response format:', result);
                    throw new Error('Invalid response format');
                }
                // Detect if we should show contact link (fallback, emergency, or contact intent)
                let showContact = false;
                let isFallback = false;
                if (result.source && (result.source.toLowerCase().includes('fallback') || result.source.toLowerCase().includes('emergency'))) {
                    showContact = true;
                    isFallback = true;
                }
                // Also show contact if intent is contact or user message contains contact keywords
                const contactKeywords = ['contact', 'support', 'help', 'email', 'phone', 'reach'];
                const userLower = userInput.toLowerCase();
                if (contactKeywords.some(k => userLower.includes(k))) {
                    showContact = true;
                }
                displayBotMessage(result.response, false, showContact, isFallback);
                const responseTime = Date.now() - startTime;
                if (analytics && typeof analytics.logInteraction === 'function') {
                    analytics.logInteraction({
                        userQuery: userInput,
                        responseSource: result.source || 'unknown',
                        responseTime,
                        tokensSaved: result.tokensSaved || 0
                    });
                }
                if (result.category) {
                    addQuickReplyButtons(result.category);
                }
            } catch (error) {
                console.error("Error processing query:", error);
                hideTypingIndicator();
                try {
                    console.log('Attempting to use keyword matching fallback');
                    const userLang = navigator.language || navigator.userLanguage;
                    const lang = userLang.startsWith('ar') ? 'ar' : 'en';
                    let fallbackMessage = lang === 'ar' 
                        ? "عذراً، أواجه مشكلة في الاتصال. إليك بعض المعلومات التي قد تساعدك."
                        : "I apologize for the connection issue. Here's some information that might help.";
                    if (sandexBot && typeof sandexBot.findKeywordMatch === 'function') {
                        console.log('Using findKeywordMatch for fallback');
                        const result = sandexBot.findKeywordMatch(userInput);
                        if (result && result.confidence > 0.5) {
                            console.log('Found keyword match with confidence:', result.confidence);
                            fallbackMessage = result.response;
                        } else if (typeof SANDEX_KEYWORDS_DATABASE !== 'undefined' &&
                            SANDEX_KEYWORDS_DATABASE.greetings && 
                            SANDEX_KEYWORDS_DATABASE.greetings.responses && 
                            SANDEX_KEYWORDS_DATABASE.greetings.responses[lang]) {
                            console.log('Using greeting as fallback');
                            fallbackMessage = SANDEX_KEYWORDS_DATABASE.greetings.responses[lang];
                        }
                    } else if (typeof SANDEX_KEYWORDS_DATABASE !== 'undefined') {
                        console.log('Manual keyword matching as fallback');
                        for (const category in SANDEX_KEYWORDS_DATABASE) {
                            if (SANDEX_KEYWORDS_DATABASE[category] && 
                                SANDEX_KEYWORDS_DATABASE[category].keywords &&
                                SANDEX_KEYWORDS_DATABASE[category].responses) {
                                const keywords = SANDEX_KEYWORDS_DATABASE[category].keywords;
                                const lowercaseInput = userInput.toLowerCase();
                                const hasMatch = keywords.some(keyword => 
                                    lowercaseInput.includes(keyword.toLowerCase())
                                );
                                if (hasMatch && SANDEX_KEYWORDS_DATABASE[category].responses[lang]) {
                                    console.log('Found manual keyword match in category:', category);
                                    fallbackMessage = SANDEX_KEYWORDS_DATABASE[category].responses[lang];
                                    break;
                                }
                            }
                        }
                    }
                    // Always show contact in fallback
                    displayBotMessage(fallbackMessage, false, true, true);
                } catch (fallbackError) {
                    console.error("Fallback error:", fallbackError);
                    const fallbackMsg = "I'm having trouble connecting to the server. Please try again later.";
                    displayBotMessage(fallbackMsg, true, true, true);
                }
            }
        } catch (outerError) {
            console.error('Outer error processing query:', outerError);
            hideTypingIndicator();
            displayBotMessage("There was a system error. Please refresh the page and try again.", true, true, true);
        }
    }

    // عرض رسالة البوت
    function displayBotMessage(message, isError = false, showContact = false, showFeedback = true) {
        try {
            console.log('Displaying bot message, isError:', isError);
            const chatMessages = document.getElementById('chatMessages');
            if (!chatMessages) {
                console.error('Chat messages container not found');
                return;
            }
            if (!message || message === '') {
                console.error('Empty message content');
                message = "Sorry, I couldn't generate a response at this time.";
                isError = true;
            }
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const messageElement = document.createElement('div');
            messageElement.className = `message bot-message ${isError ? 'error-message' : ''}`;
            const formattedMessage = formatMessage(message);
            let contactHtml = '';
            if (showContact) {
                contactHtml = `
                    <div class="contact-us-box mt-3">
                        <a href="#contact" class="contact-link inline-flex items-center px-4 py-2 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 shadow-md" style="text-decoration:none;">
                            <i class="fas fa-envelope mr-2"></i> Contact Us
                        </a>
                        <div class="contact-details mt-2 text-xs text-gray-400">
                            <span><i class="fas fa-phone-alt mr-1"></i> +20 1000066161</span> &nbsp;|&nbsp;
                            <span><i class="fas fa-at mr-1"></i> mharty@sandexai.com</span>
                        </div>
                    </div>
                `;
            }
            let feedbackHtml = '';
            if (showFeedback) {
                feedbackHtml = `
                    <div class="feedback-box mt-3 flex items-center gap-2">
                        <span class="text-sm text-gray-400 mr-2">Was this helpful?</span>
                        <button class="feedback-btn thumbs-up" aria-label="Helpful" title="Helpful"><i class="fas fa-thumbs-up"></i></button>
                        <button class="feedback-btn thumbs-down" aria-label="Not helpful" title="Not helpful"><i class="fas fa-thumbs-down"></i></button>
                        <span class="feedback-thankyou ml-2 text-green-500 font-bold hidden">Thank you for your feedback!</span>
                    </div>
                `;
            }
            messageElement.innerHTML = `
                <div class="message-avatar bot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content bot-content">
                    <div class="message-text typing-effect">${formattedMessage}</div>
                    ${contactHtml}
                    ${feedbackHtml}
                    <div class="message-time">${timestamp}</div>
                </div>
            `;
            chatMessages.appendChild(messageElement);
            scrollToBottom();
            // Typing effect (unchanged)
            const textElement = messageElement.querySelector('.typing-effect');
            if (textElement && !isError && formattedMessage.length > 0) {
                const originalText = textElement.innerHTML;
                textElement.innerHTML = '';
                let charIndex = 0;
                const writeInterval = setInterval(() => {
                    if (charIndex < originalText.length) {
                        if (originalText[charIndex] === '<') {
                            const closeTagIndex = originalText.indexOf('>', charIndex);
                            if (closeTagIndex !== -1) {
                                textElement.innerHTML += originalText.substring(charIndex, closeTagIndex + 1);
                                charIndex = closeTagIndex + 1;
                            } else {
                                textElement.innerHTML += originalText[charIndex++];
                            }
                        } else {
                            textElement.innerHTML += originalText[charIndex++];
                        }
                        scrollToBottom();
                    } else {
                        clearInterval(writeInterval);
                    }
                }, 10);
            }
            // Feedback event handlers
            const feedbackBox = messageElement.querySelector('.feedback-box');
            if (feedbackBox) {
                const thumbsUp = feedbackBox.querySelector('.thumbs-up');
                const thumbsDown = feedbackBox.querySelector('.thumbs-down');
                const thankYou = feedbackBox.querySelector('.feedback-thankyou');
                const handleFeedback = (isPositive) => {
                    thumbsUp.disabled = true;
                    thumbsDown.disabled = true;
                    if (thankYou) thankYou.classList.remove('hidden');
                    // Optionally: send feedback to analytics/server here
                };
                if (thumbsUp) thumbsUp.addEventListener('click', () => handleFeedback(true));
                if (thumbsDown) thumbsDown.addEventListener('click', () => handleFeedback(false));
            }
        } catch (error) {
            console.error('Error displaying bot message:', error);
            try {
                const chatMessages = document.getElementById('chatMessages');
                if (chatMessages) {
                    const div = document.createElement('div');
                    div.className = 'message bot-message error-message';
                    div.innerHTML = `
                        <div class="message-avatar bot-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content bot-content">
                            <div class="message-text">System error occurred. Please refresh the page.</div>
                        </div>
                    `;
                    chatMessages.appendChild(div);
                    scrollToBottom();
                }
            } catch (e) {
                console.error('Critical error in fallback message display:', e);
            }
        }
    }

    // إضافة أزرار الرد السريع بناءً على فئة الرد
    function addQuickReplyButtons(category) {
        try {
            console.log('Adding quick reply buttons for category:', category);
            // تحديد اللغة
            const userLang = navigator.language || navigator.userLanguage;
            const lang = userLang.startsWith('ar') ? 'ar' : 'en';
            
            // تحديد أزرار الرد السريع بناءً على الفئة
            let quickReplies = [];
            
            switch(category) {
                case 'ai_services':
                    quickReplies = lang === 'ar' ? 
                        ['التعرف على الصور', 'معالجة اللغة الطبيعية', 'التعلم الآلي', 'إنشاء المحتوى'] : 
                        ['Image Recognition', 'Natural Language Processing', 'Machine Learning', 'Content Generation'];
                    break;
                    
                case 'cybersecurity':
                    quickReplies = lang === 'ar' ? 
                        ['تقييم المخاطر', 'اختبار الاختراق', 'حماية البيانات', 'الامتثال'] : 
                        ['Risk Assessment', 'Penetration Testing', 'Data Protection', 'Compliance'];
                    break;
                    
                case 'software_dev':
                    quickReplies = lang === 'ar' ? 
                        ['تطوير التطبيقات', 'خدمات الويب', 'التطوير السحابي', 'التكامل'] : 
                        ['Application Development', 'Web Services', 'Cloud Development', 'Integration'];
                    break;
                    
                case 'company_info':
                    quickReplies = lang === 'ar' ? 
                        ['فريق العمل', 'تاريخ الشركة', 'اتصل بنا', 'الوظائف'] : 
                        ['Our Team', 'Company History', 'Contact Us', 'Careers'];
                    break;
                    
                default:
                    quickReplies = lang === 'ar' ? 
                        ['خدماتنا', 'عن الشركة', 'اتصل بنا', 'المزيد من المعلومات'] : 
                        ['Our Services', 'About Us', 'Contact Us', 'More Information'];
            }
            
            // عرض أزرار الرد السريع
            setTimeout(() => {
                displayQuickReplyButtons(quickReplies);
            }, 500);
        } catch (error) {
            console.error('Error adding quick reply buttons:', error);
        }
    }

    // عرض رسالة المستخدم
    function displayUserMessage(message) {
        try {
            console.log('Displaying user message');
            const chatMessages = document.getElementById('chatMessages');
            if (!chatMessages) {
                console.error('Chat messages container not found');
                return;
            }
            
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            const messageElement = document.createElement('div');
            messageElement.className = 'message user-message';
            
            messageElement.innerHTML = `
                <div class="message-content user-content">
                    <div class="message-text">${escapeHtml(message)}</div>
                    <div class="message-time">${timestamp}</div>
                </div>
                <div class="message-avatar user-avatar">
                    <i class="fas fa-user"></i>
                </div>
            `;
            
            chatMessages.appendChild(messageElement);
            scrollToBottom();
        } catch (error) {
            console.error('Error displaying user message:', error);
        }
    }

    // عرض أزرار الرد السريع
    function displayQuickReplyButtons(buttons) {
        try {
            console.log('Displaying quick reply buttons');
            if (!buttons || !buttons.length) {
                console.log('No buttons to display');
                return;
            }
            
            const chatMessages = document.getElementById('chatMessages');
            if (!chatMessages) {
                console.error('Chat messages container not found');
                return;
            }
            
            const quickReplies = document.createElement('div');
            quickReplies.className = 'quick-replies';
            
            // تحديد اللغة بناءً على إعدادات المتصفح
            const userLang = navigator.language || navigator.userLanguage;
            const lang = userLang.startsWith('ar') ? 'ar' : 'en';
            
            quickReplies.innerHTML = `
                <div class="quick-replies-container">
                    <div class="quick-replies-label">${lang === 'ar' ? 'اختر خيارًا:' : 'Choose an option:'}</div>
                    <div class="quick-replies-buttons"></div>
                </div>
            `;
            
            const buttonsContainer = quickReplies.querySelector('.quick-replies-buttons');
            if (buttonsContainer) {
                buttons.forEach((text, index) => {
                    const button = document.createElement('button');
                    button.className = 'quick-reply-btn';
                    button.textContent = text;
                    
                    // إضافة تأخير متدرج لظهور الأزرار
                    button.style.animationDelay = `${index * 0.1}s`;
                    button.style.opacity = '0';
                    button.style.transform = 'translateY(10px)';
                    button.style.animation = 'fadeInUp 0.5s forwards';
                    
                    buttonsContainer.appendChild(button);
                });
            }
            
            chatMessages.appendChild(quickReplies);
            scrollToBottom();
        } catch (error) {
            console.error('Error displaying quick reply buttons:', error);
        }
    }

    // إظهار مؤشر الكتابة
    function showTypingIndicator() {
        try {
            console.log('Showing typing indicator');
            if (isTyping) {
                console.log('Already typing, skipping');
                return;
            }
            
            isTyping = true;
            
            const chatMessages = document.getElementById('chatMessages');
            if (!chatMessages) {
                console.error('Chat messages container not found');
                return;
            }
            
            const typingElement = document.createElement('div');
            typingElement.id = 'typingIndicator';
            typingElement.className = 'message bot-message typing-indicator';
            
            typingElement.innerHTML = `
                <div class="message-avatar bot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content bot-content">
                    <div class="typing-dots">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            `;
            
            chatMessages.appendChild(typingElement);
            scrollToBottom();
        } catch (error) {
            console.error('Error showing typing indicator:', error);
        }
    }

    // إخفاء مؤشر الكتابة
    function hideTypingIndicator() {
        try {
            console.log('Hiding typing indicator');
            isTyping = false;
            
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            } else {
                console.log('Typing indicator not found, nothing to remove');
            }
        } catch (error) {
            console.error('Error hiding typing indicator:', error);
        }
    }

    // تنسيق الرسالة
    function formatMessage(message) {
        try {
            if (!message) return '';
            
            // تحويل النص إلى HTML آمن
            const safeText = escapeHtml(message);
            
            // تطبيق تنسيقات بسيطة (شبيهة بمارك داون)
            const formatted = safeText
                // تنسيق النص العريض
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                // تنسيق النص المائل
                .replace(/\_(.*?)\_/g, '<em>$1</em>')
                // تنسيق العناوين
                .replace(/\n\n([^\n]+):(\n|\s)/g, '\n\n<span style="color: var(--chatbot-primary); font-weight: bold;">$1:</span>$2')
                // تنسيق النقاط
                .replace(/^[•]\s(.+)$/gm, '<span class="bullet">•</span> $1')
                // تنسيق أرقام الهواتف وروابط البريد الإلكتروني
                .replace(/(\+\d{1,4}\s*\d{5,})/g, '<span style="color: var(--chatbot-secondary);">$1</span>')
                .replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g, 
                         '<a href="mailto:$1" style="color: var(--chatbot-primary); text-decoration: underline;">$1</a>')
                // تنسيق الرموز التعبيرية الشائعة 
                .replace(/🤖|🔐|💻|🏢|💰|🏆|🎓|👋/g, '<span class="emoji">$&</span>')
                // تحويل علامات السطر الجديد إلى عناصر <br>
                .replace(/\n/g, '<br>');
            
            return formatted;
        } catch (error) {
            console.error('Error formatting message:', error);
            return message || '';
        }
    }

    // الانتقال إلى أسفل المحادثة
    function scrollToBottom() {
        try {
            const chatMessages = document.getElementById('chatMessages');
            
            if (chatMessages) {
                setTimeout(() => {
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 100);
            }
        } catch (error) {
            console.error('Error scrolling to bottom:', error);
        }
    }

    // دالة لتجنب XSS
    function escapeHtml(text) {
        try {
            if (!text) return '';
            
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        } catch (error) {
            console.error('Error escaping HTML:', error);
            return text || '';
        }
    }

    // تصدير المكونات للاستخدام في ملفات أخرى
    window.toggleChatWindow = toggleChatWindow;
    
})();
