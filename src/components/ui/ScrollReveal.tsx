"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "opacity";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: number;
  delay?: number;
  distance?: number; // Pixel translation distance
  threshold?: number; // Intersection threshold ratio (0.0 - 1.0)
  className?: string;
  once?: boolean; // If true, triggers animation only once
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  duration = 0.8,
  delay = 0,
  distance = 35,
  threshold = 0.12,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const getVariants = (): Variants => {
    const hiddenBase = { opacity: 0 };
    const visibleBase = {
      opacity: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier (easeOutExpo) for a premium feel
        delay,
      },
    };

    switch (variant) {
      case "fade-up":
        return {
          hidden: { ...hiddenBase, y: distance },
          visible: { ...visibleBase, y: 0 },
        };
      case "fade-down":
        return {
          hidden: { ...hiddenBase, y: -distance },
          visible: { ...visibleBase, y: 0 },
        };
      case "fade-left":
        return {
          hidden: { ...hiddenBase, x: distance },
          visible: { ...visibleBase, x: 0 },
        };
      case "fade-right":
        return {
          hidden: { ...hiddenBase, x: -distance },
          visible: { ...visibleBase, x: 0 },
        };
      case "scale":
        return {
          hidden: { ...hiddenBase, scale: 0.94, y: 15 },
          visible: { ...visibleBase, scale: 1, y: 0 },
        };
      case "opacity":
        return {
          hidden: hiddenBase,
          visible: visibleBase,
        };
      default:
        return {
          hidden: { ...hiddenBase, y: distance },
          visible: { ...visibleBase, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
