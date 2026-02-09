# 🚀 Sanker Protus - Professional Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features smooth animations, professional design, and showcases projects, skills, and experience.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- **Modern Design**: Clean, professional UI with Professional Blue color scheme
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Custom animations and transitions for enhanced UX
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Interactive Sections**: 
  - Hero with social links
  - About with education and stats
  - Skills categorized by type
  - Featured projects showcase
  - Leadership & experience timeline
  - Contact section with multiple channels

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.0
- **Icons**: Lucide React
- **Font**: Space Grotesk (Google Fonts)

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Steps

1. **Clone or download this project**
   ```bash
   # If you have the files locally, navigate to the directory
   cd sanker-protus-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Optimized files will be in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   vercel
   ```
   Follow the prompts to deploy

3. **For updates**
   ```bash
   vercel --prod
   ```

**Or use Vercel Dashboard:**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel auto-detects Vite and deploys

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

**Or use Netlify Dashboard:**
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `dist` folder
- Or connect your GitHub repository

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (add to scripts):
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js** (add base):
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages** in repository settings

### Option 4: Traditional Web Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder contents** to your web hosting via FTP/SFTP

3. **Configure server** to serve `index.html` for all routes

## 📝 Customization

### Update Personal Information

Edit `/src/Portfolio.jsx`:

1. **Personal Details** (lines 25-30):
   - Update email, GitHub, LinkedIn URLs
   - Change location information

2. **Projects** (lines 45-85):
   - Add/remove projects
   - Update descriptions and tech stacks
   - Change project icons

3. **Skills** (lines 87-92):
   - Modify skill categories
   - Add/remove technologies

4. **Experience** (lines 99-110):
   - Update work experience
   - Add new positions

### Change Colors

Edit `/tailwind.config.js` or use Tailwind's color classes in components:
- Blue scheme: `blue-400`, `blue-600`, `cyan-400`, `cyan-600`
- Change to your preferred colors

### Modify Animations

Edit `/src/index.css` to customize animation timings and effects

## 📱 Sections Overview

1. **Home/Hero**: Introduction with name, role, and call-to-action buttons
2. **About**: Background, education, and key statistics
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured projects with descriptions and tech stacks
5. **Experience**: Leadership roles and work experience
6. **Contact**: Multiple ways to get in touch

## 🔧 Project Structure

```
sanker-protus-portfolio/
├── src/
│   ├── Portfolio.jsx       # Main portfolio component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles & animations
├── public/                # Public assets (if needed)
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🎨 Design Philosophy

This portfolio combines:
- **jalamp.dev's** clean, modern aesthetic
- **Professional structure** with comprehensive sections
- **Smooth animations** for enhanced user experience
- **Professional Blue** color scheme for tech industry appeal

## 📊 Performance

- ⚡ Lightning-fast load times with Vite
- 📦 Optimized bundle size
- 🎨 CSS-in-JS with Tailwind for minimal CSS
- 🖼️ No heavy images (uses emoji icons)
- 📱 Mobile-first responsive design

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs
- Suggest improvements
- Use as a template for your own portfolio

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Sanker Mwinwieme Protus**
- Email: sankerprotus04@gmail.com
- GitHub: [@SankerProtus](https://github.com/SankerProtus)
- LinkedIn: [Sanker Protus Mwinwieme](https://www.linkedin.com/in/sankerprotus-mwinwieme)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Font: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

---

**Made with ❤️ by Sanker Protus**

🌟 If you like this portfolio, give it a star on GitHub!
