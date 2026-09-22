"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LuxuryBackground from "@/components/LuxuryBackground";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  Globe,
  Compass,
  Heart,
  Brain,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function AboutPage() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const timeline = [
    {
      year: "Academic",
      titleEn: "Master of Science in Clinical Psychology",
      titleAr: "ماجستير العلوم في علم النفس الإكلينيكي",
      institutionEn: "Capella University, Minnesota, USA (Recognized by APA)",
      institutionAr: "جامعة كابيلا، مينيسوتا، الولايات المتحدة (معترف بها من APA)",
      descEn:
        "Rigorous graduate training in psychopathology, diagnostic assessment, empirical research, and advanced clinical psychotherapy modalities.",
      descAr:
        "تدريب دراسات عليا متقدم في علم الأمراض النفسية، والتقييم التشخيصي، والبحوث الإكلينيكية، ومناهج العلاج النفسي المتقدمة.",
    },
    {
      year: "Licensure",
      titleEn: "Licensed Psychologist in Dubai",
      titleAr: "أخصائية نفسية مرخصة في دبي",
      institutionEn: "Community Development Authority (CDA), Government of Dubai",
      institutionAr: "هيئة تنمية المجتمع (CDA) - حكومة دبي",
      descEn:
        "Official government clinical licensure authorizing private independent psychological practice, diagnostic assessment, and psychotherapy.",
      descAr:
        "ترخيص مهني رسمي صادر عن حكومة دبي يخول الممارسة المستقلة لعلم النفس، والتقييم التشخيصي، والعلاج النفسي السريري.",
    },
    {
      year: "Membership",
      titleEn: "Professional Clinical Member",
      titleAr: "عضوية مهنية إكلينيكية معتمدة",
      institutionEn: "Canadian Counselling and Psychotherapy Association (CCPA)",
      institutionAr: "الجمعية الكندية للإرشاد والعلاج النفسي (CCPA)",
      descEn:
        "Adhering to strict North American ethical codes, continuing clinical education, and cross-cultural therapeutic standards.",
      descAr:
        "الالتزام بأعلى معايير الأخلاقيات المهنية في أمريكا الشمالية، والتطوير الإكلينيكي المستمر، وممارسات الرعاية العابرة للثقافات.",
    },
    {
      year: "25+ Years",
      titleEn: "International Clinical Practice",
      titleAr: "ممارسة إكلينيكية دولية تفوق 25 عاماً",
      institutionEn: "UAE, Canada, USA, Turkey, and Middle East",
      institutionAr: "الإمارات، كندا، الولايات المتحدة، تركيا، والشرق الأوسط",
      descEn:
        "Over two and a half decades supporting individuals, couples, and multinational families across hospital, corporate, and private clinic environments.",
      descAr:
        "أكثر من عقدين ونصف في تقديم الدعم النفسي للأفراد والأزواج والعائلات متعددة الثقافات في بيئات استشفائية وخاصة ومؤسسية.",
    },
  ];

  const modalities = [
    {
      nameEn: "Existential Psychotherapy",
      nameAr: "العلاج النفسي الوجودي",
      descEn: "Exploring freedom, responsibility, meaning, and authentic living.",
      descAr: "استكشاف الحرية، والمسؤولية، والمعنى، والعيش بأصالة ووعي.",
    },
    {
      nameEn: "Compassionate Inquiry",
      nameAr: "الاستقصاء العطوف",
      descEn: "Uncovering implicit memories and childhood emotional adaptations without shame.",
      descAr: "كشف الذكريات العاطفية والتكيفات الطفولية الدفينة بلطف ودون خجل.",
    },
    {
      nameEn: "Cognitive Behavioral Therapy (CBT)",
      nameAr: "العلاج المعرفي السلوكي (CBT)",
      descEn: "Restructuring cognitive distortions and regulating emotional distress.",
      descAr: "إعادة بناء التشوهات المعرفية وإعادة تنظيم الاستجابات الانفعالية.",
    },
    {
      nameEn: "Emotion-Focused Therapy (EFT)",
      nameAr: "العلاج المرتكز على العواطف (EFT)",
      descEn: "Deep emotional processing and healing attachment wounds.",
      descAr: "المعالجة العاطفية العميقة وتضميد جروح التعلق والانفصال.",
    },
    {
      nameEn: "Schema Therapy",
      nameAr: "علاج المخططات المعرفية (Schema)",
      descEn: "Addressing deeply entrenched maladaptive schemas developed in early life.",
      descAr: "معالجة المخططات اللاتكيفية المتجذرة المتكونة في المراحل المبكرة من الحياة.",
    },
    {
      nameEn: "The Gottman Relationship Method",
      nameAr: "طريقة غوتمان لعلاج العلاقات",
      descEn: "Research-backed principles to dismantle destructive interaction cycles.",
      descAr: "مبادئ علمية قائمة على عقود من البحث لتفكيك دورات الخلاف الزوجي المدمرة.",
    },
  ];

  return (
    <main
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <LuxuryBackground />

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar
          currentLang={currentLang}
          onToggleLang={toggleLang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Page Header */}
        <PageHeader
          badgeEn="About The Practitioner"
          badgeAr="عن الأخصائية والنهج العلاجي"
          subtitleEn="European Heritage, Arab Roots & International Training"
          subtitleAr="جذور عربية، تراث أوروبي، وتدريب إكلينيكي في أمريكا الشمالية"
          titleEn="Nathalie Rosenblum, M.S."
          titleAr="ناتالي روزنبلوم"
          descriptionEn="A dedicated, CDA-licensed psychologist with over 25 years of cross-cultural clinical experience providing holistic psychotherapy in Dubai."
          descriptionAr="أخصائية نفسية إكلينيكية مرخصة من هيئة تنمية المجتمع في دبي بخبرة تتجاوز ربع قرن في تقديم الدعم النفسي الفردي والأسري باللغتين العربية والإنجليزية."
        />

        {/* Editorial Story Section */}
        <section className="relative z-10 py-10 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1180px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Portrait Frame */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[390px] aspect-[274/330] p-2.5 bg-[#0c0d12] border-2 border-[#c5a059] shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <div className="relative w-full h-full border border-[#c5a059]/50 overflow-hidden">
                    <Image
                      src="/images/nathalie-rosenblum.jpg"
                      alt="Nathalie Rosenblum Licensed Clinical Psychologist Dubai"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 390px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Gold corner accents */}
                  <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#f3d085]" />
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#f3d085]" />
                  <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#f3d085]" />
                  <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#f3d085]" />
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-5 font-serif text-[15.5px] leading-[1.8] text-[#1f1d19] bg-[#faf6ee]/90 backdrop-blur-md p-7 sm:p-9 border border-[#c5a059]/60 shadow-[0_10px_30px_rgba(150,120,70,0.1)] rounded-xl">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal tracking-tight mb-3">
                  {isAr ? "رحلة ممتدة بين ثقافتين ورؤية إنسانية عميقة" : "Bridging Cultures & Healing Minds"}
                </h2>

                <p>
                  {isAr
                    ? "نشأت ناتالي روزنبلوم متأثرة بجذورها الأوروبية والشرق أوسطية، مما أتاح لها فهماً فطرياً وعميقاً لديناميكيات الأسرة العربية، والتقاليد المجتمعية، وتعقيدات الهوية لدى المقيمين والأسر متعددة الثقافات. هذا المزيج الفريد من الانتماء الثقافي يشكل حجر الزاوية في ممارستها العلاجية."
                    : "Shaped by her European and Middle Eastern heritage, Nathalie was raised within the rich cultural fabric of Arab traditions and close-knit family life. This dual perspective affords her a natural, empathetic understanding of multicultural identity, family obligations, and the unique challenges faced by local and expatriate residents in Dubai."}
                </p>

                <p>
                  {isAr
                    ? "صقلت ناتالي مهاراتها الإكلينيكية في الولايات المتحدة الأمريكية، حيث نالت درجة الماجستير في علم النفس الإكلينيكي من جامعة كابيلا في مينيسوتا والمعترف بها من قبل الجمعية الأمريكية لعلم النفس (APA). وعلى مدى 25 عاماً من العمل في أمريكا الشمالية والشرق الأوسط، ساعدت آلاف الأفراد والأزواج على استعادة السلام النفسي والاستقرار العاطفي."
                    : "She completed her graduate clinical psychology education at Capella University in Minnesota, USA—an institution recognized by the American Psychological Association (APA). Over more than 25 years of clinical practice across North America and the Middle East, she has provided compassionate, confidential, and transformative care to diverse client populations."}
                </p>

                <p>
                  {isAr
                    ? "ترتكز فلسفة ناتالي على العلاج النفسي الوجودي والاستقصاء العطوف. فهي تؤمن بأن المعاناة النفسية ليست عيباً شخصياً أو مجرد خلل كيميائي، بل هي استجابة لتجارب وتحديات غير محلولة في حياة الإنسان. من خلال استكشاف المعنى الكامن خلف الأعراض، يتمكن العميل من بناء حياة تتسم بالوضوح والحرية العاطفية."
                    : "Her clinical orientation centers on Existential Psychotherapy and Compassionate Inquiry. Nathalie views psychological pain not as a broken mechanism to be mechanically fixed, but as a meaningful response to life's unresolved dilemmas, conditioning, and unspoken yearnings. By uncovering the roots beneath symptoms, clients discover profound clarity and genuine self-agency."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Milestones Timeline */}
        <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12 bg-black/60 border-y border-[#c5a059]/25">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#e5be70] font-semibold">
                {isAr ? "المؤهلات والاعتمادات" : "Credentials & Qualifications"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1">
                {isAr ? "مسيرة أكاديمية وإكلينيكية معتمدة" : "Academic & Professional Recognition"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-xl bg-[#12131a]/90 border border-[#c5a059]/35 hover:border-[#c5a059] transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#f5d996] font-serif text-xs tracking-wider">
                        {item.year}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
                    </div>
                    <h3 className="font-serif text-[21px] text-white font-normal mb-1 group-hover:text-[#e5be70] transition-colors">
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="font-serif text-sm text-[#d4af62] mb-3">
                      {isAr ? item.institutionAr : item.institutionEn}
                    </p>
                    <p className="font-serif text-sm text-[#cfc9be] leading-relaxed">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence-Informed Modalities Grid */}
        <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#936227] font-semibold">
                {isAr ? "النهج التكاملي" : "Clinical Modalities"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal mt-1">
                {isAr ? "أساليب علاجية مدعومة بالأبحاث العلمية" : "Evidence-Informed Approaches"}
              </h2>
              <p className="font-serif text-sm sm:text-base text-[#4d483e] mt-2">
                {isAr
                  ? "يتم تصميم كل خطة علاجية بصورة فردية ومخصصة لتلائم احتياجاتك النفسية وتطلعاتك الشخصية."
                  : "Every therapeutic plan is tailored specifically to your unique lived experience, goals, and emotional landscape."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {modalities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#faf6ee] border border-[#e5dbc9] hover:border-[#c5a059] transition-all duration-300 shadow-[0_6px_20px_rgba(150,120,80,0.08)] hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/15 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#936227]" />
                  </div>
                  <h3 className="font-serif text-[18px] text-[#1a1a1a] font-normal mb-1.5">
                    {isAr ? item.nameAr : item.nameEn}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-[#504b41] leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="relative z-10 py-12 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[#14151c] via-[#0d0e12] to-[#14151c] border-t border-[#c5a059]/30 text-white text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              {isAr ? "ابدأ جلستك الأولى مع ناتالي روزنبلوم" : "Take the First Step with Nathalie Rosenblum"}
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#ded9cd]">
              {isAr
                ? "تفضل بالتواصل معنا لحجز جلسة استشارية سرية في دبي أو عبر الإنترنت."
                : "Book a confidential clinical consultation in Dubai or via secure telehealth worldwide."}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold shadow-md hover:brightness-105 transition-all cursor-pointer inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{isAr ? "حجز جلسة استشارية" : "Book A Consultation"}</span>
              </button>
              <Link
                href="/services"
                className="px-6 py-3 rounded-full border border-[#c5a059] bg-white/5 hover:bg-white/10 text-white font-serif transition-all inline-flex items-center space-x-1.5 rtl:space-x-reverse"
              >
                <span>{isAr ? "استكشف الخدمات العلاجية" : "Explore Therapy Services"}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService="Clinical Consultation"
        currentLang={currentLang}
      />
    </main>
  );
}
