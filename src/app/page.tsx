"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Individual Therapy");

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  return (
    <main
      className="relative min-h-screen w-full bg-[#0a0b0e] flex flex-col items-center justify-between overflow-x-hidden"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      {/* Luxury Broadsheet Canvas Container */}
      <div className="relative w-full max-w-[1140px] xl:max-w-[1180px] flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.85)] min-h-screen">
        {/* Exact Clean Luxury Background Image from User */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/images/heroimage.png"
            alt="Luxury Waves & Gold Ribbons Background"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1180px"
            className="object-cover object-top"
            quality={100}
          />
        </div>

        {/* Navigation Bar - Transparent, integrated natively with the top black satin ribbon */}
        <div className="relative z-20">
          <Navbar
            currentLang={currentLang}
            onToggleLang={(lang) => setCurrentLang(lang)}
            onOpenBooking={() => handleOpenBooking("General Consultation")}
            isHome={true}
          />
        </div>

        {/* Hero / Bio / Expertise Section */}
        <div className="relative z-10 flex-grow">
          <HeroSection currentLang={currentLang} />
        </div>

        {/* Three Pillar Service Cards */}
        <div className="relative z-10 mb-4 sm:mb-8">
          <ServiceCards
            currentLang={currentLang}
            onSelectService={(service) => handleOpenBooking(service)}
          />
        </div>
      </div>

      {/* Clean High-Readability Luxury Footer */}
      <div className="relative z-20 w-full">
        <Footer
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking("Consultation")}
        />
      </div>

      {/* Interactive Booking / Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
        currentLang={currentLang}
      />
    </main>
  );
}


