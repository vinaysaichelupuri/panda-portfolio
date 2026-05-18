"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: string; y: string; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.3, 0.22],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-lime-300/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.14, 0.25, 0.14],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-lime-400/14 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-lime-200/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{
            y: [particle.y, `${parseFloat(particle.y) - 30}%`, particle.y],
            x: [particle.x, `${parseFloat(particle.x) + 10}%`, particle.x],
            opacity: [0, 0.25, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 bg-lime-500/70 rounded-full"
        />
      ))}
    </div>
  );
}
