"use client"

import { motion } from "framer-motion"

interface LoadingScreenProps {
  title?: string
  loadingText?: string
  color?: string
  showProgress?: boolean
  progress?: number // 0-100
}

export default function LoadingScreen({
  title = "Portfolio",
  loadingText = "Initializing Experience...",
  color = "purple",
  showProgress = false,
  progress = 0,
}: LoadingScreenProps) {
  // Utility for color classes
  const borderColor = `border-${color}-500`
  const borderColorLight = `border-${color}-300`
  const textColor = `text-${color}-300`
  const bgColor = `bg-${color}-500`

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo/Name */}
        <motion.h1
          className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-${color}-400 to-${color}-600 bg-clip-text text-transparent mb-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Optimized Futuristic Spinner */}
        <div className="relative w-20 h-20 mx-auto">
          <motion.div
            className={`absolute inset-0 border-2 rounded-full ${borderColor}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className={`absolute inset-2 border-2 rounded-full border-t-transparent ${borderColorLight}`}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className={`absolute inset-4 rounded-full ${bgColor}`}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className={`${textColor} mt-6 text-lg`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {loadingText}
        </motion.p>

        {/* Optional Progress Bar */}
        {showProgress && (
          <div className="w-40 h-2 bg-gray-700 rounded-full mx-auto mt-4 overflow-hidden">
            <motion.div
              className={`h-full ${bgColor}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}
