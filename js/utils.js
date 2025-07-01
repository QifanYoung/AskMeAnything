// ===== UTILITY FUNCTIONS =====

class Utils {
    // DOM Element Selectors
    static getElement(selector) {
        return document.querySelector(selector);
    }

    static getElements(selector) {
        return document.querySelectorAll(selector);
    }

    static getElementById(id) {
        return document.getElementById(id);
    }

    // DOM Manipulation
    static createElement(tag, className = '', textContent = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (textContent) element.textContent = textContent;
        return element;
    }

    static addClass(element, className) {
        if (element && element.classList) {
            element.classList.add(className);
        }
    }

    static removeClass(element, className) {
        if (element && element.classList) {
            element.classList.remove(className);
        }
    }

    static toggleClass(element, className) {
        if (element && element.classList) {
            element.classList.toggle(className);
        }
    }

    // Animation Utilities
    static fadeIn(element, duration = 500) {
        if (!element) return;
        
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    static fadeOut(element, duration = 500) {
        if (!element) return;
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(1 - (progress / duration), 0);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    }

    static slideDown(element, duration = 300) {
        if (!element) return;
        
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.display = 'block';
        
        const targetHeight = element.scrollHeight;
        let start = null;
        
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const height = Math.min((progress / duration) * targetHeight, targetHeight);
            
            element.style.height = height + 'px';
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.height = 'auto';
                element.style.overflow = 'visible';
            }
        };
        
        requestAnimationFrame(animate);
    }

    // Event Handling
    static addEventListeners(elements, event, handler) {
        if (Array.isArray(elements)) {
            elements.forEach(element => {
                if (element) element.addEventListener(event, handler);
            });
        } else if (elements) {
            elements.addEventListener(event, handler);
        }
    }

    static removeEventListeners(elements, event, handler) {
        if (Array.isArray(elements)) {
            elements.forEach(element => {
                if (element) element.removeEventListener(event, handler);
            });
        } else if (elements) {
            elements.removeEventListener(event, handler);
        }
    }

    // Debounce Function
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle Function
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Local Storage Utilities
    static setLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    static getLocalStorage(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    }

    static removeLocalStorage(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
        }
    }

    // Cookie Utilities
    static setCookie(name, value, days = 7) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    static getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    static deleteCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    // Validation Utilities
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // String Utilities
    static capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    static formatNumber(num) {
        return new Intl.NumberFormat().format(num);
    }

    static formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    }

    // Array Utilities
    static shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    static uniqueArray(array) {
        return [...new Set(array)];
    }

    static chunkArray(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }

    // Math Utilities
    static randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    static lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    // Color Utilities
    static hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    static rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Device Detection
    static isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    static isTablet() {
        return /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(navigator.userAgent);
    }

    static isDesktop() {
        return !this.isMobile() && !this.isTablet();
    }

    // Browser Detection
    static getBrowser() {
        const userAgent = navigator.userAgent;
        if (userAgent.includes('Chrome')) return 'Chrome';
        if (userAgent.includes('Firefox')) return 'Firefox';
        if (userAgent.includes('Safari')) return 'Safari';
        if (userAgent.includes('Edge')) return 'Edge';
        return 'Unknown';
    }

    // Performance Utilities
    static measurePerformance(fn, name = 'Function') {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${name} took ${(end - start).toFixed(2)}ms`);
        return result;
    }

    // Error Handling
    static handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        // You can add error reporting logic here
    }

    // Async Utilities
    static async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static async retry(fn, maxAttempts = 3, delayMs = 1000) {
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await fn();
            } catch (error) {
                if (attempt === maxAttempts) throw error;
                await this.delay(delayMs * attempt);
            }
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
} 