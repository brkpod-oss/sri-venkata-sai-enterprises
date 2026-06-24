"use client";

import { motion } from "framer-motion";

/**
 * Sparkles — floating sparkle dots around children.
 * Perfect for promo badges, sale tags, and highlighted text.
 */
export function Sparkles({
  children,
  className = "",
  count = 6,
}: {
  children: React.ReactNode;
  className?: string;
  count?: number;
}) {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    delay: Math.random() * 2,
    duration: Math.random() * 1.5 + 1,
  }));

  return (
    <span className={`relative inline-block ${className}`}>
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="pointer-events-none absolute rounded-full bg-amber-400"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {children}
    </span>
  );
}
