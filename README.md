# 🚀 Sanker Mwinwieme Protus - Premium Portfolio

A production-ready, premium portfolio website built with modern web technologies. Features advanced animations, dark-mode-first design, and a professional UX that positions you as a hire-ready full-stack developer.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=for-the-badge&logo=framer)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### Design & UX

- **Premium Dark-Mode Design**: Modern, minimalist aesthetic with mesh gradients and subtle animations
- **Scroll-Triggered Animations**: Smooth fade-in, scale, and stagger effects using Framer Motion
- **Responsive**: Mobile-first design that looks perfect on all devices
- **Glass Morphism**: Modern frosted glass effects with backdrop blur
- **Background Effects**: Subtle noise texture and gradient mesh backgrounds
- **Accessibility**: WCAG compliant with keyboard navigation and reduced-motion support

### Sections

- **Hero**: Impactful above-the-fold section with animated entrance and value proposition
- **About**: Professional summary with quick facts and social links
- **Skills**: Categorized tech stack with icon grids and hover animations
- **Projects**: Case-study approach with Problem → Solution → Outcome narrative
- **Experience**: Timeline layout with achievements and measurable impact
- **Contact**: Professional contact form with direct links to email, GitHub, and LinkedIn

### Technical

- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Performance**: Optimized assets, lazy loading, and fast Lighthouse scores
- **Modern Stack**: React 18, Framer Motion, Tailwind CSS v3
- **Type Safety Ready**: Clean component architecture ready for TypeScript migration

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Animation**: Framer Motion 11.x
- **Styling**: Tailwind CSS 3.4 (Custom Design System)
- **Build Tool**: Vite 5.0
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd sankprotus-portfolio
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
     base: "/repository-name/",
     // ... rest of config
   });
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
