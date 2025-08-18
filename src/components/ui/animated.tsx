"use client";

import React from "react";
import { motion } from "framer-motion";

type FadeInOnViewProps = React.PropsWithChildren<{
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}>;

export function FadeInOnView({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
}: FadeInOnViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = React.PropsWithChildren<{
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}>;

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.12,
  once = true,
  amount = 0.3,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delayChildren,
            staggerChildren,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
