"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import InnerPageBackground from "@/components/InnerPageBackground";
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
      {/* Pristine Clean Luxury Canvas */}
      <InnerPageBackground />

      {/* Main Page Layout Container */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Navigation Bar */}
        <Navbar
          currentLang={currentLang}
          onToggleLang={(lang) => setCurrentLang(lang)}
          onOpenBooking={() => handleOpenBooking("General Consultation")}
        />

        {/* Hero / Bio / Expertise Section */}
        <div className="mt-1 sm:mt-3 md:mt-4">
          <HeroSection currentLang={currentLang} />
        </div>

        {/* Three Pillar Service Cards */}
        <div className="mt-1 sm:mt-2 mb-8 sm:mb-12">
          <ServiceCards
            currentLang={currentLang}
            onSelectService={(service) => handleOpenBooking(service)}
          />
        </div>
      </div>

      {/* Clean High-Readability Luxury Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking("Consultation")}
      />

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


