import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface ExpertiseCardProps {
  currentLang?: "en" | "ar";
}

export default function ExpertiseCard({ currentLang = "en" }: ExpertiseCardProps) {
  const isAr = currentLang === "ar";

  return (
    <div
      id="expertise"
      className="w-full bg-[#faf6ee]/95 backdrop-blur-md border border-[#c5a059] shadow-[0_8px_24px_rgba(150,120,70,0.12)] p-6 sm:p-7 rounded-none text-[#24221d] relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d9b87b] via-[#c5a059] to-[#9e7934]" />

      <div className="flex items-center justify-between mb-3.5">
        <h3 className="font-serif text-2xl sm:text-[26px] text-[#121110] font-normal tracking-wide">
          {isAr ? "مجالات الخبرة" : "Clinical Expertise"}
        </h3>
        <span className="font-serif text-xs uppercase tracking-widest text-[#936227] font-medium">
          CDA Licensed
        </span>
      </div>

      <div className="space-y-3 font-serif text-[14px] sm:text-[14.5px] leading-[1.68] text-[#282622]">
        {/* Diagnostic Assessment Block */}
        <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
          <p className="text-left rtl:text-right">
            {isAr
              ? "التقييم التشخيصي وعلاج اضطرابات المزاج والقلق، الوسواس القهري، الاكتئاب، الاضطراب ثنائي القطب، الصدمات واضطراب ما بعد الصدمة (PTSD)، الصعوبات المتعلقة بالشخصية، عدم التنظيم العاطفي، الإدمان والسلوكيات القهرية، والاهتمامات المتعلقة بالتنوع العصبي — بما في ذلك التوحد واضطراب فرط الحركة وتشتت الانتباه (ADHD) — وصعوبات العلاقات المعقدة."
              : "Diagnostic Assessment and Treatment of Mood and Anxiety Disorders, OCD, Depression, Bipolar Disorder, Trauma and PTSD, Personality-Related Difficulties, Emotional Dysregulation, Addictions and Compulsive Behaviours, Neurodivergence-Related Concerns—including Autism and ADHD—and Complex Relationship Difficulties."}
          </p>
        </div>

        {/* Therapy Modalities Block */}
        <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
          <p className="text-left rtl:text-right">
            {isAr
              ? "العلاج النفسي الفردي والجماعي، استشارات الأزواج والزواج، والعلاج الأسري."
              : "Individual and Group Psychotherapy, Couples and Marriage Counselling, and Family Therapy."}
          </p>
        </div>

        {/* Solution Focused Block */}
        <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
          <p className="text-left rtl:text-right">
            {isAr
              ? "استشارات قائمة على الحلول للتحديات الشخصية والمهنية، والإرشاد المهني والوظيفي."
              : "Solution-Focused Counselling for Personal and Work-Related Challenges, and Vocational and Career Counselling."}
          </p>
        </div>
      </div>

      {/* Link to Full Disorders Page */}
      <div className="mt-5 pt-3 border-t border-[#c5a059]/30 text-center">
        <Link
          href="/disorders"
          className="inline-flex items-center space-x-1.5 rtl:space-x-reverse font-serif text-[13.5px] text-[#936227] hover:text-[#5f3c11] font-semibold tracking-wide transition-colors group"
        >
          <span>{isAr ? "استكشف كافة مجالات العلاج بالتفصيل" : "Explore All Clinical Practice Areas"}</span>
          {isAr ? (
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          ) : (
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      </div>
    </div>
  );
}
