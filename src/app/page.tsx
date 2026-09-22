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
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      {/* Navigation Bar - Clean, separate component */}
      <div className="relative z-20">
        <Navbar
          currentLang={currentLang}
          onToggleLang={(lang) => setCurrentLang(lang)}
          onOpenBooking={() => handleOpenBooking("General Consultation")}
        />
      </div>

      {/* Whole Landing Page Body with heroimage.png as background */}
      <div className="relative z-10 flex flex-col flex-grow justify-between">
        {/* Exact Clean Luxury Background Image from User - Pushed Up */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/images/heroimage.png"
            alt="Luxury Waves & Gold Ribbons Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_-70px] sm:object-[center_-90px] md:object-[center_-110px]"
            style={{ objectPosition: "center -100px" }}
            quality={98}
          />
        </div>

        {/* Hero / Bio / Expertise Section */}
        <div className="relative z-10 mt-1 sm:mt-3 md:mt-4">
          <HeroSection currentLang={currentLang} />
        </div>

        {/* Three Pillar Service Cards */}
        <div className="relative z-10 mt-1 sm:mt-2 mb-8 sm:mb-12">
          <ServiceCards
            currentLang={currentLang}
            onSelectService={(service) => handleOpenBooking(service)}
          />
        </div>
      </div>

      {/* Clean High-Readability Luxury Footer */}
      <div className="relative z-20">
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


