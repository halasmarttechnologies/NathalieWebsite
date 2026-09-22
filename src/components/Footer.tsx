"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

interface FooterProps {
  currentLang?: "en" | "ar";
  onOpenBooking?: () => void;
}

export default function Footer({
  currentLang = "en",
  onOpenBooking,
}: FooterProps) {
  const isAr = currentLang === "ar";

  return (
    <footer
      id="contact"
      className="relative z-20 w-full pt-14 pb-12 px-5 sm:px-8 lg:px-12 border-t border-[#c5a059]/35 bg-[#0b0c10] text-[#e2ded6]"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13141a] via-[#0c0d12] to-[#07080a] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand & Mission Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h4 className="font-serif text-2xl sm:text-[28px] text-[#ffffff] font-normal tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {isAr ? "ناتالي روزنبلوم" : "Nathalie Rosenblum"}
            </h4>
            <p className="font-serif text-[16px] text-[#e3ba6d] mt-1 mb-4 font-normal">
              {isAr ? "أخصائية نفسية مرخصة في دبي" : "Licensed Psychologist in Dubai"}
            </p>
            <p className="font-serif text-[14.5px] leading-[1.75] text-[#d4cfc5] max-w-md">
              {isAr
                ? "ممارسة إكلينيكية متخصصة في دبي تقدم الرعاية النفسية الفردية، استشارات الأزواج، والعلاج الأسري وفق أرقى المعايير العالمية المعتمدة."
                : "A private clinical practice in Dubai offering holistic psychotherapy, couples counseling, and family therapy grounded in evidence-informed methods and compassionate inquiry."}
            </p>

            {/* CDA License Verification Badge */}
            <div className="mt-5 inline-flex items-center space-x-2.5 rtl:space-x-reverse px-3.5 py-2 rounded-md bg-[#161720] border border-[#c5a059]/40 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#e3ba6d] shrink-0" />
              <span className="font-serif text-[13px] text-[#e5be70] tracking-wide">
                {isAr
                  ? "مرخصة رسمياً من هيئة تنمية المجتمع في دبي (CDA)"
                  : "CDA Licensed Psychologist • Dubai, UAE"}
              </span>
            </div>
          </div>

          {/* Navigation Links Column (3 cols) */}
          <div className="md:col-span-3">
            <h5 className="font-serif text-[15px] font-semibold text-[#ffffff] uppercase tracking-widest mb-4 pb-1 border-b border-[#c5a059]/25 inline-block">
              {isAr ? "روابط سريعة" : "Navigation"}
            </h5>
            <ul className="space-y-2.5 font-serif text-[14.5px] text-[#ded9cf]">
              <li>
                <Link href="/" className="hover:text-[#e3ba6d] transition-colors inline-flex items-center space-x-1 rtl:space-x-reverse py-0.5">
                  <span>{isAr ? "الرئيسية" : "Home"}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#e3ba6d] transition-colors inline-flex items-center space-x-1 rtl:space-x-reverse py-0.5">
                  <span>{isAr ? "الخدمات العلاجية" : "Therapy Services"}</span>
                </Link>
              </li>
              <li>
                <Link href="/disorders" className="hover:text-[#e3ba6d] transition-colors inline-flex items-center space-x-1 rtl:space-x-reverse py-0.5">
                  <span>{isAr ? "مجالات الخبرة" : "Clinical Expertise"}</span>
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-[#e3ba6d] transition-colors inline-flex items-center space-x-1 rtl:space-x-reverse py-0.5">
                  <span>{isAr ? "المكتبة" : "Library"}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e3ba6d] transition-colors inline-flex items-center space-x-1 rtl:space-x-reverse py-0.5">
                  <span>{isAr ? "تواصل معنا" : "Contact"}</span>
                </Link>
              </li>
              <li>
                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="hover:text-[#e3ba6d] transition-colors cursor-pointer text-left rtl:text-right inline-flex items-center space-x-1 rtl:space-x-reverse py-0.5 text-[#e5be70] font-medium"
                  >
                    <span>{isAr ? "حجز جلسة استشارية" : "Book A Session"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href="/book"
                    className="hover:text-[#e3ba6d] transition-colors text-left rtl:text-right inline-flex items-center space-x-1 rtl:space-x-reverse py-0.5 text-[#e5be70] font-medium"
                  >
                    <span>{isAr ? "حجز جلسة استشارية" : "Book A Session"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Clinic & Inquiries Column (4 cols) */}
          <div className="md:col-span-4">
            <h5 className="font-serif text-[15px] font-semibold text-[#ffffff] uppercase tracking-widest mb-4 pb-1 border-b border-[#c5a059]/25 inline-block">
              {isAr ? "التواصل والعيادة" : "Clinic & Inquiries"}
            </h5>
            <ul className="space-y-3.5 font-serif text-[14.5px] text-[#ded9cf]">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-[#e3ba6d] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  {isAr
                    ? "مدينة دبي الطبية / جميرا، دبي، الإمارات العربية المتحدة"
                    : "Dubai Healthcare City / Jumeirah, Dubai, United Arab Emirates"}
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-[#e3ba6d] shrink-0" />
                <a
                  href="tel:+97140000000"
                  className="hover:text-[#e3ba6d] transition-colors tracking-wide"
                >
                  +971 4 000 0000 / WhatsApp: +971 50 000 0000
                </a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-[#e3ba6d] shrink-0" />
                <a
                  href="mailto:contact@nathalierosenblum.com"
                  className="hover:text-[#e3ba6d] transition-colors"
                >
                  contact@nathalierosenblum.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Standards Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[13px] font-serif text-[#9e998e] space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Nathalie Rosenblum. All Rights Reserved.</p>
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-[#b8b2a5]">
            <span>Confidentiality Guaranteed</span>
            <span className="text-[#e3ba6d]">•</span>
            <span>APA & CCPA Recognized Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

