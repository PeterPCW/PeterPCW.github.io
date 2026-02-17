# Portfolio Site

Modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript.

## Structure

```
portfolio-site/
├── index.html      # Main HTML file
├── css/
│   └── style.css  # Modern dark theme styles
├── js/
│   └── main.js    # Interactions & animations
└── assets/        # Images, icons, etc.
```

## Features

- **Dark theme** with purple accent colors
- **Responsive design** - works on all devices
- **Smooth animations** on scroll
- **Animated code window** in hero section
- **Project cards** with npm links
- **Tech stack** organized by category
- **Contact form** (ready to connect to backend)
- **Fast loading** - no heavy frameworks

## Deployment

1. Push all files to your GitHub Pages repository (PeterPCW/PeterPCW.github.io)
2. Ensure the repository is set to publish from `main` branch
3. Site will be live at `https://peterpcw.github.io`

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary: #8b5cf6;  /* Purple */
    --color-accent: #06b6d4; /* Cyan */
    --color-bg: #0a0a0b;      /* Dark background */
}
```

### Projects
Edit the project cards in `index.html`:
```html
<div class="project-card">
    <h3 class="project-title">Your Project</h3>
    ...
</div>
```

### Tech Stack
Update the stack categories in `index.html` under the `stack-grid` section.

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript** - Vanilla JS (no frameworks)
- **Google Fonts** - Inter + Fira Code

## Performance

- No external JavaScript frameworks
- Minimal CSS (14 KB)
- Smooth animations using CSS transforms
- Fast load times

---

## Consolidation

**Interested in consolidating this functionality?**

If you're a maintainer considering rolling similar functionality into your core package, I'm happy to point users your direction instead. [Open an issue](https://github.com/peterwsl77/portfolio-site/issues) to discuss.

---

Built for Peter W. — Developer & Builder
