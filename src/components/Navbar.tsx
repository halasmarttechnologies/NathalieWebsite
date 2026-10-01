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
      className={`relative z-50 w-full transition-all duration-300 py-2.5 sm:py-3.5 px-4 sm:px-8 lg:px-12 ${
        isHome
          ? "bg-transparent"
          : "bg-[#0a0b0f] border-b border-[var(--gold-line,#C2AB62)]/40 shadow-[0_6px_25px_rgba(0,0,0,0.7)]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="group flex flex-col items-start select-none">
          <span
            className={`font-normal text-[#ffffff] transition-colors group-hover:text-[#fbf5e6] leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${
              isAr
                ? "font-serif text-[28px] sm:text-[34px] lg:text-[38px] tracking-wide"
                : "font-signature text-[38px] sm:text-[46px] lg:text-[52px] tracking-normal"
            }`}
          >
            {isAr ? "ناتالي روزنبلوم" : "Nathalie Rosenblum"}
          </span>
          <span
            className={`text-[#C2AB62] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${
              isAr
                ? "font-serif text-[14px] sm:text-[15px] mt-0.5"
                : "font-content text-[12px] sm:text-[13px] tracking-[0.16em] uppercase mt-1 opacity-95"
            }`}
          >
            {isAr ? "أخصائية نفسية مرخصة في دبي" : "Licensed Psychologist in Dubai"}
          </span>
          <span
            className={`text-[#eddba6]/90 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${
              isAr
                ? "font-serif text-[12.5px] sm:text-[13.5px] mt-0.5"
                : "font-content text-[11px] sm:text-[11.5px] tracking-[0.14em] uppercase mt-0.5 opacity-90"
            }`}
          >
            {isAr ? "الإنجليزية والعربية" : "English & Arabic"}
          </span>
        </Link>

        {/* Desktop Navigation Links - Rich Gold Tone that Pops Up & Catches the Eye */}
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
                className={`relative font-content text-[12.5px] sm:text-[13px] tracking-[0.15em] uppercase transition-all duration-200 py-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] ${
                  isActive
                    ? "text-[#ffffff] font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,1)]"
                    : "text-[#ecdba6] font-medium hover:text-[#ffffff] hover:drop-shadow-[0_0_8px_rgba(194,171,98,0.7)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#eddba6] via-[#fef6df] to-[var(--gold-line,#C2AB62)] shadow-[0_0_8px_rgba(194,171,98,0.85)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language Selector + Mobile Menu Trigger */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Dual Pill Language Switcher */}
          <div className="flex flex-col rounded-[3px] overflow-hidden border border-[#C2AB62]/70 shadow-[0_2px_8px_rgba(0,0,0,0.7)] w-[66px] sm:w-[70px] select-none">
            <button
              onClick={() => toggleLang("en")}
              className={`py-1 text-center font-content text-[12px] tracking-wider transition-all duration-200 cursor-pointer ${
                currentLang === "en"
                  ? "bg-gradient-to-b from-[#f3e5be] via-[#C2AB62] to-[#9e8745] text-[#121110] font-bold shadow-inner"
                  : "bg-[#0e0f14] text-[#ded9ce] hover:text-[#C2AB62]"
              }`}
            >
              English
            </button>
            <button
              onClick={() => toggleLang("ar")}
              className={`py-1 text-center font-content text-[12px] tracking-wider border-t border-[#C2AB62]/40 transition-all duration-200 cursor-pointer ${
                currentLang === "ar"
                  ? "bg-gradient-to-b from-[#f3e5be] via-[#C2AB62] to-[#9e8745] text-[#121110] font-bold shadow-inner"
                  : "bg-[#0a0b0f] text-[#ded9ce] hover:text-[#C2AB62]"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-[#C2AB62] bg-[#161720]/90 border border-[#C2AB62]/60 hover:text-white hover:bg-black transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2.5 p-4 rounded-xl bg-[#0c0d12]/98 backdrop-blur-xl border border-[#C2AB62]/40 shadow-2xl flex flex-col space-y-2.5 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-content text-[15px] text-[#ecdba6] hover:text-[#ffffff] py-1.5 border-b border-white/10 transition-colors tracking-wide font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
