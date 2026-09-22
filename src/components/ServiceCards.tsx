"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCardsProps {
  currentLang?: "en" | "ar";
  onSelectService?: (serviceName: string) => void;
}

export default function ServiceCards({
  currentLang: propLang,
  onSelectService,
}: ServiceCardsProps) {
  const contextLang = useLanguage();
  const isAr = (propLang || contextLang.currentLang) === "ar";

  const services = [
    {
      id: "individual",
      title: isAr ? "العلاج الفردي" : "Individual Therapy",
      subtitle: isAr ? "استكشاف الذات، التعافي، والنمو" : "Self-discovery, healing & growth",
      description: isAr
        ? "مساحة آمنة وسرية لفهم أعمق، ووضوح عاطفي، وتغيير هادف لتجاوز القلق والاكتئاب والصدمات والضغوط الحياتية."
        : "A confidential sanctuary for deeper self-understanding, emotional clarity, and meaningful change across anxiety, trauma, and life transitions.",
      iconSrc: "/images/exact/icon-individual.png",
      iconAlt: "Individual Therapy",
      iconWidth: 38,
      href: "/services#individual",
    },
    {
      id: "couples",
      title: isAr ? "علاج الأزواج" : "Couples Therapy",
      subtitle: isAr ? "تعزيز الرابط وتجاوز الخلافات" : "Connection, communication & trust",
      description: isAr
        ? "تعزيز التواصل والتفاهم وإعادة بناء الثقة والنمو المشترك استناداً إلى نهج غوتمان وتقنيات العلاج المرتكز على العاطفة."
        : "Strengthening emotional intimacy, healing trust, and transforming conflict dynamics through evidence-based Gottman and Emotion-Focused approaches.",
      iconSrc: "/images/exact/icon-couples.png",
      iconAlt: "Couples Therapy",
      iconWidth: 44,
      href: "/services#couples",
    },
    {
      id: "family",
      title: isAr ? "العلاج الأسري" : "Family Therapy",
      subtitle: isAr ? "تناغم العلاقات ومرونة الأسرة" : "Relational harmony & resilience",
      description: isAr
        ? "خلق التفاهم والمرونة وديناميكيات أسرية أكثر صحة وتجاوز تحديات التواصل بين الأجيال في بيئة داعمة ومحايدة."
        : "Fostering generational understanding, resolving structural friction, and nurturing supportive family systems in a neutral, respectful space.",
      iconSrc: "/images/exact/icon-family.png",
      iconAlt: "Family Therapy",
      iconWidth: 48,
      href: "/services#family",
    },
  ];

  return (
    <section id="services" className="relative z-10 w-full pt-4 pb-14 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#936227]" />
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#936227] font-semibold">
              {isAr ? "الركائز العلاجية الثلاث" : "Core Therapeutic Pillars"}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#121110] font-normal tracking-tight">
            {isAr ? "خدمات الرعاية النفسية المتخصصة" : "Specialized Psychological Services"}
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#faf6ee] border border-[#e5dbc9] hover:border-[#c5a059] rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 shadow-[0_8px_24px_rgba(150,120,80,0.09)] hover:shadow-[0_16px_36px_rgba(150,120,80,0.22)] hover:-translate-y-1.5"
              dir={isAr ? "rtl" : "ltr"}
            >
              {/* Subtle Card Accent Bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Exact Line-Art Icon */}
              <div className="flex items-center justify-center h-14 mb-2">
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  width={item.iconWidth}
                  height={44}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title & Gold Underline */}
              <div className="flex flex-col items-center mb-1">
                <h3 className="font-serif text-[23px] sm:text-[24px] font-normal text-[#1a1a1a] tracking-normal group-hover:text-[#9e7631] transition-colors">
                  {item.title}
                </h3>
                <span className="font-serif text-xs text-[#8c8577] mt-0.5 tracking-wide">
                  {item.subtitle}
                </span>
                <div className="w-12 h-[1.5px] bg-[#c5a059] mt-2 mb-3 group-hover:w-20 transition-all duration-300" />
              </div>

              {/* Description */}
              <p className="font-serif text-[14px] leading-[1.65] text-[#444039] max-w-[280px] mb-6 flex-grow">
                {item.description}
              </p>

              {/* Actions: Learn More & Booking Trigger */}
              <div className="w-full pt-4 border-t border-[#c5a059]/20 flex items-center justify-between mt-auto">
                <Link
                  href={item.href}
                  className="font-serif text-xs uppercase tracking-wider text-[#936227] hover:text-[#121110] font-semibold transition-colors inline-flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <span>{isAr ? "تفاصيل الخدمة" : "Service Details"}</span>
                  {isAr ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                </Link>

                <button
                  type="button"
                  onClick={() => onSelectService?.(item.title)}
                  aria-label={`Book ${item.title}`}
                  className="w-9 h-9 rounded-full border border-[#b88e4f] flex items-center justify-center text-[#b88e4f] group-hover:bg-[#c5a059] group-hover:text-white group-hover:border-[#c5a059] transition-all duration-300 focus:outline-none cursor-pointer shadow-xs"
                >
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
