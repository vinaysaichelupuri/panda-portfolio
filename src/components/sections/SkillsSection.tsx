"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 font-space text-gray-900 dark:text-white"
          >
            My <span className="text-lime-600 dark:text-lime-400">Skills</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-lime-500 mx-auto rounded-full opacity-80"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Technologies and tools I work with to build robust applications.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <motion.div 
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {portfolioData.skills.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 border text-sm md:text-base ${
                  activeTab === index
                    ? "bg-lime-600 border-lime-600 text-white shadow-md shadow-lime-500/20"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-lime-500 dark:hover:border-lime-400"
                }`}
              >
                {category.category}
              </button>
            ))}
          </motion.div>

          {/* Active Tab Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                  {portfolioData.skills[activeTab].items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:border-lime-500 dark:hover:border-lime-400 transition-all duration-300 cursor-default flex items-center justify-center"
                    >
                      <span className="font-semibold text-gray-800 dark:text-gray-200 tracking-wide text-sm md:text-base">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
