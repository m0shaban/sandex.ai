// ========== FALLBACK RESPONSES & SCENARIOS ==========

const FALLBACK_RESPONSES = {
    // Diplomatic responses when API is unavailable
    diplomatic: {
        apiUnavailable: [
            "I understand you're looking for information about {topic}. As SandexAI, we're proud to share our expertise in this area.",
            "Let me share what I know about {topic} based on our extensive experience at SandexAI.",
            "I'd be glad to discuss {topic} with you. At SandexAI, we specialize in delivering comprehensive solutions in this field.",
            "While I'm operating in a more focused capacity right now, I can certainly help you with information about {topic} based on our company's expertise.",
            "I'm here to assist you with {topic}. As a pioneer in software engineering and AI solutions, we have valuable insights to share."
        ],
        fallbackOptions: [
            "Would you like to know more about our {service} offerings?",
            "I can provide detailed information about {topic}. Would that be helpful?",
            "Let me suggest some related services that might interest you...",
            "I can help you explore our {service} capabilities. Would you like to know more?",
            "Here are some related topics you might find interesting..."
        ]
    },

    // Emergency fallback responses
    emergency: {
        noMatch: [
            "I appreciate your question. To ensure I provide you with the most accurate information, could you please rephrase your question or let me know which of our services you're interested in?",
            "Thank you for your inquiry. To better assist you, could you please provide more details or ask about our specific services? I'm here to help with any information about SandexAI.",
            "I want to make sure I understand your needs perfectly. Could you please clarify your question or let me know which aspect of our services you'd like to learn more about?",
            "Your question is important to us. To provide you with the most relevant information, could you please specify which of our services or areas you're interested in?",
            "I'm here to help you find the information you need. Could you please rephrase your question or let me know which of our services you'd like to explore?"
        ],
        error: [
            "I'm currently operating in a more focused mode to ensure the highest quality of service. I'd be happy to help you with information about our services, projects, or how to contact us.",
            "To provide you with the most accurate information, I'm currently operating in a specialized mode. I can assist you with details about our services, technology stack, or company information.",
            "I'm here to help you with comprehensive information about SandexAI. Would you like to know about our services, projects, or how to reach us?",
            "I'm currently optimizing my responses to better serve you. I can provide detailed information about our services, technology expertise, or company details.",
            "I'm operating in an enhanced mode to ensure you receive the most relevant information. Would you like to learn about our services, projects, or contact details?"
        ],
        timeout: [
            "I'm taking a moment to ensure I provide you with the most accurate information. In the meantime, I can tell you about our services or help you with contact information.",
            "To give you the best possible response, I'm currently processing your request. Would you like to know about our services or how to reach us?",
            "I'm carefully considering your question to provide the most relevant information. I can share details about our services or help you with contact information.",
            "I'm taking a brief moment to ensure I give you the most comprehensive answer. Would you like to learn about our services or how to contact us?",
            "I'm currently optimizing my response to better assist you. I can provide information about our services or help you with contact details."
        ],
        apiError: [
            "I'm currently operating in an enhanced mode to ensure you receive the most relevant information. I can help you with details about our services, projects, or company information.",
            "To provide you with the best possible assistance, I'm operating in a specialized mode. Would you like to know about our services, technology stack, or how to contact us?",
            "I'm here to help you with comprehensive information about SandexAI. I can share details about our services, projects, or contact information.",
            "I'm currently optimizing my responses to better serve you. Would you like to learn about our services, technology expertise, or company details?",
            "I'm operating in an enhanced mode to ensure you receive the most accurate information. I can assist you with information about our services, projects, or contact details."
        ]
    },

    // Additional diplomatic responses for specific scenarios
    specificScenarios: {
        technical: [
            "I understand you're interested in our technical capabilities. Let me share what I know about our technology stack and expertise.",
            "I'd be happy to discuss our technical solutions. We specialize in AI, cybersecurity, and software engineering.",
            "Let me tell you about our technical expertise. We work with cutting-edge technologies including AI, cloud platforms, and cybersecurity."
        ],
        projects: [
            "I'd be glad to share information about our projects. We've successfully delivered solutions for various industries.",
            "Let me tell you about our project portfolio. We've worked with major clients in different sectors.",
            "I can share details about our projects. We have extensive experience in delivering complex solutions."
        ],
        pricing: [
            "I understand you're interested in our pricing. Let me explain our engagement models and how they can benefit you.",
            "I'd be happy to discuss our pricing structure. We offer flexible models to meet different needs.",
            "Let me share information about our pricing options. We have various models to suit different project requirements."
        ],
        contact: [
            "I'd be glad to help you with contact information. We have offices in Cairo and Riyadh.",
            "Let me provide you with our contact details. We're available through multiple channels.",
            "I can share our contact information. We're here to assist you through various communication channels."
        ]
    },

    // Quick action responses
    quickActions: {
        services: "Here are our main services:\n1. Digital Services (Data Analysis, Custom Software Development, Consulting)\n2. Business Analysis (Market Research, Process Optimization)\n3. Product Improvement (Product Assessment, UX/UI Design)\n4. Digital Strategy (Digital Transformation, Content Strategy)\n5. Marketing Intelligence (Market Research, Customer Insights)\n6. Content Creation & SEO (Content Strategy, SEM Strategies)",
        contact: "You can reach us at:\n- Phone: +20 1000066161\n- Email: mharty@sandexai.com\n- Alternate Email: info@sandexai.com\n- Address: New Cairo - 5th Settlement, Egypt\n- Operations: Cairo, Egypt (HQ) | Riyadh, Saudi Arabia",
        help: "I can help you with information about:\n- Our comprehensive services portfolio\n- Contact details and office locations\n- Technology stack and expertise\n- Major projects and case studies\n- Engagement models and pricing\nJust let me know what you'd like to know!",
        pricing: "We offer three engagement models:\n1. Fixed Price Projects: Well-defined modules with clear scope\n2. Time & Material: Flexible scope for R&D projects\n3. Retainer Packages: Starting at 40 hours/month\nWould you like to know more about any specific model?",
        projects: "Our major projects include:\n1. Petrojet Projects (Mobile HSE App, Corporate Website)\n2. PMS Petroleum Marine Services\n3. Arab Union for Administrative Industry\n4. Ton Application\n5. Toor Travel\nWould you like details about any specific project?",
        partners: "Our strategic partners include:\n- Egyptian Ministry of Communications and Information Technology\n- Ministry of Interior (Egypt)\n- Holding Company for Water and Wastewater\n- Holy Mosques Agency (Medina)\n- Egyptian Interior Ministry\n- Administrative Prosecution\n- Nile Tech University",
        technical: "Our technical expertise includes:\n- AI & Machine Learning Solutions\n- Cybersecurity Services\n- Cloud Platform Integration\n- DevOps Implementation\n- Software Engineering\nWould you like to know more about any specific area?",
        expertise: "Our core expertise areas:\n1. Legacy System Modernization\n2. AI Integration\n3. Multi-platform Development\n4. Scalable Digital Platforms\n5. Mission-critical Applications\nWhich area interests you most?",
        certifications: "Our team holds various certifications:\n- CEH (Certified Ethical Hacker)\n- CompTIA Security+\n- TensorFlow Developer\n- Industry-recognized technical certifications\nWould you like to know more about our expertise?",
        methodology: "Our development methodology includes:\n- Agile: 2-week sprints with daily standups\n- DevOps Pipeline: Automated testing and deployment\n- Quality Gates: Security and code quality checks\n- Documentation: Confluence, GitBook, Swagger\nWould you like details about any specific aspect?"
    },

    // Keyboard shortcuts
    keyboardShortcuts: {
        services: "Press 'S' for Services Overview",
        contact: "Press 'C' for Contact Information",
        help: "Press 'H' for Help Menu",
        pricing: "Press 'P' for Pricing Models",
        projects: "Press 'J' for Major Projects",
        partners: "Press 'T' for Strategic Partners",
        about: "Press 'A' for Company Overview"
    },

    // Related topics mapping
    relatedTopics: {
        "digital services": ["data analysis", "software development", "cloud services", "business intelligence", "consulting services"],
        "business analysis": ["market research", "process optimization", "financial analysis", "strategic planning", "data analytics"],
        "product improvement": ["product assessment", "software development", "ux/ui design", "consulting services", "testing and quality assurance"],
        "digital strategy": ["digital transformation", "content strategy", "seo and sem", "web development", "social media management"],
        "marketing intelligence": ["market research", "customer insights", "competitive intelligence", "data analytics", "digital marketing optimization"],
        "content creation": ["content strategy", "seo services", "social media management", "blog posts", "website copy"],
        "technology": ["ai solutions", "cybersecurity", "cloud platforms", "devops", "software engineering"],
        "projects": ["petrojet", "pms", "arab union", "ton application", "toor travel"],
        "partners": ["government", "energy", "financial services", "healthcare", "education"]
    }
};

// ========== FALLBACK SCENARIOS ==========

const FALLBACK_SCENARIOS = {
    // Common user intents and their fallback responses
    intents: {
        pricing: {
            response: "Our pricing varies based on the service and project scope. We offer three engagement models:\n1. Fixed Price Projects: Well-defined modules with clear scope\n2. Time & Material: Flexible scope for R&D projects\n3. Retainer Packages: Starting at 40 hours/month\nWould you like to know more about any specific pricing model?",
            suggestions: ["Fixed Price Projects", "Time & Material", "Retainer Packages"]
        },
        services: {
            response: "We offer comprehensive services including:\n1. Digital Services (Data Analysis, Custom Software Development)\n2. Business Analysis (Market Research, Process Optimization)\n3. Product Improvement (Product Assessment, UX/UI Design)\n4. Digital Strategy (Digital Transformation, Content Strategy)\n5. Marketing Intelligence (Market Research, Customer Insights)\n6. Content Creation & SEO (Content Strategy, SEM Strategies)\nWhich area would you like to learn more about?",
            suggestions: ["Digital Services", "Business Analysis", "Product Improvement", "Digital Strategy", "Marketing Intelligence", "Content Creation"]
        },
        contact: {
            response: "You can reach us through multiple channels:\n- Phone: +20 1000066161\n- Email: mharty@sandexai.com\n- Alternate Email: info@sandexai.com\n- Address: New Cairo - 5th Settlement, Egypt\n- Operations: Cairo, Egypt (HQ) | Riyadh, Saudi Arabia\nWould you like to know more about our office locations or contact methods?",
            suggestions: ["Office Locations", "Contact Methods", "Business Hours"]
        },
        projects: {
            response: "Our major projects include:\n1. Petrojet Projects (Mobile HSE App, Corporate Website)\n2. PMS Petroleum Marine Services\n3. Arab Union for Administrative Industry\n4. Ton Application\n5. Toor Travel\nWould you like details about any specific project?",
            suggestions: ["Petrojet Projects", "PMS", "Arab Union", "Ton Application", "Toor Travel"]
        },
        partners: {
            response: "Our strategic partners include:\n- Egyptian Ministry of Communications and Information Technology\n- Ministry of Interior (Egypt)\n- Holding Company for Water and Wastewater\n- Holy Mosques Agency (Medina)\n- Egyptian Interior Ministry\n- Administrative Prosecution\n- Nile Tech University\nWould you like to know more about our partnerships?",
            suggestions: ["Government Partners", "Industry Partners", "Academic Partners"]
        },
        technology: {
            response: "Our technology stack includes:\n- Programming Languages: C++, Python, C#, TypeScript, Java\n- Core Technologies: AI & Machine Learning, Cybersecurity, Software Engineering\n- Cloud Platforms: AWS, Azure, Google Cloud\n- DevOps: GitLab CI, Jenkins, SonarQube, Helm\nWould you like to know more about any specific technology?",
            suggestions: ["AI & Machine Learning", "Cybersecurity", "Cloud Platforms", "DevOps"]
        }
    },

    // Error handling scenarios
    errorHandling: {
        apiTimeout: {
            response: "I'm currently experiencing a slight delay in processing your request. Let me help you with what I know about {topic}.",
            fallback: "In the meantime, I can tell you about our services or help you with contact information."
        },
        apiError: {
            response: "I'm operating in a more focused mode right now. I can still help you with information about our services and company.",
            fallback: "Would you like to know about our services or how to contact us?"
        },
        noMatch: {
            response: "I want to make sure I understand your question correctly. Could you please rephrase it or ask about our services?",
            fallback: "I can help you with information about our services, contact details, or specific topics."
        }
    }
};

// Export the fallback responses and scenarios
export { FALLBACK_RESPONSES, FALLBACK_SCENARIOS }; 