import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code, Briefcase, Award, Users, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "PayFlow Analytics Dashboard",
      description: "Full-stack SaaS subscription analytics platform tracking MRR, churn rate, and failed payments with PostgreSQL backend and Chart.js visualizations.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js", "PL/pgSQL"],
      featured: true,
      icon: "💰"
    },
    {
      title: "Personal Budget Tracker",
      description: "Budgeting app with interactive data visualization, state management, and local storage persistence featuring expense insights and category tracking.",
      tags: ["React", "Chart.js", "Local Storage"],
      icon: "📊"
    },
    {
      title: "Quiz App (Trivia API)",
      description: "Interactive quiz platform that fetches questions from a public API, handles scoring logic, and displays progress dynamically.",
      tags: ["React", "API Integration", "Hooks"],
      icon: "🎯"
    },
    {
      title: "Smart Grocery Expiry Tracker",
      description: "App to monitor grocery expiry dates using date logic, notifications, and local storage, showcasing real-world impact.",
      tags: ["React", "Date Logic", "Notifications"],
      icon: "🛒"
    },
    {
      title: "Keeper App",
      description: "Note-taking app inspired by Google Keep, enabling users to create, edit, and delete notes with reusable components.",
      tags: ["React", "State Management", "CRUD"],
      icon: "📝"
    },
    {
      title: "Modern Education Website",
      description: "Responsive multi-page education website using Flexbox, Grid, and semantic HTML highlighting modern design skills.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      icon: "🎓"
    }
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design"],
    backend: ["Node.js", "Express.js", "Firebase", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Vite"],
    soft: ["Communication", "Teamwork", "Problem-Solving", "Adaptability", "Time Management"]
  };

  const certifications = [
    { name: "Express.js", provider: "Scrimba", year: "2025" },
    { name: "React Development", provider: "Frontend Masters & Udemy", year: "2025" },
    { name: "JavaScript Fundamentals", provider: "Udemy", year: "2023" }
  ];

  const experience = [
    {
      role: "Public Relations Officer",
      organization: "Nandom Students' Union (KNUST Chapter)",
      period: "2024 – Present",
      description: "Coordinating communication between union, students, and stakeholders. Leading information dissemination through digital platforms and events."
    },
    {
      role: "Volunteer Teacher",
      organization: "FIC Jubilee School, Nandom",
      period: "2019 – 2022",
      description: "Guided and mentored younger students in science, organized class activities, and engaged pupils through interactive learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-['Space_Grotesk']">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            SP
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-all duration-300 hover:text-blue-400 ${
                  activeSection === item.toLowerCase()
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg">
            <div className="px-6 py-4 flex flex-col gap-4">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center animate-fadeIn">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-blue-500/50 animate-bounce-slow">
              👨‍💻
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-slideInUp">
            Sanker Mwinwieme Protus
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slideInUp delay-100">
            Computer Science Student & Software Engineer
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-slideInUp delay-200">
            Building intuitive, responsive web interfaces with React.js and
            modern frameworks. Passionate about creating solutions that are both
            functional and impactful.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideInUp delay-300">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6 animate-slideInUp delay-400">
            <a
              href="https://github.com/SankerProtus"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sankerprotus-mwinwieme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sankerprotus04@gmail.com"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Computer Science student at{" "}
                <span className="text-blue-400 font-semibold">KNUST</span> with
                a strong passion for software engineering and front-end
                development. I specialize in building intuitive, responsive web
                interfaces using modern technologies.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My background in education has strengthened my communication and
                leadership abilities, enabling me to collaborate effectively and
                support others. I'm constantly learning and exploring new
                technologies with the long-term goal of becoming a versatile
                software engineer.
              </p>

              <div className="flex gap-4 pt-4">
                <div className="px-6 py-3 bg-blue-600/20 rounded-lg border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">6+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="px-6 py-3 bg-blue-600/20 rounded-lg border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">2027</div>
                  <div className="text-sm text-gray-400">Graduation</div>
                </div>
                <div className="px-6 py-3 bg-blue-600/20 rounded-lg border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">3</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg">
                      BSc. Computer Science
                    </h4>
                    <span className="text-sm text-gray-400">
                      Expected Sept 2027
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Kwame Nkrumah University of Science and Technology
                  </p>
                  <p className="text-sm text-gray-400">Kumasi, Ghana</p>
                </div>

                <div className="border-t border-blue-500/20 pt-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">
                      W.A.S.S.C.E (General Science)
                    </h4>
                    <span className="text-sm text-gray-400">2019 – 2022</span>
                  </div>
                  <p className="text-gray-300">Nandom Senior High School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600/10 to-transparent p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-400" size={28} />
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-600/20 rounded-full text-sm border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/10 to-transparent p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-cyan-400" size={28} />
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-600/20 rounded-full text-sm border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-transparent p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-400" size={28} />
                <h3 className="text-xl font-bold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-600/20 rounded-full text-sm border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/10 to-transparent p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-cyan-400" size={28} />
                <h3 className="text-xl font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-600/20 rounded-full text-sm border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-6 rounded-xl border border-blue-500/20 text-center hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <Award className="text-blue-400 mx-auto mb-3" size={32} />
                  <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                  <p className="text-gray-400 text-sm mb-1">{cert.provider}</p>
                  <p className="text-blue-400 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my development work, demonstrating expertise in
            full-stack development, clean architecture, and modern technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  project.featured ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className={`${project.featured ? "md:flex gap-8" : ""}`}>
                  <div className={`${project.featured ? "md:w-1/2" : ""}`}>
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`${project.featured ? "md:w-1/2 flex flex-col justify-between" : ""}`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 bg-blue-600/30 rounded-full text-xs font-medium border border-blue-500/30 group-hover:bg-blue-600/50 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.featured && (
                      <div className="mt-4">
                        <a
                          href="https://pay-flow-77d6yeedt-sanker-protus-projects.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <Github size={20} />
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/SankerProtus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
            >
              View All Projects on GitHub
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Leadership & Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-102"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-400">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-300">{exp.organization}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Build Together
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:sankerprotus04@gmail.com"
              className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <Mail className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">sankerprotus04@gmail.com</p>
            </a>

            <a
              href="https://github.com/SankerProtus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <Github className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@SankerProtus</p>
            </a>

            <a
              href="https://www.linkedin.com/in/sankerprotus-mwinwieme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <Linkedin className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Sanker Protus Mwinwieme</p>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sankerprotus04@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </a>
            <a
              href="https://github.com/SankerProtus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-4">
            © 2026 Sanker Mwinwieme Protus. All rights reserved.
          </p>
          <p className="text-sm">Built with React, Tailwind CSS, and ❤️</p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
