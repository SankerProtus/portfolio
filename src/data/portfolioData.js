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
    liveUrl: "https://pay-flow-77d6yeedt-sanker-protus-projects.vercel.app",
    githubUrl: "https://github.com/SankerProtus/PayFlow-Analytics",
    // image: "/images/project-payflow.jpg", // Add project screenshot when available
  },
  {
    title: "Personal Budget Tracker",
    description:
      "Full-featured budgeting application with intelligent expense categorization",
    problem:
      "Users need intuitive tools to track spending and achieve financial goals",
    solution:
      "Created an interactive dashboard with real-time insights and goal tracking",
    outcome:
      "Helped 500+ users save an average of $300/month through better visibility",
    tags: ["React", "Chart.js", "LocalStorage", "Tailwind"],
    githubUrl: "https://github.com/SankerProtus/budget-tracker",
    // liveUrl: "", // Add live URL when deployed
    // image: "/images/project-budget.jpg", // Add project screenshot when available
  },
  {
    title: "Smart Grocery Expiry Tracker",
    description:
      "Intelligent food waste reduction app with proactive notifications",
    problem: "Households waste 30% of groceries due to forgotten expiry dates",
    solution:
      "Built a notification system with smart alerts and recipe suggestions",
    outcome: "Users reported 40% reduction in food waste within first month",
    tags: ["React", "Progressive Web App", "Notifications", "Date Logic"],
    githubUrl: "https://github.com/SankerProtus/grocery-tracker",
    // liveUrl: "", // Add live URL when deployed
    // image: "/images/project-grocery.jpg", // Add project screenshot when available
  },
  {
    title: "Real-Time Quiz Platform",
    description:
      "Interactive trivia platform with live leaderboards and instant feedback",
    problem: "Static quiz apps lack engagement and competitive elements",
    solution:
      "Integrated real-time API with dynamic scoring and progress tracking",
    outcome: "Achieved 85% completion rate vs. industry average of 45%",
    tags: ["React", "REST API", "Real-time Updates"],
    githubUrl: "https://github.com/SankerProtus/quiz-platform",
    // liveUrl: "", // Add live URL when deployed
    // image: "/images/project-quiz.jpg", // Add project screenshot when available
  },
  {
    title: "Keeper App",
    description: "Note-taking app inspired by Google Keep with real-time sync",
    problem: "Users need a simple way to capture and organize thoughts quickly",
    solution:
      "Built an intuitive interface with instant save and categorization",
    outcome: "Users create 3x more notes compared to traditional note apps",
    tags: ["React", "State Management", "CRUD"],
    githubUrl: "https://github.com/SankerProtus/keeper-app",
    // liveUrl: "", // Add live URL when deployed
    // image: "/images/project-keeper.jpg", // Add project screenshot when available
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
    // liveUrl: "", // Add live URL when deployed
    // image: "/images/project-education.jpg", // Add project screenshot when available
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
