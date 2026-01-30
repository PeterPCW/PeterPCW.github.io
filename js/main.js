// ==========================================
// Portfolio Site JavaScript
// ==========================================

const HOVER_COLORS = [
    '#FF5700', // Orange
    '#00FF00', // Green
    '#8500FF', // Purple
    '#FF0085', // Pink
    '#0085FF'  // Blue
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initRandomButtonColors();
});

// ==========================================
// Random Button Colors
// ==========================================
function initRandomButtonColors() {
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const randomColor = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
            btn.style.backgroundColor = randomColor;
            btn.style.boxShadow = `0 10px 30px -10px ${randomColor}66`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.backgroundColor = '#FF5700';
            btn.style.boxShadow = '0 10px 30px -10px rgba(255, 87, 0, 0.4)';
        });
    });
}

// ==========================================
// Navigation
// ==========================================
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ==========================================
// Smooth Scroll
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Scroll Animations
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll(
        '.project-card, .philosophy-card, .section-title'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}
