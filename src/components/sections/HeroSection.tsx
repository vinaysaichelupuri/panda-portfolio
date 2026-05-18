"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";
import PandaButton from "../PandaButton";
import Lottie from "lottie-react";
import pandaAnimation from "@/assets/pandaAnimation.json";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-lime-100/40 dark:from-gray-950/90 dark:via-gray-900/70 dark:to-lime-950/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center md:text-left order-2 md:order-1"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center rounded-full border border-lime-700/30 bg-lime-50/80 px-4 py-1.5 text-sm font-semibold text-lime-800 dark:bg-lime-900/20 dark:text-lime-200">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-5 font-space tracking-tight"
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
              className="text-lg md:text-xl mb-10 text-panda-gray dark:text-gray-300 leading-relaxed md:max-w-xl"
            >
              {portfolioData.personal.tagline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-3 mb-10 justify-center md:justify-start"
            >
              {Object.entries(portfolioData.social).map(([key, url]) => (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold tracking-wide uppercase hover:border-lime-700 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
                >
                  {key}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <PandaButton href="/projects" variant="primary">
                View My Work
              </PandaButton>

              <PandaButton href="/contact" variant="secondary">
                Get In Touch
              </PandaButton>
            </motion.div>
          </motion.div>

          <div className="flex justify-center items-center w-full order-1 md:order-2">
            <div className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[420px] lg:max-w-[460px] rounded-3xl border border-white/70 dark:border-gray-700/60 bg-white/35 dark:bg-gray-900/40 p-6 shadow-[0_30px_80px_-45px_rgba(17,24,39,0.9)]">
              <Lottie animationData={pandaAnimation} loop />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
