import React from "react";

interface ExpertiseCardProps {
  currentLang?: "en" | "ar";
}

export default function ExpertiseCard({ currentLang = "en" }: ExpertiseCardProps) {
  const isAr = currentLang === "ar";

  return (
    <div
      id="expertise"
      className="w-full bg-[#f5f0e8]/85 backdrop-blur-[1px] border border-[#C2AB62] shadow-[0_4px_16px_rgba(194,171,98,0.12)] p-4 sm:p-4.5 text-[#24221d]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <h3 className="font-serif text-[22px] sm:text-[24px] text-[#121110] font-normal tracking-wide">
        {isAr ? "مجالات الخبرة" : "Expertise"}
      </h3>
      <div className="w-10 h-[1.5px] bg-[#C2AB62] mt-1.5 mb-3 shadow-[0_0_6px_rgba(194,171,98,0.4)]" />

      <div className="space-y-3 font-content text-[14px] sm:text-[14.5px] lg:text-[15px] leading-[1.65] text-[#24211c]">
        {/* Diagnostic Assessment Block */}
        <p className="text-left rtl:text-right">
          {isAr
            ? "التقييم التشخيصي وعلاج اضطرابات المزاج والقلق، الوسواس القهري، الاكتئاب، الاضطراب ثنائي القطب، الصدمات واضطراب ما بعد الصدمة (PTSD)، الصعوبات المتعلقة بالشخصية، عدم التنظيم العاطفي، الإدمان والسلوكيات القهرية، والاهتمامات المتعلقة بالتنوع العصبي — بما في ذلك التوحد واضطراب فرط الحركة وتشتت الانتباه (ADHD) — وصعوبات العلاقات المعقدة."
            : "Diagnostic Assessment and Treatment of Mood and Anxiety Disorders, OCD, Depression, Bipolar Disorder, Trauma and PTSD, Personality-Related Difficulties, Emotional Dysregulation, Addictions and Compulsive Behaviours, Neurodivergence-Related Concerns—including Autism and ADHD—and Complex Relationship Difficulties."}
        </p>

        {/* Therapy Modalities Block */}
        <p className="text-left rtl:text-right">
          {isAr
            ? "العلاج النفسي الفردي والجماعي، استشارات الأزواج والزواج، والعلاج الأسري."
            : "Individual and Group Psychotherapy, Couples and Marriage Counselling, and Family Therapy."}
        </p>

        {/* Solution Focused Block */}
        <p className="text-left rtl:text-right">
          {isAr
            ? "استشارات قائمة على الحلول للتحديات الشخصية والمهنية، والإرشاد المهني والوظيفي."
            : "Solution-Focused Counselling for Personal and Work-Related Challenges, and Vocational and Career Counselling."}
        </p>
      </div>
    </div>
  );
}


