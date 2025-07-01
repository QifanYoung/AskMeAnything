// ===== CHATBOT MODULE =====

class Chatbot {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.messageHistory = [];
        this.currentSession = this.generateSessionId();
        
        // DOM Elements
        this.elements = {
            toggle: Utils.getElementById('chatbotToggle'),
            window: Utils.getElementById('chatbotWindow'),
            messages: Utils.getElementById('chatbotMessages'),
            input: Utils.getElementById('chatbotInput'),
            sendButton: Utils.getElementById('sendMessageBtn')
        };

        this.init();
    }

    // Initialize chatbot
    init() {
        this.bindEvents();
        this.loadMessageHistory();
        this.setupTypingIndicator();
    }

    // Bind event listeners
    bindEvents() {
        // Toggle chatbot
        if (this.elements.toggle) {
            this.elements.toggle.addEventListener('click', () => this.toggle());
        }

        // Send message
        if (this.elements.sendButton) {
            this.elements.sendButton.addEventListener('click', () => this.sendMessage());
        }

        // Enter key to send message
        if (this.elements.input) {
            this.elements.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });

            // Auto-resize input
            this.elements.input.addEventListener('input', () => this.autoResizeInput());
        }

        // Close chatbot when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.elements.window.contains(e.target) && 
                !this.elements.toggle.contains(e.target) && 
                this.isOpen) {
                this.close();
            }
        });

        // Handle window resize
        window.addEventListener('resize', Utils.debounce(() => {
            this.handleResize();
        }, 250));
    }

    // Toggle chatbot visibility
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    // Open chatbot
    open() {
        this.isOpen = true;
        this.elements.window.style.display = 'flex';
        Utils.addClass(this.elements.window, 'fade-in');
        
        // Focus input after animation
        setTimeout(() => {
            if (this.elements.input) {
                this.elements.input.focus();
            }
        }, 300);

        // Track analytics
        this.trackEvent('chatbot_opened');
    }

    // Close chatbot
    close() {
        this.isOpen = false;
        Utils.fadeOut(this.elements.window, 300);
        
        // Track analytics
        this.trackEvent('chatbot_closed');
    }

    // Send message
    async sendMessage() {
        const message = this.elements.input.value.trim();
        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage(message, 'user');
        this.elements.input.value = '';
        this.autoResizeInput();

        // Save to history
        this.saveMessageToHistory(message, 'user');

        // Show typing indicator
        this.showTypingIndicator();

        // Generate AI response
        try {
            const response = await this.generateResponse(message);
            
            // Hide typing indicator
            this.hideTypingIndicator();
            
            // Add bot response
            this.addMessage(response, 'bot');
            this.saveMessageToHistory(response, 'bot');

        } catch (error) {
            console.error('Error generating response:', error);
            this.hideTypingIndicator();
            this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
        }
    }

    // Add message to chat
    addMessage(text, sender) {
        const messageDiv = Utils.createElement('div', `message ${sender}`);
        messageDiv.textContent = text;
        
        // Add timestamp
        const timestamp = Utils.createElement('div', 'message-timestamp');
        timestamp.textContent = this.formatTimestamp(new Date());
        messageDiv.appendChild(timestamp);

        this.elements.messages.appendChild(messageDiv);
        this.scrollToBottom();

        // Add animation
        Utils.addClass(messageDiv, 'fade-in');
    }

    // Generate AI response
    async generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Check for exact matches first
        for (const [key, response] of Object.entries(CONFIG.chatbotResponses)) {
            if (message.includes(key)) {
                return response;
            }
        }

        // Check for partial matches
        const partialMatches = this.findPartialMatches(message);
        if (partialMatches.length > 0) {
            return partialMatches[0];
        }

        // Return default response
        return this.getDefaultResponse();
    }

    // Find partial matches
    findPartialMatches(message) {
        const matches = [];
        
        for (const [key, response] of Object.entries(CONFIG.chatbotResponses)) {
            const words = key.split(' ');
            const messageWords = message.split(' ');
            
            const matchCount = words.filter(word => 
                messageWords.some(msgWord => msgWord.includes(word) || word.includes(msgWord))
            ).length;
            
            if (matchCount > 0) {
                matches.push({
                    response,
                    score: matchCount / words.length
                });
            }
        }
        
        return matches
            .sort((a, b) => b.score - a.score)
            .map(match => match.response);
    }

    // Get default response
    getDefaultResponse() {
        const responses = CONFIG.defaultResponses;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Show typing indicator
    showTypingIndicator() {
        this.isTyping = true;
        const typingDiv = Utils.createElement('div', 'message bot typing-indicator');
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        this.elements.messages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    // Hide typing indicator
    hideTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = this.elements.messages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Setup typing indicator styles
    setupTypingIndicator() {
        const style = document.createElement('style');
        style.textContent = `
            .typing-indicator {
                display: flex;
                gap: 0.25rem;
                padding: 0.5rem;
                align-self: flex-start;
            }
            .typing-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: var(--text-secondary);
                animation: typing 1.4s infinite ease-in-out;
            }
            .typing-dot:nth-child(1) { animation-delay: -0.32s; }
            .typing-dot:nth-child(2) { animation-delay: -0.16s; }
            @keyframes typing {
                0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
                40% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    // Auto-resize input field
    autoResizeInput() {
        if (!this.elements.input) return;
        
        this.elements.input.style.height = 'auto';
        this.elements.input.style.height = this.elements.input.scrollHeight + 'px';
        
        // Limit max height
        const maxHeight = 120;
        if (this.elements.input.scrollHeight > maxHeight) {
            this.elements.input.style.height = maxHeight + 'px';
            this.elements.input.style.overflowY = 'auto';
        } else {
            this.elements.input.style.overflowY = 'hidden';
        }
    }

    // Scroll to bottom of messages
    scrollToBottom() {
        if (this.elements.messages) {
            this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
        }
    }

    // Handle window resize
    handleResize() {
        if (Utils.isMobile() && this.isOpen) {
            // Adjust chatbot position on mobile
            this.elements.window.style.right = '-50px';
        } else {
            this.elements.window.style.right = '0';
        }
    }

    // Generate session ID
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Save message to history
    saveMessageToHistory(message, sender) {
        const messageData = {
            id: Date.now(),
            message,
            sender,
            timestamp: new Date().toISOString(),
            sessionId: this.currentSession
        };
        
        this.messageHistory.push(messageData);
        
        // Keep only last 50 messages
        if (this.messageHistory.length > 50) {
            this.messageHistory = this.messageHistory.slice(-50);
        }
        
        // Save to localStorage
        Utils.setLocalStorage('chatbot_history', this.messageHistory);
    }

    // Load message history
    loadMessageHistory() {
        const history = Utils.getLocalStorage('chatbot_history', []);
        this.messageHistory = history;
    }

    // Clear message history
    clearHistory() {
        this.messageHistory = [];
        Utils.removeLocalStorage('chatbot_history');
        if (this.elements.messages) {
            this.elements.messages.innerHTML = `
                <div class="message bot">
                    Hello! I'm your AI assistant. Ask me anything about Qifan's experience, skills, or projects!
                </div>
            `;
        }
    }

    // Format timestamp
    formatTimestamp(date) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Track analytics events
    trackEvent(eventName, data = {}) {
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            sessionId: this.currentSession,
            ...data
        };
        
        // You can integrate with analytics services here
        console.log('Chatbot Event:', eventData);
        
        // Save to localStorage for analytics
        const analytics = Utils.getLocalStorage('chatbot_analytics', []);
        analytics.push(eventData);
        
        // Keep only last 100 events
        if (analytics.length > 100) {
            analytics.splice(0, analytics.length - 100);
        }
        
        Utils.setLocalStorage('chatbot_analytics', analytics);
    }

    // Get conversation statistics
    getConversationStats() {
        const userMessages = this.messageHistory.filter(msg => msg.sender === 'user').length;
        const botMessages = this.messageHistory.filter(msg => msg.sender === 'bot').length;
        const totalMessages = this.messageHistory.length;
        
        return {
            userMessages,
            botMessages,
            totalMessages,
            sessionId: this.currentSession
        };
    }

    // Export conversation
    exportConversation() {
        const conversation = {
            sessionId: this.currentSession,
            timestamp: new Date().toISOString(),
            messages: this.messageHistory,
            stats: this.getConversationStats()
        };
        
        const blob = new Blob([JSON.stringify(conversation, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `conversation_${this.currentSession}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }

    // Add quick reply buttons
    addQuickReplies() {
        const quickReplies = [
            'Tell me about your experience',
            'What are your skills?',
            'Show me your projects',
            'How can I contact you?'
        ];
        
        const quickRepliesDiv = Utils.createElement('div', 'quick-replies');
        quickReplies.forEach(reply => {
            const button = Utils.createElement('button', 'quick-reply-btn');
            button.textContent = reply;
            button.addEventListener('click', () => {
                this.elements.input.value = reply;
                this.sendMessage();
            });
            quickRepliesDiv.appendChild(button);
        });
        
        this.elements.messages.appendChild(quickRepliesDiv);
    }

    // Handle file upload (for future CV upload feature)
    handleFileUpload(file) {
        if (file.type !== 'application/pdf' && file.type !== 'text/plain') {
            this.addMessage('Please upload a PDF or text file.', 'bot');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            this.processCVContent(content);
        };
        reader.readAsText(file);
    }

    // Process CV content (placeholder for future implementation)
    processCVContent(content) {
        // This would integrate with a backend service to process CV content
        this.addMessage('CV uploaded successfully! I can now answer questions about your specific experience.', 'bot');
    }

    // Get chatbot status
    getStatus() {
        return {
            isOpen: this.isOpen,
            isTyping: this.isTyping,
            messageCount: this.messageHistory.length,
            sessionId: this.currentSession
        };
    }

    // Reset chatbot
    reset() {
        this.currentSession = this.generateSessionId();
        this.messageHistory = [];
        this.clearHistory();
        this.trackEvent('chatbot_reset');
    }
}

// Initialize Chatbot
const chatbot = new Chatbot(); 