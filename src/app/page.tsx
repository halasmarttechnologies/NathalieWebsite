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
      className="relative min-h-screen w-full bg-[#f8f5ee] flex flex-col justify-between overflow-x-hidden"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      {/* Full-width Landing Page Body */}
      <div className="relative w-full flex flex-col justify-between flex-grow min-h-screen">
        {/* Exact Clean Luxury Background Images: Mobile (phoneview.png) & Desktop (heroimage.png) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Desktop Background */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/heroimage.png"
              alt="Luxury Waves & Gold Ribbons Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
              quality={100}
            />
          </div>

          {/* Mobile Background */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/phoneview.png"
              alt="Luxury Waves & Gold Ribbons Mobile Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
              quality={100}
            />
          </div>
        </div>

        {/* Navigation Bar - Transparent, integrated natively with the top black satin ribbon */}
        <div className="relative z-20 w-full">
          <Navbar
            currentLang={currentLang}
            onToggleLang={(lang) => setCurrentLang(lang)}
            onOpenBooking={() => handleOpenBooking("General Consultation")}
            isHome={true}
          />
        </div>

        {/* Hero / Bio / Expertise Section */}
        <div className="relative z-10 flex-grow w-full">
          <HeroSection currentLang={currentLang} />
        </div>

        {/* Three Pillar Service Cards */}
        <div className="relative z-10 w-full mb-6 sm:mb-10">
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


