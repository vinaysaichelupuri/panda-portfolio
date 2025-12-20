"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface PandaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function PandaButton({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
}: PandaButtonProps) {
  const [showPanda, setShowPanda] = useState(false);

  const baseClasses =
    variant === "primary"
      ? "px-8 py-4 bg-lime-500 hover:bg-lime-600 text-white rounded-full font-semibold shadow-lg transition-colors relative overflow-visible"
      : "px-8 py-4 glass hover:bg-lime-100 dark:hover:bg-lime-900 text-panda-black dark:text-panda-white rounded-full font-semibold transition-colors border-2 border-lime-400 relative overflow-visible";

  const content = (
    <>
      {children}
      {/* Panda appears on hover */}
      {showPanda && (
        <motion.div
          initial={{ scale: 0, rotate: -180, y: 20 }}
          animate={{ scale: 1, rotate: 0, y: 0 }}
          exit={{ scale: 0, rotate: 180, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute -top-12 -right-8 text-4xl pointer-events-none"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            🐼
          </motion.div>
        </motion.div>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.08, y: -3 },
    whileTap: { scale: 0.95 },
    onHoverStart: () => setShowPanda(true),
    onHoverEnd: () => setShowPanda(false),
    className: `${baseClasses} ${className}`,
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  );
}
