"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const themeContext = useTheme();
  const theme = themeContext?.theme || "light";
  const toggleTheme = themeContext?.toggleTheme || (() => {});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "skills", label: "Skills", href: "/skills" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "certifications", label: "Certifications", href: "/certifications" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <span className="gradient-text font-space hidden md:inline tracking-tight">
              Vinay Sai
            </span>
          </motion.button>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.id} href={item.href}>
                <motion.button
                  whileHover={{ y: -2, color: "#769e1f" }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-lime-700 dark:text-lime-300 border-b-2 border-lime-700 dark:border-lime-300"
                      : "text-panda-black dark:text-panda-white hover:text-lime-700 dark:hover:text-lime-300"
                  }`}
                >
                  {item.label}
                </motion.button>
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm font-semibold text-panda-black dark:text-panda-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "Dark" : "Light"}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl text-panda-black dark:text-panda-white"
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
          <div className="glass rounded-xl p-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.id} href={item.href}>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full text-left px-4 py-2 font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-lime-700 dark:text-lime-300 bg-lime-50 dark:bg-lime-900/30"
                        : "text-panda-black dark:text-panda-white hover:text-lime-700 dark:hover:text-lime-300 hover:bg-lime-50 dark:hover:bg-lime-900/20"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                </Link>
              );
            })}

            {/* Theme Toggle in Mobile Menu */}
            <div className="border-t border-gray-300 dark:border-gray-700 pt-3 mt-2">
              <motion.button
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-left px-4 py-2 font-medium text-panda-black dark:text-panda-white hover:text-lime-700 dark:hover:text-lime-300 hover:bg-lime-50 dark:hover:bg-lime-900/20 rounded-lg transition-colors flex items-center gap-3"
              >
                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
