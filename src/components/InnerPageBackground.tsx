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
      {/* Base neutral ivory luxury canvas matching reference mockup */}
      <div className="absolute inset-0 bg-[#f6f1ea]" />

      {/* Subtle radial luxury glow emanating from top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(251,248,243,0.7),transparent_70%)]" />

      {/* Soft delicate neutral vignette along edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(235,228,219,0.25)_100%)]" />

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
