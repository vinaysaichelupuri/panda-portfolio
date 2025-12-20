"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { fadeInUp, scaleIn, staggerContainer } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Builder panda */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 left-10 hidden lg:block"
      >
        <motion.img
          src="/images/panda-builder.png"
          alt="Builder Panda"
          className="w-32 h-32 object-contain"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      {/* Decorative pandas */}
      <div className="absolute top-20 left-10 text-4xl opacity-20">🐼</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20">🐼</div>

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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-bamboo-500 mx-auto rounded-full"
          />
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-panda-gray dark:text-gray-300"
          >
            Check out some of my recent work 🚀
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group glass rounded-2xl overflow-hidden"
            >
              {/* Peeking panda on hover */}
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  className="absolute top-4 left-4 z-20 text-4xl"
                >
                  🐼
                </motion.div>
              )}

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panda-black/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-panda-black dark:text-panda-white">
                  {project.title}
                </h3>
                <p className="text-panda-gray dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-bamboo-100 dark:bg-bamboo-900 text-bamboo-700 dark:text-bamboo-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-panda-black dark:bg-white text-white dark:text-panda-black rounded-lg font-semibold text-center hover:bg-bamboo-700 dark:hover:bg-bamboo-200 transition-colors panda-cursor"
                  >
                    View Code 💻
                  </motion.a>
                  {project.demo ? (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-bamboo-600 text-white rounded-lg font-semibold text-center hover:bg-bamboo-700 transition-colors panda-cursor"
                    >
                      Live Demo 🚀
                    </motion.a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
