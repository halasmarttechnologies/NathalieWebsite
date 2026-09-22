import React from "react";

interface ExpertiseCardProps {
  currentLang?: "en" | "ar";
}

export default function ExpertiseCard({ currentLang = "en" }: ExpertiseCardProps) {
  const isAr = currentLang === "ar";

  return (
    <div
      id="expertise"
      className="w-full bg-white/95 backdrop-blur-md border border-[#c5a059]/45 shadow-[0_8px_24px_rgba(150,120,70,0.08)] p-6 sm:p-7 rounded-2xl text-[#24221d]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <h3 className="font-serif text-2xl sm:text-[26px] text-[#121110] font-normal tracking-wide mb-3.5">
        {isAr ? "مجالات الخبرة" : "Expertise"}
      </h3>

      <div className="space-y-3.5 font-serif text-[14px] sm:text-[14.5px] leading-[1.68] text-[#282622]">
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


