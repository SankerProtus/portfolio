import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { navItems, projects, skills, experience } from "./data/portfolioData";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus(null);
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="relative min-h-screen text-gray-100">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Background Gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #0a0e27 0%, #070920 100%)",
        }}
      />
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Contact
        handleContactSubmit={handleContactSubmit}
        formStatus={formStatus}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
