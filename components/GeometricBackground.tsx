"use client";

import { motion } from "framer-motion";

interface Shape {
  size: number;
  type?: "circle" | "square";
  color?: string;
  border?: boolean;
  gradient?: string;
  rotate?: number[];
  scale?: number[];
  opacity?: number[];
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration?: number;
  delay?: number;
}

interface GeometricBackgroundProps {
  shapes?: Shape[];
  disabledOnMobile?: boolean;
}

export default function GeometricBackground({
  shapes,
  disabledOnMobile = false,
}: GeometricBackgroundProps) {
  const defaultShapes: Shape[] = [
    // 🔹 Big square
    {
      size: 80,
      type: "square",
      border: true,
      color: "border-purple-500/20",
      rotate: [45, 405],
      scale: [1, 1.2, 1],
      opacity: [1, 1, 1],
      top: "20%",
      left: "15%",
      duration: 15,
    },
    // 🔹 Circle shapes
    {
      size: 64,
      type: "square",
      border: true,
      color: "border-cyan-500/20",
      rotate: [0, 360],
      scale: [1, 1, 1],
      opacity: [1, 1, 1],
      top: "60%",
      right: "20%",
      duration: 20,
    },
    {
      size: 48,
      type: "circle",
      gradient: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
      rotate: [45, -315],
      scale: [1, 0.5, 1],
      opacity: [1, 1, 1],
      bottom: "30%",
      left: "70%",
      duration: 12,
    },
  ];

  const finalShapes = shapes || defaultShapes;

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden ${
        disabledOnMobile ? "hidden sm:block" : ""
      }`}
    >
      {finalShapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${
            shape.border ? shape.color : shape.gradient || ""
          } ${shape.border ? "border" : ""} ${
            shape.type === "square" ? "" : "rounded-full"
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            rotate: shape.rotate,
            scale: shape.scale,
            opacity: shape.opacity,
          }}
          transition={{
            duration: shape.duration || 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: shape.delay || 0,
          }}
        />
      ))}
    </div>
  );
}
