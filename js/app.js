// ===== MAIN APPLICATION =====

class PortfolioApp {
    constructor() {
        this.isInitialized = false;
        this.currentSection = 'home';
        this.animations = {
            particles: null,
            scrollAnimations: null
        };
        
        this.init();
    }

    // Initialize the application
    async init() {
        try {
            await this.waitForDOM();
            this.setupEventListeners();
            this.initializeComponents();
            this.createParticles();
            this.populateContent();
            this.setupAnimations();
            this.handleInitialLoad();
            
            this.isInitialized = true;
            console.log('Portfolio application initialized successfully');
            
        } catch (error) {
            console.error('Error initializing portfolio app:', error);
            Utils.handleError(error, 'PortfolioApp.init');
        }
    }

    // Wait for DOM to be ready
    waitForDOM() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    // Setup global event listeners
    setupEventListeners() {
        // Window events
        window.addEventListener('resize', Utils.debounce(() => {
            this.handleResize();
        }, 250));

        window.addEventListener('scroll', Utils.throttle(() => {
            this.handleScroll();
        }, 100));

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // Performance monitoring
        window.addEventListener('load', () => {
            this.measurePerformance();
        });
    }

    // Initialize all components
    initializeComponents() {
        // Initialize charts
        if (typeof chartManager !== 'undefined') {
            chartManager.initCharts();
        }

        // Initialize chatbot (already done in chatbot.js)
        if (typeof chatbot !== 'undefined') {
            console.log('Chatbot initialized');
        }

        // Initialize any other components here
        this.initializeSkillsGrid();
        this.initializeProjectsGrid();
    }

    // Create animated particles
    createParticles() {
        const particlesContainer = Utils.getElementById('particlesContainer');
        if (!particlesContainer) return;

        const particleCount = CONFIG.animations.particleCount;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = Utils.createElement('div', 'particle');
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * CONFIG.animations.particleAnimationDuration + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    // Populate dynamic content
    populateContent() {
        this.populateSkills();
        this.populateProjects();
        this.updatePersonalInfo();
    }

    // Populate skills grid
    populateSkills() {
        const skillsGrid = Utils.getElementById('skillsGrid');
        if (!skillsGrid) return;

        const skills = CONFIG.skills;
        skillsGrid.innerHTML = '';

        skills.forEach(skill => {
            const skillItem = Utils.createElement('div', 'skill-item');
            skillItem.textContent = skill;
            
            // Add hover effect
            skillItem.addEventListener('mouseenter', () => {
                Utils.addClass(skillItem, 'skill-hover');
            });
            
            skillItem.addEventListener('mouseleave', () => {
                Utils.removeClass(skillItem, 'skill-hover');
            });

            skillsGrid.appendChild(skillItem);
        });
    }

    // Populate projects grid
    populateProjects() {
        const projectsGrid = Utils.getElementById('projectsGrid');
        if (!projectsGrid) return;

        const projects = CONFIG.projects;
        projectsGrid.innerHTML = '';

        projects.forEach(project => {
            const projectCard = Utils.createElement('div', 'project-card');
            projectCard.style.background = project.color;
            projectCard.style.border = `1px solid ${project.borderColor}`;
            
            projectCard.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="project-technologies">
                    <strong>Technologies:</strong> ${project.technologies.join(', ')}
                </div>
                <div class="project-impact">
                    <strong>Impact:</strong> ${project.impact}
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });
    }

    // Update personal information
    updatePersonalInfo() {
        const profileImage = Utils.getElementById('profileImage');
        if (profileImage && CONFIG.personal.profileImage) {
            profileImage.src = CONFIG.personal.profileImage;
        }
    }

    // Initialize skills grid with animations
    initializeSkillsGrid() {
        const skillItems = Utils.getElements('.skill-item');
        skillItems.forEach((item, index) => {
            // Stagger animation
            item.style.animationDelay = `${index * 0.1}s`;
            Utils.addClass(item, 'fade-in');
        });
    }

    // Initialize projects grid with animations
    initializeProjectsGrid() {
        const projectCards = Utils.getElements('.project-card');
        projectCards.forEach((card, index) => {
            // Stagger animation
            card.style.animationDelay = `${index * 0.2}s`;
            Utils.addClass(card, 'fade-in');
        });
    }

    // Setup scroll animations
    setupAnimations() {
        this.setupScrollAnimations();
        this.setupIntersectionObserver();
    }

    // Setup scroll-based animations
    setupScrollAnimations() {
        const animatedElements = Utils.getElements('.card, .skill-item, .project-card');
        
        animatedElements.forEach(element => {
            element.addEventListener('scroll', Utils.throttle(() => {
                this.animateOnScroll(element);
            }, 100));
        });
    }

    // Setup intersection observer for animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Utils.addClass(entry.target, 'animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const elementsToAnimate = Utils.getElements('.card, .skill-item, .project-card');
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // Animate element on scroll
    animateOnScroll(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
            Utils.addClass(element, 'animate-in');
        }
    }

    // Handle window resize
    handleResize() {
        // Resize charts
        if (typeof chartManager !== 'undefined') {
            chartManager.resizeCharts();
        }

        // Handle responsive adjustments
        this.handleResponsiveAdjustments();
    }

    // Handle responsive adjustments
    handleResponsiveAdjustments() {
        const isMobile = Utils.isMobile();
        const isTablet = Utils.isTablet();
        
        // Adjust layout based on device
        if (isMobile) {
            Utils.addClass(document.body, 'mobile-view');
        } else if (isTablet) {
            Utils.addClass(document.body, 'tablet-view');
        } else {
            Utils.removeClass(document.body, 'mobile-view tablet-view');
        }
    }

    // Handle scroll events
    handleScroll() {
        this.updateScrollProgress();
        this.handleParallaxEffects();
    }

    // Update scroll progress
    updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // You can add a progress bar or other scroll-based features here
        document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
    }

    // Handle parallax effects
    handleParallaxEffects() {
        const scrolled = window.pageYOffset;
        const parallaxElements = Utils.getElements('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Handle keyboard shortcuts
    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + K to open chatbot
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (typeof chatbot !== 'undefined') {
                chatbot.toggle();
            }
        }

        // Escape to close chatbot
        if (e.key === 'Escape') {
            if (typeof chatbot !== 'undefined' && chatbot.isOpen) {
                chatbot.close();
            }
        }

        // Ctrl/Cmd + / for help
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            this.showHelp();
        }
    }

    // Show help modal
    showHelp() {
        const helpContent = `
            <div class="help-modal">
                <h3>Keyboard Shortcuts</h3>
                <ul>
                    <li><strong>Ctrl/Cmd + K:</strong> Open/Close Chatbot</li>
                    <li><strong>Escape:</strong> Close Chatbot</li>
                    <li><strong>Ctrl/Cmd + /:</strong> Show Help</li>
                </ul>
                <h3>Features</h3>
                <ul>
                    <li>Interactive AI Chatbot</li>
                    <li>Data Visualizations</li>
                    <li>Responsive Design</li>
                    <li>Animated Elements</li>
                </ul>
            </div>
        `;

        // Create modal
        const modal = Utils.createElement('div', 'modal-overlay');
        modal.innerHTML = helpContent;
        
        // Add close functionality
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        document.body.appendChild(modal);
    }

    // Handle initial page load
    handleInitialLoad() {
        // Add loading animation
        Utils.addClass(document.body, 'loaded');
        
        // Track page load
        this.trackPageLoad();
        
        // Initialize any post-load features
        setTimeout(() => {
            this.initializePostLoadFeatures();
        }, 1000);
    }

    // Initialize post-load features
    initializePostLoadFeatures() {
        // Add any features that should load after initial page load
        this.setupLazyLoading();
        this.initializeAnalytics();
    }

    // Setup lazy loading for images
    setupLazyLoading() {
        const images = Utils.getElements('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Initialize analytics
    initializeAnalytics() {
        // Track page view
        this.trackPageView();
        
        // Track user engagement
        this.trackUserEngagement();
    }

    // Track page view
    trackPageView() {
        const pageData = {
            url: window.location.href,
            title: document.title,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`
        };

        console.log('Page View:', pageData);
        
        // Save to localStorage for analytics
        const pageViews = Utils.getLocalStorage('page_views', []);
        pageViews.push(pageData);
        
        // Keep only last 50 page views
        if (pageViews.length > 50) {
            pageViews.splice(0, pageViews.length - 50);
        }
        
        Utils.setLocalStorage('page_views', pageViews);
    }

    // Track user engagement
    trackUserEngagement() {
        let startTime = Date.now();
        let isActive = true;

        // Track time on page
        const trackTime = () => {
            if (isActive) {
                const timeSpent = Date.now() - startTime;
                Utils.setLocalStorage('time_on_page', timeSpent);
            }
        };

        // Track when user becomes inactive
        const handleVisibilityChange = () => {
            if (document.hidden) {
                isActive = false;
                trackTime();
            } else {
                isActive = true;
                startTime = Date.now();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('beforeunload', trackTime);
    }

    // Measure performance
    measurePerformance() {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            console.log(`Page load time: ${loadTime}ms`);
            
            // Save performance data
            Utils.setLocalStorage('performance_data', {
                loadTime,
                timestamp: new Date().toISOString()
            });
        }
    }

    // Get application status
    getStatus() {
        return {
            initialized: this.isInitialized,
            currentSection: this.currentSection,
            chatbotStatus: typeof chatbot !== 'undefined' ? chatbot.getStatus() : null,
            chartsCount: typeof chartManager !== 'undefined' ? chartManager.charts.size : 0,
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`
        };
    }

    // Export application data
    exportData() {
        const data = {
            timestamp: new Date().toISOString(),
            config: CONFIG,
            status: this.getStatus(),
            analytics: {
                pageViews: Utils.getLocalStorage('page_views', []),
                chatbotAnalytics: Utils.getLocalStorage('chatbot_analytics', []),
                performanceData: Utils.getLocalStorage('performance_data', {}),
                timeOnPage: Utils.getLocalStorage('time_on_page', 0)
            }
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `portfolio_data_${Date.now()}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }

    // Reset application
    reset() {
        // Clear all data
        Utils.removeLocalStorage('page_views');
        Utils.removeLocalStorage('chatbot_analytics');
        Utils.removeLocalStorage('performance_data');
        Utils.removeLocalStorage('time_on_page');
        Utils.removeLocalStorage('chatbot_history');
        
        // Reset chatbot
        if (typeof chatbot !== 'undefined') {
            chatbot.reset();
        }
        
        // Reload page
        window.location.reload();
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Export for global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
} 