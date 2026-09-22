"use client";

import React from "react";
import Image from "next/image";
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
        {/* Upper Script Calligraphy Quote - White on phone view, Black on desktop */}
        <div className="text-center mb-8 sm:mb-10 select-none">
          <p className="font-script text-3xl sm:text-4xl lg:text-[46px] text-white md:text-[#121110] tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            {isAr ? "حضورك هو أثمن هدية" : "The Gift Of Presence is"}
          </p>
          <div className="inline-block relative">
            <p className="font-script text-3xl sm:text-4xl lg:text-[46px] text-white md:text-[#121110] tracking-wide leading-tight mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              {isAr ? "أجمل ما يمكن تقديمه" : "The Best Present"}
            </p>
            {/* Delicate Gold Underline */}
            <div className="w-4/5 mx-auto h-[1.5px] bg-[#c5a059] mt-2 shadow-xs" />
          </div>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-start">
          {/* Left Column: Clinical Biography & Qualifications - 100% Clean Background */}
          <div className="lg:col-span-7 flex flex-col justify-start bg-[#faf6ee]/96 backdrop-blur-md p-6 sm:p-9 rounded-2xl border border-[#c5a059]/40 shadow-[0_8px_30px_rgba(150,120,70,0.08)]">
            {/* "MEET" Label */}
            <div className="mb-1">
              <span className="font-serif text-[13px] uppercase tracking-[0.45em] text-[#4d473f] font-semibold">
                {isAr ? "تـعـرّف عـلـى" : "M E E T"}
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#121110] tracking-tight leading-[1.12]">
              {isAr ? "ناتالي روزنبلوم" : "Nathalie Rosenblum"}
            </h1>

            {/* Sub-headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-normal text-[#936227] tracking-normal mt-0.5 leading-[1.2]">
              {isAr ? "أخصائية نفسية مرخصة في دبي" : "Licensed Psychologist in Dubai"}
            </h2>

            {/* Qualifications / Credentials */}
            <div className="mt-4 mb-5 space-y-1 font-serif text-[14.5px] sm:text-[15.5px] text-[#1f1d19] font-medium leading-snug pb-3 border-b border-[#c5a059]/25">
              <p>
                {isAr
                  ? "أخصائية نفسية مرخصة من هيئة تنمية المجتمع في دبي (CDA)"
                  : "CDA Licensed Psychologist in Dubai"}
              </p>
              <p>
                {isAr ? "الإنجليزية والعربية" : "English & Arabic"}
              </p>
              <p className="text-[#332f28]">
                {isAr
                  ? "معالجة نفسية | استشارية زواج | معالجة أسرية"
                  : "Psychotherapist | Marriage Counselor | Family Therapist"}
              </p>
            </div>

            {/* Biography Paragraphs - Neat, Clean & High Legibility */}
            <div className="space-y-4 font-serif text-[15px] sm:text-[15.5px] leading-[1.8] text-[#22201c] text-left rtl:text-right">
              <p>
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
          </div>

          {/* Right Column: Portrait Photo & Expertise Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-5 w-full max-w-[420px] mx-auto lg:max-w-none">
            {/* Framed Portrait - Exact Photo and Proportion */}
            <div className="relative w-full aspect-[274/326] max-w-[380px] border border-[#c5a059] shadow-md bg-[#1a1b20] overflow-hidden group">
              <Image
                src="/images/nathalie-rosenblum.jpg"
                alt="Nathalie Rosenblum - CDA Licensed Psychologist in Dubai"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
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
