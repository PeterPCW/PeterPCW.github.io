// ==========================================
// Portfolio Site JavaScript
// ==========================================

const HOVER_COLORS = [
    '#FF5700', // Orange - needs dark text
    '#00FF00', // Green
    '#8500FF', // Purple
    '#FF0085', // Pink - needs dark text
    '#0085FF'  // Blue
];

const DARK_TEXT_COLORS = ['#FF5700', '#00FF00', '#FF0085']; // Colors needing dark button text

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
let terminalState = 'normal';
let themeCycleInterval;

document.addEventListener('DOMContentLoaded', () => {
    initMouseTracking();
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initTerminalWindow();
    initActiveNavOnScroll();
    initGlowEffects();
    initParticleMorph();
});

// ==========================================
// Mouse Tracking for Glow Effects
// ==========================================
function initMouseTracking() {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        document.documentElement.style.setProperty('--mouse-x', `${x}%`);
        document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    });
}

// ==========================================
// Glow Effects - Random color on hover
// ==========================================
function initGlowEffects() {
    const glowElements = document.querySelectorAll('.philosophy-card, .project-card, .contact-form, .btn-primary, .btn-secondary');

    glowElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const randomColor = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
            el.style.setProperty('--glow-color', randomColor);
        });
    });

    // Section titles glow with silhouette effect
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            const randomColor = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
            title.style.setProperty('--glow-color', randomColor);
            title.setAttribute('data-glow-active', 'true');
        });
        title.addEventListener('mouseleave', () => {
            title.setAttribute('data-glow-active', 'false');
        });
    });

    // Contact links with silhouette effect
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const randomColor = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
            link.style.setProperty('--glow-color', randomColor);
            link.setAttribute('data-glow-active', 'true');
        });
        link.addEventListener('mouseleave', () => {
            link.setAttribute('data-glow-active', 'false');
        });
    });

    // Buttons with color cycling
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const randomColor = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
            btn.style.setProperty('--glow-color', randomColor);

            // Update button text color based on background
            const needsDarkText = DARK_TEXT_COLORS.includes(randomColor);
            btn.setAttribute('data-needs-dark-text', needsDarkText.toString());
        });

        btn.addEventListener('mouseleave', () => {
            // Reset to default orange for primary buttons
            if (btn.classList.contains('btn-primary')) {
                btn.setAttribute('data-needs-dark-text', 'false');
            }
        });
    });
}

// ==========================================
// Active Navigation on Scroll
// ==========================================
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        const currentColor = document.documentElement.style.getPropertyValue('--glow-color') || '#FF5700';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                        link.style.setProperty('--glow-color', currentColor);
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
}

// ==========================================
// Terminal Window with Windows Controls
// ==========================================
function initTerminalWindow() {
    const codeWindow = document.querySelector('.code-window');
    if (!codeWindow) return;

    const btnClose = codeWindow.querySelector('.btn-close');
    const btnMinimize = codeWindow.querySelector('.btn-minimize');
    const btnMaximize = codeWindow.querySelector('.btn-maximize');

    // Initial theme
    applyTheme(TERMINAL_THEMES[0]);

    // Auto-rotate theme every 8 seconds (only if not closed)
    themeCycleInterval = setInterval(() => {
        const now = Date.now();

        // Only cycle theme if in normal state
        if (terminalState === 'normal') {
            currentThemeIndex = (currentThemeIndex + 1) % TERMINAL_THEMES.length;
            applyTheme(TERMINAL_THEMES[currentThemeIndex]);
        }
    }, 8000);

    // Close button - wobble and fade, stay closed for 5 seconds
    btnClose?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeTerminal();
    });

    // Minimize button - taskbar style
    btnMinimize?.addEventListener('click', (e) => {
        e.stopPropagation();
        minimizeTerminal();
    });

    // Maximize button - expand left and down
    btnMaximize?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (terminalState === 'maximized') {
            // Restore to normal
            codeWindow.classList.remove('maximized');
            terminalState = 'normal';
        } else {
            // Maximize
            terminalState = 'maximized';
            codeWindow.classList.add('maximized');
        }
    });

    // Prevent page scroll when terminal is maximized and user is scrolling within it
    const codeContent = codeWindow.querySelector('.code-content');
    codeContent?.addEventListener('wheel', (e) => {
        if (terminalState === 'maximized') {
            // If terminal content can scroll, prevent page scroll
            const { scrollTop, scrollHeight, clientHeight } = codeContent;
            const canScrollUp = scrollTop > 0;
            const canScrollDown = scrollTop + clientHeight < scrollHeight;

            if ((e.deltaY < 0 && canScrollUp) || (e.deltaY > 0 && canScrollDown)) {
                e.preventDefault();
                codeContent.scrollTop += e.deltaY;
            }
        }
    }, { passive: false });

    // Click outside maximized terminal to restore
    document.addEventListener('click', (e) => {
        if (terminalState === 'maximized' && !codeWindow.contains(e.target)) {
            codeWindow.classList.remove('maximized');
            terminalState = 'normal';
        }
    });

    // Click anywhere on minimized window to restore
    codeWindow.addEventListener('click', (e) => {
        // Restore from minimized or closed state on click
        if (terminalState === 'minimized' || terminalState === 'closed' || terminalState === 'closing') {
            restoreTerminal();
            return;
        }
        // Cycle theme on click (not on buttons)
        if (e.target.closest('.window-btn')) return;
        // Allow cycling theme from any open state (normal or maximized)
        if (terminalState === 'normal' || terminalState === 'maximized') {
            currentThemeIndex = (currentThemeIndex + 1) % TERMINAL_THEMES.length;
            applyTheme(TERMINAL_THEMES[currentThemeIndex]);
        }
    });

    function closeTerminal() {
        terminalState = 'closed';
        codeWindow.classList.add('closing');
        // Keep maximized class during wobble animation

        // After wobble animation (2.5s), hide completely and silently restore to original size
        setTimeout(() => {
            codeWindow.classList.remove('closing', 'maximized');
            codeWindow.classList.add('closed');
        }, 2500);

        // Restore after 5 seconds total (2.5s wobble + 2.5s hidden)
        setTimeout(() => {
            if (terminalState === 'closed') {
                restoreTerminal();
            }
        }, 5000);
    }

    function minimizeTerminal() {
        terminalState = 'minimized';
        codeWindow.classList.add('minimized');
        codeWindow.classList.remove('closed', 'maximized');

        // Auto-restore after 5 seconds
        setTimeout(() => {
            if (terminalState === 'minimized') {
                restoreTerminal();
            }
        }, 5000);
    }

    function restoreTerminal() {
        codeWindow.classList.remove('closing', 'closed', 'minimized', 'maximized');
        terminalState = 'normal';
    }
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
            el.style.transition = 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease';
        }
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
            // Animate hamburger to X
            const spans = navToggle.querySelectorAll('span');
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
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
// Scroll Animations (Reveal on Scroll)
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
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// Particle Morph Effect for Hero Tagline
// ==========================================
function initParticleMorph() {
    const container = document.getElementById('hero-particle-container');
    if (!container) return;

    // User's 5 chosen colors
    const PARTICLE_COLORS = [
        '#FF5700', // Orange
        '#00FF00', // Green
        '#8500FF', // Purple
        '#FF0085', // Pink
        '#0085FF'  // Blue
    ];

    // Full-screen overlay canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas-overlay';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let words = [];
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        initWords();
    });

    // Initialize words
    function initWords() {
        words = [];
        const wordEls = container.querySelectorAll('.particle-word');
        wordEls.forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            if (rect.width > 0) {
                words.push({
                    el: el,
                    word: el.textContent,
                    cx: rect.left + rect.width / 2,
                    cy: rect.top + rect.height / 2,
                    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
                    exploded: false,
                    particles: []
                });
            }
        });
        console.log('Initialized', words.length, 'words');
    }

    // Particle class
    class Particle {
        constructor(x, y, color) {
            this.originX = x;
            this.originY = y;
            this.x = x;
            this.y = y;
            this.color = color;
            this.vx = 0;
            this.vy = 0;
            this.size = 8 + Math.random() * 6;
            this.baseSize = this.size;
            this.alpha = 1;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.1;
            this.state = 'idle'; // idle, exploding, returning, fading
        }

        explode(mx, my) {
            this.state = 'exploding';
            const angle = Math.random() * Math.PI * 2;
            const force = 12 + Math.random() * 18;
            this.vx = Math.cos(angle) * force;
            this.vy = Math.sin(angle) * force;
        }

        return() {
            this.state = 'returning';
        }

        fadeOut() {
            this.state = 'fading';
        }

        update() {
            if (this.state === 'exploding') {
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.96;
                this.vy *= 0.96;
                this.rotation += this.rotSpeed;

                if (Math.abs(this.vx) < 0.5 && Math.abs(this.vy) < 0.5) {
                    this.return();
                }
            } else if (this.state === 'returning') {
                const dx = this.originX - this.x;
                const dy = this.originY - this.y;
                // Faster return - takes about 1-2 seconds
                this.x += dx * 0.04;
                this.y += dy * 0.04;
                this.rotation *= 0.94;

                // Start fading earlier and faster, overlapping with word reappearance
                if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
                    // Calculate progress (0 = far, 1 = at origin)
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const progress = Math.max(0, 1 - dist / 50);

                    // Fade out particles as we approach origin (particles at ~50%, word at ~50%)
                    this.alpha = 1 - (progress * 0.6); // Particles fade to 0.4 at origin

                    // Start fading state when very close
                    if (Math.abs(dx) < 20 && Math.abs(dy) < 20) {
                        this.fadeOut();
                    }
                }
            } else if (this.state === 'fading') {
                // Add jiggle during fade
                this.x += (Math.random() - 0.5) * 4;
                this.y += (Math.random() - 0.5) * 4;
                this.alpha *= 0.9;
                this.size *= 0.94;
                this.rotation += 0.15;

                if (this.alpha < 0.03) {
                    this.state = 'done';
                    this.alpha = 0;
                }
            }
        }

        draw(ctx) {
            if (this.alpha <= 0) return;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.alpha;
            ctx.shadowBlur = 20;
            ctx.shadowColor = this.color;
            ctx.fillStyle = this.color;

            // Draw solid circle
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Create particles for a word
    function createParticles(wordObj) {
        const ps = [];
        // Get container bounds for wide spread
        const containerRect = container.getBoundingClientRect();

        for (let i = 0; i < 25; i++) {
            // Start particles spread across the entire container area
            const startX = containerRect.left + Math.random() * containerRect.width;
            const startY = containerRect.top + Math.random() * containerRect.height;
            ps.push(new Particle(startX, startY, wordObj.color));
        }
        return ps;
    }

    // Explode a word
    function explodeWord(wordObj) {
        if (wordObj.exploded) return;
        wordObj.exploded = true;
        wordObj.el.classList.add('exploded');
        wordObj.el.style.visibility = 'hidden';
        wordObj.particles = createParticles(wordObj);
        // Trigger explosion on all particles
        wordObj.particles.forEach(p => p.explode(p.x, p.y));
        particles.push(...wordObj.particles);
    }

    // Return all words
    function returnAllWords() {
        words.forEach(w => {
            if (w.exploded) {
                w.particles.forEach(p => {
                    if (p.state !== 'returning') p.return();
                });
            }
        });
    }

    // Reset word to show text again with fade-in effect
    function resetWord(wordObj) {
        wordObj.exploded = false;
        wordObj.el.classList.remove('exploded');
        // Fade in the text
        wordObj.el.style.visibility = '';
        wordObj.el.style.opacity = '0';
        wordObj.el.style.transition = 'opacity 0.4s ease-out';

        // Trigger reflow and fade in
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                wordObj.el.style.opacity = '1';
            });
        });

        // Clear transition after fade completes
        setTimeout(() => {
            wordObj.el.style.transition = '';
            wordObj.el.style.opacity = '';
        }, 400);

        // Remove this word's particles from the global array
        particles = particles.filter(p => !wordObj.particles.includes(p));
        wordObj.particles = [];
    }

    // Check if a word's particles are all done - reset word individually
    function checkWordReturned(wordObj) {
        if (!wordObj.exploded || wordObj.particles.length === 0) return;
        const allDone = wordObj.particles.every(p => p.state === 'done');
        if (allDone) {
            resetWord(wordObj);
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw all particles, check each word individually
        particles.forEach(p => {
            p.update();
            p.draw(ctx);
        });

        // Check each exploded word independently
        words.forEach(w => checkWordReturned(w));

        // Clean up any particles that finished but weren't cleaned
        particles = particles.filter(p => p.state !== 'done');

        requestAnimationFrame(animate);
    }

    // Mouse move - explode words on touch
    function onMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Check if mouse is over the maximized terminal - if so, don't explode words
        const codeWindow = document.querySelector('.code-window');
        if (terminalState === 'maximized' && codeWindow) {
            const rect = codeWindow.getBoundingClientRect();
            if (mouseX >= rect.left && mouseX <= rect.right &&
                mouseY >= rect.top && mouseY <= rect.bottom) {
                return; // Mouse is within terminal, skip explosion
            }
        }

        words.forEach(w => {
            if (!w.exploded) {
                // Check if mouse touches word (with buffer)
                const rect = w.el.getBoundingClientRect();
                if (mouseX >= rect.left - 15 && mouseX <= rect.right + 15 &&
                    mouseY >= rect.top - 15 && mouseY <= rect.bottom + 15) {
                    explodeWord(w);
                }
            }
        });
    }

    // Mouse leave - return words
    function onMouseLeave() {
        setTimeout(returnAllWords, 200);
    }

    // Auto explode intro after 3s
    function autoExplode() {
        setTimeout(() => {
            // Explode first 4 words (intro line)
            for (let i = 0; i < Math.min(4, words.length); i++) {
                setTimeout(() => {
                    console.log('Auto exploding:', words[i].word);
                    explodeWord(words[i]);
                }, i * 120);
            }
        }, 3000);
    }

    // Start with small delay to ensure DOM is ready
    setTimeout(() => {
        initWords();
        animate();

        let mouseInHero = false;
        const heroSection = document.querySelector('.hero');

        heroSection?.addEventListener('mouseenter', () => { mouseInHero = true; });
        heroSection?.addEventListener('mouseleave', () => {
            mouseInHero = false;
            returnAllWords();
        });

        document.addEventListener('mousemove', (e) => {
            onMouseMove(e);
            mouseInHero = true;
        });

        autoExplode();
    }, 100);
}
