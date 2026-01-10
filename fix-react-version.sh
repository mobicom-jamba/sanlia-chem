#!/bin/bash

# Fix React version mismatch script
echo "🔧 Fixing React version mismatch..."

# Remove node_modules and lockfiles
echo "📦 Removing old dependencies..."
rm -rf node_modules
rm -f yarn.lock package-lock.json

# Clear Vite cache
echo "🧹 Clearing Vite cache..."
rm -rf node_modules/.vite
rm -rf .vite

# Reinstall dependencies
echo "⬇️  Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
elif command -v npm &> /dev/null; then
    npm install
else
    echo "❌ Error: Neither yarn nor npm found. Please install one of them."
    exit 1
fi

# Verify versions
echo "✅ Verifying installed versions..."
if [ -f node_modules/react-dom/package.json ]; then
    REACT_DOM_VERSION=$(grep '"version"' node_modules/react-dom/package.json | head -1 | cut -d'"' -f4)
    echo "   react-dom version: $REACT_DOM_VERSION"
    if [ "$REACT_DOM_VERSION" != "18.2.0" ]; then
        echo "⚠️  Warning: react-dom version is $REACT_DOM_VERSION, expected 18.2.0"
        echo "   Try running: yarn add react-dom@18.2.0 --exact"
    else
        echo "✅ react-dom version is correct!"
    fi
else
    echo "❌ Error: react-dom not found in node_modules"
fi

if [ -f node_modules/react/package.json ]; then
    REACT_VERSION=$(grep '"version"' node_modules/react/package.json | head -1 | cut -d'"' -f4)
    echo "   react version: $REACT_VERSION"
    if [ "$REACT_VERSION" != "18.2.0" ]; then
        echo "⚠️  Warning: react version is $REACT_VERSION, expected 18.2.0"
        echo "   Try running: yarn add react@18.2.0 --exact"
    else
        echo "✅ react version is correct!"
    fi
else
    echo "❌ Error: react not found in node_modules"
fi

echo ""
echo "✨ Done! Now restart your dev server:"
echo "   yarn dev"
echo "   or"
echo "   npm run dev"

