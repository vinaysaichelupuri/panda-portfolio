"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-panda-black dark:bg-gray-950 text-panda-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <span className="text-4xl">🐼</span>
              <span className="text-2xl font-bold gradient-text">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-gray-400">{portfolioData.personal.title}</p>
            <p className="text-sm text-gray-500 mt-2">
              {portfolioData.personal.tagline}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-bamboo-400">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-bamboo-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-bamboo-400">
              Connect With Me
            </h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <motion.a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl hover:text-bamboo-400 transition-colors"
                aria-label="GitHub"
              >
                💻
              </motion.a>
              <motion.a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl hover:text-bamboo-400 transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </motion.a>
              <motion.a
                href={portfolioData.social.email}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl hover:text-bamboo-400 transition-colors"
                aria-label="Email"
              >
                📧
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {portfolioData.personal.name}. Built with 💚 and
            lots of bamboo.
          </p>
          <div className="mt-2 text-2xl">
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              🐼
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
