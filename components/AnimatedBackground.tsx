"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function AnimatedBackground() {
  const particlesRef = useRef<Particle[]>([])
  const [, setTick] = useState(0) // dummy state to trigger occasional re-render
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return // disable animation for accessibility ♿

    // Create initial particles
    const initialParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }
    particlesRef.current = initialParticles

    let animationFrame: number

    const animateParticles = () => {
      const updated = particlesRef.current.map((p) => {
        let x = p.x + p.speedX
        let y = p.y + p.speedY

        // Wrap around screen edges 🌍
        if (x > window.innerWidth) x = 0
        if (x < 0) x = window.innerWidth
        if (y > window.innerHeight) y = 0
        if (y < 0) y = window.innerHeight

        return { ...p, x, y }
      })
      particlesRef.current = updated

      // trigger re-render every ~10 frames for React updates
      setTick((t) => (t + 1) % 10)

      animationFrame = requestAnimationFrame(animateParticles)
    }

    animationFrame = requestAnimationFrame(animateParticles)

    return () => cancelAnimationFrame(animationFrame)
  }, [prefersReducedMotion])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "10%", left: "10%" }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-gradient-to-r from-pink-600/15 to-purple-600/15 rounded-full blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "60%", right: "10%" }}
          />
        </>
      )}

      {/* Floating Particles */}
      {particlesRef.current.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-purple-400 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            opacity: p.opacity,
            width: p.size,
            height: p.size,
          }}
          animate={!prefersReducedMotion ? { scale: [1, 1.5, 1], opacity: [p.opacity, p.opacity * 1.5, p.opacity] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}
