"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer({
  brandName = "Divyaraj",
  quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  socialLinks = [
    { icon: Github, href: "https://github.com/Divyaraj94", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/divyarajsinh-chudasama-250b19319/", label: "LinkedIn" },
    // { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  ],
  contactInfo = {
    email: "92divyarajsinh@gmail.com",
    phone: "+91 6354668920",
    address: "ahmedabad",
  },
}) {
  // Hydration-safe current year
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Back to top safe handling
  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black/90 text-gray-300 py-12 px-6 md:px-20 overflow-hidden border-t border-gray-800">
      <div className="grid md:grid-cols-4 gap-8 relative z-10">
        {/* Brand */}
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {brandName}
          </h2>
          <p className="text-sm mt-2">
            Thanks for visiting my portfolio. Let’s connect!
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-purple-400">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-purple-400 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-purple-400">Follow Me</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-purple-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-purple-400">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> {contactInfo.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> {contactInfo.phone}
            </li>
            {contactInfo.address && (
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {contactInfo.address}
              </li>
            )}
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {currentYear ?? ""} {brandName}. All rights reserved.
      </div>

      {/* Back to Top */}
      <button
        onClick={handleBackToTop}
        aria-label="Back to Top"
        className="absolute bottom-6 right-6 bg-purple-500/20 hover:bg-purple-500/40 p-3 rounded-full transition-colors"
      >
        <ArrowUp className="w-5 h-5 text-purple-400" />
      </button>
    </footer>
  );
}
