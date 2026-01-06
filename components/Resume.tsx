"use client"

import { motion } from "framer-motion"
import { Download, FileText, Star } from "lucide-react"

export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Path to your resume PDF
    link.download = "Resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          className="bg-gray-800/30 rounded-2xl p-8 md:p-12 border border-gray-700 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Resume Preview */}
          <div className="mb-8">
            <motion.div
              className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-16 h-16 text-white" />
            </motion.div>

            <h3 className="text-2xl font-semibold mb-4 text-white"> It's mine resume to see </h3>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Download my complete resume to learn more about my experience, skills, education, and achievements in web
              development and design.
            </p>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Star, title: "6 months", subtitle: "Experience" },
              { icon: Star, title: "0", subtitle: "Completed" },
              { icon: Star, title: "2", subtitle: "Satisfied" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg border border-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-xl font-bold text-white">{item.title}</div>
                <div className="text-sm text-gray-400">{item.subtitle}</div>
              </motion.div>
            ))}
          </div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="w-6 h-6" />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            
          </motion.button>

          <p className="text-sm text-gray-500 mt-4">PDF • 97 kb • Last updated: October 2025</p>
        </motion.div>
      </div>
    </section>
  )
}
