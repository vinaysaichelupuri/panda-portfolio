"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const themeContext = useTheme();
  const theme = themeContext?.theme || "light";
  const toggleTheme = themeContext?.toggleTheme || (() => {});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <span className="text-3xl">🐼</span>
          <span className="gradient-text font-poppins hidden md:inline">
            Vinay Sai
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1, y: -2, color: "#84cc16" }}
              whileTap={{ scale: 0.95 }}
              className="text-panda-black dark:text-panda-white font-medium hover:text-lime-500 dark:hover:text-lime-400 transition-colors panda-cursor"
            >
              {item.label}
            </motion.button>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(132, 204, 22, 0.3)",
                "0 0 20px rgba(132, 204, 22, 0.6)",
                "0 0 10px rgba(132, 204, 22, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl panda-cursor rounded-full p-2"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - Toggleable */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 px-6"
        >
          <div className="glass rounded-lg p-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-left px-4 py-2 font-medium text-panda-black dark:text-panda-white hover:text-lime-500 dark:hover:text-lime-400 hover:bg-lime-50 dark:hover:bg-lime-900/20 rounded-lg transition-colors"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Theme Toggle in Mobile Menu */}
            <div className="border-t border-gray-300 dark:border-gray-700 pt-3 mt-2">
              <motion.button
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-left px-4 py-2 font-medium text-panda-black dark:text-panda-white hover:text-lime-500 dark:hover:text-lime-400 hover:bg-lime-50 dark:hover:bg-lime-900/20 rounded-lg transition-colors flex items-center gap-3"
              >
                <span className="text-2xl">
                  {theme === "light" ? "🌙" : "☀️"}
                </span>
                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
