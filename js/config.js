// ===== PORTFOLIO CONFIGURATION =====
const CONFIG = {
    // Personal Information
    personal: {
        name: "Qifan (Sam) Yang",
        title: "Senior Data Analyst at EQ Bank",
        email: "samqifan.yang@rotman.utoronto.ca",
        phone: "(226)-978-9629",
        location: "Toronto, Canada",
        linkedin: "www.linkedin.com/in/qifan-yang-farm",
        profileImage: "assets/profile.jpg",
        summary: "Data Scientist with +3 years of experience in analytics, automation, machine learning, and AI in the consulting and financial services industry. Successfully developed Gen AI powered chatbots and robotic process automations to optimize businesses."
    },

    // Skills Data - Updated based on actual resume
    skills: [
        // Programming Languages
        "Python", "R", "SQL", "VBA",
        
        // Cloud & ML Platforms
        "Microsoft Azure", "Azure Machine Learning", "Azure AI Fundamentals",
        
        // Data Analysis & ML
        "A/B Testing", "Time Series Analysis", "Predictive Analysis", "NLP", "LLM", 
        "Recommendation Systems", "XGBoost", "Random Forest", "Scikit-learn",
        
        // Business Intelligence
        "Power BI", "Power Query", "Microsoft Fabric", "DOMO",
        
        // Automation & Process
        "Robotic Process Automation", "ETL Pipelines", "Feature Store",
        
        // Financial & Risk
        "Financial Analysis", "Risk Management", "CFA Level II"
    ],

    // Experience Data - Updated with real experience
    experience: [
        {
            title: "Senior Data Analyst",
            company: "EQ Bank",
            department: "Payments, Analytics & Fraud Strategy",
            period: "Feb 2024 – Present",
            location: "Toronto, Canada",
            achievements: [
                "Built a financial product recommendation engine deployed on EQ Bank's secure site and app, leveraging XGBoost Random Forest, which drove an additional $500K/month in GIC sales",
                "Designed a cloud-based workflow on Microsoft Fabric to create a real-time dashboard tracking competitor interest rates, enabling agile product strategy adjustments",
                "Developed a feature store to streamline model building and training, improving efficiency by 30%",
                "Led analytics for Small Business Banking, performing customer 360° analysis (demographics, funding behavior, product usage) to identify growth opportunities",
                "Led marketing campaign A/B test design and impact measurement, optimizing campaign ROI by 25%"
            ]
        },
        {
            title: "Data Science Intern",
            company: "EQ Bank",
            department: "Payments, Analytics & Fraud Strategy",
            period: "Jan 2024 – Feb 2024",
            location: "Toronto, Canada",
            achievements: [
                "Developed a Gen AI-powered chatbot with Microsoft Azure, enhancing customer service with multi-round interactions and 2-second response accuracy",
                "Engineered a vector index using RAG architecture, improving generative AI precision by 90% for enterprise documentation",
                "Leveraged LLMs to categorize customer inquiries, identifying high-frequency questions and potential customer segments"
            ]
        },
        {
            title: "Senior Data and Automation Analyst",
            company: "Ernst & Young",
            period: "Aug 2023 – Jan 2024",
            location: "Toronto, Canada",
            achievements: [
                "Spearheaded robotic process automation for tax processes, achieving 95% time reduction and 80% labor cost cut. Trained teams on automation integration",
                "Automated 40 financial statements for a Canadian pension fund using VBA, reducing manual labor by 2 weeks",
                "Built an ETL pipeline on DOMO for Capital Asset Review, enhancing data analytics capabilities"
            ]
        },
        {
            title: "Junior Data and Automation Analyst",
            company: "Ernst & Young",
            period: "Aug 2021 – Jul 2023",
            location: "Toronto, Canada",
            achievements: [
                "Analyzed payroll data for a Canadian Bank using Power Query and SQL, identifying $6M+ in unclaimed tax benefits"
            ]
        },
        {
            title: "Process and Data Analyst (Co-op)",
            company: "RBC",
            period: "Jan 2020 – Apr 2020",
            location: "Toronto, Canada",
            achievements: [
                "Created a Power BI dashboard for taxation KPIs, reducing analysts' work time by 70%"
            ]
        },
        {
            title: "Business Analyst (Co-op)",
            company: "Scotiabank",
            period: "Sept 2018 – Dec 2018",
            location: "Toronto, Canada",
            achievements: [
                "Developed VBA-powered weekly reports for board-level risk summaries"
            ]
        }
    ],

    // Education Data
    education: [
        {
            degree: "Master of Management Analytics Candidate",
            school: "Rotman School of Management, University of Toronto",
            period: "2024",
            location: "Toronto, Ontario",
            details: "Currently pursuing advanced analytics degree"
        },
        {
            degree: "Honours Bachelor of Mathematics – Distinction",
            school: "University of Waterloo",
            period: "2021",
            location: "Waterloo, Canada",
            major: "Major Financial Analysis & Risk Management, Minor Computing",
            awards: [
                "University of Waterloo President's Scholarship",
                "Sammy Chan Entrance Scholarship in Mathematics",
                "Term Dean's Honours List (2016, 2017, 2020)"
            ]
        }
    ],

    // Certifications
    certifications: [
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

    // Projects Data - Updated with real projects
    projects: [
        {
            title: "Financial Product Recommendation Engine",
            description: "Built a recommendation engine deployed on EQ Bank's secure site and app, leveraging XGBoost Random Forest, which drove an additional $500K/month in GIC sales.",
            technologies: ["Python", "XGBoost", "Random Forest", "Microsoft Azure", "Machine Learning"],
            impact: "$500K/month additional GIC sales",
            color: "rgba(99, 102, 241, 0.1)",
            borderColor: "rgba(99, 102, 241, 0.2)"
        },
        {
            title: "Gen AI-Powered Chatbot",
            description: "Developed a Gen AI-powered chatbot with Microsoft Azure, enhancing customer service with multi-round interactions and 2-second response accuracy.",
            technologies: ["Microsoft Azure", "Gen AI", "LLM", "NLP", "RAG Architecture"],
            impact: "2-second response accuracy, 90% AI precision improvement",
            color: "rgba(139, 92, 246, 0.1)",
            borderColor: "rgba(139, 92, 246, 0.2)"
        },
        {
            title: "Real-time Competitor Dashboard",
            description: "Designed a cloud-based workflow on Microsoft Fabric to create a real-time dashboard tracking competitor interest rates, enabling agile product strategy adjustments.",
            technologies: ["Microsoft Fabric", "Power BI", "Real-time Analytics", "Cloud Platform"],
            impact: "Agile product strategy adjustments",
            color: "rgba(6, 182, 212, 0.1)",
            borderColor: "rgba(6, 182, 212, 0.2)"
        },
        {
            title: "Robotic Process Automation",
            description: "Spearheaded robotic process automation for tax processes, achieving 95% time reduction and 80% labor cost cut.",
            technologies: ["RPA", "VBA", "Automation", "Process Optimization"],
            impact: "95% time reduction, 80% labor cost cut",
            color: "rgba(16, 185, 129, 0.1)",
            borderColor: "rgba(16, 185, 129, 0.2)"
        },
        {
            title: "Manufacturing Partner Performance Prediction",
            description: "Designed a Python & Power BI matrix to optimize manufacturer selection; achieved 85% accuracy with XGBoost time-series analysis.",
            technologies: ["Python", "Power BI", "XGBoost", "Time Series Analysis"],
            impact: "85% accuracy, Top 5 in UofT Datathon",
            color: "rgba(245, 158, 11, 0.1)",
            borderColor: "rgba(245, 158, 11, 0.2)"
        },
        {
            title: "Real Estate Price Prediction",
            description: "Predicted Boston prices using Random Forest (SKlearn), achieving 87% accuracy.",
            technologies: ["Python", "Scikit-learn", "Random Forest", "Machine Learning"],
            impact: "87% accuracy",
            color: "rgba(239, 68, 68, 0.1)",
            borderColor: "rgba(239, 68, 68, 0.2)"
        }
    ],

    // Chart Data - Updated to reflect actual expertise
    chartData: {
        labels: ['Machine Learning & AI', 'Financial Analytics', 'Data Engineering', 'Business Intelligence', 'Process Automation'],
        data: [35, 25, 20, 15, 5],
        colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
    },

    // Chatbot Knowledge Base - Updated with real information
    chatbotResponses: {
        // Personal Information
        'experience': 'Qifan has over 3 years of experience in analytics, automation, machine learning, and AI. He currently works as a Senior Data Analyst at EQ Bank, and previously worked at Ernst & Young, RBC, and Scotiabank.',
        'skills': 'Qifan\'s key skills include Python, R, SQL, Microsoft Azure, A/B Testing, Time Series Analysis, Predictive Analysis, NLP, LLM, Recommendation Systems, Power BI, Power Query, Microsoft Fabric, and Robotic Process Automation.',
        'education': 'Qifan is currently pursuing a Master of Management Analytics at Rotman School of Management, University of Toronto. He holds an Honours Bachelor of Mathematics from University of Waterloo with distinction, majoring in Financial Analysis & Risk Management with a minor in Computing.',
        'projects': 'Qifan\'s key projects include building a financial product recommendation engine that drove $500K/month in GIC sales, developing a Gen AI-powered chatbot with 2-second response accuracy, and creating real-time competitor dashboards.',
        
        // Technical Skills
        'python': 'Qifan is proficient in Python for data science, using libraries like XGBoost, Random Forest, Scikit-learn for machine learning, predictive analysis, and recommendation systems.',
        'machine learning': 'Qifan specializes in machine learning, particularly in developing recommendation engines, predictive models, and time series analysis. He has achieved 85-90% accuracy in various ML projects.',
        'ai': 'Qifan has extensive experience with AI, including developing Gen AI-powered chatbots, implementing RAG architecture, and working with LLMs for customer inquiry categorization.',
        'azure': 'Qifan is certified in Microsoft Azure AI Fundamentals and Azure Data Scientist Associate. He uses Azure for machine learning, Gen AI development, and cloud-based workflows.',
        'sql': 'Qifan is skilled in SQL for database management, data analysis, and query optimization. He has used SQL for payroll analysis, identifying $6M+ in unclaimed tax benefits.',
        'power bi': 'Qifan creates interactive dashboards using Power BI for data visualization, KPIs tracking, and business intelligence. He has reduced analysts\' work time by 70% through Power BI dashboards.',
        'rpa': 'Qifan has spearheaded robotic process automation projects, achieving 95% time reduction and 80% labor cost cuts. He has automated 40 financial statements and trained teams on automation integration.',
        
        // Work Experience
        'eqbank': 'At EQ Bank, Qifan works as a Senior Data Analyst in Payments, Analytics & Fraud Strategy. He built a recommendation engine driving $500K/month in GIC sales, developed Gen AI chatbots, and created real-time competitor dashboards.',
        'ey': 'At Ernst & Young, Qifan worked as a Senior Data and Automation Analyst, spearheading RPA projects that achieved 95% time reduction and 80% labor cost cuts. He also automated 40 financial statements and built ETL pipelines.',
        'rbc': 'At RBC, Qifan worked as a Process and Data Analyst, creating Power BI dashboards for taxation KPIs that reduced analysts\' work time by 70%.',
        'scotiabank': 'At Scotiabank, Qifan worked as a Business Analyst, developing VBA-powered weekly reports for board-level risk summaries.',
        
        // Projects
        'recommendation': 'Qifan built a financial product recommendation engine at EQ Bank using XGBoost Random Forest, which drove an additional $500K/month in GIC sales.',
        'chatbot': 'Qifan developed a Gen AI-powered chatbot with Microsoft Azure, achieving 2-second response accuracy and improving AI precision by 90% using RAG architecture.',
        'dashboard': 'Qifan designed a cloud-based workflow on Microsoft Fabric to create a real-time dashboard tracking competitor interest rates, enabling agile product strategy adjustments.',
        'automation': 'Qifan spearheaded robotic process automation for tax processes at EY, achieving 95% time reduction and 80% labor cost cut.',
        
        // Education & Certifications
        'rotman': 'Qifan is currently pursuing a Master of Management Analytics at Rotman School of Management, University of Toronto.',
        'waterloo': 'Qifan holds an Honours Bachelor of Mathematics from University of Waterloo with distinction, majoring in Financial Analysis & Risk Management with a minor in Computing.',
        'certifications': 'Qifan holds Microsoft Azure AI Fundamentals (2023), Microsoft Azure Data Scientist Associate (2023), and is a CFA Level II Candidate (2019).',
        
        // Financial & Risk
        'financial': 'Qifan has a strong background in financial analysis and risk management, with experience in GIC sales optimization, customer 360° analysis, and board-level risk summaries.',
        'risk': 'Qifan has experience in risk management through his work at financial institutions, including fraud strategy, customer analysis, and risk assessment.',
        'analytics': 'Qifan builds real-time analytics solutions and creates interactive dashboards that empower stakeholders to make data-driven decisions.',
        
        // Industry Experience
        'banking': 'Qifan has extensive experience in the banking industry, working at EQ Bank, RBC, and Scotiabank in various analytical and automation roles.',
        'consulting': 'Qifan worked at Ernst & Young as a data and automation analyst, focusing on process optimization and cost reduction through automation.',
        'consulting': 'Qifan worked at Ernst & Young as a data and automation analyst, focusing on process optimization and cost reduction through automation.'
    },

    // Default chatbot responses - Updated
    defaultResponses: [
        "I'd be happy to tell you more about Qifan's experience! He's a Senior Data Analyst at EQ Bank with expertise in machine learning, AI, and financial analytics. What specific aspect would you like to know more about?",
        "Qifan has over 3 years of experience in analytics, automation, machine learning, and AI. He currently works at EQ Bank and has worked at Ernst & Young, RBC, and Scotiabank. What interests you?",
        "Feel free to ask about Qifan's technical skills, work experience at EQ Bank or EY, or his projects like the recommendation engine or Gen AI chatbot!",
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