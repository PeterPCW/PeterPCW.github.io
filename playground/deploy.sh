#!/bin/bash

# Portfolio Site Deployment Script
# Usage: ./deploy.sh

set -e

# Configuration
SOURCE_DIR="/home/peterwsl/clawd/projects/portfolio-site/playground/dist"
TARGET_DIR="$HOME/PeterPCW.github.io"
BRANCH="main"

echo "🚀 Portfolio Site Deployment"
echo "============================"

# 1. Verify build exists
if [ ! -f "$SOURCE_DIR/index.html" ]; then
    echo "❌ Build not found. Running build first..."
    cd /home/peterwsl/clawd/projects/portfolio-site/playground
    npm run build
fi

echo "✅ Build verified: $SOURCE_DIR"

# 2. Check target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Target directory not found: $TARGET_DIR"
    echo "   Please clone the repo first:"
    echo "   git clone git@github.com:PeterPCW/PeterPCW.github.io.git $TARGET_DIR"
    exit 1
fi

echo "✅ Target directory: $TARGET_DIR"

# 3. Navigate to target and copy files
cd "$TARGET_DIR"
echo "📦 Copying build files..."
cp -r "$SOURCE_DIR"/* .
cp -r "$SOURCE_DIR"/.gitkeep . 2>/dev/null || true

# 4. Show what changed
echo ""
echo "📊 Changes detected:"
git status --short

# 5. Commit and push (if there are changes)
if [ -n "$(git status --porcelain)" ]; then
    echo ""
    echo "💾 Committing changes..."
    git add -A
    git commit -m "Update portfolio - $(date +'%Y-%m-%d %H:%M')"

    echo ""
    echo "🚀 Pushing to GitHub..."
    git push origin "$BRANCH"

    echo ""
    echo "✅ Deployment initiated!"
    echo "   Visit https://peterpcw.github.io in 2-5 minutes"
else
    echo ""
    echo "ℹ️  No changes to deploy."
fi

echo ""
echo "📝 Done!"
