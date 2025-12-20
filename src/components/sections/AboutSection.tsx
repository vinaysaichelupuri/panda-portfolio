"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PandaCharacter from "../PandaCharacter";
import { fadeInUp, slideInLeft, slideInRight } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-20">🎋</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-20">🎋</div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 font-space"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-1 bg-lime-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Coding Panda */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={slideInLeft}
            className="flex justify-center"
          >
            <motion.img
              src="/images/panda-coding.png"
              alt="Coding Panda"
              className="max-w-sm w-full h-auto object-contain cursor-pointer"
              whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right: About Text */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={slideInRight}
            className="space-y-6"
          >
            <motion.div
              className="glass p-8 rounded-2xl"
              whileHover={{ scale: 1.02, rotate: [0, 1, -1, 0] }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-lime-600 dark:text-lime-400">
                Who Am I? 🐼
              </h3>
              <p className="text-lg text-panda-gray dark:text-gray-300 leading-relaxed">
                {portfolioData.personal.bio}
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-lime-600 dark:text-lime-400">
                Education 📚
              </h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-xl font-semibold text-panda-black dark:text-panda-white">
                    {edu.degree}
                  </h4>
                  <p className="text-lime-600 dark:text-lime-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-panda-gray dark:text-gray-400">
                    {edu.period}
                  </p>
                  <p className="text-panda-gray dark:text-gray-300 mt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.1, y: -8, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="glass p-6 rounded-xl text-center cursor-pointer"
              >
                <div className="text-3xl mb-2 animate-bounce-slow">💼</div>
                <div className="text-2xl font-bold text-lime-600 dark:text-lime-400">
                  {portfolioData.experience.length}+
                </div>
                <div className="text-sm text-panda-gray dark:text-gray-400">
                  Years Exp
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, y: -8, rotate: -360 }}
                transition={{ duration: 0.5 }}
                className="glass p-6 rounded-xl text-center cursor-pointer"
              >
                <div className="text-3xl mb-2 animate-pulse-slow">🚀</div>
                <div className="text-2xl font-bold text-lime-600 dark:text-lime-400">
                  {portfolioData.projects.length}+
                </div>
                <div className="text-sm text-panda-gray dark:text-gray-400">
                  Projects
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, y: -8, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.3 }}
                className="glass p-6 rounded-xl text-center cursor-pointer"
              >
                <div className="text-3xl mb-2 animate-wiggle">☕</div>
                <div className="text-2xl font-bold text-lime-600 dark:text-lime-400">
                  ∞
                </div>
                <div className="text-sm text-panda-gray dark:text-gray-400">
                  Coffee Cups
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
