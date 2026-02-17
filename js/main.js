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

// Terminal theme definitions for cycling
const TERMINAL_THEMES = [
    {
        name: 'Windows Terminal',
        bg: '#0C0C0C',
        header: '#1E1E1E',
        border: '#3C3C3C',
        text: '#CCCCCC',
        keyword: '#569CD6',
        string: '#CE9178',
        function: '#DCDCAA',
        className: '#4EC9B0',
        comment: '#6A9955',
        number: '#B5CEA8',
        accent: '#007ACC'
    },
    {
        name: 'Retro Green',
        bg: '#0D0208',
        header: '#1A1A2E',
        border: '#00FF41',
        text: '#00FF41',
        keyword: '#00FF41',
        string: '#008F11',
        function: '#003B00',
        className: '#00FF41',
        comment: '#008F11',
        number: '#00FF41',
        accent: '#00FF41'
    },
    {
        name: 'Solarized Dark',
        bg: '#002B36',
        header: '#073642',
        border: '#586E75',
        text: '#93A1A1',
        keyword: '#268BD2',
        string: '#2AA198',
        function: '#B58900',
        className: '#2AA198',
        comment: '#586E75',
        number: '#D33682',
        accent: '#268BD2'
    },
    {
        name: 'Dracula',
        bg: '#282A36',
        header: '#44475A',
        border: '#6272A4',
        text: '#F8F8F2',
        keyword: '#FF79C6',
        string: '#F1FA8C',
        function: '#50FA7B',
        className: '#8BE9FD',
        comment: '#6272A4',
        number: '#BD93F9',
        accent: '#BD93F9'
    },
    {
        name: 'Monokai',
        bg: '#272822',
        header: '#3E3D32',
        border: '#75715E',
        text: '#F8F8F2',
        keyword: '#F92672',
        string: '#E6DB74',
        function: '#A6E22E',
        className: '#66D9EF',
        comment: '#75715E',
        number: '#AE81FF',
        accent: '#A6E22E'
    },
    {
        name: 'Nord',
        bg: '#2E3440',
        header: '#3B4252',
        border: '#4C566A',
        text: '#D8DEE9',
        keyword: '#81A1C1',
        string: '#A3BE8C',
        function: '#88C0D0',
        className: '#8FBCBB',
        comment: '#616E88',
        number: '#B48EAD',
        accent: '#5E81AC'
    },
    {
        name: 'Gruvbox Dark',
        bg: '#282828',
        header: '#3C3836',
        border: '#928374',
        text: '#FBF1C7',
        keyword: '#FB4934',
        string: '#B8BB26',
        function: '#FABD2F',
        className: '#FE8019',
        comment: '#928374',
        number: '#D3869B',
        accent: '#fabd2f'
    },
    {
        name: 'One Dark',
        bg: '#282C34',
        header: '#21252B',
        border: '#3E4451',
        text: '#ABB2BF',
        keyword: '#C678DD',
        string: '#98C379',
        function: '#61AFEF',
        className: '#E5C07B',
        comment: '#5C6370',
        number: '#D19A66',
        accent: '#61AFEF'
    }
];

let currentThemeIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initRandomButtonColors();
    initTerminalThemeCycling();
});

// ==========================================
// Terminal Theme Cycling
// ==========================================
function initTerminalThemeCycling() {
    const codeWindow = document.querySelector('.code-window');
    if (!codeWindow) return;

    const codeContent = codeWindow.querySelector('.code-content');
    if (!codeContent) return;

    // Apply initial theme
    applyTheme(TERMINAL_THEMES[0]);

    // Cycle theme every 5 seconds
    setInterval(() => {
        currentThemeIndex = (currentThemeIndex + 1) % TERMINAL_THEMES.length;
        const theme = TERMINAL_THEMES[currentThemeIndex];
        applyTheme(theme);
    }, 5000);
}

function applyTheme(theme) {
    const codeWindow = document.querySelector('.code-window');
    const codeHeader = codeWindow?.querySelector('.code-header');
    const codeContent = codeWindow?.querySelector('.code-content');
    const codeTitle = codeWindow?.querySelector('.code-title');

    if (!codeWindow || !codeContent) return;

    // Apply CSS variables for this theme
    codeWindow.style.background = theme.bg;
    codeWindow.style.borderColor = theme.border;

    if (codeHeader) {
        codeHeader.style.background = theme.header;
        codeHeader.style.borderColor = theme.border;
    }

    if (codeContent) {
        codeContent.style.color = theme.text;
        const keywords = codeContent.querySelectorAll('.keyword');
        const strings = codeContent.querySelectorAll('.string');
        const functions = codeContent.querySelectorAll('.function');
        const classNames = codeContent.querySelectorAll('.class-name');
        const comments = codeContent.querySelectorAll('.comment');
        const numbers = codeContent.querySelectorAll('.number');

        keywords.forEach(el => el.style.color = theme.keyword);
        strings.forEach(el => el.style.color = theme.string);
        functions.forEach(el => el.style.color = theme.function);
        classNames.forEach(el => el.style.color = theme.className);
        comments.forEach(el => el.style.color = theme.comment);
        numbers.forEach(el => el.style.color = theme.number);
    }

    if (codeTitle) {
        codeTitle.style.color = theme.text;
    }

    // Add subtle transition
    const allElements = [codeWindow, codeContent];
    allElements.forEach(el => {
        if (el) {
            el.style.transition = 'background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease';
        }
    });
}

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
