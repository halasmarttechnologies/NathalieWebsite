"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  currentLang?: "en" | "ar";
  onToggleLang?: (lang: "en" | "ar") => void;
  onOpenBooking?: () => void;
}

export default function Navbar({
  currentLang: propLang,
  onToggleLang: propToggleLang,
  onOpenBooking,
}: NavbarProps) {
  const contextLang = useLanguage();
  const currentLang = propLang || contextLang.currentLang;
  const toggleLang = propToggleLang || contextLang.toggleLang;
  const isAr = currentLang === "ar";
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: isAr ? "الرئيسية" : "HOME", href: "/" },
    { label: isAr ? "عن ناتالي" : "About", href: "/about" },
    { label: isAr ? "الخدمات" : "Services", href: "/services" },
    { label: isAr ? "مجالات العلاج" : "Disorders", href: "/disorders" },
    { label: isAr ? "المكتبة" : "Library", href: "/library" },
    { label: isAr ? "تواصل معنا" : "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-50 w-full pt-4 sm:pt-5 pb-3 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-black/90 via-black/70 to-transparent">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="group flex flex-col items-start select-none">
          <span className="font-serif text-2xl sm:text-[28px] lg:text-[32px] font-normal text-[#ffffff] tracking-wide transition-colors group-hover:text-[#f8ebd0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {isAr ? "ناتالي روزنبلوم" : "Nathalie Rosenblum"}
          </span>
          <span className="font-serif text-[14.5px] sm:text-[16px] text-[#e5be70] tracking-normal -mt-0.5 font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            {isAr ? "أخصائية نفسية مرخصة في دبي" : "Licensed Psychologist in Dubai"}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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
                className={`relative font-serif text-[14.5px] tracking-wider transition-all duration-200 py-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
                  isActive
                    ? "text-[#ffffff] font-medium"
                    : "text-[#ded9cd] hover:text-[#f3d085]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#e5be70] to-[#f5d996] shadow-[0_0_8px_rgba(229,190,112,0.9)]" />
                )}
              </Link>
            );
          })}

          {/* Book A Session Button */}
          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="px-4 py-1.5 rounded-full border border-[#c5a059] bg-[#c5a059]/15 hover:bg-[#c5a059] text-[#f8e7c5] hover:text-[#121110] font-serif text-[14px] tracking-wider transition-all duration-300 shadow-[0_2px_10px_rgba(197,160,89,0.2)] hover:shadow-[0_4px_16px_rgba(197,160,89,0.4)] flex items-center space-x-1.5 rtl:space-x-reverse cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isAr ? "حجز جلسة" : "Book A Session"}</span>
            </button>
          ) : (
            <Link
              href="/book"
              className={`px-4 py-1.5 rounded-full border border-[#c5a059] bg-[#c5a059]/15 hover:bg-[#c5a059] text-[#f8e7c5] hover:text-[#121110] font-serif text-[14px] tracking-wider transition-all duration-300 shadow-[0_2px_10px_rgba(197,160,89,0.2)] hover:shadow-[0_4px_16px_rgba(197,160,89,0.4)] flex items-center space-x-1.5 rtl:space-x-reverse ${
                pathname === "/book"
                  ? "bg-[#c5a059] text-[#121110] font-semibold"
                  : ""
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isAr ? "حجز جلسة" : "Book A Session"}</span>
            </Link>
          )}
        </nav>

        {/* Language Selector + Mobile Trigger */}
        <div className="flex items-center space-x-3 sm:space-x-4 rtl:space-x-reverse">
          {/* Dual Pill Language Switcher */}
          <div className="flex flex-col rounded-[3px] overflow-hidden border border-[#d4af62] shadow-[0_2px_8px_rgba(0,0,0,0.6)] w-[68px] sm:w-[74px] select-none">
            <button
              onClick={() => toggleLang("en")}
              className={`py-1 text-center font-serif text-[12px] tracking-wider transition-all duration-200 cursor-pointer ${
                currentLang === "en"
                  ? "bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-bold shadow-inner"
                  : "bg-[#16171d] text-[#e0dad0] hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => toggleLang("ar")}
              className={`py-1 text-center font-serif text-[12px] tracking-wider border-t border-[#d4af62]/40 transition-all duration-200 cursor-pointer ${
                currentLang === "ar"
                  ? "bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-bold shadow-inner"
                  : "bg-[#0b0c10] text-[#ded9ce] hover:text-[#e5be70]"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#e5be70] bg-black/50 border border-[#d4af62]/50 hover:text-white hover:bg-black/80 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 rounded-xl bg-[#0e0f14]/98 backdrop-blur-xl border border-[#d4af62]/40 shadow-2xl flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-serif text-[16.5px] py-2 border-b border-white/10 transition-colors tracking-wide ${
                pathname === item.href
                  ? "text-[#e5be70] font-medium"
                  : "text-[#f2ede4] hover:text-[#e5be70]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#d9b87b] via-[#c5a059] to-[#b38a42] text-[#121110] font-serif font-semibold text-center block shadow-md"
            >
              {isAr ? "حجز جلسة استشارية" : "Book A Confidential Session"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
