// ========== SANDEX AI HYBRID CHATBOT SYSTEM ==========
const SANDEX_KEYWORDS_DATABASE = {
    // خدمات الذكاء الاصطناعي
    ai_services: {
        keywords: [
            "ai", "artificial intelligence", "machine learning", "ml", "smart", "automation",
            "ذكاء اصطناعي", "تعلم آلة", "أتمتة", "ذكي", "الذكاء الاصطناعي"
        ],
        responses: {
            en: "🤖 **Sandex AI Services:**\n\n• AI/ML implementation & optimization\n• Digital transformation solutions\n• Legacy system modernization\n• Predictive analytics\n• Neural network development\n\n✅ **Our Results:** 40% faster processing, 25-30% cost savings\n\n📞 Contact: +20 1000066161 | mharty@sandexai.com",
            ar: "🤖 **خدمات ساندكس للذكاء الاصطناعي:**\n\n• تطبيق وتحسين حلول الذكاء الاصطناعي\n• حلول التحول الرقمي\n• تحديث الأنظمة القديمة\n• التحليلات التنبؤية\n• تطوير الشبكات العصبية\n\n✅ **نتائجنا:** معالجة أسرع بنسبة 40%، توفير 25-30% من التكاليف\n\n📞 اتصال: +20 1000066161 | mharty@sandexai.com"
        },
        confidence: 0.95
    },

    // الأمن السيبراني
    cybersecurity: {
        keywords: [
            "security", "cybersecurity", "cyber", "protection", "hack", "secure", "vulnerability",
            "أمن", "أمان", "حماية", "أمن سيبراني", "ثغرات", "حماية البيانات"
        ],
        responses: {
            en: "🔐 **Sandex Cybersecurity:**\n\n• Security assessments & audits\n• Penetration testing\n• Data protection (ISO 27001)\n• Threat detection & response\n• Critical infrastructure protection\n\n👥 **Certified Team:** CEH, CompTIA Security+\n🏛️ **Experience:** Government & enterprise security across Egypt & Saudi Arabia\n\n📞 Contact: +20 1000066161",
            ar: "🔐 **ساندكس للأمن السيبراني:**\n\n• تقييمات وتدقيق الأمان\n• اختبار الاختراق\n• حماية البيانات (ISO 27001)\n• كشف التهديدات والاستجابة\n• حماية البنية التحتية الحرجة\n\n👥 **فريق معتمد:** CEH, CompTIA Security+\n🏛️ **الخبرة:** أمان حكومي ومؤسسي في مصر والسعودية\n\n📞 اتصال: +20 1000066161"
        },
        confidence: 0.90
    },

    // تطوير البرمجيات
    software_development: {
        keywords: [
            "software", "development", "app", "website", "mobile", "programming", "code",
            "برمجة", "تطوير", "تطبيق", "موقع", "برمجيات", "كود"
        ],
        responses: {
            en: "💻 **Sandex Software Development:**\n\n• Custom web & mobile apps\n• Desktop software solutions\n• API development & integration\n• Multi-platform development (C++, Python, C#, Java)\n• UI/UX enhancement\n\n🏆 **Recent Projects:**\n• Petrojet HSE mobile app\n• PMS corporate website\n• Arab Union platform\n\n📧 Email: mharty@sandexai.com",
            ar: "💻 **ساندكس لتطوير البرمجيات:**\n\n• تطبيقات ويب وموبايل مخصصة\n• حلول برمجيات مكتبية\n• تطوير وتكامل واجهات البرمجة\n• تطوير متعدد المنصات (C++, Python, C#, Java)\n• تحسين واجهة المستخدم\n\n🏆 **مشاريع حديثة:**\n• تطبيق بتروجت للسلامة\n• موقع شركة PMS\n• منصة الاتحاد العربي\n\n📧 إيميل: mharty@sandexai.com"
        },
        confidence: 0.85
    },

    // معلومات الشركة
    company_info: {
        keywords: [
            "about", "company", "sandex", "who", "information", "contact", "location",
            "عن", "الشركة", "ساندكس", "من", "معلومات", "تواصل", "موقع"
        ],
        responses: {
            en: "🏢 **About Sandex AI:**\n\nSandexAI & Semicolon LTD - Leading AI & Digital Transformation company\n\n📍 **Locations:**\n• Cairo, Egypt (HQ) - New Cairo, 5th Settlement\n• Riyadh, Saudi Arabia (Operations)\n\n📞 **Contact:**\n• Mohamed Elharty: +20 1000066161\n• Email: mharty@sandexai.com\n• Alternative: info@sandexai.com\n\n📊 **Our Impact:**\n• 250+ completed projects\n• 98% client satisfaction\n• Government & enterprise clients across MENA",
            ar: "🏢 **عن ساندكس للذكاء الاصطناعي:**\n\nساندكس وسيميكولن - شركة رائدة في الذكاء الاصطناعي والتحول الرقمي\n\n📍 **المواقع:**\n• القاهرة، مصر (المقر الرئيسي) - القاهرة الجديدة، التجمع الخامس\n• الرياض، السعودية (العمليات)\n\n📞 **التواصل:**\n• محمد الحارثي: +20 1000066161\n• الإيميل: mharty@sandexai.com\n• بديل: info@sandexai.com\n\n📊 **تأثيرنا:**\n• 250+ مشروع مكتمل\n• 98% رضا العملاء\n• عملاء حكوميين ومؤسسيين عبر المنطقة"
        },
        confidence: 0.95
    },

    // الأسعار والتكلفة
    pricing: {
        keywords: [
            "price", "cost", "pricing", "budget", "money", "fee", "quote",
            "سعر", "تكلفة", "ميزانية", "مال", "رسوم", "عرض سعر"
        ],
        responses: {
            en: "💰 **Sandex Pricing Models:**\n\n**1. Fixed Price Projects** ($8K-$22K+)\n• UI Revamp (C#/WPF): $8,000-$12,000\n• Kernel-Level Monitor (C++): $15,000-$22,000\n• Android AI Module: $10,000-$16,000\n\n**2. Time & Material**\n• Flexible scope, evolving requirements\n• R&D projects\n\n**3. Retainer Packages** (40+ hours/month)\n• Ongoing support & maintenance\n• Optional 24/7 response\n\n📧 Get custom quote: mharty@sandexai.com",
            ar: "💰 **نماذج تسعير ساندكس:**\n\n**1. مشاريع السعر الثابت** ($8K-$22K+)\n• تحديث واجهة C#/WPF: $8,000-$12,000\n• مراقب على مستوى النواة C++: $15,000-$22,000\n• وحدة ذكاء اصطناعي Android: $10,000-$16,000\n\n**2. الوقت والمواد**\n• نطاق مرن، متطلبات متطورة\n• مشاريع البحث والتطوير\n\n**3. باقات الاشتراك** (40+ ساعة/شهر)\n• دعم وصيانة مستمرة\n• استجابة 24/7 اختيارية\n\n📧 عرض سعر مخصص: mharty@sandexai.com"
        },
        confidence: 0.90
    },

    // مشاريع الشركة
    projects: {
        keywords: [
            "project", "portfolio", "work", "client", "case study", "petrojet", "pms",
            "مشروع", "مشاريع", "عمل", "عميل", "بتروجت", "دراسة حالة"
        ],
        responses: {
            en: "🏆 **Sandex Success Stories:**\n\n**🛢️ Petrojet (Oil & Gas):**\n• HSE mobile app for safety management\n• Corporate website development\n• Desktop application modernization\n\n**⚓ PMS Marine Services:**\n• Corporate website & digital platform\n\n**🏛️ Arab Union Administrative:**\n• Official website for regional courts\n\n**📊 Government Projects:**\n• 40% faster processing\n• 200%+ citizen participation increase\n• International compliance standards\n\n📞 Discuss your project: +20 1000066161",
            ar: "🏆 **قصص نجاح ساندكس:**\n\n**🛢️ بتروجت (البترول والغاز):**\n• تطبيق موبايل HSE لإدارة السلامة\n• تطوير الموقع الرسمي\n• تحديث التطبيق المكتبي\n\n**⚓ خدمات PMS البحرية:**\n• موقع الشركة والمنصة الرقمية\n\n**🏛️ الاتحاد العربي الإداري:**\n• الموقع الرسمي للمحاكم الإقليمية\n\n**📊 المشاريع الحكومية:**\n• معالجة أسرع بنسبة 40%\n• زيادة مشاركة المواطنين بأكثر من 200%\n• معايير الامتثال الدولية\n\n📞 ناقش مشروعك: +20 1000066161"
        },
        confidence: 0.85
    },

    // تدريب وتعليم
    training: {
        keywords: [
            "training", "course", "learn", "education", "workshop", "certificate",
            "تدريب", "دورة", "تعلم", "تعليم", "ورشة عمل", "شهادة"
        ],
        responses: {
            en: "🎓 **Sandex Training & Education:**\n\n**AI & Data Science:**\n• Machine learning fundamentals\n• Neural networks & deep learning\n• Data analysis with Python\n\n**Cybersecurity:**\n• Ethical hacking workshops\n• Security implementation\n• Compliance training\n\n**Software Development:**\n• Modern web development\n• Mobile app development\n• Enterprise solutions\n\n📅 **Next Workshop:** Contact us for details\n📧 Training inquiries: mharty@sandexai.com",
            ar: "🎓 **ساندكس للتدريب والتعليم:**\n\n**الذكاء الاصطناعي وعلوم البيانات:**\n• أساسيات تعلم الآلة\n• الشبكات العصبية والتعلم العميق\n• تحليل البيانات باستخدام Python\n\n**الأمن السيبراني:**\n• ورش عمل الاختراق الأخلاقي\n• تنفيذ الأمان\n• تدريب الامتثال\n\n**تطوير البرمجيات:**\n• تطوير الويب الحديث\n• تطوير تطبيقات الجوال\n• حلول المؤسسات\n\n📅 **ورشة العمل القادمة:** اتصل بنا للحصول على التفاصيل\n📧 استفسارات التدريب: mharty@sandexai.com"
        },
        confidence: 0.85
    },

    // تحيات وترحيب
    greetings: {
        keywords: [
            "hello", "hi", "hey", "good morning", "good evening", "good afternoon", "greetings", "welcome",
            "مرحبا", "أهلا", "صباح الخير", "مساء الخير", "تحية", "أهلاً وسهلاً"
        ],
        responses: {
            en: "👋 **Hello and welcome to Sandex AI!**\n\nI'm your virtual assistant, here to help with information about our services:\n\n• AI & Machine Learning Solutions\n• Cybersecurity Services\n• Software Development\n• Digital Transformation\n• Training & Workshops\n\nHow can I assist you today?",
            ar: "👋 **مرحباً بك في ساندكس للذكاء الاصطناعي!**\n\nأنا مساعدك الافتراضي، هنا لمساعدتك بمعلومات حول خدماتنا:\n\n• حلول الذكاء الاصطناعي وتعلم الآلة\n• خدمات الأمن السيبراني\n• تطوير البرمجيات\n• التحول الرقمي\n• التدريب وورش العمل\n\nكيف يمكنني مساعدتك اليوم؟"
        },
        confidence: 0.98
    }
};

// ========== LANGUAGE DETECTION & KEYWORD MATCHING ==========
class SandexHybridChatbot {
    constructor() {
        this.apiEnabled = true;
        this.apiRetries = 0;
        this.maxRetries = 3;
        this.tokensUsed = 0;
        this.fallbackCount = 0;
    }

    // كشف اللغة
    detectLanguage(message) {
        const arabicPattern = /[\u0600-\u06FF\u0750-\u077F]/;
        return arabicPattern.test(message) ? 'ar' : 'en';
    }

    // البحث عن الكلمات المفتاحية
    findKeywordMatch(message) {
        const words = message.toLowerCase().split(/\s+/);
        let bestMatch = null;
        let highestScore = 0;

        for (const [category, data] of Object.entries(SANDEX_KEYWORDS_DATABASE)) {
            let score = 0;
            let matchedKeywords = 0;

            for (const keyword of data.keywords) {
                if (message.toLowerCase().includes(keyword.toLowerCase())) {
                    score += data.confidence;
                    matchedKeywords++;
                }
            }

            // تعديل النتيجة بناءً على عدد الكلمات المطابقة
            if (matchedKeywords > 0) {
                score = (score / data.keywords.length) * matchedKeywords;
                
                if (score > highestScore && score > 0.3) { // حد أدنى للثقة
                    highestScore = score;
                    bestMatch = { category, data, score };
                }
            }
        }

        return bestMatch;
    }

    // الرد الرئيسي
    async generateResponse(userMessage) {
        console.log(`🔍 Processing: "${userMessage}"`);
        
        const language = this.detectLanguage(userMessage);
        console.log(`🌐 Language detected: ${language}`);

        // البحث في قاعدة الكلمات المفتاحية أولاً
        const keywordMatch = this.findKeywordMatch(userMessage);
        
        if (keywordMatch) {
            console.log(`✅ Keyword match found: ${keywordMatch.category} (confidence: ${keywordMatch.score.toFixed(2)})`);
            console.log(`💰 Tokens saved! Using pre-defined response.`);
            
            return {
                response: keywordMatch.data.responses[language],
                source: 'keyword_database',
                confidence: keywordMatch.score,
                category: keywordMatch.category,
                tokensUsed: 0
            };
        }

        // إذا لم نجد مطابقة، نستخدم الـ API
        console.log(`🤖 No keyword match. Escalating to DeepSeek API...`);
        return await this.useDeepSeekAPI(userMessage, language);
    }

    // استخدام DeepSeek API كـ fallback
    async useDeepSeekAPI(userMessage, language) {
        if (!this.apiEnabled || this.apiRetries >= this.maxRetries) {
            console.log(`⚠️ API unavailable. Using emergency fallback.`);
            return this.getEmergencyFallback(language);
        }

        try {
            // هنا يتم استدعاء DeepSeek API
            const apiResponse = await this.callDeepSeekAPI(userMessage, language);
            
            this.tokensUsed += apiResponse.tokensUsed || 50; // تقدير استخدام التوكن
            console.log(`🔥 API Response generated. Tokens used: ${this.tokensUsed}`);
            
            return {
                response: apiResponse.response,
                source: 'deepseek_api',
                confidence: 0.70,
                tokensUsed: apiResponse.tokensUsed
            };

        } catch (error) {
            console.error(`❌ API Error:`, error);
            this.apiRetries++;
            
            if (this.apiRetries >= this.maxRetries) {
                this.apiEnabled = false;
                console.log(`🚫 API disabled after ${this.maxRetries} failures.`);
            }
            
            return this.getEmergencyFallback(language);
        }
    }

    // استدعاء DeepSeek API
    async callDeepSeekAPI(message, language) {
        const systemPrompt = `You are Sandex AI Assistant. Use this company data to answer questions:

COMPANY: Sandex for Artificial Intelligence and Digital Transformation
SERVICES: AI/ML, Digital Transformation, Cybersecurity, Software Development, System Testing
LOCATIONS: Cairo Egypt (HQ), Riyadh Saudi Arabia
CONTACT: Mohamed Elharty +20 1000066161, mharty@sandexai.com
PROJECTS: Petrojet, PMS Marine, Arab Union, Government digital transformation
RESULTS: 40% faster processing, 25-30% cost savings, 98% client satisfaction

Respond in ${language === 'ar' ? 'Arabic' : 'English'} professionally and concisely.`;

        try {
            const response = await fetch(DEEPSEEK_CONFIG.API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DEEPSEEK_CONFIG.API_KEY}`
                },
                body: JSON.stringify({
                    model: DEEPSEEK_CONFIG.MODEL,
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: message }
                    ],
                    max_tokens: DEEPSEEK_CONFIG.MAX_TOKENS,
                    temperature: DEEPSEEK_CONFIG.TEMPERATURE
                })
            });

            const data = await response.json();
            
            if (!data.choices || !data.choices[0]) {
                throw new Error('Invalid API response format');
            }
            
            return {
                response: data.choices[0].message.content,
                tokensUsed: data.usage?.total_tokens || 50
            };
        } catch (error) {
            console.error('DeepSeek API Error:', error);
            throw error;
        }
    }

    // ردود الطوارئ عند تعطل الـ API
    getEmergencyFallback(language) {
        this.fallbackCount++;
        console.log(`🆘 Emergency fallback activated (#${this.fallbackCount})`);

        const fallbackResponses = {
            en: [
                "🤖 I'm experiencing some technical difficulties right now. Please contact our team directly:\n\n📞 **Phone:** +20 1000066161\n📧 **Email:** mharty@sandexai.com\n\nOur experts will assist you with AI solutions, cybersecurity, and software development needs.",
                
                "⚡ Our AI is temporarily offline, but I can still help! For immediate assistance with Sandex services:\n\n🔗 **Contact Mohamed Elharty:** +20 1000066161\n🌐 **Services:** AI, Digital Transformation, Cybersecurity\n📍 **Locations:** Cairo, Egypt | Riyadh, Saudi Arabia",
                
                "🔧 Technical maintenance in progress. For urgent inquiries about:\n• AI & Machine Learning solutions\n• Cybersecurity services\n• Software development\n• Digital transformation\n\n📞 **Direct contact:** +20 1000066161 | mharty@sandexai.com"
            ],
            ar: [
                "🤖 أواجه بعض الصعوبات التقنية حالياً. يرجى التواصل مع فريقنا مباشرة:\n\n📞 **الهاتف:** +20 1000066161\n📧 **الإيميل:** mharty@sandexai.com\n\nخبراؤنا سيساعدونك في حلول الذكاء الاصطناعي والأمن السيبراني وتطوير البرمجيات.",
                
                "⚡ الذكاء الاصطناعي معطل مؤقتاً، لكن ما زال بإمكاني المساعدة! للمساعدة الفورية مع خدمات ساندكس:\n\n🔗 **تواصل مع محمد الحارثي:** +20 1000066161\n🌐 **الخدمات:** الذكاء الاصطناعي، التحول الرقمي، الأمن السيبراني\n📍 **المواقع:** القاهرة، مصر | الرياض، السعودية",
                
                "🔧 صيانة تقنية قيد التقدم. للاستفسارات العاجلة حول:\n• حلول الذكاء الاصطناعي وتعلم الآلة\n• خدمات الأمن السيبراني\n• تطوير البرمجيات\n• التحول الرقمي\n\n📞 **اتصال مباشر:** +20 1000066161 | mharty@sandexai.com"
            ]
        };

        const responses = fallbackResponses[language];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        return {
            response: randomResponse,
            source: 'emergency_fallback',
            confidence: 0.50,
            tokensUsed: 0
        };
    }

    // إحصائيات الاستخدام
    getUsageStats() {
        return {
            tokensUsed: this.tokensUsed,
            fallbackCount: this.fallbackCount,
            apiRetries: this.apiRetries,
            apiStatus: this.apiEnabled ? 'active' : 'disabled'
        };
    }
}

// ========== PERFORMANCE MONITORING ==========
class ChatbotAnalytics {
    constructor() {
        this.stats = {
            totalQueries: 0,
            keywordMatches: 0,
            apiCalls: 0,
            tokensUsed: 0,
            tokensSaved: 0,
            averageResponseTime: 0,
            totalResponseTime: 0
        };
    }
    
    logQuery(result, responseTime) {
        this.stats.totalQueries++;
        this.stats.totalResponseTime += responseTime;
        
        if (result.source === 'keyword_database') {
            this.stats.keywordMatches++;
            this.stats.tokensSaved += 50; // تقدير التوكن المحفوظ
        } else if (result.source === 'deepseek_api') {
            this.stats.apiCalls++;
            this.stats.tokensUsed += result.tokensUsed;
        }
        
        this.stats.averageResponseTime = this.stats.totalResponseTime / this.stats.totalQueries;
    }
    
    getEfficiencyReport() {
        const efficiency = this.stats.totalQueries > 0 ? 
            (this.stats.keywordMatches / this.stats.totalQueries) * 100 : 0;
        const tokensSaved = this.stats.tokensSaved;
        const tokensUsed = this.stats.tokensUsed;
        const totalTokens = tokensSaved + tokensUsed;
        
        return {
            efficiency: `${efficiency.toFixed(1)}%`,
            tokensSaved: tokensSaved,
            tokensUsed: tokensUsed,
            totalSavings: totalTokens > 0 ? `${((tokensSaved / totalTokens) * 100).toFixed(1)}%` : '0.0%',
            averageResponseTime: `${this.stats.averageResponseTime.toFixed(0)}ms`
        };
    }
}

// تصدير المكونات للاستخدام في ملفات أخرى
window.SandexHybridChatbot = SandexHybridChatbot;
window.ChatbotAnalytics = ChatbotAnalytics;
window.SANDEX_KEYWORDS_DATABASE = SANDEX_KEYWORDS_DATABASE;