"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  currentLang?: "en" | "ar";
  onToggleLang?: (lang: "en" | "ar") => void;
  onOpenBooking?: () => void;
  isHome?: boolean;
}

export default function Navbar({
  currentLang: propLang,
  onToggleLang: propToggleLang,
  onOpenBooking,
  isHome: propIsHome,
}: NavbarProps) {
  const contextLang = useLanguage();
  const currentLang = propLang || contextLang.currentLang;
  const toggleLang = propToggleLang || contextLang.toggleLang;
  const isAr = currentLang === "ar";
  const pathname = usePathname();
  const isHome = propIsHome ?? (pathname === "/");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: isAr ? "الرئيسية" : "HOME", href: "/" },
    { label: isAr ? "الخدمات" : "Services", href: "/services" },
    { label: isAr ? "مجالات العلاج" : "Disorders", href: "/disorders" },
    { label: isAr ? "المكتبة" : "Library", href: "/library" },
    { label: isAr ? "تواصل معنا" : "Contact", href: "/contact" },
    { label: isAr ? "حجز جلسة" : "Book A Session", href: "/book" },
  ];

  return (
    <header
      className={`relative z-50 w-full transition-all duration-300 py-2.5 sm:py-3.5 px-4 sm:px-8 lg:px-10 ${
        isHome
          ? "bg-transparent"
          : "bg-[#0a0b0f] border-b border-[#c5a059]/40 shadow-[0_6px_25px_rgba(0,0,0,0.7)]"
      }`}
    >
      <div className="max-w-[1180px] mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="group flex flex-col items-start select-none">
          <span className="font-serif text-[22px] sm:text-[25px] lg:text-[27px] font-normal text-[#ffffff] tracking-wide transition-colors group-hover:text-[#f8ebd0] leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            {isAr ? "ناتالي روزنبلوم" : "Nathalie Rosenblum"}
          </span>
          <span className="font-serif text-[13.5px] sm:text-[14.5px] text-[#cfa65c] tracking-normal -mt-0.5 font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {isAr ? "أخصائية نفسية مرخصة في دبي" : "Licensed Psychologist in Dubai"}
          </span>
        </Link>

        {/* Desktop Navigation Links - Compact, Elegant & Distinct */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-serif text-[12.5px] sm:text-[13px] tracking-[0.14em] uppercase transition-all duration-200 py-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${
                  isActive
                    ? "text-[#ffffff] font-medium"
                    : "text-[#dcd6ca] hover:text-[#e5be70]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#e5be70] via-[#f7e4b5] to-[#c5a059] shadow-[0_0_6px_rgba(229,190,112,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language Selector + Mobile Menu Trigger */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Dual Pill Language Switcher */}
          <div className="flex flex-col rounded-[3px] overflow-hidden border border-[#cda45e]/60 shadow-[0_2px_8px_rgba(0,0,0,0.7)] w-[64px] sm:w-[68px] select-none">
            <button
              onClick={() => toggleLang("en")}
              className={`py-0.5 sm:py-1 text-center font-serif text-[11.5px] tracking-wider transition-all duration-200 cursor-pointer ${
                currentLang === "en"
                  ? "bg-gradient-to-b from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-bold shadow-inner"
                  : "bg-[#0e0f14] text-[#ded9ce] hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => toggleLang("ar")}
              className={`py-0.5 sm:py-1 text-center font-serif text-[11.5px] tracking-wider border-t border-[#cda45e]/40 transition-all duration-200 cursor-pointer ${
                currentLang === "ar"
                  ? "bg-gradient-to-b from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-bold shadow-inner"
                  : "bg-[#0a0b0f] text-[#ded9ce] hover:text-[#e5be70]"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-[#e5be70] bg-[#161720]/90 border border-[#d4af62]/50 hover:text-white hover:bg-black transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2.5 p-4 rounded-xl bg-[#0c0d12]/98 backdrop-blur-xl border border-[#d4af62]/40 shadow-2xl flex flex-col space-y-2.5 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-[15px] text-[#f2ede4] hover:text-[#e5be70] py-1.5 border-b border-white/10 transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
