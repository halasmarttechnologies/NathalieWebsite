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
      className="relative z-10 w-full pt-1 sm:pt-2 md:pt-3 pb-4 px-4 sm:px-8 lg:px-12"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Upper Script Calligraphy Quote - Exactly as in Mockup */}
        <div className="text-center mb-6 sm:mb-8 select-none">
          <p className="font-script text-[30px] sm:text-[36px] lg:text-[40px] text-[#2b2a26] tracking-wide leading-tight">
            {isAr ? "حضورك هو أثمن هدية" : "The Gift Of Presence is"}
          </p>
          <div className="inline-block relative">
            <p className="font-script text-[30px] sm:text-[36px] lg:text-[40px] text-[#2b2a26] tracking-wide leading-tight mt-0.5">
              {isAr ? "أجمل ما يمكن تقديمه" : "The Best Present"}
            </p>
            {/* Delicate Gold Underline */}
            <div className="w-24 sm:w-28 mx-auto h-[1px] bg-[#c5a059] mt-1.5" />
          </div>
        </div>

        {/* Two-Column Editorial Grid - Exact Proportions from Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Clinical Biography & Qualifications - Directly on Ivory Background */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* "MEET" Label */}
            <div className="mb-0.5">
              <span className="font-serif text-[12px] uppercase tracking-[0.45em] text-[#4d473f] font-semibold">
                {isAr ? "تـعـرّف عـلـى" : "M E E T"}
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="font-serif text-[32px] sm:text-[36px] lg:text-[40px] font-normal text-[#121110] tracking-tight leading-[1.12]">
              {isAr ? "ناتالي روزنبلوم" : "Nathalie Rosenblum"}
            </h1>

            {/* Sub-headline in Warm Gold */}
            <h2 className="font-serif text-[22px] sm:text-[25px] lg:text-[27px] font-normal text-[#9b6c28] tracking-normal mt-0.5 leading-[1.18]">
              {isAr ? "أخصائية نفسية مرخصة في دبي" : "Licensed Psychologist in Dubai"}
            </h2>

            {/* Qualifications / Credentials */}
            <div className="mt-2.5 mb-3.5 space-y-0.5 font-serif text-[13.5px] sm:text-[14px] text-[#1c1a16] font-normal leading-snug">
              <p>
                {isAr
                  ? "أخصائية نفسية مرخصة من هيئة تنمية المجتمع في دبي (CDA)"
                  : "CDA Licensed Psychologist in Dubai"}
              </p>
              <p>
                {isAr ? "الإنجليزية والعربية" : "English & Arabic"}
              </p>
              <p>
                {isAr
                  ? "معالجة نفسية | استشارية زواج | معالجة أسرية"
                  : "Psychotherapist | Marriage Counselor | Family Therapist"}
              </p>
            </div>

            {/* Biography Paragraphs - Editorial Prose Filling the Page */}
            <div className="space-y-3 font-serif text-[13px] sm:text-[13.6px] leading-[1.62] text-[#22201b] text-left rtl:text-right">
              <p>
                {isAr
                  ? "نشأت ناتالي روزنبلوم متأثرة بجذورها الأوروبية والشرق أوسطية ضمن النسيج الثقافي للتقاليد العربية والحياة الأسرية. واصلت لاحقاً تعليمها وتدريبها الإكلينيكي في أمريكا الشمالية، حيث حصلت على درجة الماجستير في علم النفس الإكلينيكي من جامعة كابيلا في مينيسوتا بالولايات المتحدة الأمريكية، ومعترف بها من قبل الجمعية الأمريكية لعلم النفس (APA). ناتالي أيضاً عضو في الجمعية الكندية للإرشاد والعلاج النفسي (CCPA)."
                  : "Shaped by her European and Middle Eastern heritage, Nathalie Rosenblum was raised within the cultural fabric of Arab traditions and family life. She later pursued her education and clinical training in North America, earning a Master's Degree in Clinical Psychology from Capella University, Minnesota, USA, and recognized by the American Psychological Association (APA). Nathalie is also a member of the Canadian Counselling and Psychotherapy Association (CCPA)."}
              </p>

              <p>
                {isAr
                  ? "تتمتع ناتالي بخبرة إكلينيكية تمتد لأكثر من 25 عاماً في تقديم الدعم النفسي باللغتين العربية والإنجليزية لمختلف الفئات في أمريكا الشمالية والشرق الأوسط، بما في ذلك الإمارات، العراق، تركيا، كندا، والولايات المتحدة. يجمع عملها بين التقييم التشخيصي، وعلاج الاضطرابات النفسية والسلوكية، والعلاج النفسي للأفراد والأزواج والعائلات في البيئات الخاصة وبيئات العمل، وتزويد العملاء برعاية نفسية شاملة ومتكاملة."
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

          {/* Right Column: Portrait Photo & Expertise Box (Exact Proportions) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            {/* Crisp Rectangular Portrait with Thin Gold Border */}
            <div className="relative w-full max-w-[340px] sm:max-w-[365px] lg:max-w-[380px] aspect-[270/323] border border-[#c5a059] shadow-[0_4px_16px_rgba(0,0,0,0.12)] overflow-hidden">
              <Image
                src="/images/nathalie-exact-portrait.jpg"
                alt="Nathalie Rosenblum - CDA Licensed Psychologist in Dubai"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-top"
              />
            </div>

            {/* Expertise Box Directly Below Portrait with Same Exact Width */}
            <div className="w-full max-w-[340px] sm:max-w-[365px] lg:max-w-[380px] mt-3 sm:mt-3.5">
              <ExpertiseCard currentLang={isAr ? "ar" : "en"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
