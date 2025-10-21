#!/bin/bash

# Quick deploy script for personal website
echo "🚀 Deploying changes to galentopper.com..."
echo ""

# Check if there are changes
if git diff-index --quiet HEAD --; then
    echo "⚠️  No changes detected"
else
    # Add all changes
    echo "📦 Adding changes to git..."
    git add .
    
    # Commit with message
    echo "💾 Committing changes..."
    read -p "Enter commit message: " message
    git commit -m "$message"
fi

# Deploy to Vercel
echo "🌐 Deploying to production..."
npx vercel --prod

echo ""
echo "✅ Deployment complete! Visit https://galentopper.com"
echo ""

