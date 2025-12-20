"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PandaCharacter from "../PandaCharacter";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";
import PandaButton from "../PandaButton";

export default function HeroSection() {
  const [showWalkingPanda, setShowWalkingPanda] = useState(false);

  useEffect(() => {
    setShowWalkingPanda(true);
    const timer = setTimeout(() => {
      setShowWalkingPanda(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50/95 via-white/90 to-lime-100/95 dark:from-panda-black/90 dark:via-gray-900/80 dark:to-lime-900/90" />

      {/* Walking panda animation */}
      {showWalkingPanda && (
        <motion.div
          initial={{ x: "-100%", y: "50%" }}
          animate={{ x: "100vw", y: "50%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="absolute bottom-0 text-8xl z-10"
        >
          🐼
        </motion.div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center md:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lime-600 dark:text-lime-400 font-semibold text-lg animate-pulse-slow">
                👋 Hi there!
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-4 font-space"
            >
              {portfolioData.personal.name}
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl mb-6 gradient-text font-semibold"
            >
              {portfolioData.personal.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-8 text-panda-gray dark:text-gray-300"
            >
              {portfolioData.personal.tagline}
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 mb-8 justify-center md:justify-start"
            >
              {Object.entries(portfolioData.social).map(([key, url]) => (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                >
                  {key === "github" && "💻"}
                  {key === "linkedin" && "💼"}
                  {key === "twitter" && "🐦"}
                  {key === "email" && "📧"}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <PandaButton href="#projects" variant="primary">
                View My Work ✨
              </PandaButton>

              <PandaButton href="#contact" variant="secondary">
                Get In Touch 💬
              </PandaButton>
            </motion.div>
          </motion.div>

          {/* Right: Panda Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex justify-center"
          >
            <PandaCharacter
              type="waving"
              enableEasterEgg
              className="max-w-md"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-4xl z-10"
      >
        ⬇️
      </motion.div>
    </section>
  );
}
