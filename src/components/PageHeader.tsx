"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface PageHeaderProps {
  subtitleEn: string;
  subtitleAr: string;
  titleEn: string;
  titleAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  badgeEn?: string;
  badgeAr?: string;
}

export default function PageHeader({
  subtitleEn,
  subtitleAr,
  titleEn,
  titleAr,
  descriptionEn,
  descriptionAr,
  badgeEn,
  badgeAr,
}: PageHeaderProps) {
  const { isAr } = useLanguage();

  return (
    <div className="relative z-10 w-full bg-gradient-to-b from-[#0c0d12] via-[#10121a] to-[#0a0b0e] border-b border-[#c5a059]/35 pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-8 text-center select-none shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      {/* Ambient luxury center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(197,160,89,0.08),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Optional Top Category Badge */}
        {(badgeEn || badgeAr) && (
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 mb-3 sm:mb-4 shadow-xs">
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#f3d085] font-medium">
              {isAr ? badgeAr : badgeEn}
            </span>
          </div>
        )}

        {/* Elegant Script Subtitle */}
        <p className="font-script text-2xl sm:text-3xl lg:text-[40px] text-[#f7e6c4] tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {isAr ? subtitleAr : subtitleEn}
        </p>

        {/* Main Serif Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[50px] font-normal text-white tracking-tight mt-2 mb-2 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          {isAr ? titleAr : titleEn}
        </h1>

        {/* Metallic Gold Underline with Diamond Center */}
        <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse my-4">
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]" />
          <div className="w-2 h-2 rotate-45 border border-[#c5a059] bg-[#e5be70] shadow-[0_0_8px_rgba(229,190,112,0.8)]" />
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]" />
        </div>

        {/* Contextual Description */}
        {(descriptionEn || descriptionAr) && (
          <p className="font-serif text-[15.5px] sm:text-[17px] text-[#ded9cd] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] px-2">
            {isAr ? descriptionAr : descriptionEn}
          </p>
        )}
      </div>
    </div>
  );
}
