"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio-data";

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (
    !portfolioData.certifications ||
    portfolioData.certifications.length === 0
  ) {
    return null;
  }

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Trophy panda */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-10 left-10 hidden lg:block"
      >
        <motion.img
          src="/images/panda-trophy.png"
          alt="Trophy Panda"
          className="w-32 h-32 object-contain"
          animate={{
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1],
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
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-1 bg-lime-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10, rotate: [0, 2, -2, 0] }}
              className="glass p-6 rounded-2xl text-center cursor-pointer group"
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                🏆
              </motion.div>
              <h3 className="text-lg font-bold text-panda-black dark:text-panda-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-lime-600 dark:text-lime-400 font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-sm text-panda-gray dark:text-gray-400">
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
