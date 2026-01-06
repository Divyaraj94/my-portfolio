"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code, Palette, Zap, Heart } from "lucide-react";

interface Tool {
  name: string;
  icon: string;
}

interface Stat {
  icon: any;
  label: string;
  value: string;
}

interface AboutProps {
  bio?: string[];
  technologies?: string[];
  tools?: Tool[];
  stats?: Stat[];
  profileImage?: string;
}

export default function About({
  bio = [
    "I’m a curious techie exploring web development and design.",
    "I enjoy building clean, interactive sites and testing how AI can boost creativity and productivity.",
    "When I'm not coding, you'll find me exploring new technologies or enjoying a good cup of coffee while brainstorming."
  ],
  technologies = ["UI/UX", "React", "C", "Node.js", "Python", "MongoDB", "Prompt Engineering"],
  tools = [
    { name: "VS Code", icon: "/vs-logo.svg" },
    { name: "Figma", icon: "/figma-logo.svg" },
    { name: "Git", icon: "/git-logo.svg" },
    { name: "Gen AI", icon: "/ai-logo.png" },
    { name: "Android Studio", icon: "/studio-logo.svg" },
    { name: "Anaconda", icon: "/python-logo.svg" },
    { name: "VMWare", icon: "/linux-logo.png" },
  ],
  stats = [
    { icon: Code, label: "Projects", value: "1+" },
    { icon: Palette, label: "Designs", value: "7+" },
    { icon: Zap, label: "Experience", value: "6 months" },
    { icon: Heart, label: "Happy Clients", value: "2" },
  ],
  profileImage = "/profile.jpeg",
}: AboutProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {!reduceMotion && (
          <>
            <motion.div
              className="absolute w-64 h-64 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 rounded-full blur-3xl"
              animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "20%", right: "10%" }}
            />
            <motion.div
              className="absolute w-48 h-48 bg-gradient-to-r from-pink-600/5 to-purple-600/5 rounded-full blur-3xl"
              animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: "20%", left: "5%" }}
            />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden border-4 border-purple-500/30">
                <img
                  src={profileImage}
                  alt="Profile picture of Divyaraj"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">My Story</h3>
              {bio.map((line, idx) => (
                <p key={idx} className="text-gray-300 text-lg leading-relaxed mb-4">{line}</p>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 transition-all cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Tools I Use</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-400 hover:bg-purple-500/10 transition-all cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name + " logo"}
                      className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
