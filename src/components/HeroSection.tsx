"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Languages, GraduationCap, ArrowRight, ArrowLeft } from "lucide-react";
import ExpertiseCard from "./ExpertiseCard";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  currentLang?: "en" | "ar";
}

export default function HeroSection({ currentLang: propLang }: HeroSectionProps) {
  const contextLang = useLanguage();
  const isAr = (propLang || contextLang.currentLang) === "ar";

  return (
    <section
      id="home"
      className="relative z-10 w-full pt-4 sm:pt-6 md:pt-8 pb-6 px-4 sm:px-8 lg:px-12"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Upper Script Calligraphy Quote */}
        <div className="text-center mb-8 sm:mb-11 select-none">
          <p className="font-script text-3xl sm:text-4xl lg:text-[46px] text-white tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {isAr ? "حضورك هو أثمن هدية" : "The Gift Of Presence is"}
          </p>
          <div className="inline-block relative">
            <p className="font-script text-3xl sm:text-4xl lg:text-[46px] text-white tracking-wide leading-tight mt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {isAr ? "أجمل ما يمكن تقديمه" : "The Best Present"}
            </p>
            {/* Delicate Gold Underline with Diamond Accent */}
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mt-2">
              <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="w-2 h-2 rotate-45 border border-[#c5a059] bg-[#e5be70] shadow-[0_0_8px_rgba(229,190,112,0.8)]" />
              <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </div>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-start">
          {/* Left Column: Clinical Biography & Qualifications (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* "MEET" Label */}
            <div className="mb-1 flex items-center space-x-2 rtl:space-x-reverse">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span className="font-serif text-[13px] uppercase tracking-[0.45em] text-[#4d473f] font-semibold">
                {isAr ? "تـعـرّف عـلـى" : "M E E T"}
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#121110] tracking-tight leading-[1.12]">
              {isAr ? "ناتالي روزنبلوم" : "Nathalie Rosenblum"}
            </h1>

            {/* Sub-headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-normal text-[#936227] tracking-normal mt-0.5 leading-[1.2]">
              {isAr ? "أخصائية نفسية مرخصة في دبي" : "Licensed Psychologist in Dubai"}
            </h2>

            {/* Qualifications / Credentials Badges Strip */}
            <div className="mt-4 mb-5 flex flex-wrap gap-2 text-xs font-serif">
              <span className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded bg-[#faf6ee] border border-[#c5a059]/70 text-[#1f1d19] font-medium shadow-xs">
                <Shield className="w-3.5 h-3.5 text-[#936227]" />
                <span>{isAr ? "مرخصة من هيئة تنمية المجتمع (CDA) دبي" : "CDA Licensed Psychologist, Dubai"}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded bg-[#faf6ee] border border-[#c5a059]/70 text-[#1f1d19] font-medium shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#936227]" />
                <span>{isAr ? "ماجستير جامعة كابيلا (الولايات المتحدة)" : "M.S. Capella University (USA)"}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded bg-[#faf6ee] border border-[#c5a059]/70 text-[#1f1d19] font-medium shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#936227]" />
                <span>{isAr ? "خبرة تفوق 25 عاماً" : "25+ Years Experience"}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded bg-[#faf6ee] border border-[#c5a059]/70 text-[#1f1d19] font-medium shadow-xs">
                <Languages className="w-3.5 h-3.5 text-[#936227]" />
                <span>{isAr ? "العربية والإنجليزية بطلاقة" : "English & Arabic"}</span>
              </span>
            </div>

            {/* Biography Paragraphs - Enhanced Editorial Polish */}
            <div className="space-y-4 font-serif text-[15px] sm:text-[15.5px] leading-[1.8] text-[#22201c] text-left rtl:text-right">
              <p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-[#936227] first-letter:mr-1 rtl:first-letter:mr-0 rtl:first-letter:ml-1">
                {isAr
                  ? "نشأت ناتالي روزنبلوم متأثرة بجذورها الأوروبية والشرق أوسطية ضمن النسيج الثقافي للتقاليد العربية والحياة الأسرية. واصلت لاحقاً تعليمها وتدريبها الإكلينيكي في أمريكا الشمالية، حيث حصلت على درجة الماجستير في علم النفس الإكلينيكي من جامعة كابيلا في مينيسوتا بالولايات المتحدة الأمريكية، ومعترف بها من قبل الجمعية الأمريكية لعلم النفس (APA). ناتالي أيضاً عضو في الجمعية الكندية للإرشاد والعلاج النفسي (CCPA)."
                  : "Shaped by her European and Middle Eastern heritage, Nathalie Rosenblum was raised within the cultural fabric of Arab traditions and family life. She later pursued her education and clinical training in North America, earning a Master's Degree in Clinical Psychology from Capella University, Minnesota, USA, and recognized by the American Psychological Association (APA). Nathalie is also a member of the Canadian Counselling and Psychotherapy Association (CCPA)."}
              </p>

              <p>
                {isAr
                  ? "تتمتع ناتالي بخبرة إكلينيكية تمتد لأكثر من 25 عاماً في تقديم الدعم النفسي باللغتين العربية والإنجليزية لمختلف الفئات في أمريكا الشمالية والشرق الأوسط، بما في ذلك الإمارات، العراق، تركيا، كندا، والولايات المتحدة. يجمع عملها بين التقييم التشخيصي، وعلاج الاضطرابات النفسية والسلوكية، والعلاج النفسي للأفراد والأزواج والعائلات في البيئات الخاصة وبيئات العمل."
                  : "Nathalie is an experienced English and Arabic-speaking psychotherapist with over 25 years of professional experience supporting diverse populations across North America and the Middle East, including the UAE, Iraq, Turkey, Canada, and the United States. Her work brings together diagnostic assessment, treatment of mental and psychological disorders, and psychotherapy for individuals, couples, and families within both private and workplace settings, providing clients with coordinated and holistic psychological support."}
              </p>

              <p>
                {isAr
                  ? "انطلاقاً من إيمانها بأن البحث عن المعنى جزء أساسي من العملية العلاجية، ترتكز ممارستها الإكلينيكية على العلاج النفسي الوجودي وتسترشد بنهج الاستقصاء العطوف. يرشد التعاطف والفضول مسار الاستكشاف لما وراء الأعراض إلى العواطف، المعتقدات، تجارب الحياة، والأنماط اللاواعية التي قد تصوغ التحديات الراهنة—فاتحةً الطريق نحو وضوح أكبر، وحرية عاطفية، وتغيير هادف."
                  : "Believing that the search for meaning is an essential part of the therapeutic process, Nathalie's clinical practice is rooted in Existential Psychotherapy and informed by Compassionate Inquiry. Compassion and curiosity guide the exploration beyond symptoms to the emotions, beliefs, life experiences, and unconscious patterns that may be shaping a person's present difficulties—opening the way toward greater clarity, emotional freedom, and meaningful change."}
              </p>

              <p>
                {isAr
                  ? "يدمج عملها أساليب علاجية قائمة على الأدلة، تشمل العلاج المعرفي السلوكي (CBT)، العلاج المرتكز على العواطف (EFT)، علاج المخططات المعرفية (Schema Therapy)، العلاج السلوكي الجدلي (DBT)، الرعاية الواعية بالصدمات، العلاج المرتكز على الحلول، طريقة غوتمان لعلاج العلاقات، والتقنيات المستوحاة من الجشطالت."
                  : "Her work integrates evidence-informed approaches, including Cognitive Behavioral Therapy (CBT), Emotion-Focused Therapy (EFT), Schema Therapy, Dialectical Behavior Therapy (DBT), trauma-informed care, Solution-Focused Therapy, The Gottman Method, and Gestalt-informed techniques."}
              </p>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-5 py-2.5 rounded-full bg-[#121110] text-[#f8e7c5] hover:bg-[#25221c] transition-all font-serif text-sm tracking-wider shadow-sm"
              >
                <span>{isAr ? "اقرأ السيرة المهنية الكاملة" : "Read Full Professional Biography"}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-5 py-2.5 rounded-full border border-[#c5a059] bg-[#faf6ee] text-[#936227] hover:bg-[#c5a059] hover:text-[#121110] transition-all font-serif text-sm font-semibold tracking-wider shadow-xs"
              >
                <span>{isAr ? "حجز موعد استشارة" : "Request Consultation"}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Portrait Photo with Double Frame & Expertise Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-5 w-full max-w-[420px] mx-auto lg:max-w-none">
            {/* Framed Portrait - High-End Double Gold Frame with Corner Brackets */}
            <div className="relative w-full aspect-[274/326] max-w-[380px] p-2 bg-[#0c0d12] border-2 border-[#c5a059] shadow-[0_12px_36px_rgba(0,0,0,0.45)] group">
              {/* Inner Decorative Hairline Frame */}
              <div className="relative w-full h-full border border-[#c5a059]/50 overflow-hidden">
                <Image
                  src="/images/nathalie-rosenblum.jpg"
                  alt="Nathalie Rosenblum - CDA Licensed Psychologist in Dubai"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Decorative Corner Filigree Highlights */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#f3d085]" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#f3d085]" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#f3d085]" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#f3d085]" />
            </div>

            {/* Expertise Box (Aligned with Portrait width) */}
            <div className="w-full max-w-[380px]">
              <ExpertiseCard currentLang={isAr ? "ar" : "en"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
