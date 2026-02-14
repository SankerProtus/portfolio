import React from "react";
import { motion } from "framer-motion";
import { Download, Award, Mail, Github, Linkedin } from "lucide-react";
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

export default function About() {
  return (
    <Section id="about" className="py-32 px-6">
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
            About Me
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a full-stack developer who transforms business challenges
                into elegant, scalable web solutions. My approach combines
                technical precision with user-centric design to deliver products
                that users love and businesses depend on.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise spanning modern React ecosystems, Node.js
                backends, and PostgreSQL databases, I build end-to-end
                applications that handle real-world complexity while maintaining
                clean, maintainable code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about continuous learning, contributing to open
                source, and staying current with industry best practices.
                Currently seeking opportunities to join forward-thinking teams
                building products that matter.
              </p>

              <motion.a
                href="/cv/cv.pdf"
                download="Sanker_Protus_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="glass-effect rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent-blue" />
                  Quick Facts
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-gray-400">
                        Kumasi, Ghana (Open to Remote)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-white">Education</p>
                      <p className="text-gray-400">KNUST, Computer Science</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-white">Experience</p>
                      <p className="text-gray-400">
                        2+ years building production apps
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-white">Availability</p>
                      <p className="text-gray-400">
                        Open for full-time opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/SankerProtus"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-12 h-12 glass-effect rounded-lg hover:bg-white/10 transition-all"
                >
                  <Github className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/sankerprotus-mwinwieme"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-12 h-12 glass-effect rounded-lg hover:bg-white/10 transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="mailto:sankerprotus04@gmail.com"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-12 h-12 glass-effect rounded-lg hover:bg-white/10 transition-all"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
