import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animate-float-rotate">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Radial Gradient for Circle 1 */}
            <radialGradient id="glow1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </radialGradient>

            {/* Radial Gradient for Circle 2 */}
            <radialGradient id="glow2" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
            </radialGradient>

            {/* Radial Gradient for Circle 3 */}
            <radialGradient id="glow3" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Circle 1 - Pulsing 50 to 150 over 8 seconds */}
          <circle cx="300" cy="200" r="50" fill="url(#glow1)">
            <animate
              attributeName="r"
              values="50;150;50"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Circle 2 - Pulsing 40 to 120 over 6 seconds */}
          <circle cx="800" cy="500" r="40" fill="url(#glow2)">
            <animate
              attributeName="r"
              values="40;120;40"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Circle 3 - Pulsing 60 to 180 over 10 seconds */}
          <circle cx="1000" cy="150" r="60" fill="url(#glow3)">
            <animate
              attributeName="r"
              values="60;180;60"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-accent-blue font-medium mb-4 tracking-wider uppercase text-sm"
          >
            Full-Stack Web Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Sanker Mwinwieme
            <br />
            <span className="text-gradient">Protus</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I build production-ready web applications that solve real problems
            and deliver measurable business value
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-semibold text-white shadow-glow-md hover:shadow-glow-lg transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 glass-effect rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ChevronDown className="w-10 h-10 text-accent-blue" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
