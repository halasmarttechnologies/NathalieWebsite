"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LuxuryBackground from "@/components/LuxuryBackground";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Brain,
  ShieldAlert,
  Sparkles,
  HeartHandshake,
  Activity,
  CheckCircle2,
  CalendarCheck,
  Search,
  ArrowRight,
  ArrowLeft,
  Layers,
} from "lucide-react";

export default function DisordersPage() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Diagnostic Assessment");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleBook = (conditionTitle: string) => {
    setSelectedService(`Assessment & Therapy: ${conditionTitle}`);
    setIsBookingOpen(true);
  };

  const categories = [
    { id: "all", labelEn: "All Practice Areas", labelAr: "كافة مجالات العلاج" },
    { id: "mood", labelEn: "Mood & Anxiety", labelAr: "المزاج والقلق" },
    { id: "trauma", labelEn: "Trauma & OCD", labelAr: "الصدمات والوسواس" },
    { id: "neuro", labelEn: "ADHD & Neurodivergence", labelAr: "فرط الحركة والتنوع العصبي" },
    { id: "relational", labelEn: "Personality & Relationships", labelAr: "الشخصية والعلاقات" },
  ];

  const disorders = [
    {
      id: "anxiety",
      category: "mood",
      titleEn: "Anxiety & Panic Disorders",
      titleAr: "اضطرابات القلق ونوبات الهلع",
      badgeEn: "CBT & Somatic Regulation",
      badgeAr: "العلاج المعرفي والتنظيم الجسدي",
      overviewEn:
        "Chronic worrying, racing thoughts, panic attacks, and overwhelming fear that disrupts daily productivity, sleep, and physical wellbeing.",
      overviewAr:
        "القلق المزمن، تسارع الأفكار، نوبات الهلع المفاجئة، والمخاوف المفرطة التي تعطل العمل والنوم والاستقرار الجسدي.",
      symptomsEn: [
        "Uncontrollable intrusive worry and anticipation of worst-case scenarios",
        "Physical symptoms: tachycardia, shortness of breath, dizziness, tension",
        "Avoidance of social gatherings, meetings, or public spaces",
      ],
      symptomsAr: [
        "أفكار قلقة متسارعة وتوقع دائم لأسوأ السيناريوهات المحتملة",
        "أعراض جسدية: تسارع نبضات القلب، ضيق التنفس، الدوخة، والشد العضلي",
        "تجنب المواقف الاجتماعية أو الاجتماعات أو السفر خوفاً من القلق",
      ],
      approachEn:
        "Integrating CBT for cognitive restructuring, interoceptive exposure for panic desensitization, and existential grounding to regain mastery.",
      approachAr:
        "دمج العلاج المعرفي السلوكي لتعديل الأفكار، وتقنيات خفض حساسية الهلع، والتمكين الوجودي لاستعادة التحكم.",
    },
    {
      id: "depression",
      category: "mood",
      titleEn: "Depression & Mood Dysregulation",
      titleAr: "الاكتئاب واضطرابات المزاج",
      badgeEn: "Existential & Behavioral Activation",
      badgeAr: "العلاج الوجودي والتفعيل السلوكي",
      overviewEn:
        "Persistent feelings of sadness, emotional emptiness, loss of vitality, chronic fatigue, and an inability to find joy or meaning in life.",
      overviewAr:
        "الشعور المستمر بالحزن، الفراغ العاطفي، فقدان الطاقة، الإجهاد المزمن، وغياب المتعة أو المعنى في الأنشطة اليومية.",
      symptomsEn: [
        "Profound exhaustion, disrupted sleep architecture, or hypersomnia",
        "Pervasive guilt, self-critical thoughts, and feelings of worthlessness",
        "Loss of interest in relationships, career achievements, and passions",
      ],
      symptomsAr: [
        "إرهاق شديد، اضطرابات في دورات النوم، أو النوم المفرط للهروب",
        "لوم الذات المستمر، مشاعر انعدام القيمة، وجلد الذات القاسي",
        "فقدان الشغف بالعمل والعلاقات والاهتمامات التي كانت مصدراً للبهجة",
      ],
      approachEn:
        "Uncovering emotional grief via Compassionate Inquiry, restructuring depressive cognitions, and reconnecting with authentic core values.",
      approachAr:
        "استكشاف جذور الحزن عبر الاستقصاء العطوف، وإعادة تشكيل الأنماط الفكرية، وإعادة الاتصال بالقيم الأصيلة للحياة.",
    },
    {
      id: "trauma",
      category: "trauma",
      titleEn: "Trauma & PTSD (Complex & Shock)",
      titleAr: "الصدمات النفسية واضطراب ما بعد الصدمة (PTSD)",
      badgeEn: "Trauma-Informed & Schema Care",
      badgeAr: "الرعاية الواعية بالصدمات والمخططات",
      overviewEn:
        "Psychological and bodily imprints of single-event shock traumas (accidents, medical crises) or long-term chronic developmental and childhood wounds.",
      overviewAr:
        "الآثار النفسية والجسدية العميقة الناتجة عن الصدمات الحادة أو صدمات الطفولة النمائية المزمنة وجروح الإهمال العاطفي.",
      symptomsEn: [
        "Involuntary flashbacks, distressing nightmares, and emotional hyperarousal",
        "Emotional numbness, dissociation, or detachment from close loved ones",
        "Intense trigger reactivity to specific sounds, words, or relational conflict",
      ],
      symptomsAr: [
        "استرجاع لا إرادي للذكريات المؤلمة (Flashbacks)، وكوابيس متكررة",
        "الانفصال العاطفي (Dissociation)، أو الشعور بالغربة عن المقربين",
        "استجابات انفعالية مفرطة لمحفزات معينة تذكر بالحدث الصادم",
      ],
      approachEn:
        "Gentle titration through trauma-informed psychotherapy, nervous system stabilization, and Schema Therapy to heal vulnerable child modes.",
      approachAr:
        "معالجة تدريجية آمنة للصدمات، وتنظيم الجهاز العصبي، وتطبيق علاج المخططات لشفاء الأجزاء المجروحة من الذات.",
    },
    {
      id: "ocd",
      category: "trauma",
      titleEn: "Obsessive-Compulsive Disorder (OCD)",
      titleAr: "اضطراب الوسواس القهري (OCD)",
      badgeEn: "ERP & Cognitive Strategies",
      badgeAr: "التعرض ومنع الاستجابة (ERP)",
      overviewEn:
        "Repetitive, unwanted intrusive thoughts or mental images accompanied by compulsive rituals performed to reduce anxiety or prevent feared events.",
      overviewAr:
        "أفكار أو صور ذهنية وسواسية متكررة وغير مرغوب فيها، تدفع الشخص لممارسة طقوس أو أفعال قهرية لتخفيف حدة التوتر.",
      symptomsEn: [
        "Persistent obsessions around contamination, harm, morality, or symmetry",
        "Compulsive checking, washing, counting, ordering, or mental neutralizing",
        "Severe distress when routines or rituals are interrupted",
      ],
      symptomsAr: [
        "وساوس متكررة حول التلوث، إيذاء الآخرين، الشكوك الدينية، أو التناظر",
        "سلوكيات قهرية: التكرار، التحقق، النظافة المفرطة، أو الطقوس الذهنية",
        "انزعاج بالغ وتوتر شديد عند مقاطعة أي من الطقوس المعتادة",
      ],
      approachEn:
        "Evidence-based Exposure and Response Prevention (ERP) alongside cognitive restructuring and tolerance of uncertainty.",
      approachAr:
        "العلاج القائم على التعرض ومنع الاستجابة (ERP) جنباً إلى جنب مع تقبل عدم اليقين وإعادة الهيكلة المعرفية.",
    },
    {
      id: "adhd",
      category: "neuro",
      titleEn: "Adult ADHD & Neurodivergence",
      titleAr: "تشتت الانتباه وفرط الحركة لدى البالغين (ADHD)",
      badgeEn: "Neuro-Affirming Assessment & Strategies",
      badgeAr: "تقييم واستراتيجيات داعمة للتنوع العصبي",
      overviewEn:
        "Executive functioning difficulties including chronic procrastination, time blindness, emotional dysregulation, and masking among successful adults.",
      overviewAr:
        "صعوبات الوظائف التنفيذية كالتسويف المزمن، صعوبة إدراك الوقت، التشتت، والتنظيم الانفعالي لدى البالغين الناجحين مهنياً.",
      symptomsEn: [
        "Difficulty initiating tasks, organizing complex workflows, and meeting deadlines",
        "Hyperfocus on stimulating interests juxtaposed with inability to focus on routine",
        "Lifelong feelings of underachievement despite high intelligence",
      ],
      symptomsAr: [
        "صعوبة بدء المهام وإدارتها وتنظيم الأولويات والالتزام بالمواعيد النهائية",
        "التركيز المفرط على الاهتمامات المشوقة مقابل صعوبة أداء المهام الروتينية",
        "شعور مزمن بعدم تحقيق الإمكانات الحقيقية رغم التمتع بذكاء عالٍ",
      ],
      approachEn:
        "Formal diagnostic testing, psychoeducation, executive skill scaffolding, emotional regulation support, and self-compassion integration.",
      approachAr:
        "تقييم تشخيصي رسمي دقيق، تدريب على مهارات الوظائف التنفيذية، وإزالة الشعور بالذنب وبناء استراتيجيات عمل مخصصة.",
    },
    {
      id: "bipolar",
      category: "mood",
      titleEn: "Bipolar Affective Disorder",
      titleAr: "الاضطراب ثنائي القطب وتقلبات المزاج",
      badgeEn: "Psychoeducation & Routine Rhythm",
      badgeAr: "التنظيم الإيقاعي والدعم الإكلينيكي",
      overviewEn:
        "Cycles between depressive episodes and hypomanic/manic states characterized by shifts in energy, sleep requirements, activity, and impulsivity.",
      overviewAr:
        "نوبات متناوبة بين الهبوط الاكتئابي والنشاط المرتفع (الهوس الخفيف)، مترافقة مع تغيرات حادة في الطاقة والنوم والاندفاعية.",
      symptomsEn: [
        "Periods of intense goal-directed energy, rapid speech, and decreased sleep need",
        "Subsequent deep depressive troughs with fatigue and cognitive fog",
        "Disruption in personal relationships and professional commitments",
      ],
      symptomsAr: [
        "فترات من الحماس المفرط، تسارع الكلام، وقلة الحاجة للنوم دون تعب",
        "يعقبها هبوط اكتئابي عميق مصحوب ببطء فكري وشعور بالعجز",
        "تأثر العلاقات الأسرية والمسار المهني بسبب التذبذب الانفعالي",
      ],
      approachEn:
        "Interpersonal and Social Rhythm Therapy (IPSRT), relapse prevention mapping, emotional grounding, and coordination with prescribing psychiatrists.",
      approachAr:
        "العلاج الإيقاعي الاجتماعي والشخصي، ورصد المؤشرات المبكرة، والتنسيق الوثيق مع الأطباء النفسيين المعالجين.",
    },
    {
      id: "personality",
      category: "relational",
      titleEn: "Emotional Dysregulation & Personality Patterns",
      titleAr: "عدم التنظيم العاطفي وصعوبات الشخصية",
      badgeEn: "DBT Skills & Schema Modes",
      badgeAr: "مهارات الجدلي السلوكي (DBT) والمخططات",
      overviewEn:
        "Intense emotional storms, fear of abandonment, unstable self-image, and difficulty maintaining peaceful, reciprocal interpersonal relationships.",
      overviewAr:
        "عواصف انفعالية حادة، الخوف الدائم من الهجر أو الرفض، عدم استقرار الصورة الذاتية، وصعوبة الحفاظ على علاقات هادئة ومتوازنة.",
      symptomsEn: [
        "Rapid mood swings triggered by relational interactions or perceived slights",
        "Impulsive coping behaviors, chronic feelings of emptiness, or black-and-white thinking",
        "Turbulent relationship dynamics alternating between idealization and devaluation",
      ],
      symptomsAr: [
        "تقلبات مزاجية سريعة نتيجة لتفاعلات بينية أو الشعور بالرفض",
        "سلوكيات اندفاعية لتسكين الألم، وشعور بالفراغ الداخلي، والتفكير الحدي (أبيض/أسود)",
        "علاقات عاصفة تتأرجح بين التقديس المفرط وخيبة الأمل الشديدة",
      ],
      approachEn:
        "Dialectical Behavior Therapy (DBT) for distress tolerance, mindfulness, and emotion regulation, combined with deep Schema Therapy.",
      approachAr:
        "تطبيق مهارات العلاج السلوكي الجدلي (DBT) لتحمل الضغوط وتنظيم المشاعر، إلى جانب علاج المخططات المعرفية العميقة.",
    },
    {
      id: "relationship",
      category: "relational",
      titleEn: "Complex Relationship & Attachment Wounds",
      titleAr: "صعوبات العلاقات وأنماط التعلق المعقدة",
      badgeEn: "The Gottman Method & Attachment EFT",
      badgeAr: "منهج غوتمان وعلاج التعلق",
      overviewEn:
        "Painful relational loops, anxious or avoidant attachment styles, betrayal recovery, and cross-cultural marriage friction.",
      overviewAr:
        "الوقوع في علاقات مؤلمة متكررة، أنماط التعلق القلق أو التجنبي، أزمات فقدان الثقة، والخلافات في الزيجات متعددة الثقافات.",
      symptomsEn: [
        "Severe anxiety when partners withdraw or suffocating discomfort when they draw close",
        "Chronic stonewalling, criticism, and defensiveness during disagreements",
        "Unresolved grief following breakups, divorce, or narcissistic relationship patterns",
      ],
      symptomsAr: [
        "قلق حاد عند ابتعاد الشريك أو شعور بالاختناق عند اقترابه (الصراع التجنبي)",
        "الصمت العقابي، الانتقاد اللاذع، والدفاعية المستمرة أثناء النقاشات",
        "صعوبة التعافي من صدمات الانفصال أو العلاقات الاستنزافية",
      ],
      approachEn:
        "Attachment-informed psychotherapy to heal early developmental blueprints and establish secure, mature relational intimacy.",
      approachAr:
        "العلاج المرتكز على التعلق لإصلاح المخططات الأولى وبناء علاقات آمنة ومستقرة قائمة على الثقة والتقدير.",
    },
  ];

  const filteredDisorders = disorders.filter((d) => {
    const matchesCat = activeCategory === "all" || d.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      d.titleEn.toLowerCase().includes(query) ||
      d.titleAr.includes(query) ||
      d.overviewEn.toLowerCase().includes(query) ||
      d.overviewAr.includes(query);
    return matchesCat && matchesSearch;
  });

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
          onOpenBooking={() => handleBook("General Assessment")}
        />

        {/* Page Header */}
        <PageHeader
          badgeEn="Clinical Specializations"
          badgeAr="مجالات الاختصاص والتشخيص الإكلينيكي"
          subtitleEn="Diagnostic Excellence & Specialized Psychological Care"
          subtitleAr="دقة التشخيص والرعاية النفسية المتخصصة في دبي"
          titleEn="Areas of Clinical Practice"
          titleAr="مجالات الخبرة والعلاج النفسي"
          descriptionEn="A structured clinical guide to the emotional, behavioral, and psychological difficulties assessed and treated in our private Dubai practice."
          descriptionAr="دليل إكلينيكي مفصل يوضح الاضطرابات والتحديات النفسية والسلوكية التي نقوم بتقييمها وعلاجها بأرقى المعايير العالمية المعتمدة."
        />

        {/* Filter & Search Bar */}
        <section className="relative z-10 pt-2 pb-8 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto space-y-5">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 select-none">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-4 py-2 rounded-full font-serif text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                    activeCategory === c.id
                      ? "bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-semibold shadow-md"
                      : "bg-[#faf6ee]/90 border border-[#c5a059]/40 text-[#403c34] hover:border-[#c5a059] hover:text-[#121110]"
                  }`}
                >
                  {isAr ? c.labelAr : c.labelEn}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-[#8a8374] absolute left-3.5 top-3 rtl:left-auto rtl:right-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isAr ? "ابحث عن حالة، اضطراب، أو عرض..." : "Search conditions or symptoms..."
                }
                className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2.5 rounded-full bg-[#faf6ee] border border-[#c5a059]/50 text-sm font-serif text-[#2a2a2a] placeholder-[#8a8374] focus:outline-none focus:border-[#c5a059] shadow-xs"
              />
            </div>
          </div>
        </section>

        {/* Disorders Grid */}
        <section className="relative z-10 py-6 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDisorders.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#faf6ee]/95 backdrop-blur-md border border-[#c5a059] shadow-[0_8px_24px_rgba(150,120,70,0.1)] hover:shadow-[0_16px_36px_rgba(150,120,70,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#936227] font-serif text-xs font-semibold">
                      {isAr ? item.badgeAr : item.badgeEn}
                    </span>
                    <Brain className="w-4 h-4 text-[#936227]" />
                  </div>

                  <h2 className="font-serif text-2xl text-[#121110] font-normal mb-2.5 tracking-tight">
                    {isAr ? item.titleAr : item.titleEn}
                  </h2>

                  <p className="font-serif text-sm sm:text-[14.5px] leading-relaxed text-[#36322b] mb-4">
                    {isAr ? item.overviewAr : item.overviewEn}
                  </p>

                  {/* Common Symptoms */}
                  <div className="mb-4 bg-white/60 p-4 rounded-xl border border-[#c5a059]/25">
                    <h3 className="font-serif text-xs uppercase tracking-wider text-[#936227] font-semibold mb-2">
                      {isAr ? "الأعراض والمؤشرات الشائعة" : "Common Indications & Symptoms"}
                    </h3>
                    <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-[#454035]">
                      {(isAr ? item.symptomsAr : item.symptomsEn).map((sym, sIdx) => (
                        <li key={sIdx} className="flex items-start space-x-2 rtl:space-x-reverse">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clinical Approach Note */}
                  <div className="mb-5 text-xs sm:text-[13.5px] font-serif text-[#5a5449] border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#c5a059] pl-3 rtl:pl-0 rtl:pr-3 py-0.5">
                    <strong className="text-[#1a1a1a]">
                      {isAr ? "النهج العلاجي: " : "Clinical Method: "}
                    </strong>
                    {isAr ? item.approachAr : item.approachEn}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#c5a059]/20">
                  <button
                    onClick={() => handleBook(isAr ? item.titleAr : item.titleEn)}
                    className="w-full py-2.5 rounded-xl border border-[#c5a059] bg-[#faf6ee] hover:bg-[#c5a059] text-[#936227] hover:text-[#121110] font-serif font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>
                      {isAr ? "طلب استشارة لهذه الحالة" : "Request Clinical Consultation"}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reassurance Banner */}
        <section className="relative z-10 py-12 px-4 sm:px-8 lg:px-12 bg-black/60 border-t border-[#c5a059]/25 text-center mt-10">
          <div className="max-w-3xl mx-auto space-y-3">
            <Sparkles className="w-6 h-6 text-[#c5a059] mx-auto" />
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              {isAr
                ? "تشخيص إكلينيكي دقيق ورعاية تحترم إنسانيتك"
                : "You Are More Than A Clinical Diagnosis"}
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#cfc9be] leading-relaxed">
              {isAr
                ? "التصنيفات التشخيصية هي مجرد خرائط إرشادية لفهم المعاناة وليست أحكاماً تقيد شخصيتك. نسير معك خطوة بخطوة نحو التعافي والنمو."
                : "Clinical categories serve only as navigational maps to understand suffering—never as rigid labels that define your worth or potential. We honor the whole person."}
            </p>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} onOpenBooking={() => handleBook("Clinical Consultation")} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
        currentLang={currentLang}
      />
    </main>
  );
}
