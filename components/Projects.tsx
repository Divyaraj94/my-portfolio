"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import project1 from "../public/project1.png"


// Example projects data (replace with your real ones)
const projects = [
  {
    id: 1,
    title: "Interior Website",
    description: "This website showcases the creative work and portfolio of an interior designer in a professional and visually appealing manner.",
    image: "/project1.png",
    liveUrl: "https://interiordesigndc.netlify.app/",
    githubUrl: "https://github.com/Divyaraj94?tab=repositories",
    tags: ["React", "Node.js", "Tailwind CSS"],
    category: "Web", // ✅ Added
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "...",
    image: "/images/portfolio.webp",
    liveUrl: "...",
    githubUrl: "...",
    tags: ["React", "Framer Motion"],
    category: "Web", // ✅ Added
  },
  {
    id: 3,
    title: "AI Tool Explorer",
    description: "...",
    image: "/images/ai-tool.webp",
    liveUrl: "...",
    githubUrl: "...",
    tags: ["React", "Python"],
    category: "AI", // ✅ Added
  },
];


const categories = ["All", "Web", "AI", "Mobile"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "bg-gray-800 border-gray-600 text-gray-300"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
  <AnimatePresence>
    {filteredProjects.map((project) => (
      <motion.div
        key={project.id}
        layout // ✅ smooth layout transition
        initial={{ opacity: 0, y: 20 }} // fade/slide in
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }} // fade/slide out when filtered
        transition={{ duration: 0.3 }}
        className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/50 transition-shadow"
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live website`}
              className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>

      </div>
    </section>
  );
}

