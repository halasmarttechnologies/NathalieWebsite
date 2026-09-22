import React from "react";

export default function LuxuryBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Base Clean Luxury Canvas: Smooth, Spotless Warm Ivory Parchment */}
      <div className="absolute inset-0 bg-[#faf6ee]" />

      {/* 2. Delicate Luxury Radial Warmth (Zero smudges, completely smooth & pristine) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,253,248,0.7)_0%,_rgba(245,237,224,0.5)_60%,_rgba(238,227,210,0.6)_100%)]" />

      {/* 3. Top Dark Obsidian Silk Satin Zone for Navbar & Calligraphy Quote */}
      <div className="absolute top-0 left-0 right-0 h-[280px] sm:h-[310px] lg:h-[330px] bg-gradient-to-b from-[#060709] via-[#0b0c11] to-transparent" />

      {/* 4. Elegant Glowing Gold Hairline Transition Divider under Quote */}
      <div className="absolute top-[280px] sm:top-[310px] lg:top-[330px] left-0 right-0 flex items-center justify-center">
        <div className="w-full max-w-[1240px] px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent" />
        </div>
      </div>

      {/* 5. Bottom Smooth Transition to Dark Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/40 to-transparent pointer-events-none" />
    </div>
  );
}
