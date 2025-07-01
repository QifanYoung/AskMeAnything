// ===== CHART MANAGER =====

class ChartManager {
    constructor() {
        this.charts = new Map();
        this.defaultOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#cbd5e1',
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                    titleColor: '#f8fafc',
                    bodyColor: '#cbd5e1',
                    borderColor: '#6366f1',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: true
                }
            }
        };
    }

    // Initialize all charts
    initCharts() {
        this.initSkillsChart();
        this.initExperienceChart();
        this.initProjectsChart();
    }

    // Skills Distribution Chart
    initSkillsChart() {
        const ctx = Utils.getElementById('skillsChart');
        if (!ctx) return;

        const chartData = CONFIG.chartData;
        
        this.charts.set('skills', new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: chartData.labels,
                datasets: [{
                    data: chartData.data,
                    backgroundColor: chartData.colors,
                    borderWidth: 0,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#f8fafc'
                }]
            },
            options: {
                ...this.defaultOptions,
                cutout: '60%',
                plugins: {
                    ...this.defaultOptions.plugins,
                    legend: {
                        ...this.defaultOptions.plugins.legend,
                        position: 'bottom'
                    }
                }
            }
        }));
    }

    // Experience Timeline Chart
    initExperienceChart() {
        const experienceContainer = Utils.getElementById('experienceChart');
        if (!experienceContainer) return;

        const experienceData = CONFIG.experience;
        const timelineHTML = this.createTimelineHTML(experienceData);
        experienceContainer.innerHTML = timelineHTML;
    }

    // Projects Performance Chart
    initProjectsChart() {
        const projectsContainer = Utils.getElementById('projectsChart');
        if (!projectsContainer) return;

        const projectsData = CONFIG.projects;
        const projectsHTML = this.createProjectsHTML(projectsData);
        projectsContainer.innerHTML = projectsHTML;
    }

    // Create Timeline HTML
    createTimelineHTML(experienceData) {
        return experienceData.map((exp, index) => `
            <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                <div class="timeline-content">
                    <h4>${exp.title}</h4>
                    <h5>${exp.company}</h5>
                    <p class="timeline-date">${exp.period}</p>
                    <p>${exp.description}</p>
                    <ul class="achievements-list">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    // Create Projects HTML
    createProjectsHTML(projectsData) {
        return projectsData.map(project => `
            <div class="project-card" style="background: ${project.color}; border: 1px solid ${project.borderColor};">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="project-technologies">
                    <strong>Technologies:</strong> ${project.technologies.join(', ')}
                </div>
                <div class="project-impact">
                    <strong>Impact:</strong> ${project.impact}
                </div>
            </div>
        `).join('');
    }

    // Update Chart Data
    updateChart(chartName, newData) {
        const chart = this.charts.get(chartName);
        if (chart) {
            chart.data = newData;
            chart.update();
        }
    }

    // Animate Chart
    animateChart(chartName, duration = 2000) {
        const chart = this.charts.get(chartName);
        if (chart) {
            chart.options.animation.duration = duration;
            chart.update();
        }
    }

    // Create Custom Chart
    createCustomChart(canvasId, type, data, options = {}) {
        const ctx = Utils.getElementById(canvasId);
        if (!ctx) return null;

        const chart = new Chart(ctx, {
            type: type,
            data: data,
            options: {
                ...this.defaultOptions,
                ...options
            }
        });

        this.charts.set(canvasId, chart);
        return chart;
    }

    // Skills Progress Chart
    createSkillsProgressChart() {
        const skillsData = CONFIG.skills;
        const progressData = skillsData.map(skill => ({
            skill: skill,
            proficiency: Utils.randomBetween(70, 95)
        }));

        const ctx = Utils.getElementById('skillsProgressChart');
        if (!ctx) return;

        this.charts.set('skillsProgress', new Chart(ctx, {
            type: 'bar',
            data: {
                labels: progressData.map(item => item.skill),
                datasets: [{
                    label: 'Proficiency Level',
                    data: progressData.map(item => item.proficiency),
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderColor: '#6366f1',
                    borderWidth: 1,
                    borderRadius: 5
                }]
            },
            options: {
                ...this.defaultOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#cbd5e1',
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(203, 213, 225, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#cbd5e1',
                            maxRotation: 45
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    ...this.defaultOptions.plugins,
                    legend: {
                        display: false
                    }
                }
            }
        }));
    }

    // Technology Usage Chart
    createTechnologyChart() {
        const techData = {
            'Programming Languages': 35,
            'Machine Learning': 25,
            'Data Visualization': 20,
            'Big Data Tools': 15,
            'Cloud Platforms': 5
        };

        const ctx = Utils.getElementById('technologyChart');
        if (!ctx) return;

        this.charts.set('technology', new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: Object.keys(techData),
                datasets: [{
                    data: Object.values(techData),
                    backgroundColor: [
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(6, 182, 212, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ],
                    borderWidth: 2,
                    borderColor: '#1e293b'
                }]
            },
            options: {
                ...this.defaultOptions,
                plugins: {
                    ...this.defaultOptions.plugins,
                    legend: {
                        ...this.defaultOptions.plugins.legend,
                        position: 'right'
                    }
                }
            }
        }));
    }

    // Performance Metrics Chart
    createPerformanceChart() {
        const performanceData = {
            labels: ['Model Accuracy', 'Processing Speed', 'Cost Reduction', 'User Satisfaction'],
            datasets: [{
                label: 'Before Implementation',
                data: [75, 60, 70, 65],
                backgroundColor: 'rgba(239, 68, 68, 0.6)',
                borderColor: '#ef4444',
                borderWidth: 2
            }, {
                label: 'After Implementation',
                data: [90, 85, 88, 92],
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                borderColor: '#10b981',
                borderWidth: 2
            }]
        };

        const ctx = Utils.getElementById('performanceChart');
        if (!ctx) return;

        this.charts.set('performance', new Chart(ctx, {
            type: 'radar',
            data: performanceData,
            options: {
                ...this.defaultOptions,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#cbd5e1',
                            stepSize: 20
                        },
                        grid: {
                            color: 'rgba(203, 213, 225, 0.2)'
                        },
                        pointLabels: {
                            color: '#cbd5e1',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    ...this.defaultOptions.plugins,
                    legend: {
                        ...this.defaultOptions.plugins.legend,
                        position: 'top'
                    }
                }
            }
        }));
    }

    // Destroy Chart
    destroyChart(chartName) {
        const chart = this.charts.get(chartName);
        if (chart) {
            chart.destroy();
            this.charts.delete(chartName);
        }
    }

    // Destroy All Charts
    destroyAllCharts() {
        this.charts.forEach((chart, name) => {
            chart.destroy();
        });
        this.charts.clear();
    }

    // Export Chart as Image
    exportChartAsImage(chartName, format = 'png') {
        const chart = this.charts.get(chartName);
        if (chart) {
            return chart.toBase64Image(format);
        }
        return null;
    }

    // Get Chart Data
    getChartData(chartName) {
        const chart = this.charts.get(chartName);
        if (chart) {
            return chart.data;
        }
        return null;
    }

    // Resize Charts
    resizeCharts() {
        this.charts.forEach(chart => {
            chart.resize();
        });
    }

    // Add Event Listeners for Chart Interactions
    addChartEventListeners() {
        this.charts.forEach((chart, name) => {
            chart.options.onClick = (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    this.handleChartClick(name, index, event);
                }
            };
        });
    }

    // Handle Chart Click Events
    handleChartClick(chartName, index, event) {
        console.log(`Clicked on ${chartName} chart at index ${index}`);
        
        // Add custom click handling logic here
        switch (chartName) {
            case 'skills':
                this.showSkillDetails(index);
                break;
            case 'technology':
                this.showTechnologyDetails(index);
                break;
            default:
                break;
        }
    }

    // Show Skill Details
    showSkillDetails(index) {
        const skillName = CONFIG.chartData.labels[index];
        const skillPercentage = CONFIG.chartData.data[index];
        
        // You can implement a modal or tooltip here
        console.log(`${skillName}: ${skillPercentage}%`);
    }

    // Show Technology Details
    showTechnologyDetails(index) {
        const techCategories = Object.keys({
            'Programming Languages': 35,
            'Machine Learning': 25,
            'Data Visualization': 20,
            'Big Data Tools': 15,
            'Cloud Platforms': 5
        });
        
        const techName = techCategories[index];
        console.log(`Technology category: ${techName}`);
    }
}

// Initialize Chart Manager
const chartManager = new ChartManager(); 