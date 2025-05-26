// ========== SANDEX AI HYBRID CHATBOT SYSTEM ==========
const SANDEX_KEYWORDS_DATABASE = {
    // خدمات الذكاء الاصطناعي
    ai_services: {
        keywords: [
            "ai", "artificial intelligence", "machine learning", "ml", "smart", "automation", "neural", "deep learning",
            "ذكاء اصطناعي", "تعلم آلة", "أتمتة", "ذكي", "الذكاء الاصطناعي", "تعلم عميق", "شبكة عصبية", "الميزات الذكية"
        ],
        responses: {
            en: "🤖 **Sandex AI Services:**\n\n• AI/ML implementation & optimization\n• Digital transformation solutions\n• Legacy system modernization\n• Predictive analytics & neural networks\n• Generative AI integration\n• Edge computing solutions\n\n✅ **Our Results:** 40% faster processing, 25-30% cost savings\n\n🏆 **Technologies:** C++, Python, TensorFlow, PyTorch\n\n📞 Contact: +20 1000066161 | mharty@sandexai.com",
            ar: "🤖 **خدمات ساندكس للذكاء الاصطناعي:**\n\n• تطبيق وتحسين حلول الذكاء الاصطناعي\n• حلول التحول الرقمي\n• تحديث الأنظمة القديمة\n• التحليلات التنبؤية والشبكات العصبية\n• تكامل الذكاء الاصطناعي التوليدي\n• حلول الحوسبة الطرفية\n\n✅ **نتائجنا:** معالجة أسرع بنسبة 40%، توفير 25-30% من التكاليف\n\n🏆 **التقنيات:** C++, Python, TensorFlow, PyTorch\n\n📞 اتصال: +20 1000066161 | mharty@sandexai.com"
        },
        confidence: 0.95
    },

    // الأمن السيبراني
    cybersecurity: {
        keywords: [
            "security", "cybersecurity", "cyber", "protection", "hack", "secure", "vulnerability", "threat", "audit", "penetration testing", "firewall", "encryption", "malware", "phishing", "ransomware", "ISO 27001",
            "أمن", "أمان", "حماية", "أمن سيبراني", "ثغرات", "حماية البيانات", "اختراق", "اختبار اختراق", "جدار ناري", "تشفير", "برمجيات خبيثة", "تصيد"
        ],
        responses: {
            en: "🔐 **Sandex Cybersecurity:**\n\n• Security assessments & audits\n• Penetration testing & vulnerability assessment\n• Data protection (ISO 27001 compliant)\n• Threat detection & response systems\n• Critical infrastructure protection\n• Security training & awareness programs\n\n👥 **Certified Team:** CEH, CompTIA Security+\n🏛️ **Experience:** Government & enterprise security across Egypt & Saudi Arabia\n🛡️ **Approach:** Proactive threat hunting and zero-trust architecture\n\n📞 Contact: +20 1000066161 | mharty@sandexai.com",
            ar: "🔐 **ساندكس للأمن السيبراني:**\n\n• تقييمات وتدقيق الأمان\n• اختبار الاختراق وتقييم الثغرات\n• حماية البيانات (متوافقة مع ISO 27001)\n• أنظمة كشف التهديدات والاستجابة\n• حماية البنية التحتية الحرجة\n• برامج التدريب والتوعية الأمنية\n\n👥 **فريق معتمد:** CEH, CompTIA Security+\n🏛️ **الخبرة:** أمان حكومي ومؤسسي في مصر والسعودية\n🛡️ **النهج:** صيد استباقي للتهديدات وهندسة الثقة الصفرية\n\n📞 اتصال: +20 1000066161 | mharty@sandexai.com"
        },
        confidence: 0.90
    },

    // تطوير البرمجيات
    software_development: {
        keywords: [
            "software", "development", "app", "website", "mobile", "programming", "code", "web", "desktop", "application", "platform", "develop", "coding", "programmer", "software engineer", "full stack", "frontend", "backend", "API",
            "برمجة", "تطوير", "تطبيق", "موقع", "برمجيات", "كود", "ويب", "تطبيقات سطح المكتب", "مطور", "برمجة", "مهندس برمجيات", "واجهة برمجة التطبيقات"
        ],
        responses: {
            en: "💻 **Sandex Software Development:**\n\n• Custom web & mobile applications\n• Desktop software solutions\n• API development & integration\n• Multi-platform development (C++, Python, C#, Java, TypeScript)\n• UI/UX enhancement & responsive design\n• Legacy system modernization & maintenance\n• Cloud-native application development\n\n🏆 **Recent Projects:**\n• Petrojet HSE mobile app\n• PMS corporate website & digital platform\n• Arab Union administrative platform\n• Ton logistics application\n• Toor travel booking platform\n\n📧 Email: mharty@sandexai.com | +20 1000066161",
            ar: "💻 **ساندكس لتطوير البرمجيات:**\n\n• تطبيقات ويب وموبايل مخصصة\n• حلول برمجيات سطح المكتب\n• تطوير وتكامل واجهات البرمجة\n• تطوير متعدد المنصات (C++, Python, C#, Java, TypeScript)\n• تحسين واجهة المستخدم والتصميم المتجاوب\n• تحديث وصيانة الأنظمة القديمة\n• تطوير تطبيقات سحابية\n\n🏆 **مشاريع حديثة:**\n• تطبيق بتروجت للسلامة\n• موقع ومنصة شركة PMS الرقمية\n• منصة الاتحاد العربي الإدارية\n• تطبيق Ton للخدمات اللوجستية\n• منصة Toor لحجز السفر\n\n📧 إيميل: mharty@sandexai.com | +20 1000066161"
        },
        confidence: 0.90
    },

    // معلومات الشركة
    company_info: {
        keywords: [
            "about", "company", "sandex", "who", "information", "contact", "location", "address", "mission", "vision", "values", "team", "partners", "history", "about us", "contact us", "offices", "headquarters", "semicolon",
            "عن", "الشركة", "ساندكس", "من", "معلومات", "تواصل", "موقع", "عنوان", "رسالة", "رؤية", "قيم", "فريق", "شركاء", "تاريخ", "من نحن", "اتصل بنا", "مكاتب", "المقر الرئيسي", "سيميكولون"
        ],
        responses: {
            en: "🏢 **About Sandex AI:**\n\nSandexAI & Semicolon LTD - Leading AI & Digital Transformation company with expertise in software engineering, cybersecurity, and AI-driven solutions.\n\n📍 **Locations:**\n• Cairo, Egypt (HQ) - New Cairo, 5th Settlement\n• Riyadh, Saudi Arabia (Operations)\n\n📞 **Contact:**\n• Mohamed Elharty: +20 1000066161\n• Email: mharty@sandexai.com\n• Alternative: info@sandexai.com\n\n📊 **Our Impact:**\n• 250+ completed projects\n• 98% client satisfaction rate\n• Government & enterprise clients across MENA\n• Multilingual team (Arabic, English) with regional expertise\n\n🏆 **Core Specializations:**\n• Legacy system modernization\n• AI capabilities integration\n• Multi-platform development\n• Secure digital platforms\n• Mission-critical applications",
            ar: "🏢 **عن ساندكس للذكاء الاصطناعي:**\n\nساندكس وسيميكولن - شركة رائدة في الذكاء الاصطناعي والتحول الرقمي مع خبرة في هندسة البرمجيات والأمن السيبراني وحلول الذكاء الاصطناعي.\n\n📍 **المواقع:**\n• القاهرة، مصر (المقر الرئيسي) - القاهرة الجديدة، التجمع الخامس\n• الرياض، السعودية (العمليات)\n\n📞 **التواصل:**\n• محمد الحارثي: +20 1000066161\n• الإيميل: mharty@sandexai.com\n• بديل: info@sandexai.com\n\n📊 **تأثيرنا:**\n• 250+ مشروع مكتمل\n• 98% رضا العملاء\n• عملاء حكوميين ومؤسسيين عبر المنطقة\n• فريق متعدد اللغات (العربية، الإنجليزية) مع خبرة إقليمية\n\n🏆 **تخصصاتنا الأساسية:**\n• تحديث الأنظمة القديمة\n• دمج قدرات الذكاء الاصطناعي\n• تطوير متعدد المنصات\n• منصات رقمية آمنة\n• تطبيقات حرجة"
        },
        confidence: 0.95
    },

    // الأسعار والتكلفة
    pricing: {
        keywords: [
            "price", "cost", "pricing", "budget", "money", "fee", "quote", "rates", "payment", "packages", "subscription", "estimate", "proposal", "investment", "affordable", "expensive", "cheap",
            "سعر", "تكلفة", "ميزانية", "مال", "رسوم", "عرض سعر", "أسعار", "دفع", "باقات", "اشتراك", "تقدير", "عرض", "استثمار", "ميسور التكلفة", "باهظ", "رخيص"
        ],
        responses: {
            en: "💰 **Sandex Pricing Models:**\n\n**1. Fixed Price Projects** ($8K-$22K+)\n• UI Revamp (C#/WPF): $8,000-$12,000\n• Kernel-Level Monitor (C++): $15,000-$22,000\n• Android AI Module: $10,000-$16,000\n• Corporate Website Development: $12,000-$18,000\n• Custom CRM System: $20,000-$35,000\n\n**2. Time & Material**\n• Flexible scope, evolving requirements\n• R&D projects\n• Senior developer: $35-55/hour\n• Project manager: $40-60/hour\n\n**3. Retainer Packages** (40+ hours/month)\n• Ongoing support & maintenance\n• Optional 24/7 response\n• Priority incident handling\n• Monthly reports & optimization suggestions\n\n📧 Get custom quote: mharty@sandexai.com | +20 1000066161",
            ar: "💰 **نماذج تسعير ساندكس:**\n\n**1. مشاريع السعر الثابت** ($8K-$22K+)\n• تحديث واجهة C#/WPF: $8,000-$12,000\n• مراقب على مستوى النواة C++: $15,000-$22,000\n• وحدة ذكاء اصطناعي Android: $10,000-$16,000\n• تطوير موقع الشركة: $12,000-$18,000\n• نظام إدارة علاقات العملاء المخصص: $20,000-$35,000\n\n**2. الوقت والمواد**\n• نطاق مرن، متطلبات متطورة\n• مشاريع البحث والتطوير\n• مطور كبير: $35-55/ساعة\n• مدير مشروع: $40-60/ساعة\n\n**3. باقات الاشتراك** (40+ ساعة/شهر)\n• دعم وصيانة مستمرة\n• استجابة 24/7 اختيارية\n• معالجة الحوادث ذات الأولوية\n• تقارير شهرية واقتراحات التحسين\n\n📧 عرض سعر مخصص: mharty@sandexai.com | +20 1000066161"
        },
        confidence: 0.90
    },

    // مشاريع الشركة
    projects: {
        keywords: [
            "project", "portfolio", "work", "client", "case study", "petrojet", "pms", "showcase", "success story", "implementation", "solution", "ton", "toor", "arab union", "client list", "references", "portfolio",
            "مشروع", "مشاريع", "عمل", "عميل", "بتروجت", "دراسة حالة", "عرض", "قصة نجاح", "تنفيذ", "حل", "تون", "تور", "الاتحاد العربي", "قائمة العملاء", "مراجع", "محفظة"
        ],
        responses: {
            en: "🏆 **Sandex Success Stories:**\n\n**🛢️ Petrojet (Oil & Gas):**\n• HSE mobile app for safety management\n• Corporate website development\n• Desktop application modernization\n\n**⚓ PMS Marine Services:**\n• Corporate website & digital platform\n• Service management system\n\n**🏛️ Arab Union Administrative:**\n• Official website for regional courts\n• Multi-language document management\n\n**🚚 Ton Application:**\n• Heavy transport & logistics management\n• User-friendly interface for all technical levels\n\n**✈️ Toor Travel:**\n• Comprehensive travel booking platform\n• Flights, hotels, Hajj & Umrah services\n\n**📊 Government Projects:**\n• 40% faster processing\n• 200%+ citizen participation increase\n• International compliance standards\n• Data security & integrity protocols\n\n📞 Discuss your project: +20 1000066161 | mharty@sandexai.com",
            ar: "🏆 **قصص نجاح ساندكس:**\n\n**🛢️ بتروجت (البترول والغاز):**\n• تطبيق موبايل HSE لإدارة السلامة\n• تطوير الموقع الرسمي\n• تحديث التطبيق المكتبي\n\n**⚓ خدمات PMS البحرية:**\n• موقع الشركة والمنصة الرقمية\n• نظام إدارة الخدمات\n\n**🏛️ الاتحاد العربي الإداري:**\n• الموقع الرسمي للمحاكم الإقليمية\n• إدارة الوثائق متعددة اللغات\n\n**🚚 تطبيق تون:**\n• إدارة النقل الثقيل والخدمات اللوجستية\n• واجهة سهلة الاستخدام لجميع المستويات التقنية\n\n**✈️ تور للسفر:**\n• منصة حجز سفر شاملة\n• خدمات الطيران، الفنادق، الحج والعمرة\n\n**📊 المشاريع الحكومية:**\n• معالجة أسرع بنسبة 40%\n• زيادة مشاركة المواطنين بأكثر من 200%\n• معايير الامتثال الدولية\n• بروتوكولات أمان وسلامة البيانات\n\n📞 ناقش مشروعك: +20 1000066161 | mharty@sandexai.com"
        },
        confidence: 0.90
    },

    // تدريب وتعليم
    training: {
        keywords: [
            "training", "course", "learn", "education", "workshop", "certificate", "skill", "knowledge", "learning", "certification", "class", "program", "development", "professional development", "instructor", "trainer",
            "تدريب", "دورة", "تعلم", "تعليم", "ورشة عمل", "شهادة", "مهارة", "معرفة", "تعلم", "شهادة", "فصل", "برنامج", "تطوير", "تطوير مهني", "مدرب", "مدرب"
        ],
        responses: {
            en: "🎓 **Sandex Training & Education:**\n\n**AI & Data Science:**\n• Machine learning fundamentals\n• Neural networks & deep learning\n• Data analysis with Python\n• Generative AI frameworks\n• Computer vision applications\n\n**Cybersecurity:**\n• Ethical hacking workshops\n• Security implementation\n• Compliance training (ISO 27001)\n• Threat analysis & incident response\n• Secure coding practices\n\n**Software Development:**\n• Modern web development\n• Mobile app development\n• Enterprise solutions architecture\n• Cloud-native application development\n• DevOps & CI/CD implementation\n\n📅 **Format Options:**\n• In-person workshops at your location\n• Virtual instructor-led training\n• Hybrid learning models\n• Corporate group sessions\n\n📧 Training inquiries: mharty@sandexai.com | +20 1000066161",
            ar: "🎓 **ساندكس للتدريب والتعليم:**\n\n**الذكاء الاصطناعي وعلوم البيانات:**\n• أساسيات تعلم الآلة\n• الشبكات العصبية والتعلم العميق\n• تحليل البيانات باستخدام Python\n• أطر الذكاء الاصطناعي التوليدي\n• تطبيقات رؤية الكمبيوتر\n\n**الأمن السيبراني:**\n• ورش عمل الاختراق الأخلاقي\n• تنفيذ الأمان\n• تدريب الامتثال (ISO 27001)\n• تحليل التهديدات والاستجابة للحوادث\n• ممارسات الترميز الآمن\n\n**تطوير البرمجيات:**\n• تطوير الويب الحديث\n• تطوير تطبيقات الجوال\n• هندسة حلول المؤسسات\n• تطوير التطبيقات السحابية الأصلية\n• تنفيذ DevOps و CI/CD\n\n📅 **خيارات الصيغة:**\n• ورش عمل شخصية في موقعك\n• تدريب افتراضي بقيادة المدرب\n• نماذج التعلم الهجينة\n• جلسات مجموعات الشركات\n\n📧 استفسارات التدريب: mharty@sandexai.com | +20 1000066161"
        },
        confidence: 0.90
    },

    // تحيات وترحيب
    greetings: {
        keywords: [
            "hello", "hi", "hey", "good morning", "good evening", "good afternoon", "greetings", "welcome", "howdy", "hola", "bonjour", "namaste", "yo", "sup", "what's up", "how are you",
            "مرحبا", "أهلا", "صباح الخير", "مساء الخير", "تحية", "أهلاً وسهلاً", "كيف حالك", "ما أخبارك", "يا هلا", "السلام عليكم", "كيف الحال"
        ],
        responses: {
            en: "👋 **Hello and welcome to Sandex AI!**\n\nI'm your virtual assistant, here to help with information about our services:\n\n• AI & Machine Learning Solutions\n• Cybersecurity Services\n• Software Development\n• Digital Transformation\n• Training & Workshops\n• Business Analysis\n• Marketing Intelligence\n\nHow can I assist you today? Feel free to ask about our services, projects, or specific technologies!",
            ar: "👋 **مرحباً بك في ساندكس للذكاء الاصطناعي!**\n\nأنا مساعدك الافتراضي، هنا لمساعدتك بمعلومات حول خدماتنا:\n\n• حلول الذكاء الاصطناعي وتعلم الآلة\n• خدمات الأمن السيبراني\n• تطوير البرمجيات\n• التحول الرقمي\n• التدريب وورش العمل\n• تحليل الأعمال\n• ذكاء التسويق\n\nكيف يمكنني مساعدتك اليوم؟ لا تتردد في السؤال عن خدماتنا أو مشاريعنا أو التقنيات المحددة!"
        },
        confidence: 0.98
    },

    // خدمات التحول الرقمي
    digital_transformation: {
        keywords: [
            "digital transformation", "digitize", "modernize", "transformation", "digital strategy", "digital solutions", "legacy", "upgrade", "modern", "innovation", "automate", "digitalize",
            "التحول الرقمي", "رقمنة", "تحديث", "تحول", "استراتيجية رقمية", "حلول رقمية", "قديم", "ترقية", "حديث", "ابتكار", "أتمتة", "رقمنة"
        ],
        responses: {
            en: "🚀 **Sandex Digital Transformation Services:**\n\n• Complete business digitization guidance\n• Legacy system modernization & integration\n• Process automation & workflow optimization\n• Digital customer experience enhancement\n• Data-driven decision making tools\n• Cloud migration & adoption strategies\n\n✅ **Our Approach:**\n• Assessment of current digital maturity\n• Customized transformation roadmap\n• Phased implementation to minimize disruption\n• Staff training & change management\n• Continuous optimization & support\n\n🏆 **Results:** 40% faster processing, 25-30% operational cost savings\n\n📞 Contact: +20 1000066161 | mharty@sandexai.com",
            ar: "🚀 **خدمات ساندكس للتحول الرقمي:**\n\n• توجيه شامل لرقمنة الأعمال\n• تحديث ودمج الأنظمة القديمة\n• أتمتة العمليات وتحسين سير العمل\n• تعزيز تجربة العملاء الرقمية\n• أدوات اتخاذ القرار المستندة إلى البيانات\n• استراتيجيات الهجرة واعتماد السحابة\n\n✅ **نهجنا:**\n• تقييم النضج الرقمي الحالي\n• خارطة طريق مخصصة للتحول\n• التنفيذ المرحلي لتقليل الاضطراب\n• تدريب الموظفين وإدارة التغيير\n• التحسين المستمر والدعم\n\n🏆 **النتائج:** معالجة أسرع بنسبة 40%، توفير 25-30% من تكاليف التشغيل\n\n📞 اتصال: +20 1000066161 | mharty@sandexai.com"
        },
        confidence: 0.92
    },

    // تحليل الأعمال
    business_analysis: {
        keywords: [
            "business analysis", "market research", "analytics", "data analysis", "process optimization", "financial analysis", "strategic planning", "competitive analysis", "insight", "planning",
            "تحليل الأعمال", "أبحاث السوق", "تحليلات", "تحليل البيانات", "تحسين العمليات", "تحليل مالي", "تخطيط استراتيجي", "تحليل تنافسي", "رؤية", "تخطيط"
        ],
        responses: {
            en: "📊 **Sandex Business Analysis Services:**\n\n• Market Research & Competitive Analysis\n• Process Optimization & Workflow Assessment\n• Financial Analysis & Resource Management\n• Strategic Planning & Decision Support\n• Data Analytics & Business Intelligence\n• Performance Metrics & KPI Development\n\n🔍 **Our Process:**\n• Comprehensive business environment assessment\n• In-depth data collection & structured analysis\n• Clear visualization of insights\n• Actionable recommendations\n• Implementation support & follow-up\n\n✅ **Benefits:** Evidence-based decision making, improved operational efficiency, competitive advantage\n\n📧 Contact: mharty@sandexai.com | +20 1000066161",
            ar: "📊 **خدمات ساندكس لتحليل الأعمال:**\n\n• أبحاث السوق والتحليل التنافسي\n• تحسين العمليات وتقييم سير العمل\n• التحليل المالي وإدارة الموارد\n• التخطيط الاستراتيجي ودعم القرار\n• تحليلات البيانات وذكاء الأعمال\n• مقاييس الأداء وتطوير مؤشرات الأداء الرئيسية\n\n🔍 **عمليتنا:**\n• تقييم شامل لبيئة العمل\n• جمع بيانات متعمق وتحليل منظم\n• تصور واضح للرؤى\n• توصيات قابلة للتنفيذ\n• دعم التنفيذ والمتابعة\n\n✅ **الفوائد:** اتخاذ قرارات قائمة على الأدلة، تحسين كفاءة التشغيل، ميزة تنافسية\n\n📧 اتصال: mharty@sandexai.com | +20 1000066161"
        },
        confidence: 0.88
    },

    // ذكاء التسويق
    marketing: {
        keywords: [
            "marketing", "advertising", "promotion", "branding", "social media", "content", "seo", "sem", "digital marketing", "online marketing", "campaign", "lead generation", "customer", "brand",
            "تسويق", "إعلان", "ترويج", "علامة تجارية", "وسائل التواصل الاجتماعي", "محتوى", "تحسين محركات البحث", "التسويق عبر محركات البحث", "تسويق رقمي", "تسويق إلكتروني", "حملة", "جيل الرصاص", "عميل", "العلامة التجارية"
        ],
        responses: {
            en: "📱 **Sandex Marketing Intelligence Services:**\n\n• Market Research & Analysis\n• Customer Insights & Behavior Mapping\n• Competitive Intelligence\n• Data Analytics & Performance Reporting\n• Digital Marketing Strategy & Optimization\n• Content Strategy & Development\n• SEO & SEM Implementation\n• Social Media Growth & Management\n\n💡 **Our Approach:**\n• Data-driven strategy development\n• Audience-targeted content creation\n• Continuous performance monitoring\n• ROI optimization\n• Cross-platform campaign integration\n\n📊 **Technologies:** Advanced analytics tools, AI-powered insight generation, multi-channel tracking\n\n📧 Contact: mharty@sandexai.com | +20 1000066161",
            ar: "📱 **خدمات ساندكس لذكاء التسويق:**\n\n• أبحاث وتحليل السوق\n• رؤى العملاء ورسم خرائط السلوك\n• الذكاء التنافسي\n• تحليلات البيانات وتقارير الأداء\n• استراتيجية التسويق الرقمي والتحسين\n• استراتيجية المحتوى والتطوير\n• تنفيذ تحسين محركات البحث والتسويق عبر محركات البحث\n• نمو وإدارة وسائل التواصل الاجتماعي\n\n💡 **نهجنا:**\n• تطوير استراتيجية قائمة على البيانات\n• إنشاء محتوى مستهدف للجمهور\n• مراقبة مستمرة للأداء\n• تحسين عائد الاستثمار\n• تكامل الحملات عبر المنصات\n\n📊 **التقنيات:** أدوات تحليلات متقدمة، توليد رؤى مدعومة بالذكاء الاصطناعي، تتبع متعدد القنوات\n\n📧 اتصال: mharty@sandexai.com | +20 1000066161"
        },
        confidence: 0.85
    },

    // تقنيات الشركة
    technologies: {
        keywords: [
            "technology", "tech", "stack", "framework", "programming", "language", "cloud", "platform", "tools", "devops", "infrastructure", "python", "java", "c++", "c#", "typescript", "aws", "azure",
            "تقنية", "تكنولوجيا", "ستاك", "إطار عمل", "برمجة", "لغة", "سحابة", "منصة", "أدوات", "ديفوبس", "بنية تحتية", "بايثون", "جافا", "سي++", "سي شارب", "تايب سكريبت", "أمازون ويب سيرفيس", "أزور"
        ],
        responses: {
            en: "⚙️ **Sandex Technology Stack:**\n\n**Programming Languages:**\n• C++, Python, C#, TypeScript, Java\n\n**Core Technologies:**\n• AI & Machine Learning: TensorFlow, PyTorch, scikit-learn\n• Cybersecurity: SIEM platforms, penetration testing frameworks\n• Cloud Platforms: AWS, Azure, Google Cloud\n• DevOps: GitLab CI, Jenkins, SonarQube, Helm, Docker, Kubernetes\n• Web/Mobile: React, Angular, Vue.js, Flutter, React Native\n• Databases: SQL Server, PostgreSQL, MongoDB, Redis\n\n**Development Methodology:**\n• Agile with 2-week sprints\n• DevOps pipeline with automated testing\n• Quality gates for security & code quality\n• Comprehensive documentation practices\n\n**Emerging Technologies:**\n• Generative AI integration\n• Edge computing solutions\n• IoT platforms & smart city applications\n\n📧 Technical inquiries: mharty@sandexai.com",
            ar: "⚙️ **ستاك تقنيات ساندكس:**\n\n**لغات البرمجة:**\n• C++, Python, C#, TypeScript, Java\n\n**التقنيات الأساسية:**\n• الذكاء الاصطناعي وتعلم الآلة: TensorFlow, PyTorch, scikit-learn\n• الأمن السيبراني: منصات SIEM، أطر اختبار الاختراق\n• منصات السحابة: AWS, Azure, Google Cloud\n• DevOps: GitLab CI, Jenkins, SonarQube, Helm, Docker, Kubernetes\n• الويب/الجوال: React, Angular, Vue.js, Flutter, React Native\n• قواعد البيانات: SQL Server, PostgreSQL, MongoDB, Redis\n\n**منهجية التطوير:**\n• أجايل مع سرعات ذات أسبوعين\n• خط أنابيب DevOps مع اختبار آلي\n• بوابات الجودة للأمان وجودة الكود\n• ممارسات التوثيق الشاملة\n\n**التقنيات الناشئة:**\n• تكامل الذكاء الاصطناعي التوليدي\n• حلول الحوسبة الطرفية\n• منصات إنترنت الأشياء وتطبيقات المدن الذكية\n\n📧 استفسارات تقنية: mharty@sandexai.com"
        },
        confidence: 0.90
    },

    // الشراكات والعملاء
    partners_clients: {
        keywords: [
            "partner", "client", "customer", "collaboration", "partnership", "clientele", "work with", "customer list", "references", "business partner", "strategic partner", "ministry",
            "شريك", "عميل", "زبون", "تعاون", "شراكة", "عملاء", "العمل مع", "قائمة العملاء", "مراجع", "شريك العمل", "شريك استراتيجي", "وزارة"
        ],
        responses: {
            en: "🤝 **Sandex Partnerships & Clients:**\n\n**Business Partners:**\n• QUILL Energy\n• MAS GROUP\n• Semicolon Software Solutions\n• Smart Station Solutions\n• Innovative Minds Foundation\n• Healiot\n• GROMi (Growth Mindset)\n\n**Strategic Partners:**\n• Egyptian Ministry of Communications\n• Ministry of Interior (Egypt)\n• Holding Company for Water and Wastewater\n• Holy Mosques Agency (Medina)\n• Egyptian Council of State\n• Nile Tech University\n\n**Major Clients Egypt:**\n• EUG, Enppi Sporting Club, PETROJET, PMS\n• Arab Union for Administrative Industry\n• Mattloob.com, Connect Live, QFLY\n• Multiple travel agencies & services\n\n**Major Clients Saudi Arabia:**\n• Saudi Electricity Company\n• Weatherford, TAQA, Flowserve, AYTB\n• Ministry of Defense\n• Security consulting firms\n\n📧 Partnership inquiries: mharty@sandexai.com",
            ar: "🤝 **شراكات وعملاء ساندكس:**\n\n**شركاء الأعمال:**\n• QUILL Energy\n• MAS GROUP\n• Semicolon Software Solutions\n• Smart Station Solutions\n• مؤسسة العقول المبتكرة\n• Healiot\n• GROMi (Growth Mindset)\n\n**الشركاء الاستراتيجيون:**\n• وزارة الاتصالات المصرية\n• وزارة الداخلية (مصر)\n• الشركة القابضة لمياه الشرب والصرف الصحي\n• وكالة المساجد المقدسة (المدينة المنورة)\n• مجلس الدولة المصري\n• جامعة النيل التكنولوجية\n\n**كبار العملاء في مصر:**\n• EUG، نادي إنبي الرياضي، بتروجت، PMS\n• الاتحاد العربي للصناعة الإدارية\n• Mattloob.com، Connect Live، QFLY\n• وكالات وخدمات سفر متعددة\n\n**كبار العملاء في السعودية:**\n• شركة الكهرباء السعودية\n• Weatherford، TAQA، Flowserve، AYTB\n• وزارة الدفاع\n• شركات استشارات أمنية\n\n📧 استفسارات الشراكة: mharty@sandexai.com"
        },
        confidence: 0.90
    },

    // ضمان الجودة
    quality: {
        keywords: [
            "quality", "standard", "certification", "iso", "assurance", "testing", "quality control", "methodology", "best practices", "process", "verification", "validation", "audit",
            "جودة", "معيار", "شهادة", "آيزو", "ضمان", "اختبار", "مراقبة الجودة", "منهجية", "أفضل الممارسات", "عملية", "تحقق", "تصديق", "تدقيق"
        ],
        responses: {
            en: "🛡️ **Sandex Quality Standards & Certifications:**\n\n**Team Certifications:**\n• CEH (Certified Ethical Hacker)\n• CompTIA Security+\n• TensorFlow Developer Certification\n• Azure & AWS Cloud Certifications\n• Industry-specific technical certifications\n\n**Process Standards:**\n• ISO 9001: Quality management systems\n• ISO 27001: Information security management\n• GitOps: Consistency and version traceability\n• Secure Development Lifecycle (SDL)\n\n**Quality Assurance Process:**\n• Automated testing with high coverage requirements\n• Multi-stage code reviews\n• Security vulnerability scanning\n• Performance benchmarking\n• Accessibility compliance verification\n\n**Performance Metrics:**\n• 40% faster processing in government projects\n• 25-30% cost savings in infrastructure projects\n• 98% client satisfaction rate\n• Consistent on-time delivery\n\n📧 Quality inquiries: mharty@sandexai.com",
            ar: "🛡️ **معايير الجودة والشهادات في ساندكس:**\n\n**شهادات الفريق:**\n• CEH (مخترق أخلاقي معتمد)\n• CompTIA Security+\n• شهادة مطور TensorFlow\n• شهادات سحابة Azure و AWS\n• شهادات تقنية خاصة بالصناعة\n\n**معايير العمليات:**\n• ISO 9001: أنظمة إدارة الجودة\n• ISO 27001: إدارة أمن المعلومات\n• GitOps: التناسق وتتبع الإصدارات\n• دورة حياة التطوير الآمن (SDL)\n\n**عملية ضمان الجودة:**\n• الاختبار الآلي مع متطلبات تغطية عالية\n• مراجعات الكود متعددة المراحل\n• فحص نقاط الضعف الأمنية\n• قياس الأداء\n• التحقق من الامتثال لإمكانية الوصول\n\n**مقاييس الأداء:**\n• معالجة أسرع بنسبة 40% في المشاريع الحكومية\n• توفير 25-30% في تكاليف البنية التحتية\n• 98% معدل رضا العملاء\n• تسليم متسق في الوقت المحدد\n\n📧 استفسارات الجودة: mharty@sandexai.com"
        },
        confidence: 0.85
    }
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

    // البحث عن الكلمات المفتاحية - نسخة محسنة
    findKeywordMatch(message) {
        const lowerMessage = message.toLowerCase();
        const words = lowerMessage.split(/\s+/);
        let bestMatch = null;
        let highestScore = 0;
        
        // حساب معامل حجم الجملة - الجمل الأطول تحتاج تطابق أكثر
        const messageLengthFactor = Math.min(1, 10 / words.length);
        
        // تقسيم الرسالة إلى جمل للتحليل المتعمق
        const sentences = lowerMessage.split(/[.!?،؛]/);

        for (const [category, data] of Object.entries(SANDEX_KEYWORDS_DATABASE)) {
            let score = 0;
            let matchedKeywords = 0;
            let bestKeywordScore = 0;
            
            // البحث عن الكلمات المفتاحية الكاملة
            for (const keyword of data.keywords) {
                const keywordLower = keyword.toLowerCase();
                
                // تطابق كامل للكلمة المفتاحية
                if (lowerMessage.includes(keywordLower)) {
                    const keywordScore = keyword.length > 3 ? 1.5 : 1.0;  // الكلمات الأطول لها وزن أكبر
                    matchedKeywords++;
                    score += data.confidence * keywordScore;
                    bestKeywordScore = Math.max(bestKeywordScore, keywordScore);
                    
                    // زيادة النتيجة إذا كانت الكلمة المفتاحية في بداية الجملة
                    if (sentences.some(s => s.trim().startsWith(keywordLower))) {
                        score += data.confidence * 0.5;
                    }
                }
                
                // تطابق جزئي للكلمات المفتاحية المكونة من كلمات متعددة
                else if (keywordLower.includes(' ') && keywordLower.split(' ').every(part => 
                    lowerMessage.includes(part) && part.length > 3)) {
                    score += data.confidence * 0.7;
                    matchedKeywords += 0.7;
                }
                
                // تطابق للكلمات المفردة بناءً على الجذر (للكلمات أكبر من 4 أحرف)
                else if (keywordLower.length > 4) {
                    // تحقق من وجود جذر الكلمة المفتاحية (الأحرف الأولى)
                    const root = keywordLower.substring(0, Math.floor(keywordLower.length * 0.7));
                    if (root.length >= 4 && words.some(w => w.startsWith(root))) {
                        score += data.confidence * 0.4;
                        matchedKeywords += 0.4;
                    }
                }
            }

            // تعديل النتيجة بناءً على عدد الكلمات المطابقة وحجم الرسالة
            if (matchedKeywords > 0) {
                // استخدام معادلة أكثر دقة للحساب
                const relevanceScore = (score / Math.sqrt(data.keywords.length)) * 
                                      Math.sqrt(matchedKeywords) * 
                                      (1 + messageLengthFactor) * 
                                      (bestKeywordScore * 0.5);
                
                // تعزيز النتيجة بناءً على كثافة الكلمات المفتاحية (نسبتها للجملة)
                const keywordDensity = matchedKeywords / words.length;
                const finalScore = relevanceScore * (1 + keywordDensity);
                
                // حفظ أفضل تطابق
                if (finalScore > highestScore) {
                    highestScore = finalScore;
                    bestMatch = { 
                        category, 
                        data, 
                        score: Math.min(finalScore, 1.0), // تحديد النتيجة القصوى بـ 1.0
                        matchedKeywords,
                        keywordDensity
                    };
                }
            }
        }

        // تطبيق الحد الأدنى للثقة (يمكن تعديله من خلال الإعدادات)
        const minConfidence = DEEPSEEK_CONFIG?.KEYWORD_THRESHOLD || 0.3;
        return bestMatch && bestMatch.score >= minConfidence ? bestMatch : null;
    }

    // الرد الرئيسي
    async generateResponse(userMessage) {
        if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
            console.log(`🔍 Processing: "${userMessage}"`);
        }
        
        const language = this.detectLanguage(userMessage);
        if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
            console.log(`🌐 Language detected: ${language}`);
        }

        try {
            // Check configuration settings
            const hybridMode = DEEPSEEK_CONFIG?.HYBRID_MODE !== false;
            const preferKeywords = DEEPSEEK_CONFIG?.PREFER_KEYWORDS !== false;
            const keywordThreshold = DEEPSEEK_CONFIG?.KEYWORD_THRESHOLD || 0.6;
            
            // البحث في قاعدة الكلمات المفتاحية أولاً
            const keywordMatch = this.findKeywordMatch(userMessage);
            
            // If we have a good keyword match
            if (keywordMatch && keywordMatch.score >= keywordThreshold) {
                if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                    console.log(`✅ Keyword match found: ${keywordMatch.category} (confidence: ${keywordMatch.score.toFixed(2)})`);
                    console.log(`💰 Tokens saved! Using pre-defined response.`);
                }
                
                // Apply small randomized delay for more natural interaction if configured
                if (DEEPSEEK_CONFIG?.SIMULATE_API_LATENCY) {
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 800 + 200));
                }
                
                return {
                    response: keywordMatch.data.responses[language],
                    source: 'keyword_database',
                    confidence: keywordMatch.score,
                    category: keywordMatch.category,
                    tokensUsed: 0
                };
            }

            // Try API only if keyword match not found or below threshold
            if (hybridMode && (!keywordMatch || (keywordMatch.score < keywordThreshold && !preferKeywords))) {
                if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                    console.log(`🤖 No strong keyword match. Escalating to DeepSeek API...`);
                }
                try {
                    return await this.useDeepSeekAPI(userMessage, language);
                } catch (apiError) {
                    // If we previously had a low-confidence keyword match, use it as fallback
                    if (keywordMatch) {
                        if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                            console.log(`⚠️ API failed. Using low-confidence keyword match as fallback.`);
                        }
                        return {
                            response: keywordMatch.data.responses[language],
                            source: 'keyword_database_fallback',
                            confidence: keywordMatch.score,
                            category: keywordMatch.category,
                            tokensUsed: 0
                        };
                    }
                    // Otherwise use emergency fallback
                    throw apiError;
                }
            } else {
                // We're either in keywords-only mode or have no keyword match and no API available
                if (keywordMatch) {
                    // Use the low confidence match anyway
                    if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                        console.log(`ℹ️ Using low confidence keyword match: ${keywordMatch.category} (${keywordMatch.score.toFixed(2)})`);
                    }
                    return {
                        response: keywordMatch.data.responses[language],
                        source: 'keyword_database_low_confidence',
                        confidence: keywordMatch.score,
                        category: keywordMatch.category,
                        tokensUsed: 0
                    };
                } else {
                    // No match at all, use general fallback
                    if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                        console.log(`⚠️ No keyword match, using emergency fallback.`);
                    }
                    return this.getEmergencyFallback(language);
                }
            }
        } catch (error) {
            console.error(`❌ Error generating response:`, error);
            return this.getEmergencyFallback(language);
        }
    }

    // استخدام DeepSeek API كـ fallback
    async useDeepSeekAPI(userMessage, language) {
        if (!this.apiEnabled || this.apiRetries >= this.maxRetries) {
            if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                console.log(`⚠️ API unavailable. Using emergency fallback.`);
            }
            return this.getEmergencyFallback(language);
        }

        try {
            // Simulate API latency for more realistic interaction
            if (DEEPSEEK_CONFIG?.SIMULATE_API_LATENCY) {
                await new Promise(resolve => setTimeout(resolve, Math.random() * 1200 + 800)); // 800-2000ms delay
            }
            
            // هنا يتم استدعاء DeepSeek API
            const apiResponse = await this.callDeepSeekAPI(userMessage, language);
            
            this.tokensUsed += apiResponse.tokensUsed || 50; // تقدير استخدام التوكن
            if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                console.log(`🔥 API Response generated. Tokens used: ${this.tokensUsed}`);
            }
            
            return {
                response: apiResponse.response,
                source: 'deepseek_api',
                confidence: 0.85, // higher confidence for API responses
                tokensUsed: apiResponse.tokensUsed
            };

        } catch (error) {
            if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                console.error(`❌ API Error:`, error);
            }
            this.apiRetries++;
            
            if (this.apiRetries >= this.maxRetries) {
                this.apiEnabled = false;
                if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
                    console.log(`🚫 API disabled after ${this.maxRetries} failures.`);
                }
            }
            
            // Try intelligent context-aware fallback based on user query
            const intelligentFallback = this.getIntelligentFallback(userMessage, language);
            if (intelligentFallback) {
                return intelligentFallback;
            }
            
            // Otherwise use emergency fallback
            return this.getEmergencyFallback(language);
        }
    }

    // استدعاء DeepSeek API
    async callDeepSeekAPI(message, language) {
        // Check for configuration
        if (typeof DEEPSEEK_CONFIG === 'undefined' || !DEEPSEEK_CONFIG.API_KEY || DEEPSEEK_CONFIG.API_KEY.includes('your_') || !DEEPSEEK_CONFIG.API_ENDPOINT) {
            console.warn('⚠️ API configuration missing or incomplete. Operating in keyword-only mode.');
            throw new Error('API configuration missing or incomplete');
        }
        
        // Enhanced system prompt with comprehensive company data
        const systemPrompt = `You are Sandex AI Assistant. Use this company data to answer questions:

COMPANY: Sandex for Artificial Intelligence and Digital Transformation (SandexAI & Semicolon LTD)
BRANDING: Tagline "CONNECTING THE DOTS", Colors: Primary Orange (#EF571B), Secondary Yellow (#F3C846)
SERVICES: AI/ML Development, Digital Transformation, Cybersecurity, Software Development, Business Analysis, Marketing Intelligence
TECHNOLOGIES: C++, Python, C#, TypeScript, Java, TensorFlow, AWS/Azure, DevOps (GitLab CI, Jenkins, Docker)
LOCATIONS: Cairo Egypt (HQ - New Cairo, 5th Settlement), Riyadh Saudi Arabia (Operations)
CONTACT: Mohamed Elharty +20 1000066161, mharty@sandexai.com, Alternative: info@sandexai.com
PROJECTS: Petrojet HSE app, PMS Marine digital platform, Arab Union administrative platform, Ton logistics app, Toor travel platform
RESULTS: 40% faster processing, 25-30% cost savings, 98% client satisfaction, 250+ completed projects
CLIENTS: Government agencies in Egypt & Saudi Arabia, oil & gas companies, financial services, transportation & logistics
CERTIFICATIONS: ISO 9001, ISO 27001, CEH, CompTIA Security+

Respond in ${language === 'ar' ? 'Arabic' : 'English'} professionally and concisely with well-formatted answers.`;
        
        // Check if we're in simulation mode and should bypass API
        if (DEEPSEEK_CONFIG.HYBRID_MODE && DEEPSEEK_CONFIG.PREFER_KEYWORDS && Math.random() > 0.3) {
            // 70% chance to "simulate" API failure in prefer keywords mode
            await new Promise(resolve => setTimeout(resolve, 600)); // Simulate network delay
            throw new Error('Simulated API error for keyword preference');
        }

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
                    max_tokens: DEEPSEEK_CONFIG.MAX_TOKENS || 1000,
                    temperature: DEEPSEEK_CONFIG.TEMPERATURE || 0.7
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
            if (DEEPSEEK_CONFIG.DEBUG_MODE) {
                console.error('DeepSeek API Error:', error);
            } else {
                console.warn('API request failed, falling back to keyword database');
            }
            throw error;
        }
    }

    // ردود الطوارئ عند تعطل الـ API - نسخة موسعة
    getEmergencyFallback(language) {
        this.fallbackCount++;
        if (DEEPSEEK_CONFIG?.DEBUG_MODE) {
            console.log(`🆘 Emergency fallback activated (#${this.fallbackCount})`);
        }

        // تنويع الردود بناء على عدد مرات استخدام آلية الطوارئ
        // كلما زاد عدد مرات الاستخدام، كلما أصبحت الرسائل أكثر تنوعاً وتوجيهاً
        const fallbackResponses = {
            en: [
                // Standard technical difficulty responses
                "I'm experiencing some technical difficulties with our advanced AI processing at the moment. For immediate assistance with your query about our services, please contact our team directly:\n\n📞 **Phone:** +20 1000066161\n📧 **Email:** mharty@sandexai.com\n\nOur experts are ready to assist with your AI solutions, cybersecurity, and software development needs.",
                
                "Our AI system is currently optimizing its knowledge base. For immediate assistance with Sandex services:\n\n🔗 **Contact Mohamed Elharty:** +20 1000066161\n🌐 **Services:** AI Implementation, Digital Transformation, Cybersecurity, Software Development\n📍 **Locations:** Cairo, Egypt (HQ) | Riyadh, Saudi Arabia",
                
                "We're currently updating our AI capabilities. For urgent inquiries about:\n• AI & Machine Learning solutions\n• Cybersecurity services & ISO 27001 compliance\n• Software development across multiple platforms\n• Digital transformation strategies\n\n📞 **Direct contact:** +20 1000066161 | mharty@sandexai.com",
                
                // More detailed responses focusing on services
                "While our AI system is being enhanced, I can inform you that Sandex specializes in custom AI solutions, cybersecurity, and software development. Our team has delivered 250+ successful projects with 98% client satisfaction across Egypt and Saudi Arabia. For specific details about your requirements, please contact Mohamed Elharty at +20 1000066161.",
                
                "Sandex offers comprehensive digital transformation solutions including AI integration, cybersecurity, and custom software development. Our projects typically deliver 40% faster processing and 25-30% cost savings. For a personalized consultation about your specific needs, please reach out to mharty@sandexai.com or call +20 1000066161.",
                
                // Proactive engagement responses
                "Thank you for your interest in Sandex AI. To provide you with the most accurate and detailed information, I'd like to connect you with our team who can address your specific requirements and offer tailored solutions. Please contact us at mharty@sandexai.com or +20 1000066161, referencing this conversation.",
                
                "I'd be happy to arrange a personalized consultation with our specialists to discuss how our AI, cybersecurity, or software development services can benefit your organization. Please reach out to Mohamed Elharty at +20 1000066161 or email mharty@sandexai.com to schedule a meeting."
            ],
            ar: [
                // Standard technical difficulty responses
                "أواجه بعض الصعوبات التقنية مع معالجة الذكاء الاصطناعي المتقدمة لدينا في الوقت الحالي. للحصول على مساعدة فورية بخصوص استفسارك حول خدماتنا، يرجى التواصل مع فريقنا مباشرة:\n\n📞 **الهاتف:** +20 1000066161\n📧 **البريد الإلكتروني:** mharty@sandexai.com\n\nخبراؤنا جاهزون لمساعدتك في حلول الذكاء الاصطناعي والأمن السيبراني وتطوير البرمجيات.",
                
                "يقوم نظام الذكاء الاصطناعي لدينا حاليًا بتحسين قاعدة معرفته. للحصول على مساعدة فورية مع خدمات ساندكس:\n\n🔗 **تواصل مع محمد الحارثي:** +20 1000066161\n🌐 **الخدمات:** تنفيذ الذكاء الاصطناعي، التحول الرقمي، الأمن السيبراني، تطوير البرمجيات\n📍 **المواقع:** القاهرة، مصر (المقر الرئيسي) | الرياض، المملكة العربية السعودية",
                
                "نقوم حاليًا بتحديث قدرات الذكاء الاصطناعي لدينا. للاستفسارات العاجلة حول:\n• حلول الذكاء الاصطناعي وتعلم الآلة\n• خدمات الأمن السيبراني والامتثال لمعيار ISO 27001\n• تطوير البرمجيات عبر منصات متعددة\n• استراتيجيات التحول الرقمي\n\n📞 **اتصال مباشر:** +20 1000066161 | mharty@sandexai.com",
                
                // More detailed responses focusing on services
                "بينما يتم تحسين نظام الذكاء الاصطناعي لدينا، يمكنني إخبارك أن ساندكس متخصصة في حلول الذكاء الاصطناعي المخصصة والأمن السيبراني وتطوير البرمجيات. قام فريقنا بتسليم أكثر من 250 مشروعًا ناجحًا بنسبة رضا عملاء 98% في مصر والمملكة العربية السعودية. للحصول على تفاصيل محددة حول متطلباتك، يرجى التواصل مع محمد الحارثي على +20 1000066161.",
                
                "تقدم ساندكس حلولاً شاملة للتحول الرقمي تشمل دمج الذكاء الاصطناعي والأمن السيبراني وتطوير البرمجيات المخصصة. عادةً ما تقدم مشاريعنا معالجة أسرع بنسبة 40% وتوفير في التكاليف بنسبة 25-30%. للحصول على استشارة شخصية حول احتياجاتك المحددة، يرجى التواصل مع mharty@sandexai.com أو الاتصال على +20 1000066161.",
                
                // Proactive engagement responses
                "شكرًا لاهتمامك بساندكس للذكاء الاصطناعي. لتزويدك بمعلومات دقيقة ومفصلة، أود توصيلك بفريقنا الذي يمكنه تلبية متطلباتك المحددة وتقديم حلول مخصصة. يرجى الاتصال بنا على mharty@sandexai.com أو +20 1000066161، مع الإشارة إلى هذه المحادثة.",
                
                "يسعدني ترتيب استشارة مخصصة مع متخصصينا لمناقشة كيف يمكن لخدمات الذكاء الاصطناعي أو الأمن السيبراني أو تطوير البرمجيات لدينا أن تفيد مؤسستك. يرجى التواصل مع محمد الحارثي على +20 1000066161 أو البريد الإلكتروني mharty@sandexai.com لتحديد موعد اجتماع."
            ]
        };

        // إذا تجاوزنا عتبة معينة من استخدام الطوارئ، نضيف رسائل توجيه خاصة
        if (this.fallbackCount > 5) {
            fallbackResponses.en.push(
                "I notice our conversation would benefit from direct expert assistance. For the most efficient support with your inquiry, I recommend contacting our technical team directly at mharty@sandexai.com. They're available to provide comprehensive information and demonstrations of our AI, cybersecurity, and software development capabilities.",
                "To better serve your specific requirements, I recommend scheduling a brief consultation with our specialists who can provide detailed information about our services and how they can be tailored to your needs. Please contact Mohamed Elharty at +20 1000066161 to arrange this."
            );
            
            fallbackResponses.ar.push(
                "ألاحظ أن محادثتنا ستستفيد من مساعدة الخبراء المباشرة. للحصول على أكثر دعم فعال لاستفسارك، أوصي بالاتصال بفريقنا التقني مباشرة على mharty@sandexai.com. إنهم متاحون لتقديم معلومات شاملة وعروض توضيحية لقدراتنا في الذكاء الاصطناعي والأمن السيبراني وتطوير البرمجيات.",
                "لخدمة متطلباتك المحددة بشكل أفضل، أوصي بجدولة استشارة موجزة مع متخصصينا الذين يمكنهم تقديم معلومات مفصلة حول خدماتنا وكيف يمكن تخصيصها لاحتياجاتك. يرجى الاتصال بمحمد الحارثي على +20 1000066161 لترتيب ذلك."
            );
        }

        // تحديد موقع الاستجابة المناسبة
        const responses = fallbackResponses[language] || fallbackResponses.en;
        
        // طريقة ذكية لاختيار رد - البداية برسائل الصعوبات التقنية ثم التحول للرسائل التفاعلية
        const index = Math.min(
            Math.floor(this.fallbackCount / 2), 
            responses.length - 1
        );
        
        // اختيار الاستجابة مع بعض العشوائية المحدودة
        const randomOffset = Math.min(2, responses.length - index - 1);
        const finalIndex = index + Math.floor(Math.random() * (randomOffset + 1));
        const finalResponse = responses[Math.min(finalIndex, responses.length - 1)];

        return {
            response: finalResponse,
            source: 'emergency_fallback',
            confidence: 0.60,
            tokensUsed: 0,
            fallbackCount: this.fallbackCount
        };
    }

    // ردود ذكية تعتمد على سياق السؤال
    getIntelligentFallback(userMessage, language) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Create topic categories for common questions
        const topics = {
            greeting: ['hello', 'hi', 'hey', 'good morning', 'welcome', 'مرحبا', 'أهلا', 'صباح الخير', 'مساء الخير'],
            services: ['service', 'offer', 'provide', 'solution', 'خدمات', 'حلول', 'تقدمون', 'توفرون'],
            pricing: ['price', 'cost', 'fee', 'package', 'quote', 'سعر', 'تكلفة', 'رسوم', 'عرض سعر'],
            contact: ['contact', 'phone', 'email', 'reach', 'اتصال', 'هاتف', 'ايميل', 'تواصل'],
            company: ['company', 'about', 'who', 'history', 'شركة', 'عن', 'من', 'تاريخ'],
            projects: ['project', 'portfolio', 'case study', 'work', 'reference', 'مشروع', 'محفظة', 'دراسة حالة', 'عمل'],
            technical: ['ai', 'machine learning', 'software', 'code', 'algorithm', 'ذكاء اصطناعي', 'تعلم آلة', 'برمجيات', 'كود', 'خوارزمية']
        };
        
        // Find the most relevant topic
        let bestMatch = null;
        let highestScore = 0;
        
        for (const [topic, keywords] of Object.entries(topics)) {
            let score = 0;
            for (const keyword of keywords) {
                if (lowerMessage.includes(keyword.toLowerCase())) {
                    score += 1;
                }
            }
            
            if (score > highestScore) {
                highestScore = score;
                bestMatch = topic;
            }
        }
        
        if (!bestMatch) {
            return null; // No specific topic detected
        }
        
        // Get appropriate response based on topic and language
        const responses = {
            greeting: {
                en: "👋 Hello! I'm Sandex AI's virtual assistant. How can I help you with our AI, cybersecurity, or software development services today?",
                ar: "👋 مرحباً! أنا المساعد الافتراضي لساندكس للذكاء الاصطناعي. كيف يمكنني مساعدتك في خدماتنا للذكاء الاصطناعي أو الأمن السيبراني أو تطوير البرمجيات اليوم؟"
            },
            services: {
                en: "🚀 Sandex provides AI implementation, cybersecurity, software development, digital transformation, and business analytics services. Would you like specific information about any of these areas?",
                ar: "🚀 تقدم ساندكس خدمات تنفيذ الذكاء الاصطناعي والأمن السيبراني وتطوير البرمجيات والتحول الرقمي وتحليلات الأعمال. هل ترغب في معلومات محددة حول أي من هذه المجالات؟"
            },
            pricing: {
                en: "💰 Our pricing models include fixed-price projects ($8K-$35K), time & material billing, and monthly retainer packages (40+ hours). For a custom quote tailored to your needs, please contact our team at mharty@sandexai.com or call +20 1000066161.",
                ar: "💰 تشمل نماذج التسعير لدينا مشاريع بسعر ثابت (8 آلاف - 35 ألف دولار)، وفواتير الوقت والمواد، وباقات الاشتراك الشهري (40+ ساعة). للحصول على عرض أسعار مخصص يناسب احتياجاتك، يرجى التواصل مع فريقنا على mharty@sandexai.com أو الاتصال على +20 1000066161."
            },
            contact: {
                en: "📞 You can reach Sandex AI through:\n• Email: mharty@sandexai.com or info@sandexai.com\n• Phone: +20 1000066161 (Mohamed Elharty)\n• Locations: Cairo, Egypt (HQ) and Riyadh, Saudi Arabia\nOur team typically responds within 24 hours.",
                ar: "📞 يمكنك التواصل مع ساندكس للذكاء الاصطناعي من خلال:\n• البريد الإلكتروني: mharty@sandexai.com أو info@sandexai.com\n• الهاتف: +20 1000066161 (محمد الحارثي)\n• المواقع: القاهرة، مصر (المقر الرئيسي) والرياض، المملكة العربية السعودية\nعادةً ما يستجيب فريقنا في غضون 24 ساعة."
            },
            company: {
                en: "🏢 Sandex AI (SandexAI & Semicolon LTD) is a leading technology company specializing in AI & digital transformation, with headquarters in Cairo, Egypt and operations in Riyadh, Saudi Arabia. With 250+ completed projects and 98% client satisfaction, we serve government and enterprise clients across the MENA region.",
                ar: "🏢 ساندكس للذكاء الاصطناعي (ساندكس اي اي وسيميكولون المحدودة) هي شركة تكنولوجيا رائدة متخصصة في الذكاء الاصطناعي والتحول الرقمي، مقرها الرئيسي في القاهرة، مصر، ولديها عمليات في الرياض، المملكة العربية السعودية. مع أكثر من 250 مشروعًا مكتملًا و98% رضا العملاء، نخدم العملاء الحكوميين والشركات في جميع أنحاء منطقة الشرق الأوسط وشمال إفريقيا."
            },
            projects: {
                en: "🏆 Our notable projects include the Petrojet HSE mobile app, PMS Marine's digital platform, the Arab Union administrative platform, Ton logistics application, and Toor travel booking system. These projects have achieved 40% faster processing and 25-30% cost savings for our clients.",
                ar: "🏆 تشمل مشاريعنا البارزة تطبيق Petrojet HSE للهاتف المحمول، والمنصة الرقمية لـ PMS Marine، ومنصة الاتحاد العربي الإدارية، وتطبيق Ton للخدمات اللوجستية، ونظام Toor لحجز السفر. حققت هذه المشاريع معالجة أسرع بنسبة 40% وتوفير في التكاليف بنسبة 25-30% لعملائنا."
            },
            technical: {
                en: "💻 At Sandex, we implement AI solutions using Python, TensorFlow, and PyTorch, develop software across multiple platforms with C++, C#, Java, and TypeScript, and provide cybersecurity services including penetration testing and ISO 27001 compliance. Our team holds certifications in CEH, CompTIA Security+, and cloud technologies.",
                ar: "💻 في ساندكس، نقوم بتنفيذ حلول الذكاء الاصطناعي باستخدام Python وTensorFlow وPyTorch، وتطوير البرمجيات عبر منصات متعددة باستخدام C++ وC# وJava وTypeScript، وتقديم خدمات الأمن السيبراني بما في ذلك اختبار الاختراق والامتثال لمعيار ISO 27001. يحمل فريقنا شهادات في CEH وCompTIA Security+ وتقنيات السحابة."
            }
        };
        
        if (responses[bestMatch] && responses[bestMatch][language]) {
            return {
                response: responses[bestMatch][language],
                source: 'intelligent_fallback',
                confidence: 0.75,
                category: bestMatch,
                tokensUsed: 0
            };
        }
        
        return null;
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