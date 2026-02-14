import { Code, Database, Wrench } from "lucide-react";

// Navigation Items
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// Projects Data
export const projects = [
  {
    title: "PayFlow Analytics Dashboard",
    description:
      "Enterprise-grade SaaS analytics platform processing millions of subscription events monthly",
    problem:
      "Businesses struggle to understand subscription metrics and predict churn",
    solution:
      "Built a real-time analytics dashboard with interactive visualizations and predictive insights",
    outcome:
      "Enabled data-driven decisions reducing churn by 23% for pilot users",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js", "Express", "PL/pgSQL"],
    featured: true,
    liveUrl: "https://payflow-analytics-ochre.vercel.app/",
    githubUrl: "https://github.com/SankerProtus/payflow_analytics",
    image: "/screenshots/project-payflow.png",
  },
  {
    title: "Modern Education Website",
    description:
      "Responsive multi-page education platform with course management",
    problem:
      "Educational institutions need modern web presence for student engagement",
    solution:
      "Developed responsive website with clean design and intuitive navigation",
    outcome: "Improved student engagement by 60% in first semester",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    githubUrl: "https://github.com/SankerProtus/education-website",
    liveUrl: "https://education-website-pearl.vercel.app/",
    image: "/screenshots/project-education.png",
  },
  {
    title: "IP Address Tracker",
    description:
      "Interactive IP Address Tracker that allows users to search for any IP address and view its geolocation information",
    problem:
      "Users need a quick way to identify IP address locations and ISP information for security and analytics purposes",
    solution:
      "Built an intuitive interface with real-time IP lookup displaying location details, timezone, ISP, and interactive Leaflet maps",
    outcome:
      "Provides instant geolocation insights with precise map visualization for any IP address worldwide",
    tags: ["React", "Vite", "Leaflet.js", "Geolocation API", "Responsive"],
    githubUrl: "https://github.com/SankerProtus/ip_address_tracker",
    liveUrl: "https://ip-address-tracker-sooty-five.vercel.app/",
    image: "/screenshots/project-iptracker.png",
  },
  {
    title: "Keeper App",
    description:
      "Full-stack note-taking application inspired by Google Keep with CRUD operations and auto-save functionality",
    problem:
      "Users need a simple, intuitive way to create and manage quick notes without complex interfaces",
    solution:
      "Built a React-based note-taking app with Express REST API and PostgreSQL backend for persistent storage with Material-UI components",
    outcome:
      "Delivered a responsive note management system with create, edit, delete features and auto-collapse functionality for improved UX",
    tags: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Material-UI",
      "Vite",
      "REST API",
    ],
    githubUrl: "https://github.com/SankerProtus/keeper-app",
    liveUrl: "https://keeper-app-eta-ten.vercel.app/",
    image: "/screenshots/project-keeper.png",
  },
  {
    title: "Quiz App",
    description:
      "Interactive quiz application with multiple-choice questions, real-time scoring, and instant feedback",
    problem:
      "Users need an engaging platform to test knowledge across various topics with immediate results",
    solution:
      "Built a React quiz app with component state management, dynamic question flow, and comprehensive score calculation with answer review",
    outcome:
      "Created an educational tool with reusable question components, percentage-based scoring, and detailed answer review functionality",
    tags: ["React", "Vite", "CSS3", "Component State", "Responsive"],
    githubUrl: "https://github.com/SankerProtus/quiz-app",
    liveUrl: "https://quiz-app-olive-two-39.vercel.app/",
    image: "/screenshots/project-quiz.png",
  },
];

// Skills Data
export const skills = {
  frontend: {
    title: "Frontend Development",
    icon: Code,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },
  backend: {
    title: "Backend & Databases",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
      "PL/pgSQL",
    ],
  },
  tools: {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Vite",
      "VS Code",
      "Vercel",
      "npm/yarn",
      "Chrome DevTools",
    ],
  },
};

// Experience Data
export const experience = [
  {
    role: "Public Relations Officer",
    organization: "Nandom Students' Union (KNUST Chapter)",
    period: "2024 – Present",
    type: "leadership",
    description:
      "Leading digital communication strategy and stakeholder engagement for 200+ member organization",
    achievements: [
      "Increased social media engagement by 150% through strategic content planning",
      "Coordinated 5+ major events with 100% on-time delivery",
    ],
  },
  {
    role: "Volunteer Teacher",
    organization: "FIC Jubilee School, Nandom",
    period: "2019 – 2022",
    type: "education",
    description:
      "Delivered foundational education in mathematics and English to primary students",
    achievements: [
      "Improved student comprehension scores by 35% over 3 years",
      "Developed interactive learning materials adopted school-wide",
    ],
  },
  {
    role: "Self-Directed Learning",
    organization: "Full-Stack Development",
    period: "2023 – Present",
    type: "education",
    description:
      "Intensive study through Frontend Masters, Udemy, and Scrimba platforms",
    achievements: [
      "Completed 15+ professional certifications",
      "Built 20+ production-ready projects",
      "Contributing to open-source projects",
    ],
  },
];

// Personal Information
export const personalInfo = {
  name: "Sanker Mwinwieme Protus",
  title: "Full-Stack Web Developer",
  email: "sankerprotus04@gmail.com",
  github: "https://github.com/SankerProtus",
  linkedin: "https://www.linkedin.com/in/sankerprotus-mwinwieme",
  location: "Kumasi, Ghana",
  availability: "Open for full-time opportunities",
  profileImage: "../../public/images/profile.jpeg",
};
