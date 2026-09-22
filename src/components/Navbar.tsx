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
    { label: "HOME", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Disorders", href: "/disorders" },
    { label: "Library", href: "/library" },
    { label: "Contact", href: "/contact" },
    { label: "Book A Session", href: "/book", isAction: true },
  ];

  return (
    <header className="relative z-50 w-full pt-4 sm:pt-5 pb-3 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-black/85 via-black/60 to-transparent">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="group flex flex-col items-start select-none">
          <span className="font-serif text-2xl sm:text-[28px] lg:text-[32px] font-normal text-[#ffffff] tracking-wide transition-colors group-hover:text-[#f8ebd0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Nathalie Rosenblum
          </span>
          <span className="font-serif text-[15px] sm:text-[17px] text-[#e5be70] tracking-normal -mt-0.5 font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            Licensed Psychologist in Dubai
          </span>
        </Link>

        {/* Desktop Navigation Links - Exact Original Layout */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navLinks.map((item) => {
            if (item.isAction) {
              return (
                <button
                  key={item.label}
                  onClick={onOpenBooking}
                  className="font-serif text-[14.5px] text-[#ffffff] hover:text-[#f0cb79] transition-all duration-200 tracking-wider cursor-pointer focus:outline-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] py-1.5"
                >
                  {item.label}
                </button>
              );
            }

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative font-serif text-[14.5px] tracking-wider transition-all duration-200 py-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
                  isActive
                    ? "text-[#ffffff] font-medium"
                    : "text-[#eeeae2] hover:text-[#f3d085]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#e5be70] shadow-[0_0_8px_rgba(229,190,112,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language Selector + Mobile Trigger */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Exact Dual Pill Language Switcher */}
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
              Arabic
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#e5be70] bg-black/40 border border-[#d4af62]/50 hover:text-white hover:bg-black/70 transition-colors focus:outline-none"
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
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.isAction && onOpenBooking) {
                  e.preventDefault();
                  onOpenBooking();
                }
                setMobileMenuOpen(false);
              }}
              className="font-serif text-[16.5px] text-[#f2ede4] hover:text-[#e5be70] py-2 border-b border-white/10 transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
