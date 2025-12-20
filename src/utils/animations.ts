// Framer Motion animation variants for consistent animations

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const pandaWalk = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: [null, 0, 100, 200, 300],
    opacity: [0, 1, 1, 1, 0],
  },
  transition: {
    duration: 4,
    ease: "linear",
    times: [0, 0.1, 0.4, 0.7, 1],
  },
};

export const pandaWave = {
  animate: {
    rotate: [0, 10, -10, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pandaJuggle = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const bambooFloat = {
  animate: {
    y: [0, -10, 0],
    x: [0, 5, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pandaFlip = {
  animate: {
    rotateY: [0, 360],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const pandaDance = {
  animate: {
    rotate: [0, -10, 10, -10, 10, 0],
    y: [0, -10, 0, -10, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
