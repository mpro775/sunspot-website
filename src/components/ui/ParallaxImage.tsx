"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface ParallaxImageProps extends Omit<ImageProps, "className" | "fill" | "width" | "height"> {
  speed?: number; // Speed multiplier, typically between -0.15 and 0.15
  containerClassName?: string; // Classes for the outer overflow-hidden frame
  imageClassName?: string; // Classes directly on the image element
  aspectRatio?: string; // Optional default aspect ratio class (e.g., "aspect-[4/3]")
  width?: number | string;
  height?: number | string;
}

export function ParallaxImage({
  speed = -0.1,
  containerClassName = "",
  imageClassName = "",
  aspectRatio = "aspect-[4/3]",
  alt,
  width,
  height,
  ...imageProps
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the container scroll position relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate parallax translation.
  // A negative speed translates the image upwards as we scroll down,
  // creating a window-peek parallax effect.
  const yRange = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * -100}%`, `${speed * 100}%`]
  );

  // Smooth out the animation using a spring physics configuration
  const y = useSpring(yRange, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // Scale the image slightly to ensure no edges are visible when it translates.
  // The scale factor should correspond to the magnitude of the displacement.
  const scale = 1 + Math.abs(speed) * 2;

  // Clean props to ensure next/image doesn't receive conflicting width/height when using fill
  const cleanImageProps = { ...imageProps };
  delete (cleanImageProps as any).width;
  delete (cleanImageProps as any).height;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} ${containerClassName}`}
    >
      <motion.div
        style={{
          y,
          scale,
        }}
        className="absolute inset-0 w-full h-full origin-center"
      >
        <Image
          alt={alt}
          fill
          className={`object-cover ${imageClassName}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          {...cleanImageProps}
        />
      </motion.div>
    </div>
  );
}
