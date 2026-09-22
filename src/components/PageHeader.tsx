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
    <div className="relative z-10 w-full pt-8 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-8 text-center select-none">
      {/* Optional Top Category Badge */}
      {(badgeEn || badgeAr) && (
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 mb-3 shadow-sm">
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#e5be70]">
            {isAr ? badgeAr : badgeEn}
          </span>
        </div>
      )}

      {/* Elegant Script Subtitle */}
      <p className="font-script text-3xl sm:text-4xl lg:text-[42px] text-white tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        {isAr ? subtitleAr : subtitleEn}
      </p>

      {/* Main Serif Heading */}
      <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-white tracking-tight mt-1 mb-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
        <p className="font-serif text-[16px] sm:text-[18px] text-[#ded9cd] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {isAr ? descriptionAr : descriptionEn}
        </p>
      )}
    </div>
  );
}
