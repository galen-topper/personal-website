# Galen Topper - Personal Portfolio Website

A modern, interactive personal portfolio website built with Node.js and Express. Features a sleek black aesthetic with animated visual elements.

## 🚀 Features

- **Modern Black Theme** - Clean, minimalist design with gradient accents
- **Interactive Animations** - Particle system, flowing waves, and gradient orbs
- **Responsive Design** - Works beautifully on all devices
- **Social Media Links** - Direct links to GitHub, LinkedIn, Instagram, and Facebook
- **Project Showcase** - Highlight your best AI/ML projects
- **Parallax Effects** - Smooth scrolling animations

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃 Running the Website

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The website will be available at:
- Local: http://localhost:3000
- Network: http://0.0.0.0:3000

## 📁 Project Structure

```
personal_website/
├── public/              # Static files served to the browser
│   ├── index.html      # Main HTML file
│   ├── styles.css      # All styling
│   └── script.js       # Interactive animations
├── server.js           # Express server
├── package.json        # Dependencies and scripts
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🎨 Customization

### Update Social Media Links
Edit the `href` attributes in `public/index.html` (lines 28-43):
```html
<a href="https://github.com/YOUR-USERNAME" ...>
<a href="https://linkedin.com/in/YOUR-USERNAME" ...>
```

### Add Your Photo
Replace the placeholder avatar in `public/index.html` (line 14):
```html
<img src="your-photo.jpg" alt="Galen Topper" class="profile-photo">
```

### Modify Projects
Edit the project cards in `public/index.html` (lines 51-106)

### Change Colors
Adjust CSS variables in `public/styles.css` (lines 9-16):
```css
:root {
    --bg-primary: #0a0a0a;
    --accent: #3b82f6;
    /* ... */
}
```

### Adjust Animations
Tweak animation parameters in `public/script.js`

## 🌐 Deployment

### Deploy to Production Server
1. Upload all files to your server
2. Install dependencies: `npm install --production`
3. Start the server: `npm start`
4. Set up a process manager like PM2 for production:
   ```bash
   npm install -g pm2
   pm2 start server.js --name portfolio
   ```

### Deploy to Cloud Platforms

#### Heroku
```bash
heroku create
git push heroku main
```

#### Vercel/Netlify
Simply connect your Git repository to these platforms.

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Galen Topper**
- AI/ML Engineer from Stanford
- GitHub: [@galen-topper](https://github.com/galen-topper)

---

Built with ❤️ using Node.js, Express, and vanilla JavaScript

