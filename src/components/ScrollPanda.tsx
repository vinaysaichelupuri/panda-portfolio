"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollPanda() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Transform scroll progress to vertical position (0 to 100vh)
  const yPosition = useTransform(scrollYProgress, [0, 1], ["0vh", "85vh"]);

  // Panda walking animation based on scroll
  const rotation = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -5, 0, 5, 0]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Show panda after scrolling past 10%
      setIsVisible(latest > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed right-8 z-50 pointer-events-none hidden lg:block"
      style={{
        top: yPosition,
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{ rotate: rotation }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          {/* Walking panda emoji with shadow */}
          <motion.div
            className="text-6xl drop-shadow-2xl"
            animate={{
              scaleX: [1, 1.05, 1],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🐼
          </motion.div>

          {/* Walking effect - alternating feet */}
          <motion.div
            className="absolute -bottom-2 left-0 text-2xl"
            animate={{
              opacity: [1, 0.3, 1],
              x: [0, 2, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            👣
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
