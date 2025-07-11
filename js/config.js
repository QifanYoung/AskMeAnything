// ===== PORTFOLIO CONFIGURATION =====
const CONFIG = {
    // Personal Information
    personal: {
        name: "Qifan (Sam) Yang",
        title: "Senior Data Analyst, Advanced Analytics and Insights at EQ Bank",
        email: "yqf19971124@gmail.com",
        phone: "(226)-978-9629",
        location: "Toronto, Canada",
        linkedin: "www.linkedin.com/in/qifan-yang-farm",
        profileImage: "assets/profile.jpg",
        summary: "Data Scientist with 3+ years of experience in analytics, automation, machine learning, and AI in consulting and financial services. Successfully developed Gen AI powered chatbots and robotic process automations to optimize businesses."
    },

    // Skills Data
    skills: [
        // Programming Languages
        "Python", "Pyspark", "SQL", "R", "VBA",
        // Cloud & ML Platforms
        "Microsoft Azure Machine Learning", "Microsoft Fabric", "Azure AI Fundamentals",
        // Data Science & ML
        "NLP", "LLM", "Recommendation system", "A/B Testing", "Time Series Analysis", "Predictive Analysis",
        // ML Libraries
        "XGBoost", "Random Forest", "Scikit-learn",
        // BI & Automation
        "Power BI", "Power Query", "Alteryx", "Robotic Process Automation", "ETL Pipeline",
        // Other
        "Feature Store", "Financial Analysis", "Risk Management"
    ],

    // Experience Data
    experience: [
        {
            title: "Senior Data Analyst, Advanced Analytics and Insights",
            company: "EQ Bank",
            period: "Sept 2024 – Present",
            location: "Toronto, Canada",
            achievements: [
                "Designed and deployed a GenAI-powered chatbot using Microsoft Azure ML Studio Prompt Flow with a custom UI, reducing customer response time to less than 2 seconds and answering general FAQs about financial products.",
                "Engineered a vector index for enterprise documentation utilizing Retrieval-Augmented Generation (RAG) architecture, which enhanced the precision of generative AI with enterprise-specific content by 90%.",
                "Designed and implemented a Next Best Product recommendation engine integrated into the EQ Bank mobile app, resulting in $500K/month in incremental GIC sales.",
                "Built a Microsoft Fabric/Power BI self-serve analytics platform for financial metrics (balances, transactions, holdings), enabling data-driven decisions.",
                "Created a cloud-based web scraping pipeline to monitor competitor GIC and savings rates in real-time; visualized data on a dynamic dashboard to support competitive pricing strategy.",
                "Led marketing campaign experiments by designing A/B tests and causal inference impact analysis, resulting in 3 successful campaigns that brought in over $70M in deposits.",
                "Engineered a central feature store on Fabric's data warehouse, generating 200+ features to support ML model development and enable targeted marketing campaign execution.",
                "Spearheaded the Small Business Banking analytics stream, delivering in-depth insights on customer demographics, funding behavior, and transactional patterns.",
                "Analyzed over 20 million customer activity records using PySpark, uncovering behavioral trends and demonstrating activity data’s predictive power."
            ]
        },
        {
            title: "Data Science Intern, Payments, Analytics & Fraud Strategy",
            company: "EQ Bank",
            period: "Jan 2024 – Jun 2024",
            location: "Toronto, Canada",
            achievements: [
                "Developed a Gen AI-powered chatbot with Microsoft Azure using EQBank's proprietary documentation, enhanced customer service with multi-round interaction capabilities and delivered accurate responses within 2 seconds.",
                "Engineered a vector index for enterprise documentation utilizing Retrieval-Augmented Generation (RAG) architecture, which enhanced the precision of generative AI with enterprise-specific content by 90%.",
                "Leveraged Large Language Models (LLM) to accurately categorize customer inquiries into predefined segments, assisted EQBank in pinpointing frequently asked questions and identifying prospective customer segments.",
                "Implemented a recommendation engine in Python that leverages XGBoost Random Forest to enhance personalization in financial product recommendations, achieved 94% of model accuracy."
            ]
        },
        {
            title: "Senior Data and Automation Analyst",
            company: "Ernst & Young",
            period: "Aug 2023 – Jan 2024",
            location: "Toronto, Canada",
            achievements: [
                "Spearheaded robotic process automation implementation for tax processes, achieving a 95% time reduction and an 80% cut in labor costs. Led training program for seamless team integration of automation technologies.",
                "Automated production and delivery of 40 financial statements by leveraging a VBA tool for a Canadian pension fund, eliminated manual workflows thereby reducing labor by 2 weeks.",
                "Developed and maintained an ETL pipeline for Capital Asset Review on the DOMO Business Cloud platform, enhancing data management and analytics capabilities."
            ]
        },
        {
            title: "Junior Data and Automation Analyst",
            company: "Ernst & Young",
            period: "Aug 2021 – Jul 2023",
            location: "Toronto, Canada",
            achievements: [
                "Analyzed payroll of a Canadian Bank to identify over $6 million in unclaimed tax benefits using Power Query and SQL."
            ]
        },
        {
            title: "Process and Data Analyst (Co-op)",
            company: "RBC",
            period: "Jan 2020 – Apr 2020",
            location: "Toronto, Canada",
            achievements: [
                "Created a Power BI dashboard to visualize the core KPI for taxation group, quantified the tax filing process to reduce 70% of analysts’ work time and facilitate the decision-making process."
            ]
        },
        {
            title: "Business Analyst (Co-op)",
            company: "Scotiabank",
            period: "Sept 2018 – Dec 2018",
            location: "Toronto, Canada",
            achievements: [
                "Created weekly project progress reports using VBA and delivered risk summary to the board of directors."
            ]
        }
    ],

    // Education Data
    education: [
        {
            degree: "Master of Management Analytics – Distinction",
            school: "Rotman School of Management, University of Toronto",
            period: "2024",
            location: "Toronto, Canada",
            details: "Graduated with Distinction."
        },
        {
            degree: "Honours Bachelor of Mathematics – Distinction",
            school: "University of Waterloo",
            period: "2021",
            location: "Waterloo, Canada",
            major: "Major Financial Analysis & Risk Management, Minor Computing",
            awards: [
                "University of Waterloo President’s Scholarship",
                "Sammy Chan Entrance Scholarship in Mathematics",
                "Term Dean’s Honours List (2016, 2017, 2020)"
            ]
        }
    ],

    // Certifications
    certifications: [
        {
            name: "Back-End Development Framework and Architecture",
            year: "2025",
            issuer: "University of Waterloo"
        },
        {
            name: "Big Data Management Tools and System",
            year: "2025",
            issuer: "University of Waterloo"
        },
        {
            name: "Microsoft Azure AI Fundamentals",
            year: "2023",
            issuer: "Microsoft"
        },
        {
            name: "Microsoft Azure Data Scientist Associate",
            year: "2023",
            issuer: "Microsoft"
        },
        {
            name: "CFA Level II Candidate",
            year: "2019",
            issuer: "CFA Institute"
        }
    ],

    // Projects Data
    projects: [
        {
            title: "Agentic AI - Social Media Data Collection and Analysis",
            description: "Built an AI workflow agent using n8n to automate web scraping and social media data collection. This tool captured competitor promotions and industry trends to inform EQ Bank's pricing strategy dynamically.",
            technologies: ["n8n", "Web Scraping", "Automation", "Social Media Analytics"],
            impact: "Enabled dynamic pricing strategy at EQ Bank",
            color: "rgba(99, 102, 241, 0.1)",
            borderColor: "rgba(99, 102, 241, 0.2)"
        },
        {
            title: "Top 5 - Predicting Performance of Manufacturing Partner (UofT Datathon)",
            description: "Designed a selection and justification matrix using Python & Power BI to identify optimal manufacturer. Predicted future performance of manufacturer using Time Series Analysis by XGBoost, achieved 85% model accuracy.",
            technologies: ["Python", "Power BI", "XGBoost", "Time Series Analysis"],
            impact: "85% accuracy, Top 5 in UofT Datathon",
            color: "rgba(245, 158, 11, 0.1)",
            borderColor: "rgba(245, 158, 11, 0.2)"
        },
        {
            title: "Real Estate Price Prediction",
            description: "Predicted Boston real estate prices using Random Forest model by SKlearn, achieved 87% model accuracy.",
            technologies: ["Python", "Scikit-learn", "Random Forest", "Machine Learning"],
            impact: "87% accuracy",
            color: "rgba(239, 68, 68, 0.1)",
            borderColor: "rgba(239, 68, 68, 0.2)"
        },
        {
            title: "Advertisement Click Through Rate Prediction",
            description: "Designed and built a predictive model using Random Forest to accurately forecast CTR for sponsored search and real-time bidding campaigns, achieved 90% of accuracy.",
            technologies: ["Python", "Random Forest", "CTR Prediction", "Digital Marketing"],
            impact: "90% accuracy in CTR prediction",
            color: "rgba(16, 185, 129, 0.1)",
            borderColor: "rgba(16, 185, 129, 0.2)"
        }
    ],

    // Chart Data
    chartData: {
        labels: ['Machine Learning & AI', 'Financial Analytics', 'Data Engineering', 'Business Intelligence', 'Process Automation'],
        data: [35, 25, 20, 15, 5],
        colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
    },

    // Chatbot Knowledge Base
    chatbotResponses: {
        // Personal Information
        'experience': 'Qifan (Sam) Yang is a Data Scientist with 3+ years of experience in analytics, automation, machine learning, and AI in consulting and financial services. He currently works as a Senior Data Analyst at EQ Bank, and previously worked at Ernst & Young, RBC, and Scotiabank.',
        'skills': 'Qifan’s key skills include Python, SQL, R, Microsoft Azure Machine Learning, NLP, LLM, Recommendation systems, A/B Testing, Time Series Analysis, Predictive Analysis, Power BI, Power Query, Microsoft Fabric, Alteryx, and Robotic Process Automation.',
        'education': 'Qifan graduated with Distinction from the Rotman School of Management, University of Toronto (Master of Management Analytics, 2024) and University of Waterloo (Honours Bachelor of Mathematics, 2021).',
        'projects': 'Qifan’s key projects include building GenAI-powered chatbots, recommendation engines, and dynamic analytics platforms for EQ Bank, as well as top-performing solutions in datathons and predictive modeling competitions.',
        // Technical Skills
        'python': 'Qifan is proficient in Python for data science, using libraries like XGBoost, Random Forest, and Scikit-learn for machine learning, predictive analysis, and recommendation systems.',
        'machine learning': 'Qifan specializes in machine learning, particularly in developing recommendation engines, predictive models, and time series analysis. He has achieved 85-94% accuracy in various ML projects.',
        'ai': 'Qifan has extensive experience with AI, including developing GenAI-powered chatbots, implementing RAG architecture, and working with LLMs for customer inquiry categorization.',
        'azure': 'Qifan is certified in Microsoft Azure AI Fundamentals and Azure Data Scientist Associate. He uses Azure for machine learning, GenAI development, and cloud-based workflows.',
        'sql': 'Qifan is skilled in SQL for database management, data analysis, and query optimization. He has used SQL for payroll analysis, identifying $6M+ in unclaimed tax benefits.',
        'power bi': 'Qifan creates interactive dashboards using Power BI for data visualization, KPIs tracking, and business intelligence. He has reduced analysts’ work time by 70% through Power BI dashboards.',
        'rpa': 'Qifan has spearheaded robotic process automation projects, achieving 95% time reduction and 80% labor cost cuts. He has automated 40 financial statements and trained teams on automation integration.',
        // Work Experience
        'eqbank': 'At EQ Bank, Qifan works as a Senior Data Analyst, designing GenAI-powered chatbots, recommendation engines, and analytics platforms that drive business impact.',
        'ey': 'At Ernst & Young, Qifan worked as a Senior Data and Automation Analyst, spearheading RPA projects, automating financial statements, and building ETL pipelines.',
        'rbc': 'At RBC, Qifan worked as a Process and Data Analyst, creating Power BI dashboards for taxation KPIs that reduced analysts’ work time by 70%.',
        'scotiabank': 'At Scotiabank, Qifan worked as a Business Analyst, creating weekly project progress reports and risk summaries for the board of directors.',
        // Projects
        'recommendation': 'Qifan designed and implemented a Next Best Product recommendation engine at EQ Bank, resulting in $500K/month in incremental GIC sales.',
        'chatbot': 'Qifan developed GenAI-powered chatbots using Microsoft Azure ML Studio Prompt Flow, reducing customer response time to less than 2 seconds and answering FAQs about financial products.',
        'dashboard': 'Qifan built dynamic analytics dashboards using Microsoft Fabric and Power BI, enabling real-time monitoring of financial metrics and competitor rates.',
        'automation': 'Qifan led robotic process automation at EY, achieving 95% time reduction and 80% labor cost cut for tax processes.',
        // Education & Certifications
        'rotman': 'Qifan graduated with Distinction from the Rotman School of Management, University of Toronto (Master of Management Analytics, 2024).',
        'waterloo': 'Qifan holds an Honours Bachelor of Mathematics from University of Waterloo with Distinction, majoring in Financial Analysis & Risk Management, minoring in Computing.',
        'certifications': 'Qifan holds certifications in Back-End Development Framework and Architecture (2025), Big Data Management Tools and System (2025), Microsoft Azure AI Fundamentals (2023), Microsoft Azure Data Scientist Associate (2023), and is a CFA Level II Candidate (2019).',
        // Financial & Risk
        'financial': 'Qifan has a strong background in financial analysis and risk management, with experience in GIC sales optimization, customer analytics, and board-level risk summaries.',
        'risk': 'Qifan has experience in risk management through his work at financial institutions, including fraud strategy, customer analysis, and risk assessment.',
        'analytics': 'Qifan builds real-time analytics solutions and creates interactive dashboards that empower stakeholders to make data-driven decisions.',
        // Industry Experience
        'banking': 'Qifan has extensive experience in the banking industry, working at EQ Bank, RBC, and Scotiabank in various analytical and automation roles.',
        'consulting': 'Qifan worked at Ernst & Young as a data and automation analyst, focusing on process optimization and cost reduction through automation.'
    },

    // Default chatbot responses
    defaultResponses: [
        "I'd be happy to tell you more about Qifan's experience! He's a Senior Data Analyst at EQ Bank with expertise in GenAI, machine learning, analytics, and automation. What would you like to know more about?",
        "Qifan has 3+ years of experience in analytics, automation, machine learning, and AI. He currently works at EQ Bank and has worked at Ernst & Young, RBC, and Scotiabank. What interests you?",
        "Feel free to ask about Qifan's technical skills, work experience at EQ Bank or EY, or his projects like GenAI chatbots, recommendation engines, or analytics dashboards!",
        "I can help you learn about Qifan's background in data science, his role at EQ Bank, his education at Rotman and Waterloo, or his technical expertise. What would you like to know?"
    ],

    // Animation Settings
    animations: {
        particleCount: 9,
        particleAnimationDuration: 6,
        typingSpeed: 1000,
        chartAnimationDuration: 2000
    },

    // API Endpoints (for future backend integration)
    api: {
        baseUrl: 'https://api.example.com',
        endpoints: {
            chat: '/chat',
            analytics: '/analytics',
            contact: '/contact'
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 
