"use client";

import React, { useState } from "react";

interface MyStorySectionProps {
  currentLang?: "en" | "ar";
}

const storyParagraphsEn = [
  "It began with a little girl, genuinely curious about human nature, suffering, justice, and the meaning of life, contemplating two questions: Who am I? Why am I here?",
  "As life unfolded, my curiosity moved beyond the pursuit of happiness, success, and achievement towards the realities of setbacks and human suffering, bringing me to another question:",
  "How do we find our way out of suffering and towards a life that feels genuinely worth living?",
  "Understanding human suffering was meaningful. But contributing to its relief gave that understanding a purpose.",
  "What continued to inspire me was the remarkable nature of the human being.",
  "The human heart, with its capacity to love, feel, endure, and heal.",
  "The human mind, with its extraordinary genius for questioning, understanding, discovering, and creating.",
  "And our potential to change, grow, and discover possibilities, even after experiences that once seemed impossible to overcome.",
  "Becoming a therapist was never simply about choosing a profession. It became a way of living out that purpose through the connections I have formed with the gentle souls I have encountered. Each, in their own unique way, has deepened my admiration for human potential.",
  "Sometimes, those who come seeking understanding become our greatest teachers.",
  "Across different parts of the world, my work has brought me into the lives of survivors of war and natural disasters, incarcerated individuals, vulnerable communities, and people navigating the challenges of everyday life. Some were seeking relief from suffering, others were rebuilding their lives after adversity, while others were striving to discover and realise their fullest potential.",
  "In every encounter, I have discovered something about others, something about myself, and something about life itself.",
  "The further I journey through life, the clearer it becomes that happiness is neither a destination to reach nor a treasure to find. It is an experience to embrace in the here and now. Happiness may illuminate a moment, but living with purpose gives meaning to the journey itself. And perhaps it is through being present, connected to what truly matters, and continuing to grow that we discover the deeper fulfillment of feeling genuinely alive.",
  "This is my story",
  "What is yours?",
];

const storyParagraphsAr = [
  "بدأت الحكاية مع طفلة صغيرة، تساءلت بفضول حقيقي عن الطبيعة الإنسانية، والمعاناة، والعدالة، ومعنى الحياة، وكانت تُلاحقها دائماً سؤالان: مَن أنا؟ ولماذا أنا هنا؟",
  "ومع مرور الزمن، تجاوز فضولي حدود البحث عن السعادة والنجاح والإنجاز، ليتجه نحو حقائق النكسات والمعاناة الإنسانية، فأفضى بي ذلك إلى سؤال آخر:",
  "كيف نجد طريقنا من المعاناة نحو حياة تستحق حقاً أن تُعاش؟",
  "كان فهم المعاناة الإنسانية ذا معنى. لكن المساهمة في تخفيفها هي ما منح ذلك الفهم غايةً حقيقية.",
  "وما ظلّ يلهمني على الدوام هو الطبيعة الاستثنائية للإنسان.",
  "القلب الإنساني، بقدرته على الحب والشعور والتحمّل والشفاء.",
  "العقل الإنساني، بعبقريته الفذّة في التساؤل والفهم والاكتشاف والإبداع.",
  "وإمكاناتنا في التغيير والنمو واكتشاف الممكن، حتى بعد تجارب بدت يوماً ما كأنها مستعصية على التجاوز.",
  "لم يكن أن أصبح معالجة نفسية مجرد اختيار مهني. بل غدا طريقةً لأجسّد تلك الغاية من خلال الصلات التي نسجتُها مع الأرواح الرقيقة التي التقيتُ بها. وقد أضافت كلٌّ منها، بطريقتها الفريدة، عمقاً إلى إعجابي بالإمكانات الإنسانية.",
  "وأحياناً، يغدو أولئك الذين يأتون باحثين عن الفهم أعظم معلمينا.",
  "عبر أرجاء العالم المختلفة، أوصلني عملي إلى حياة الناجين من الحروب والكوارث الطبيعية، والمعتقلين، والمجتمعات الهشّة، وأناس يواجهون تحديات الحياة اليومية. بعضهم كان يبحث عن الراحة من المعاناة، وآخرون كانوا يُعيدون بناء حياتهم بعد المحن، فيما كان غيرهم يسعون لاكتشاف وتحقيق أعلى إمكاناتهم.",
  "في كل لقاء، اكتشفت شيئاً عن الآخرين، وشيئاً عن نفسي، وشيئاً عن الحياة ذاتها.",
  "كلما تقدمتُ في رحلة الحياة، ازداد وضوحاً لديّ أن السعادة ليست وجهةً تُبلَغ، ولا كنزاً يُعثر عليه. إنها تجربة تُعاش في اللحظة الراهنة. قد تُضيء السعادة لحظةً عابرة، لكنّ الحياة بغاية هي ما يمنح الرحلة معناها. ولعلّ الحضور، والارتباط بما يعنينا حقاً، والاستمرار في النمو هو ما نكتشف من خلاله العمق الحقيقي لإحساسنا بأننا نعيش فعلاً.",
  "هذه قصتي",
  "وما هي قصتك؟",
];

export default function MyStorySection({ currentLang = "en" }: MyStorySectionProps) {
  const [expanded, setExpanded] = useState(false);
  const isAr = currentLang === "ar";
  const paragraphs = isAr ? storyParagraphsAr : storyParagraphsEn;

  // Show only first 4 paragraphs when collapsed
  const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, 4);
  const lastTwo = isAr
    ? ["هذه قصتي", "وما هي قصتك؟"]
    : ["This is my story", "What is yours?"];

  return (
    <section
      className="relative z-10 w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#0d0e12]/80 border-y border-[#C2AB62]/25"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-[860px] mx-auto">
        {/* Section badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-5 py-2 rounded-full border border-[#C2AB62]/50 bg-[#C2AB62]/10">
            <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#e5be70] font-medium">
              {isAr ? "قصتي" : "My Story"}
            </span>
          </div>
        </div>

        {/* Story paragraphs */}
        <div className="space-y-5 font-serif text-[15.5px] sm:text-[16.5px] leading-[1.85] text-[#d6d0c6] text-center">
          {visibleParagraphs.map((para, idx) => {
            const isSignoff = lastTwo.includes(para);
            return (
              <p
                key={idx}
                className={
                  isSignoff
                    ? "text-[#e5be70] font-medium italic"
                    : para.startsWith("How do we") || para.startsWith("كيف نجد")
                    ? "text-[#e5be70] text-[17px] sm:text-[18px] font-medium italic"
                    : ""
                }
              >
                {para}
              </p>
            );
          })}
        </div>

        {/* Read more / collapse */}
        {!expanded && (
          <div className="mt-6 text-center">
            {/* gradient fade */}
            <div className="h-16 bg-gradient-to-t from-[#0d0e12]/80 to-transparent -mt-16 mb-4 pointer-events-none" />
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-7 py-3 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
            >
              <span>{isAr ? "اقرأ قصتي كاملة" : "Read My Full Story"}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {expanded && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-2.5 rounded-full border border-[#C2AB62]/50 text-[#e5be70] font-serif text-sm hover:bg-[#C2AB62]/10 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span>{isAr ? "طيّ القصة" : "Collapse"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
