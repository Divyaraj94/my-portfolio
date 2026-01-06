"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, [role='button']")) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, [role='button']")) {
        setIsHovering(false)
      }
    }

    // Add listeners
    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <>
{/* Dot */}
<motion.div
  className="fixed top-0 left-0 w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
  animate={{
    x: mousePosition.x - 8,
    y: mousePosition.y - 8,
    scale: isHovering ? 1.5 : 1,
  }}
  transition={{ type: "tween", ease: "linear", duration: 0 }}
/>

{/* Ring */}
<motion.div
  className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
  animate={{
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
    scale: isHovering ? 2 : 1,
    opacity: isHovering ? 0.8 : 0.5,
  }}
  transition={{ type: "spring", stiffness: 800, damping: 25 }}
/>

    </>
  )
}
