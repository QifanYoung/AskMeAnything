// ===== PORTFOLIO CONFIGURATION =====
const CONFIG = {
    // Personal Information
    personal: {
        name: "Qifan (Sam) Yang",
        title: "Data Scientist at EQbank",
        email: "qifan.yang@example.com",
        location: "Toronto, Canada",
        profileImage: "https://via.placeholder.com/150/6366f1/ffffff?text=SY"
    },

    // Skills Data
    skills: [
        "Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn",
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI",
        "Apache Spark", "Kafka", "Docker", "Git", "AWS", "Azure"
    ],

    // Experience Data
    experience: [
        {
            title: "Data Scientist",
            company: "EQbank",
            period: "2022 - Present",
            description: "Leading machine learning initiatives, developing predictive models for risk assessment, and building automated data pipelines for real-time analytics.",
            achievements: [
                "Improved risk assessment model accuracy by 15%",
                "Reduced processing time by 40%",
                "Built real-time analytics pipelines"
            ]
        },
        {
            title: "Data Analyst",
            company: "Previous Company",
            period: "2020 - 2022",
            description: "Data Analyst, Research Assistant, and various roles in data science and analytics across different industries.",
            achievements: [
                "Developed customer segmentation models",
                "Created interactive dashboards",
                "Implemented statistical analysis frameworks"
            ]
        }
    ],

    // Projects Data
    projects: [
        {
            title: "Risk Assessment Models",
            description: "Developed ML models for credit risk assessment, improving accuracy by 15% and reducing processing time by 40%.",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
            impact: "15% accuracy improvement, 40% faster processing",
            color: "rgba(99, 102, 241, 0.1)",
            borderColor: "rgba(99, 102, 241, 0.2)"
        },
        {
            title: "Customer Segmentation",
            description: "Implemented clustering algorithms to segment customers, leading to 25% improvement in targeted marketing campaigns.",
            technologies: ["Python", "K-means", "PCA", "Tableau"],
            impact: "25% marketing campaign improvement",
            color: "rgba(139, 92, 246, 0.1)",
            borderColor: "rgba(139, 92, 246, 0.2)"
        },
        {
            title: "Real-time Analytics",
            description: "Built real-time data processing pipelines using Apache Kafka and Spark, enabling instant insights for business decisions.",
            technologies: ["Apache Kafka", "Spark", "Python", "Docker"],
            impact: "Real-time data processing",
            color: "rgba(6, 182, 212, 0.1)",
            borderColor: "rgba(6, 182, 212, 0.2)"
        }
    ],

    // Chart Data
    chartData: {
        labels: ['Machine Learning', 'Data Analysis', 'Statistical Modeling', 'Data Engineering', 'Visualization'],
        data: [30, 25, 20, 15, 10],
        colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
    },

    // Chatbot Knowledge Base
    chatbotResponses: {
        'experience': 'Qifan has been working as a Data Scientist at EQbank since 2022. He specializes in machine learning, risk assessment models, and building scalable data pipelines.',
        'skills': 'Qifan\'s key skills include Python, R, SQL, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, and various visualization tools like Matplotlib, Seaborn, Tableau, and Power BI.',
        'education': 'Qifan has a strong academic background in data science and statistics, with practical experience in applying machine learning techniques to real-world business problems.',
        'projects': 'Some of Qifan\'s key projects include developing risk assessment models (15% accuracy improvement), customer segmentation (25% marketing improvement), and real-time analytics pipelines.',
        'python': 'Qifan is proficient in Python for data science, using libraries like Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch for machine learning and data analysis.',
        'machine learning': 'Qifan specializes in machine learning, particularly in developing predictive models for risk assessment, customer segmentation, and real-time analytics.',
        'eqbank': 'At EQbank, Qifan works as a Data Scientist developing machine learning models for risk assessment and building automated data pipelines for real-time analytics.',
        'data': 'Qifan works extensively with data analysis, statistical modeling, and building data pipelines. He transforms complex data into actionable business insights.',
        'risk': 'Qifan has developed ML models for credit risk assessment at EQbank, improving accuracy by 15% and reducing processing time by 40%.',
        'analytics': 'Qifan builds real-time analytics solutions and creates interactive dashboards that empower stakeholders to make data-driven decisions.',
        'python': 'Qifan is proficient in Python for data science, using libraries like Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch for machine learning and data analysis.',
        'tensorflow': 'Qifan uses TensorFlow for deep learning projects, particularly in developing neural networks for complex prediction tasks.',
        'pandas': 'Qifan extensively uses Pandas for data manipulation and analysis, creating efficient data processing workflows.',
        'sql': 'Qifan is skilled in SQL for database management and complex query optimization for large datasets.',
        'tableau': 'Qifan creates interactive dashboards using Tableau to visualize complex data insights for stakeholders.',
        'spark': 'Qifan uses Apache Spark for big data processing and building scalable data pipelines.',
        'docker': 'Qifan uses Docker for containerizing applications and ensuring consistent deployment environments.'
    },

    // Default chatbot responses
    defaultResponses: [
        "I'd be happy to tell you more about Qifan's experience! Could you ask about his skills, projects, or work at EQbank?",
        "Qifan is a Data Scientist at EQbank with expertise in machine learning and data analytics. What specific aspect would you like to know more about?",
        "Feel free to ask about Qifan's technical skills, work experience, or specific projects he's worked on!",
        "I can help you learn about Qifan's background in data science, his role at EQbank, or his technical expertise. What interests you?"
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