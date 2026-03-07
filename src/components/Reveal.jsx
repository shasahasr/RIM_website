import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Reveal({ children, delay = 0, className = "", direction = "up", scale = false }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    up: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    scale: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } }
  };

  const selectedVariant = scale ? variants.scale : variants[direction] || variants.up;

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={scale ? { scale: 1.02 } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
}
