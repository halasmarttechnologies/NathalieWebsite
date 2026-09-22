"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ServiceCardsProps {
  currentLang?: "en" | "ar";
  onSelectService?: (serviceName: string) => void;
}

export default function ServiceCards({
  currentLang = "en",
  onSelectService,
}: ServiceCardsProps) {
  const isAr = currentLang === "ar";

  const services = [
    {
      id: "individual",
      title: isAr ? "العلاج الفردي" : "Individual Therapy",
      description: isAr
        ? "مساحة لفهم أعمق، ووضوح، وتغيير هادف."
        : "A space for deeper understanding, clarity and meaningful change.",
      iconSrc: "/images/exact/icon-individual.png",
      iconAlt: "Individual Therapy",
      iconWidth: 38,
    },
    {
      id: "couples",
      title: isAr ? "علاج الأزواج" : "Couples Therapy",
      description: isAr
        ? "تعزيز التواصل والتفاهم والنمو المشترك."
        : "Strengthening connection, communication and shared growth.",
      iconSrc: "/images/exact/icon-couples.png",
      iconAlt: "Couples Therapy",
      iconWidth: 44,
    },
    {
      id: "family",
      title: isAr ? "العلاج الأسري" : "Family Therapy",
      description: isAr
        ? "خلق التفاهم والمرونة وديناميكيات أكثر صحة."
        : "Creating understanding, resilience and healthier dynamics.",
      iconSrc: "/images/exact/icon-family.png",
      iconAlt: "Family Therapy",
      iconWidth: 48,
    },
  ];

  return (
    <section id="services" className="relative z-10 w-full pt-4 pb-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
        {services.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectService?.(item.title)}
            className="group relative bg-[#faf6ee] border border-[#e5dbc9] hover:border-[#c5a059] rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-300 shadow-[0_6px_20px_rgba(150,120,80,0.08)] hover:shadow-[0_12px_28px_rgba(150,120,80,0.18)] hover:-translate-y-1 cursor-pointer min-h-[275px]"
            dir={isAr ? "rtl" : "ltr"}
          >
            {/* Exact Line-Art Icon */}
            <div className="flex items-center justify-center h-12 mb-2">
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={item.iconWidth}
                height={40}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title & Centered Gold Underline */}
            <div className="flex flex-col items-center mb-1">
              <h3 className="font-serif text-[22px] sm:text-[23px] font-normal text-[#1a1a1a] tracking-normal group-hover:text-[#9e7631] transition-colors">
                {item.title}
              </h3>
              <div className="w-10 h-[1.2px] bg-[#c5a059] mt-2 mb-2.5" />
            </div>

            {/* Description */}
            <p className="font-serif text-[13.5px] leading-[1.55] text-[#444039] max-w-[270px] mb-5 flex-grow">
              {item.description}
            </p>

            {/* Circular Gold Arrow CTA */}
            <div className="mt-auto">
              <button
                type="button"
                aria-label={`Learn more about ${item.title}`}
                className="w-10 h-10 rounded-full border border-[#b88e4f] flex items-center justify-center text-[#b88e4f] group-hover:bg-[#c5a059] group-hover:text-white group-hover:border-[#c5a059] transition-all duration-300 focus:outline-none cursor-pointer"
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
    </section>
  );
}


