#!/bin/bash

echo "🚀 Deploying Galen Topper's Portfolio to Vercel..."
echo ""

# Initialize git if needed
if [ ! -d .git ]; then
    echo "📝 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Personal website"
fi

# Deploy to Vercel using npx (no installation required)
echo ""
echo "🌐 Deploying to Vercel..."
echo "📦 Using npx (no global installation needed)..."
npx vercel

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to vercel.com and login"
echo "2. Add your custom domain: galentopper.com"
echo "3. Update DNS records at your domain registrar"
echo ""

