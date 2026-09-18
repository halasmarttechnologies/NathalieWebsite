"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentLang: "en" | "ar";
  onToggleLang: (lang: "en" | "ar") => void;
  onOpenBooking: () => void;
}

export default function Navbar({
  currentLang,
  onToggleLang,
  onOpenBooking,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Disorders", href: "#expertise" },
    { label: "Library", href: "#library" },
    { label: "Contact", href: "#contact" },
    { label: "Book A Session", href: "#book", isAction: true },
  ];

  return (
    <header className="relative z-50 w-full pt-3 sm:pt-4 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="group flex flex-col items-start select-none">
          <span className="font-serif text-2xl sm:text-[28px] lg:text-[30px] font-normal text-white tracking-normal transition-colors group-hover:text-[#f7e6c2]">
            Nathalie Rosenblum
          </span>
          <span className="font-serif text-[15px] sm:text-[17px] text-[#c59a58] tracking-normal -mt-1">
            Licensed Psychologist in Dubai
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((item) => {
            if (item.isAction) {
              return (
                <button
                  key={item.label}
                  onClick={onOpenBooking}
                  className="font-serif text-[13.5px] text-[#ffffff] hover:text-[#d4af37] transition-all duration-200 tracking-wide cursor-pointer focus:outline-none"
                >
                  {item.label}
                </button>
              );
            }

            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`relative font-serif text-[13.5px] tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-[#ffffff] font-medium"
                    : "text-[#dcd7cc] hover:text-[#e8b965]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#c59a58]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Language Selector + Mobile Trigger */}
        <div className="flex items-center space-x-3">
          {/* Exact Dual Pill Language Switcher */}
          <div className="flex flex-col rounded-[2px] overflow-hidden border border-[#b88e4f] shadow-md w-[64px] sm:w-[70px] select-none">
            <button
              onClick={() => onToggleLang("en")}
              className={`py-0.5 text-center font-serif text-[11.5px] transition-all duration-200 ${
                currentLang === "en"
                  ? "bg-gradient-to-b from-[#e5cfab] via-[#cfb58a] to-[#ba9c6d] text-[#1c1813] font-semibold"
                  : "bg-[#181512] text-[#c4b396] hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => onToggleLang("ar")}
              className={`py-0.5 text-center font-serif text-[11.5px] border-t border-[#b88e4f]/50 transition-all duration-200 ${
                currentLang === "ar"
                  ? "bg-gradient-to-b from-[#e5cfab] via-[#cfb58a] to-[#ba9c6d] text-[#1c1813] font-semibold"
                  : "bg-[#0b0c0e] text-[#ffffff] hover:text-[#d4af37]"
              }`}
            >
              Arabic
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-[#c5a059] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 p-5 rounded-xl bg-[#111216]/95 backdrop-blur-md border border-[#c5a059]/40 shadow-2xl flex flex-col space-y-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.isAction) {
                  e.preventDefault();
                  onOpenBooking();
                }
                setMobileMenuOpen(false);
              }}
              className="font-serif text-lg text-[#e8e4dc] hover:text-[#c5a059] py-1 border-b border-[#2a2b33] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
