import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";

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
      className="relative z-20 w-full pt-12 pb-14 px-4 sm:px-8 lg:px-14 text-[#c7c3bb] border-t border-[#c5a059]/20"
      style={{
        background: "linear-gradient(180deg, #0d0e12 0%, #07080a 100%)",
      }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <h4 className="font-serif text-2xl text-white font-normal tracking-wide">
              Nathalie Rosenblum
            </h4>
            <p className="font-serif text-base text-[#c5a059] mt-0.5 mb-4">
              Licensed Psychologist in Dubai
            </p>
            <p className="font-serif text-sm leading-relaxed text-[#9e9a91] max-w-sm">
              {isAr
                ? "ممارسة إكلينيكية متخصصة في دبي تقدم الرعاية النفسية الفردية، استشارات الأزواج، والعلاج الأسري وفق أرقى المعايير العالمية المعتمدة."
                : "A private clinical practice in Dubai offering holistic psychotherapy, couples counseling, and family therapy grounded in evidence-informed methods and compassionate inquiry."}
            </p>
            <div className="mt-4 flex items-center space-x-2 text-xs text-[#a98239]">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>CDA Licensed Professional (Community Development Authority Dubai)</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3">
            <h5 className="font-serif text-base text-white uppercase tracking-wider mb-4">
              {isAr ? "روابط سريعة" : "Navigation"}
            </h5>
            <ul className="space-y-2 font-serif text-sm text-[#ada89e]">
              <li>
                <Link href="#home" className="hover:text-[#c5a059] transition-colors">
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#c5a059] transition-colors">
                  {isAr ? "الخدمات العلاجية" : "Therapy Services"}
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-[#c5a059] transition-colors">
                  {isAr ? "مجالات الخبرة" : "Clinical Expertise"}
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer text-left"
                >
                  {isAr ? "حجز جلسة" : "Book A Session"}
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Details Col */}
          <div className="md:col-span-4">
            <h5 className="font-serif text-base text-white uppercase tracking-wider mb-4">
              {isAr ? "التواصل والعيادة" : "Clinic & Inquiries"}
            </h5>
            <ul className="space-y-3 font-serif text-sm text-[#ada89e]">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Dubai Healthcare City / Jumeirah, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>+971 4 000 0000 / WhatsApp: +971 50 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>contact@nathalierosenblum.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-[#78746c] space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Nathalie Rosenblum. All Rights Reserved.</p>
          <p className="flex items-center space-x-4">
            <span>Confidentiality Guaranteed</span>
            <span>•</span>
            <span>APA & CCPA Recognized Standards</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
