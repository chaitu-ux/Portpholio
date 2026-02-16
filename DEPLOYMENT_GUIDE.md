# Portfolio Deployment Guide

Your React Router v7 portfolio is ready for deployment! Here are several deployment options:

## Option 1: Netlify (Recommended)

### Method A: Drag & Drop (Easiest)
1. Build your project locally:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Drag the `build/client` folder to the Netlify deploy area
4. Your site will be live instantly with a random URL
5. You can change the site name in Site Settings

### Method B: Git Integration (Best for updates)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build/client`
   - Node version: 18
4. Deploy automatically on every push

## Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Build settings:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `build/client`

## Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build/client"
   ```
3. Run `npm run deploy`

## Option 4: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login` and `firebase init hosting`
3. Set public directory to `build/client`
4. Run `firebase deploy`

## Environment Variables (Optional)
If you want to set up the contact form with EmailJS:
1. Create a `.env` file based on `.env.example`
2. Add your EmailJS credentials
3. The contact form will work with real email sending

## Files Already Configured
✅ `netlify.toml` - Netlify configuration
✅ `package.json` - Build scripts
✅ `.env.example` - Environment template
✅ React Router v7 - Production-ready setup

Your portfolio includes:
- Modern React Router v7 with SSR
- Tailwind CSS v4 with custom animations
- Dark/light theme toggle
- Responsive design
- Professional sections (About, Projects, Skills, etc.)
- Contact form (ready for EmailJS integration)

Choose any deployment method above - your portfolio is ready to go live!
