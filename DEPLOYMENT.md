# Deploying galentopper.com

## 🚀 Option 1: Vercel (Recommended - Easiest)

### Setup Steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Login with GitHub/GitLab/Bitbucket or email
   - Confirm project settings

4. **Add Your Custom Domain:**
   - Go to your Vercel dashboard (vercel.com)
   - Select your project
   - Go to "Settings" → "Domains"
   - Add `galentopper.com` and `www.galentopper.com`
   - Vercel will provide DNS records

5. **Update DNS Settings at Your Domain Registrar:**
   Add these records (Vercel will show you exact values):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

**Pros:** 
- Free, automatic HTTPS, global CDN
- Auto-deploys on git push
- Zero configuration needed

---

## 🚀 Option 2: Netlify (Also Easy & Free)

### Setup Steps:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Create a build script in package.json:**
   Already set up! Your site is ready.

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Add Custom Domain:**
   - Go to netlify.com dashboard
   - Site settings → Domain management
   - Add custom domain: `galentopper.com`
   - Update DNS records as instructed

---

## 🚀 Option 3: Heroku (Good for Node.js)

### Setup Steps:

1. **Install Heroku CLI:**
   ```bash
   brew install heroku/brew/heroku
   ```

2. **Create Procfile:**
   ```bash
   echo "web: npm start" > Procfile
   ```

3. **Deploy:**
   ```bash
   heroku login
   heroku create galentopper
   git push heroku main
   ```

4. **Add Custom Domain:**
   ```bash
   heroku domains:add galentopper.com
   heroku domains:add www.galentopper.com
   ```
   
5. **Update DNS:**
   Add the DNS target provided by Heroku

**Note:** Heroku's free tier was discontinued. Paid plans start at $5/month.

---

## 🚀 Option 4: AWS/DigitalOcean (Full Control)

For complete control over your server:

### DigitalOcean Droplet:
1. Create a $5/month droplet (Ubuntu)
2. SSH into server
3. Install Node.js and PM2
4. Clone your repository
5. Set up Nginx as reverse proxy
6. Configure SSL with Let's Encrypt
7. Point A record to your droplet's IP

### DNS Configuration:
```
Type: A
Name: @
Value: YOUR_DROPLET_IP

Type: A
Name: www
Value: YOUR_DROPLET_IP
```

---

## 📝 DNS Record Examples

For most hosting providers, you'll need to add these at your domain registrar (where you bought galentopper.com):

### For Vercel/Netlify:
```
A Record:
  Host: @
  Points to: (provided by host)
  TTL: 3600

CNAME Record:
  Host: www
  Points to: (provided by host)
  TTL: 3600
```

---

## 🎯 Recommended: Use Vercel

For your use case, **Vercel is the best choice** because:
- ✅ Free forever plan
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast worldwide)
- ✅ Zero configuration
- ✅ Auto-deploy from Git
- ✅ Perfect for Node.js
- ✅ Easy custom domain setup

---

## 🚀 Quick Deploy with Vercel

Run these commands:

```bash
# Install Vercel
npm install -g vercel

# Initialize git (if needed)
git init
git add .
git commit -m "Initial commit"

# Deploy
vercel

# Follow prompts, then add your domain in the Vercel dashboard
```

After deployment, you'll get a URL like `your-project.vercel.app`. Then add `galentopper.com` in the Vercel dashboard under Domains.

---

## 📧 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Contact your domain registrar for DNS help

