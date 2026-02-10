import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects({ projects }) {
  return (
    <Section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mb-12"
          />

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 mb-16 max-w-3xl"
          >
            Real-world applications solving business problems and delivering
            measurable impact
          </motion.p>

          {/* Grid Layout */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
