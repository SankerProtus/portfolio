import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
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

export default function Experience({ experience }) {
  return (
    <Section id="experience" className="py-32 px-6 bg-dark-850">
      <div className="max-w-5xl mx-auto">
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
            Experience & Education
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mb-16"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan hidden md:block" />

            <div className="space-y-12">
              {experience.map((item) => (
                <motion.div
                  key={item.role}
                  variants={fadeInUp}
                  className="relative md:pl-24"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-accent-blue rounded-full border-4 border-dark-850 hidden md:block" />

                  <div className="glass-effect rounded-2xl p-8 hover-lift hover:shadow-glow-sm transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg">
                        {item.type === "leadership" ? (
                          <Briefcase className="w-6 h-6 text-accent-blue" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-accent-purple" />
                        )}
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {item.role}
                        </h3>
                        <p className="text-accent-blue font-medium mb-1">
                          {item.organization}
                        </p>
                        <p className="text-sm text-gray-400">{item.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
