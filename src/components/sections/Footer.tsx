"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gray-200/80 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 backdrop-blur-xl text-panda-black dark:text-panda-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold gradient-text font-space tracking-tight">
              {portfolioData.personal.name}
            </span>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              {portfolioData.personal.title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto md:mx-0">
              {portfolioData.personal.tagline}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
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
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              Connect
            </h3>
            <div className="flex gap-3 justify-center md:justify-end">
              <motion.a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold hover:border-lime-700 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </motion.a>
              <motion.a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold hover:border-lime-700 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href={portfolioData.social.email}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold hover:border-lime-700 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
                aria-label="Email"
              >
                Email
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
