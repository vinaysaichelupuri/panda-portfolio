"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, pandaJuggle } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-20 bg-lime-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Karate panda */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 right-10 hidden lg:block"
      >
        <motion.img
          src="/images/panda-karate.png"
          alt="Karate Panda"
          className="w-32 h-32 object-contain"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            animate={{ scaleX: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-1 bg-lime-500 mx-auto rounded-full shadow-lg shadow-lime-300"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-panda-gray dark:text-gray-300"
          >
            Technologies I work with 🎋
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {portfolioData.skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={staggerContainer}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-lime-600 dark:text-lime-400">
                {skillCategory.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.15,
                      y: -15,
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group cursor-pointer"
                  >
                    {/* Bamboo leaf background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-lime-100 to-lime-200 dark:from-lime-800 dark:to-lime-900 rounded-xl transform rotate-3"
                      whileHover={{ rotate: 12, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Skill content */}
                    <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center group-hover:shadow-2xl group-hover:shadow-lime-300/50 transition-shadow">
                      <motion.div
                        className="text-4xl mb-3"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div className="font-semibold text-panda-black dark:text-panda-white mb-2">
                        {skill.name}
                      </div>

                      {/* Skill level bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          whileHover={{ scaleY: 1.5 }}
                          className="h-full bg-gradient-to-r from-lime-500 to-lime-600 rounded-full shadow-lg shadow-lime-400/50"
                        />
                      </div>
                      <div className="text-xs text-panda-gray dark:text-gray-400 mt-1">
                        {skill.level}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
