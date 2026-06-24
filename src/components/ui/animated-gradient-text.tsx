"use client";

import { motion } from "framer-motion";

/**
 * AnimatedGradientText — shifts hue over time for a living gradient headline.
 * Wrap any text; the gradient is applied via background-clip.
 */
export function AnimatedGradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-blue-600 via-indigo-500 via-50% to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent ${className}`}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}
