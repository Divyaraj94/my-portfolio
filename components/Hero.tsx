"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import StarField from "@/components/StarField";

interface HeroProps {
  name?: string;
  subtitle?: string;
  description?: string;
  ctas?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    ariaLabel?: string;
    primary?: boolean;
  }[];
  color?: string;
  enableStarField?: boolean;
}

export default function Hero({
  name = "Divyaraj",
  subtitle = "I build web experiences that feel like magic",
  description = "Frontend developer passionate about creating innovative digital solutions that push the boundaries of what's possible on the web.",
  ctas = [
    {
      label: "Explore My Work",
      href: "#about",
      ariaLabel: "Scroll to About section",
      primary: true,
    },
    {
      label: "Download Resume",
      href: "#resume",
      icon: <Download className="w-5 h-5" />,
      ariaLabel: "Download my resume",
    },
  ],
  color = "purple",
  enableStarField = true,
}: HeroProps) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Optional Background Effects */}
      {enableStarField && <StarField />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Heading */}
        <motion.h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Hey, I'm </span>
          <span
            className={`bg-gradient-to-r from-${color}-400 to-${color}-600 bg-clip-text text-transparent`}
          >
            {name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={`text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle.includes("magic") ? (
            <>
              {subtitle.split("magic")[0]}
              <span className={`text-${color}-400 font-semibold`}>magic</span>
              {subtitle.split("magic")[1]}
            </>
          ) : (
            subtitle
          )}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {ctas.map((cta) => (
            <motion.button
              key={cta.label}
              aria-label={cta.ariaLabel || cta.label}
              onClick={() =>
                cta.href.startsWith("#") ? scrollTo(cta.href) : window.open(cta.href, "_blank")
              }
              className={`group relative px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 overflow-hidden transition-all ${
                cta.primary
                  ? `bg-gradient-to-r from-${color}-500 to-${color}-600 text-white`
                  : `border-2 border-${color}-500 text-${color}-400 hover:bg-${color}-500 hover:text-white`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cta.icon && <span className="flex items-center">{cta.icon}</span>}
              <span className="relative z-10">{cta.label}</span>
              {cta.primary && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-${color}-600 to-${color}-700 opacity-0`}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
