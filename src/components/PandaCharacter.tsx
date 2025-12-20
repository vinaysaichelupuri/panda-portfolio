"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { pandaFlip, pandaDance } from "@/utils/animations";

interface PandaCharacterProps {
  type: "coding" | "waving" | "coffee";
  className?: string;
  enableEasterEgg?: boolean;
}

export default function PandaCharacter({
  type,
  className = "",
  enableEasterEgg = false,
}: PandaCharacterProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const imageSources = {
    coding: "/images/panda-coding.png",
    waving: "/images/panda-waving.png",
    coffee: "/images/panda-coffee.png",
  };

  const handleClick = () => {
    if (!enableEasterEgg || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={enableEasterEgg ? { scale: 1.05 } : {}}
      animate={
        isAnimating
          ? Math.random() > 0.5
            ? pandaFlip.animate
            : pandaDance.animate
          : {}
      }
      className={`relative ${
        enableEasterEgg ? "cursor-pointer" : ""
      } ${className}`}
    >
      <Image
        src={imageSources[type]}
        alt={`Panda ${type}`}
        width={400}
        height={400}
        className="w-full h-full object-contain"
        priority={type === "coding"}
      />
    </motion.div>
  );
}
