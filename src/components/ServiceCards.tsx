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
    <section id="services" className="relative z-10 w-full pt-1 sm:pt-2 pb-6 px-4 sm:px-8 lg:px-10">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectService?.(item.title)}
            className="group relative bg-[#fcf8f0]/85 backdrop-blur-[2px] border border-[#c5a059]/40 hover:border-[#c5a059] rounded-xl p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-300 shadow-[0_4px_16px_rgba(150,120,70,0.06)] hover:shadow-[0_8px_24px_rgba(150,120,70,0.12)] hover:-translate-y-0.5 cursor-pointer min-h-[190px] sm:min-h-[205px]"
            dir={isAr ? "rtl" : "ltr"}
          >
            {/* Exact Line-Art Icon */}
            <div className="flex items-center justify-center h-9 mb-1">
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={item.iconWidth}
                height={34}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title & Centered Gold Underline */}
            <div className="flex flex-col items-center mb-1">
              <h3 className="font-serif text-[18px] sm:text-[19px] font-normal text-[#121110] tracking-normal group-hover:text-[#9e7631] transition-colors">
                {item.title}
              </h3>
              <div className="w-8 h-[1px] bg-[#c5a059] my-1.5" />
            </div>

            {/* Description */}
            <p className="font-serif text-[12px] sm:text-[12.5px] leading-[1.5] text-[#2c2923] max-w-[240px] mb-3 flex-grow">
              {item.description}
            </p>

            {/* Circular Gold Arrow CTA */}
            <div className="mt-auto">
              <button
                type="button"
                aria-label={`Learn more about ${item.title}`}
                className="w-8 h-8 rounded-full border border-[#b88e4f] flex items-center justify-center text-[#b88e4f] group-hover:bg-[#c5a059] group-hover:text-white group-hover:border-[#c5a059] transition-all duration-300 focus:outline-none cursor-pointer"
              >
                {isAr ? (
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


