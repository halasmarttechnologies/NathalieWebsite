"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LuxuryBackground from "@/components/LuxuryBackground";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  Brain,
  Globe2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Quote,
  Sparkles,
  CalendarCheck,
} from "lucide-react";

export default function Home() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Individual Therapy");

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const philosophyPillars = [
    {
      icon: <Compass className="w-6 h-6 text-[#c5a059]" />,
      titleEn: "Existential Meaning & Depth",
      titleAr: "البحث عن المعنى والعمق الوجودي",
      descEn:
        "Therapy that reaches beyond surface symptoms to explore life's core questions, purpose, choices, and genuine personal authenticity.",
      descAr:
        "علاج يتجاوز الأعراض السطحية لاستكشاف أسئلة الحياة الجوهرية، والهدف، والاختيارات، والأصالة الإنسانية الحقيقية.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#c5a059]" />,
      titleEn: "Compassionate Inquiry",
      titleAr: "الاستقصاء العطوف والاستكشاف الهادف",
      descEn:
        "Gentle curiosity that unpacks unconscious emotional patterns, hidden beliefs, and childhood conditioning without judgment or blame.",
      descAr:
        "فضول لطيف يفكك الأنماط العاطفية اللاواعية، والمعتقدات الدفينة، وتجارب الحياة دون إصدار أحكام أو لوم.",
    },
    {
      icon: <Brain className="w-6 h-6 text-[#c5a059]" />,
      titleEn: "Evidence-Informed Integration",
      titleAr: "نهج إكلينيكي تكاملي قائم على الأدلة",
      descEn:
        "Seamlessly integrating CBT, Emotion-Focused Therapy (EFT), Schema Therapy, DBT, and the Gottman Method for relationship resilience.",
      descAr:
        "دمج منهجي للعلاج المعرفي السلوكي، والعلاج المرتكز على العواطف، وعلاج المخططات، وطريقة غوتمان للعلاقات الزوجية.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#c5a059]" />,
      titleEn: "Cultural Harmony & Heritage",
      titleAr: "التناغم الثقافي واحترام الجذور",
      descEn:
        "Deep respect for Arab family traditions blended with international clinical training in North America, fluent in English and Arabic.",
      descAr:
        "احترام عميق للتقاليد الأسرية العربية متكامل مع تدريب إكلينيكي متقدم في أمريكا الشمالية، بطلاقة تامة بالعربية والإنجليزية.",
    },
  ];

  const highlights = [
    {
      number: "25+",
      labelEn: "Years Clinical Experience",
      labelAr: "عاماً من الخبرة الإكلينيكية",
    },
    {
      number: "CDA",
      labelEn: "Licensed Psychologist Dubai",
      labelAr: "مرخصة رسمياً في دبي",
    },
    {
      number: "100%",
      labelEn: "Strict Confidentiality",
      labelAr: "سرية تامة وأمان مطلق",
    },
    {
      number: "Dual",
      labelEn: "Fluent English & Arabic",
      labelAr: "جلسات بالعربية والإنجليزية",
    },
  ];

  const testimonials = [
    {
      quoteEn:
        "Nathalie created a safe sanctuary where I could finally understand my anxiety instead of just fighting it. Her existential perspective and compassionate guidance brought me back to myself.",
      quoteAr:
        "خلقت ناتالي مساحة آمنة استطعت فيها أخيراً فهم مشاعر القلق بدلاً من محاربتها فقط. رؤيتها الوجودية وتوجيهها العطوف أعاداني إلى ذاتي وتوازني الداخلي.",
      authorEn: "Executive Client, Dubai International Financial Centre (DIFC)",
      authorAr: "عميل استشاري - مركز دبي المالي العالمي",
      serviceEn: "Individual Psychotherapy",
      serviceAr: "علاج نفسي فردي",
    },
    {
      quoteEn:
        "After years of cyclical miscommunication, our couples sessions with Nathalie transformed the way my husband and I listen to each other. We learned to connect with warmth rather than defense.",
      quoteAr:
        "بعد سنوات من سوء الفهم المتكرر، غيرت جلسات الأزواج مع ناتالي الطريقة التي نتواصل بها. تعلمنا كيف نقترب بمودة وتفهم حقيقي بدلاً من الدفاعية.",
      authorEn: "Couple residing in Jumeirah, Dubai",
      authorAr: "زوجان مقيمان في جميرا، دبي",
      serviceEn: "Couples & Marriage Therapy",
      serviceAr: "استشارات أزواج وزواج",
    },
  ];

  return (
    <main
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Signature Luxury Background with Black Silk & Sculptural Gold Ribbons */}
      <LuxuryBackground />

      {/* Main Page Content Container */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Navigation Bar */}
        <Navbar
          currentLang={currentLang}
          onToggleLang={toggleLang}
          onOpenBooking={() => handleOpenBooking("General Consultation")}
        />

        {/* Hero / Bio / Expertise Section */}
        <div className="mt-1 sm:mt-3 md:mt-4">
          <HeroSection currentLang={currentLang} />
        </div>

        {/* Three Pillar Service Cards */}
        <div className="mt-2 mb-10 sm:mb-14">
          <ServiceCards
            currentLang={currentLang}
            onSelectService={(service) => handleOpenBooking(service)}
          />
        </div>

        {/* Clinical Philosophy & Therapeutic Pillars Section */}
        <section className="relative z-10 py-14 sm:py-18 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-black/40 via-black/60 to-black/40 border-y border-[#c5a059]/20">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-serif text-xs uppercase tracking-[0.3em] text-[#e5be70] font-semibold">
                {isAr ? "فلسفة الرعاية النفسية" : "Therapeutic Philosophy"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white mt-1.5 mb-3 leading-tight">
                {isAr
                  ? "العلاج النفسي الوجودي والاستقصاء العطوف"
                  : "Existential Psychotherapy & Compassionate Inquiry"}
              </h2>
              <p className="font-serif text-[15px] sm:text-[16px] text-[#ded9cd] leading-relaxed">
                {isAr
                  ? "نهج متكامل يجمع بين الفهم العميق لجوهر التجربة الإنسانية وأحدث التقنيات العلاجية القائمة على الأدلة الإكلينيكية لمساعدتك على الوصول إلى الوضوح والسلام الداخلي."
                  : "A collaborative journey exploring what lies beyond symptoms—uncovering core emotions, transforming painful relationship patterns, and discovering authentic purpose."}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#14151c]/90 border border-[#c5a059]/30 hover:border-[#c5a059] shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h3 className="font-serif text-[19px] sm:text-[20px] text-white font-normal mb-2.5 group-hover:text-[#e5be70] transition-colors">
                      {isAr ? pillar.titleAr : pillar.titleEn}
                    </h3>
                    <p className="font-serif text-[14px] text-[#c7c1b5] leading-relaxed">
                      {isAr ? pillar.descAr : pillar.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Highlights Strip */}
        <section className="relative z-10 py-10 px-4 sm:px-8 lg:px-12 bg-[#090a0d] border-b border-[#c5a059]/25">
          <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-gradient text-[#e5be70] tracking-tight">
                  {item.number}
                </span>
                <span className="font-serif text-xs sm:text-sm text-[#ded9cd] uppercase tracking-wider mt-1.5 max-w-[180px]">
                  {isAr ? item.labelAr : item.labelEn}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Client Reflections & Words of Gratitude */}
        <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 mb-2">
                <Quote className="w-3.5 h-3.5 text-[#e5be70]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#e5be70]">
                  {isAr ? "آراء وتجارب" : "Client Reflections"}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#121110] font-normal tracking-tight">
                {isAr ? "شهادات من مسار التعافي" : "Words from the Therapeutic Journey"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#faf6ee] border border-[#c5a059]/60 shadow-[0_8px_24px_rgba(150,120,70,0.1)] flex flex-col justify-between relative"
                >
                  <Quote className="w-8 h-8 text-[#c5a059]/30 absolute top-6 right-6 rtl:right-auto rtl:left-6" />
                  <p className="font-serif text-[15.5px] sm:text-[16.5px] italic text-[#2c2923] leading-relaxed mb-6">
                    &ldquo;{isAr ? t.quoteAr : t.quoteEn}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-[#c5a059]/25 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-sm font-semibold text-[#1a1a1a]">
                        {isAr ? t.authorAr : t.authorEn}
                      </p>
                      <p className="font-serif text-xs text-[#827969]">
                        {isAr ? t.serviceAr : t.serviceEn}
                      </p>
                    </div>
                    <span className="text-xs font-serif text-[#936227] uppercase tracking-wider">
                      {isAr ? "دبي" : "Dubai, UAE"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elegant Appointment CTA Banner */}
        <section className="relative z-10 py-14 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[#14151c] via-[#0d0e12] to-[#14151c] border-t border-[#c5a059]/30 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="font-script text-3xl sm:text-4xl text-[#f2e4c7]">
              {isAr ? "ابدأ خطوتك الأولى نحو السلام الداخلي" : "Begin Your Path Toward Wholeness"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              {isAr
                ? "احجز جلسة استشارية سرية في دبي أو عبر الإنترنت"
                : "Schedule A Confidential Consultation"}
            </h2>
            <p className="font-serif text-[15px] sm:text-[16px] text-[#cfc9be] max-w-xl mx-auto leading-relaxed">
              {isAr
                ? "جلسات حضورية في عيادتنا في دبي أو جلسات مرئية آمنة عبر الإنترنت للمقيمين في الإمارات وخارجها."
                : "In-person sessions at our private Dubai practice or secure telehealth worldwide. English and Arabic consultations available."}
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleOpenBooking("General Consultation")}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-base shadow-[0_4px_16px_rgba(212,175,98,0.35)] hover:brightness-105 transition-all cursor-pointer inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{isAr ? "احجز جلستك الآن" : "Book Your Session"}</span>
              </button>
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full border border-[#c5a059] bg-white/5 hover:bg-white/10 text-white font-serif text-base transition-all inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{isAr ? "موقع العيادة والتواصل" : "Clinic Location & Inquiries"}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>
          </div>
        </section>
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
