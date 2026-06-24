"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

/**
 * ShimmerButton — CTA button with a diagonal light sweep on hover.
 * Drop-in replacement for <Button> with extra shimmer overlay.
 */
export const ShimmerButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>(({ className = "", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`group relative overflow-hidden rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 ${className}`}
      {...props}
    >
      {/* Shimmer sweep overlay */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>
  );
});
ShimmerButton.displayName = "ShimmerButton";
