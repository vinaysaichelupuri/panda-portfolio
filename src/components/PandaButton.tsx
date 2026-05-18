"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
  const baseClasses =
    variant === "primary"
      ? "px-8 py-3.5 bg-lime-700 hover:bg-lime-800 text-white rounded-lg font-semibold shadow-[0_18px_38px_-20px_rgba(17,24,39,0.5)] transition-colors relative inline-block text-center"
      : "px-8 py-3.5 bg-white/85 dark:bg-gray-900/80 hover:bg-lime-50 dark:hover:bg-lime-900/30 text-panda-black dark:text-panda-white rounded-lg font-semibold transition-colors border border-gray-300 dark:border-gray-600 relative inline-block text-center";

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.95 },
    className: `${baseClasses} ${className}`,
  };

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} passHref legacyBehavior>
          <motion.a {...motionProps}>{children}</motion.a>
        </Link>
      );
    }
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
