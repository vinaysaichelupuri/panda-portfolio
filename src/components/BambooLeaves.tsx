"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BambooLeaves() {
  const [leaves, setLeaves] = useState<
    Array<{ id: number; left: string; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    // Generate random bamboo leaves
    const generatedLeaves = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 360],
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: leaf.left }}
          className="absolute text-2xl"
        >
          🍃
        </motion.div>
      ))}
    </div>
  );
}
