# Portfolio Site Deployment Guide

**Build Status:** ✅ Deployed  
**Build Size:** 1.12MB JS (316KB gzipped), 8.75KB CSS  
**Last Built:** 2026-02-17  
**Deployed:** 2026-02-17  
**URL:** https://peterpcw.github.io

---

## 🚀 Quick Deploy

### Option 1: Automated Script
```bash
cd /home/peterwsl/clawd/projects/portfolio-site/playground
./deploy.sh
```

### Option 2: Manual Steps
```bash
# 1. Build (if not already built)
npm run build

# 2. Navigate to your GitHub Pages repo
cd ~/PeterPCW.github.io

# 3. Copy build files
cp -r /home/peterwsl/clawd/projects/portfolio-site/playground/dist/* .

# 4. Commit and push
git add -A
git commit -m "Update portfolio - $(date +%Y-%m-%d)"
git push origin main

# 5. Verify deployment (2-5 min on GitHub Pages)
# Visit: https://peterpcw.github.io
```

---

## ✅ Deployment Verification (2026-02-17)

| Check | Status | Notes |
|-------|--------|-------|
| Site loads | ✅ | HTTP 200, < 1s |
| Title correct | ✅ | "Peter W. — Developer & Builder" |
| JS asset | ✅ | 316KB gzipped, 200 OK |
| CSS asset | ✅ | 8.75KB, 200 OK |
| Console errors | ❓ | Peter needs to check manually |

### To Complete Verification:
1. Open https://peterpcw.github.io in browser
2. Open DevTools → Console tab
3. Check for any red errors
4. If clean: Move project to REV or DONE

---

## 📋 Pre-Deployment Checklist

### Content Verification
- [x] Hero shows current bio/tagline
- [x] Skills include recent tech (shadcn, Vitest, etc.)
- [x] Projects link to GitHub repos (6 projects with PR links)
- [x] Guides show Gumroad products (6 guides with placeholder URLs)
- [x] Contact info is accurate

### Technical Verification
- [x] Page loads in < 2 seconds
- [x] Responsive on mobile
- [x] Dark theme renders correctly
- [x] Links work properly

### Build Verification
- [x] `npm run build` completes without errors
- [x] `dist/` folder created
- [x] `dist/index.html` exists
- [x] `dist/assets/` contains JS/CSS files

---

## 📁 Build Output

```
playground/dist/
├── index.html          # Main HTML file
└── assets/
    ├── index-Dj39BEhE.js      # 1.12MB JS (316KB gzipped)
    └── index-BTPEiazE.css      # 8.75KB CSS
```

**Total:** ~1.12MB | **Gzipped:** ~325KB

---

## 🌐 After Deployment

### Verify Success
1. Visit: https://peterpcw.github.io
2. Check all pages load correctly
3. Test mobile responsiveness
4. Verify project links work
5. Check contact email renders

### Common Issues

| Issue | Solution |
|-------|----------|
| 404 on page load | Ensure `index.html` is in root of repo |
| Missing CSS | Check `dist/assets/` copied correctly |
| Icons broken | Verify `lucide` icons imported in App.tsx |
| Links 404 | Update repo URLs in src/App.tsx |

---

## 📝 Update Frequency

- **Projects:** Update when new PRs merged
- **Skills:** Update when learning new tech
- **Guides:** Update when new products released
- **Bio:** Update annually or on major career changes

---

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules/.vite
npm run build
```

### Preview Not Working
```bash
npm run preview -- --host 0.0.0.0
```

### Deployment Not Showing
1. Check GitHub repo Settings → Pages → Source
2. Ensure branch is `main` (or `gh-pages`)
3. Wait 2-5 minutes for GitHub to publish
4. Clear browser cache

---

*Part of: portfolio-site*
