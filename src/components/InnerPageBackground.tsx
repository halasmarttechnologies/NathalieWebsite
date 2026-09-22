"use client";

import React from "react";

/**
 * Dedicated clean luxury background for multi-section inner pages.
 * Avoids stretching single-screen landing artwork across multi-thousand pixel heights,
 * providing a pristine, warm ivory canvas with subtle luxury gradients and gold accents.
 */
export default function InnerPageBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {/* Base warm ivory luxury canvas */}
      <div className="absolute inset-0 bg-[#faf6ee]" />

      {/* Subtle radial luxury glow emanating from top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,235,215,0.8),transparent_70%)]" />

      {/* Soft warm vignette along edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(225,210,185,0.35)_100%)]" />

      {/* Ultra-delicate gold dust ambient noise / micro grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#c5a059 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
