"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, slideInLeft, staggerContainer } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 bg-lime-50 dark:bg-gray-800 relative overflow-hidden"
    >
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-bamboo-500 mx-auto rounded-full"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-panda-gray dark:text-gray-300"
          >
            My professional journey 🎋
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Bamboo timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-bamboo-500 transform md:-translate-x-1/2" />

          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="space-y-12"
          >
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={slideInLeft}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Climbing panda on bamboo */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 text-4xl z-10"
                  style={{ top: `${index * 10}px` }}
                >
                  🐼
                </motion.div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  } pl-20 md:pl-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 rounded-2xl"
                  >
                    <div className="text-bamboo-600 dark:text-bamboo-400 font-semibold mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-panda-black dark:text-panda-white">
                      {exp.title}
                    </h3>
                    <div className="text-lg font-medium text-bamboo-700 dark:text-bamboo-300 mb-3">
                      {exp.company} • {exp.location}
                    </div>
                    <p className="text-panda-gray dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-bamboo-500 mt-1">🎋</span>
                          <span className="text-sm text-panda-gray dark:text-gray-300">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
