// Global Variables
let currentTheme = localStorage.getItem('theme') || 'light';
let isMobileMenuOpen = false;
let typingIndex = 0;
let typingText = '';
const roles = ['Web Developer', 'Frontend Developer', 'Full Stack Developer', 'React Developer', 'UI/UX Enthusiast'];
let currentRoleIndex = 0;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeTypingEffect();
    initializeScrollEffects();
    initializeAnimations();
    initializeContactForm();
    initializeProjectFilters();
    initializeCounters();
    initializeSkillBars();
    hideLoadingScreen();
    initializeLazyLoading();
});

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1500); // Show loading screen for 1.5 seconds
    }
}

// Navigation
function initializeNavigation() {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
        toggleScrollTopButton();
    });
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (isMobileMenuOpen) {
                    toggleMobileMenu();
                }
                
                // Update active link
                updateActiveNavLink(link);
            }
        });
    });
}

function toggleMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (mobileToggle) {
        mobileToggle.classList.toggle('active');
    }
    
    if (nav) {
        nav.classList.toggle('mobile-open');
    }
    
    document.body.classList.toggle('no-scroll', isMobileMenuOpen);
}

function updateActiveNavLink(activeLink = null) {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.getElementById('header').offsetHeight;
    
    if (activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
        return;
    }
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50; // Offset for header and some padding
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Typing Effect
function initializeTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    function typeRole() {
        const currentRole = roles[currentRoleIndex];
        
        if (typingIndex < currentRole.length) {
            typingText += currentRole.charAt(typingIndex);
            typingElement.textContent = typingText;
            typingIndex++;
            setTimeout(typeRole, 100); // Typing speed
        } else {
            setTimeout(eraseRole, 2000); // Pause before erasing
        }
    }
    
    function eraseRole() {
        if (typingIndex > 0) {
            typingText = typingText.slice(0, -1);
            typingElement.textContent = typingText;
            typingIndex--;
            setTimeout(eraseRole, 50); // Erasing speed
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, 500); // Pause before typing next role
        }
    }
    
    typeRole();
}

// Scroll Effects
function initializeScrollEffects() {
    const scrollTop = document.getElementById('scrollTop');
    
    if (scrollTop) {
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function toggleScrollTopButton() {
    const scrollTop = document.getElementById('scrollTop');
    if (scrollTop) {
        if (window.scrollY > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    }
}

// Animations
function initializeAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true, // Whether animation should happen only once - while scrolling down
            offset: 100 // Offset (in px) from the top of the screen to trigger animations
        });
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.classList.add('btn-ripple');
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Add focus effects to form inputs
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            // Only remove focused class if input is empty
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        // Add focused class if input already has a value on load (e.g., browser autofill)
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(formData)) {
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
        
        // Show success message
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        // Remove focused class from empty inputs after reset
        form.querySelectorAll('input, select, textarea').forEach(input => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
    } catch (error) {
        console.error('Form submission error:', error);
        showToast('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

function validateForm(formData) {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!firstName || !lastName || !email || !subject || !message) {
        showToast('Please fill in all required fields.', 'error');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('.toast-icon i');
    
    if (!toast || !toastMessage || !toastIcon) return;
    
    // Reset previous state
    toast.classList.remove('show');
    toast.querySelector('.toast-progress').style.animation = 'none';
    void toast.offsetWidth; // Trigger reflow to restart animation
    
    // Update message and icon
    toastMessage.textContent = message;
    
    if (type === 'success') {
        toastIcon.className = 'fas fa-check-circle';
        toast.querySelector('.toast-icon').style.background = 'var(--success-color)';
        toast.querySelector('.toast-progress').style.background = 'var(--success-color)';
    } else if (type === 'error') {
        toastIcon.className = 'fas fa-exclamation-circle';
        toast.querySelector('.toast-icon').style.background = 'var(--error-color)';
        toast.querySelector('.toast-progress').style.background = 'var(--error-color)';
    }
    
    // Show toast
    toast.classList.add('show');
    toast.querySelector('.toast-progress').style.animation = 'progress 3s linear forwards';
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Project Filters
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100); // Small delay for re-appearing animation
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300); // Hide after animation
                }
            });
        });
    });
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Adjust trigger point
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // milliseconds
    const step = target / (duration / 16); // 16ms for ~60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current);
    }, 16);
}

// Skill Bars Animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Adjust trigger point
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
                observer.unobserve(skillBar); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Project Modal
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalTitle || !modalContent) return;
    
    // Project data (you can expand this with more details for each project)
    const projectData = {
        'finance': {
            title: 'Personal Finance Management System',
            description: 'Developed comprehensive web-based financial management application for tracking income and expenses. Implemented client-side data persistence using Local Storage API for seamless user experience. Designed responsive user interface following modern UI/UX principles for desktop and mobile. Incorporated data visualization features providing users with financial insights and analytics.',
            features: [
                'Income and expense tracking',
                'Budget planning and monitoring',
                'Data visualization with charts',
                'Financial goal setting',
                'Export reports to PDF',
                'Responsive design for all devices'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage API', 'Chart.js'],
            githubLink: 'https://github.com/punithinfant/finance-manager',
            liveDemoLink: '#' // Placeholder
        },
        'react-todo': {
            title: 'React Task Manager',
            description: 'A modern todo application built with React.js featuring CRUD operations, local storage persistence, and a clean, intuitive user interface. The app includes task categorization, priority levels, and due date management.',
            features: [
                'Add, edit, and delete tasks',
                'Task categorization and filtering',
                'Priority levels and due dates',
                'Local storage persistence',
                'Responsive design',
                'Dark mode support'
            ],
            technologies: ['React.js', 'JavaScript ES6+', 'CSS3', 'React Hooks', 'Local Storage'],
            githubLink: 'https://github.com/punithinfant/react-todo-app',
            liveDemoLink: '#' // Placeholder
        },
        'ecommerce': {
            title: 'E-commerce Website',
            description: 'A full-stack e-commerce solution with complete product catalog, shopping cart functionality, user authentication, and payment integration. Built with PHP and MySQL for robust backend operations.',
            features: [
                'Product catalog with search and filters',
                'Shopping cart and checkout process',
                'User registration and authentication',
                'Order management system',
                'Admin dashboard',
                'Payment gateway integration'
            ],
            technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'PayPal API'],
            githubLink: 'https://github.com/punithinfant/ecommerce-website',
            liveDemoLink: '#' // Placeholder
        },
        'weather': {
            title: 'Weather Forecast App',
            description: 'A responsive weather application that provides current weather conditions and forecasts for any location worldwide. Features include location-based weather, detailed forecasts, and beautiful weather animations.',
            features: [
                'Current weather conditions',
                '7-day weather forecast',
                'Location-based weather detection',
                'Search for any city worldwide',
                'Weather animations and icons',
                'Responsive design'
            ],
            technologies: ['JavaScript', 'OpenWeatherMap API', 'CSS3', 'Geolocation API'],
            githubLink: 'https://github.com/punithinfant/weather-app',
            liveDemoLink: '#' // Placeholder
        },
        'portfolio': {
            title: 'Personal Portfolio Website',
            description: 'This responsive portfolio website showcasing my projects, skills, and professional experience. Built with modern web technologies and optimized for performance and accessibility.',
            features: [
                'Responsive design',
                'Dark mode support',
                'Smooth animations',
                'Contact form',
                'Project showcase',
                'SEO optimized'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS Library', 'Responsive Design'],
            githubLink: 'https://github.com/punithinfant/portfolio',
            liveDemoLink: '#' // Placeholder
        },
        'lms': {
            title: 'Learning Management System',
            description: 'A comprehensive educational platform with course management, user authentication, progress tracking, and administrative features. Designed for educational institutions and online learning providers.',
            features: [
                'Course creation and management',
                'Student enrollment system',
                'Progress tracking and analytics',
                'Quiz and assignment system',
                'Discussion forums',
                'Administrative dashboard'
            ],
            technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'Chart.js'],
            githubLink: 'https://github.com/punithinfant/lms-platform',
            liveDemoLink: '#' // Placeholder
        }
    };
    
    const project = projectData[projectId];
    if (!project) return;
    
    // Update modal content
    modalTitle.textContent = project.title;
    modalContent.innerHTML = `
        <div class="project-modal-content">
            <div class="project-description">
                <p>${project.description}</p>
            </div>
            
            <div class="project-features">
                <h4>Key Features:</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-technologies">
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-actions">
                <button class="btn btn-primary" onclick="window.open('${project.githubLink}', '_blank')">
                    <i class="fab fa-github"></i>
                    View Source Code
                </button>
                <button class="btn btn-outline" onclick="window.open('${project.liveDemoLink}', '_blank')">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </button>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.classList.add('no-scroll'); // Prevent scrolling background
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    
    if (section && header) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function downloadResume() {
    // In a real scenario, replace '#' with the actual URL to your resume PDF
    const resumeUrl = '#'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Punith_Infant_D_Resume.pdf'; // Suggested filename
    link.target = '_blank'; // Open in new tab
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Resume download started!', 'success');
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    // Close modal with Escape key
    if (event.key === 'Escape') {
        closeProjectModal();
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
    }
    
    // Trap focus within modal (basic implementation)
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('active') && event.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else { // Tab
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// Click outside modal to close
document.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('active')) {
        if (event.target === modal) { // Clicked on the overlay, not inside the modal content
            closeProjectModal();
        }
    }
});

// Performance Optimization
function debounce(func, wait) {
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

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    updateActiveNavLink();
    toggleScrollTopButton();
}, 10); // Debounce by 10ms

window.addEventListener('scroll', optimizedScrollHandler);

// Lazy Loading for Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Load image from data-src
                img.removeAttribute('data-src'); // Remove data-src to prevent re-loading
                img.classList.remove('lazy'); // Remove lazy class if you have one for styling
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Service Worker Registration (for PWA capabilities - optional)
// This requires a sw.js file in your root directory.
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('SW registered: ', registration);
//             })
//             .catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//     });
// }

// Basic Error Handling
window.addEventListener('error', function(event) {
    console.error('Uncaught JavaScript error:', event.error);
    // You could send this error to an analytics service or log it
    showToast('An unexpected error occurred.', 'error');
});

// Unhandled Promise Rejection
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Prevent default browser handling
    showToast('An operation failed unexpectedly.', 'error');
});

// Basic Analytics (Placeholder)
function trackEvent(eventName, eventData = {}) {
    // Replace with your actual analytics tracking code (e.g., Google Analytics, Plausible, etc.)
    // Example for Google Analytics (gtag.js):
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
    console.log('Analytics Event:', eventName, eventData);
}

// Example: Track button clicks
document.addEventListener('click', function(event) {
    const button = event.target.closest('button, .btn');
    if (button && !button.classList.contains('btn-ripple')) { // Avoid tracking ripple spans
        const buttonText = button.textContent.trim();
        trackEvent('button_click', {
            button_text: buttonText,
            button_id: button.id || 'N/A',
            page_location: window.location.pathname
        });
    }
});

// Example: Track form submissions
document.addEventListener('submit', function(event) {
    const form = event.target;
    if (form.id === 'contactForm') {
        trackEvent('form_submit', {
            form_id: form.id,
            page_location: window.location.pathname
        });
    }
});

console.log('🚀 Punith Infant D\'s Portfolio website loaded successfully!');
console.log('👨‍💻 Feel free to explore the code and customize it!');
console.log('📧 Contact: punithinfant5@gmail.com');
