import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
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

export default function Contact({ handleContactSubmit, formStatus }) {
  return (
    <Section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Let's Build Something Great
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mb-12 mx-auto"
          />

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 mb-16 text-center max-w-2xl mx-auto"
          >
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to connect, I'd love to hear from you.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:sankerprotus04@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg">
                    <Mail className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-accent-blue transition-colors">
                      Email
                    </p>
                    <p className="text-gray-400 text-sm">
                      sankerprotus04@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/SankerProtus"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg">
                    <Github className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-accent-blue transition-colors">
                      GitHub
                    </p>
                    <p className="text-gray-400 text-sm">@SankerProtus</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/sankerprotus-mwinwieme"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg">
                    <Linkedin className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-accent-blue transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-gray-400 text-sm">
                      Sanker Protus Mwinwieme
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  whileHover={{ scale: formStatus === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === "loading" ? 1 : 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-semibold text-white shadow-glow-md hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <Send className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
                {formStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Failed to send message. Please try again or email directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
