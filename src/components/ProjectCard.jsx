import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-2xl overflow-hidden hover-lift hover:shadow-glow-sm transition-all group h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {project.icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/30 rounded-lg text-xs font-medium hover:bg-accent-blue/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-accent-blue/20 hover:shadow-xl hover:shadow-accent-blue/30 text-sm flex-1 justify-center"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-gray-700/20 hover:shadow-xl hover:shadow-gray-600/30 text-sm flex-1 justify-center"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
