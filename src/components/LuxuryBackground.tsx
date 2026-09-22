import React from "react";
import Image from "next/image";

export default function LuxuryBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Exact Master Luxury Background Artwork from Mockup */}
      <div className="relative w-full h-full min-h-screen">
        <Image
          src="/images/luxury-master-background.jpg"
          alt="Luxury Black Silk & Gold Ribbons Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
          quality={98}
        />
      </div>

      {/* Radiant ambient glow overlay for extra luxury shimmer */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}


