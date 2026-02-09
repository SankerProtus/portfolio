import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";
import Section from "./Section";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills({ skills }) {
  return (
    <Section id="skills" className="py-32 px-6 bg-dark-850">
      <div className="max-w-6xl mx-auto">
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
            Skills & Tools
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mb-12"
          />

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 mb-16 max-w-3xl"
          >
            Modern tech stack focused on building scalable, performant web
            applications
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(skills).map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-2xl p-8 hover-lift hover:shadow-glow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg text-accent-blue">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
