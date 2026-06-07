"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number; // Speed multiplier, e.g., -0.15 (drifts upward slightly slower than scroll)
  className?: string;
}

export function ParallaxBackground({ children, speed = -0.15, className = "" }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Translate vertical position based on scroll progress
  // E.g., translates from 0% to speed * 100% of container height
  const yVal = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  // Smooth the transition using a spring
  const y = useSpring(yVal, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // We make the height larger than 100% (e.g., 120%) and position it slightly offset (e.g., top -10%)
  // to prevent raw edges/whitespace showing during scroll translations.
  const paddingPercent = Math.abs(speed) * 100;
  const heightStyle = `${100 + paddingPercent * 2}%`;
  const topStyle = `${-paddingPercent}%`;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        style={{
          y,
          height: heightStyle,
          top: topStyle,
        }}
        className="absolute inset-x-0 w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
