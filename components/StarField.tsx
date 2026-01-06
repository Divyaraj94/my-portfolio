"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDelay: number;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // ✅ Generate stars only once on mount
  useEffect(() => {
    const starCount = window.innerWidth > 768 ? 100 : 50; // Desktop vs Mobile
    const newStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 1,
        twinkleDelay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  // ✅ Adjust positions proportionally on resize (no random jumping)
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          x: (star.x / screenSize.width) * newWidth,
          y: (star.y / screenSize.height) * newHeight,
        }))
      );

      setScreenSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full star"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 2 - 1, 0], // ✨ tiny drift X
            y: [0, Math.random() * 2 - 1, 0], // ✨ tiny drift Y
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}
      <style jsx global>{`
        .star {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
