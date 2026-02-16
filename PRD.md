# Product Requirements Document: portfolio-site

**Project:** portfolio-site  
**Status:** PRD  
**Version:** 1.0  
**Created:** 2026-02-12

---

## Overview

Personal portfolio website showcasing Peter W.'s projects, skills, and professional background. The site demonstrates expertise while attracting potential clients or employers.

**Target:** https://peterpcw.github.io (GitHub Pages)

---

## Problem Statement

### Current State
- Existing vanilla HTML/CSS/JS portfolio
- Good foundation but could be more impressive
- Need to showcase recent projects (shadcn contributions, guides, etc.)
- Want to demonstrate full-stack capabilities

### User Pain Points (Visitors)
- Can't quickly see what technologies I use
- Hard to navigate to specific projects
- Contact form not connected
- No way to see recent work or updates

### Business Goals
- Demonstrate React/TypeScript expertise
- Showcase open-source contributions
- Generate leads for freelance/consulting
- Provide easy contact pathway

---

## Solution Overview

### Design Goals
1. **Clean & Modern** — Dark theme, minimalist UI
2. **Fast** — Static site, instant loads
3. **Responsive** — Works on all devices
4. **Maintainable** — Easy to update projects

### Sections
1. **Hero** — Introduction, tagline, CTA
2. **About** — Brief bio, background
3. **Skills** — Technologies organized by category
4. **Projects** — Featured work with links
5. **Guides** — Gumroad products, tutorials
6. **Contact** — Form or direct contact info

---

## Confirmed Features (MVP)

### Core Pages/Sections
- [x] Hero section with animated elements
- [x] About section with professional background
- [x] Skills grid (frontend, backend, tools)
- [x] Project cards with links to GitHub/demo
- [x] Guides section (Gumroad products)
- [x] Contact form or email link

### Technical Requirements
- [x] Static export (SSG) — Build complete: 153KB JS, 8KB CSS
- [x] Fast page loads — Vite optimized production build
- [ ] SEO optimized
- [ ] Accessible (WCAG 2.1)
- [x] Dark mode support — Theme implemented

### Interactive Elements
- [ ] Scroll animations
- [ ] Hover effects on cards
- [ ] Smooth scrolling navigation
- [ ] Project filtering (optional)

---

## Technical Approach

### Stack Selection

**Option A: Next.js (Recommended)**
- React + TypeScript
- Built-in SSG
- Vercel deployment or GitHub Pages
- Modern, maintainable

**Option B: Vanilla (Existing)**
- HTML/CSS/JS
- Already has good foundation
- Less impressive technically

**Recommendation:** Next.js — demonstrates expertise

### Structure

```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home/Hero
│   │   ├── about/
│   │   ├── projects/
│   │   ├── guides/
│   │   └── contact/
│   ├── components/
│   │   ├── ui/               # Shared UI components
│   │   ├── sections/          # Page sections
│   │   └── layout/
│   └── lib/
├── content/
│   └── projects/              # Project data (MDX or JSON)
└── public/
```

---

## Playground Setup

### Playground Type
- [x] **Next.js App Router** ← Modern portfolio approach
- [ ] Vite (React SPA)
- [ ] Storybook only
- [ ] CLI demo

### Run Commands
```bash
cd portfolio-site
npm install
npm run dev          # Development server
npm run build        # Static export
npm run preview      # Preview production build
```

### Test Plan

#### User Pain Points This Solves
- Can't see what I work with (skills outdated)
- Hard to find my GitHub/projects
- No easy way to contact me
- Site feels outdated

#### Confirmed Features (Must Work)
- [ ] Hero shows who I am
- [ ] Skills list is current
- [ ] Projects link to GitHub/live demos
- [ ] Guides show Gumroad products
- [ ] Contact info works

#### Edge Cases (Must NOT Break)
- [ ] Long project descriptions
- [ ] Many skills (scrollable)
- [ ] Mobile view (responsive)
- [ ] Slow network (progressive loading)

#### Success Criteria (Post-Deployment Verification)
| Feature | How to Verify | Pass? |
|---------|---------------|-------|
| Site loads | https://peterpcw.github.io loads in < 2s | [ ] |
| Responsive | Browser DevTools mobile view | [ ] |
| Hero visible | Name/tagline displays correctly | [ ] |
| Skills visible | Tech stack shows correctly | [ ] |
| Projects link | All 6 project links reachable | [ ] |
| Guides link | All 6 guide links reachable | [ ] |
| Contact visible | Email/contact info displays | [ ] |
| No console errors | DevTools console empty | [ ] |

### Files to Create
- `PRD.md` ← This file
- `playground/README.md` — Run instructions + test checklist
- `playground/src/App.tsx` — Updated portfolio demo

---

## Content Checklist

### About Section
- [ ] Name and title
- [ ] Brief bio (2-3 sentences)
- [ ] Location (Austin, TX)
- [ ] Background story

### Skills Section
- [ ] Frontend (React, TypeScript, shadcn/ui, Tailwind)
- [ ] Backend (Node.js, Python)
- [ ] Tools (Git, Docker, CI/CD)
- [ ] Recent additions (Vitest, testing-library)

### Projects Section
| Project | Links |
|---------|-------|
| shadcn-interval-picker | GitHub |
| shadcn-multiple-sidebars | GitHub |
| theme-studio | GitHub |
| git-hooks-cli | npm |
| Other open-source | Links |

### Guides Section
| Guide | Price | Link |
|-------|-------|------|
| Normalizr | $X | Gumroad |
| Webpack → Vite | $X | Gumroad |
| ESLint 8→9 | $X | Gumroad |
| React 18→19 | $X | Gumroad |
| React Router v7 | $X | Gumroad |
| TanStack Query v5 | $X | Gumroad |
| Apollo 3→4 | $X | Gumroad |

---

## Deployment

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to PeterPCW/PeterPCW.github.io
```

### Alternative: Vercel
- Connect GitHub repo
- Automatic deployments
- Custom domain support

---

## Deployment

### Build Output
```
playground/dist/
├── index.html          # 419 bytes - Main HTML
└── assets/
    ├── index-C60G-R_J.js      # 153KB - JS bundle
    └── index-CdAPQMLB.css      # 8KB - CSS styles
```

**Total:** ~161KB | **Est. Gzipped:** ~40KB

### Deployment Options

#### Option 1: Automated Script (Recommended)
```bash
cd playground
./deploy.sh
```
- Builds if needed
- Copies files to PeterPCW.github.io
- Commits and pushes automatically
- Requires: `$HOME/PeterPCW.github.io` to exist

#### Option 2: Manual
```bash
cd playground
npm run build
cp -r dist/* ~/PeterPCW.github.io/
cd ~/PeterPCW.github.io
git add -A && git commit -m "Update portfolio"
git push origin main
```

### Post-Deployment Verification
| Check | Command | Pass? |
|-------|---------|-------|
| Site loads | https://peterpcw.github.io | [ ] |
| Mobile view | Browser dev tools | [ ] |
| Links work | Click each project link | [ ] |
| Contact | Verify email renders | [ ] |
| Console | No errors in DevTools | [ ] |

---

## Next Steps

1. [x] PRD created
2. [x] Build complete — 153KB JS, 8KB CSS
3. [x] Deploy script created — `playground/deploy.sh`
4. [ ] **Run `./deploy.sh`** to deploy
5. [ ] Verify at https://peterpcw.github.io
6. [ ] Update Success Criteria with results
7. [ ] Mark DONE

---

*Reference: `/projects/REFERENCES/PLAYGROUND_TEST_PLANS.md`*
