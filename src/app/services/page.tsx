"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import InnerPageBackground from "@/components/InnerPageBackground";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  User,
  Heart,
  Users,
  ClipboardCheck,
  Briefcase,
  CheckCircle2,
  Clock,
  HelpCircle,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const clusters = [
  {
    id: "personal",
    icon: <User className="w-6 h-6" />,
    titleEn: "Personal",
    titleAr: "الخدمات الشخصية",
    subtitleEn: "Individual, Couple & Family Services",
    subtitleAr: "خدمات الأفراد والأزواج والعائلات",
    subClusters: [
      {
        id: "therapy",
        icon: <Heart className="w-5 h-5" />,
        titleEn: "Therapy & Counseling",
        titleAr: "العلاج والإرشاد النفسي",
        services: [
          {
            id: "psychotherapy",
            titleEn: "Psychotherapy for Adolescents & Adults",
            titleAr: "العلاج النفسي للمراهقين والبالغين",
            descEn:
              "One-on-one clinical therapy tailored to your internal world. Drawing on Existential Psychotherapy, Compassionate Inquiry, and CBT, we address the root causes of distress rather than merely subduing symptoms. Ideal for anxiety, depression, burnout, grief, self-esteem, or profound life transitions.",
            descAr:
              "علاج إكلينيكي فردي مخصص لعالمك الداخلي. بالاستناد إلى العلاج الوجودي والاستقصاء العطوف والعلاج المعرفي السلوكي، نعمل على معالجة الجذور الحقيقية للألم النفسي. مثالي للقلق، الاكتئاب، الاحتراق الوظيفي، الصدمات، ومحطات التحول الحياتية الكبرى.",
            durationEn: "50 Minutes | In-Person (Dubai) or Online",
            durationAr: "50 دقيقة | حضورياً أو عبر الإنترنت",
          },
          {
            id: "career",
            titleEn: "Career Direction for Adolescents & Adults",
            titleAr: "التوجيه المهني للمراهقين والبالغين",
            descEn:
              "Structured guidance to help you align your authentic strengths, values, and passions with a meaningful career path. Whether you are starting out, pivoting, or feeling stuck, we bring clarity and direction to your professional journey.",
            descAr:
              "توجيه منهجي يساعدك على محاذاة نقاط قوتك الحقيقية وقيمك وشغفك مع مسار مهني ذي معنى. سواء كنت تبدأ، أو تغير مسارك، أو تشعر بالتوقف، نجلب لك الوضوح والاتجاه.",
            durationEn: "50 Minutes | In-Person or Online",
            durationAr: "50 دقيقة | حضورياً أو عبر الإنترنت",
          },
          {
            id: "couples",
            titleEn: "Couples Counseling",
            titleAr: "استشارات الأزواج",
            descEn:
              "Grounded in The Gottman Method and Emotion-Focused Therapy (EFT), couples therapy provides a neutral, safe space to untangle painful conflict loops. Whether navigating cultural differences, repairing after infidelity, pre-marriage preparation, or seeking deeper intimacy, we reconstruct connection with warmth and mutual respect.",
            descAr:
              "بالاعتماد على طريقة غوتمان والعلاج المرتكز على العواطف (EFT)، توفر استشارات الأزواج مساحة محايدة وآمنة. سواء للتحضير قبل الزواج، أو تجاوز الصدمات، أو استعادة الحميمية، نعمل معاً على إعادة بناء جسور المودة.",
            durationEn: "75 Minutes | In-Person or Online",
            durationAr: "75 دقيقة | حضورياً أو عبر الإنترنت",
            subItems: [
              { en: "Pre-marriage Counseling", ar: "الإرشاد قبل الزواج" },
              { en: "Couples Counseling", ar: "استشارات الأزواج" },
            ],
          },
          {
            id: "family",
            titleEn: "Family Therapy",
            titleAr: "العلاج الأسري",
            descEn:
              "Families are interconnected ecosystems where individual distress often reflects systemic stress. Drawing on systemic therapy and cultural attunement, Nathalie helps families resolve intergenerational friction, support adolescents through difficult milestones, and establish healthy communication without blame.",
            descAr:
              "الأسرة نظام مترابط، والضيق الذي يشعر به فرد غالباً ما يعكس توتراً في المنظومة ككل. تساعد ناتالي العائلات على حل الخلافات بين الأجيال، ودعم المراهقين، وبناء تواصل إيجابي.",
            durationEn: "75 Minutes | In-Person or Online",
            durationAr: "75 دقيقة | حضورياً أو عبر الإنترنت",
          },
        ],
      },
      {
        id: "assessments",
        icon: <ClipboardCheck className="w-5 h-5" />,
        titleEn: "Assessments",
        titleAr: "التقييمات النفسية",
        services: [
          {
            id: "diagnostic",
            titleEn: "Diagnostic Assessments",
            titleAr: "التقييمات التشخيصية",
            descEn:
              "Comprehensive diagnostic evaluations adhering to APA and international clinical guidelines. We provide formal assessments for mood disorders, depressive syndromes, anxiety, and complex psychological presentations, complete with clear, actionable recommendations.",
            descAr:
              "تقييمات تشخيصية شاملة ومتوافقة مع المعايير الدولية. نقدم تقييمات رسمية لاضطرابات المزاج، الاكتئاب، القلق، والأنماط النفسية المعقدة، مع تقرير إكلينيكي مفصل.",
            durationEn: "Multi-session protocol with written report",
            durationAr: "بروتوكول متعدد الجلسات مع تقرير مكتوب",
          },
          {
            id: "adhd",
            titleEn: "ADHD Assessment",
            titleAr: "تقييم اضطراب فرط الحركة ونقص الانتباه (ADHD)",
            descEn:
              "Specialized Adult ADHD diagnostic evaluation including structured clinical interviews, standardized rating scales, cognitive performance measures, and differential diagnosis. Provides formal documentation for workplace and academic accommodations.",
            descAr:
              "تقييم تشخيصي متخصص لاضطراب فرط الحركة ونقص الانتباه لدى البالغين، يشمل مقابلات سريرية منظمة ومقاييس موحدة. يوفر التوثيق الرسمي لبيئات العمل والتعليم.",
            durationEn: "Multi-session | Comprehensive written report",
            durationAr: "متعدد الجلسات | تقرير شامل مكتوب",
          },
          {
            id: "personality",
            titleEn: "Personality Assessments",
            titleAr: "تقييمات الشخصية",
            descEn:
              "In-depth personality profiling using validated psychometric instruments to illuminate core traits, relational patterns, coping styles, and areas for personal growth. Useful for self-understanding, career fit, and clinical purposes.",
            descAr:
              "تحليل معمّق للشخصية باستخدام أدوات سيكومترية معتمدة لاستكشاف السمات الأساسية وأنماط العلاقات وأساليب التعامل. مفيد للفهم الذاتي والتوافق المهني.",
            durationEn: "Multi-session | Written profile report",
            durationAr: "متعدد الجلسات | تقرير ملف شخصي مكتوب",
          },
          {
            id: "cognitive",
            titleEn: "Cognitive Testing",
            titleAr: "الاختبارات المعرفية",
            descEn:
              "Standardized cognitive and neuropsychological assessments evaluating memory, attention, processing speed, executive function, and overall cognitive performance. Valuable for identifying cognitive strengths and areas of difficulty.",
            descAr:
              "تقييمات معرفية وعصبية نفسية موحدة تقيس الذاكرة، الانتباه، سرعة المعالجة، والوظائف التنفيذية. قيّمة لتحديد نقاط القوة والصعوبات المعرفية.",
            durationEn: "Multi-session | Comprehensive written report",
            durationAr: "متعدد الجلسات | تقرير شامل مكتوب",
          },
        ],
      },
    ],
  },
  {
    id: "corporate",
    icon: <Briefcase className="w-6 h-6" />,
    titleEn: "Corporate",
    titleAr: "الخدمات المؤسسية",
    subtitleEn: "Workplace Wellness & Organisational Assessment",
    subtitleAr: "الصحة النفسية في العمل والتقييم المؤسسي",
    subClusters: [
      {
        id: "wellness",
        icon: <Users className="w-5 h-5" />,
        titleEn: "Employee Wellness Programmes",
        titleAr: "برامج الصحة النفسية للموظفين",
        services: [
          {
            id: "emp-wellness",
            titleEn: "Employee Wellness Programmes",
            titleAr: "برامج الصحة النفسية للموظفين",
            descEn:
              "Tailored organisational wellness programmes designed to support employee mental health, reduce burnout, improve resilience, and foster a psychologically safe workplace culture. Includes workshops, group sessions, individual confidential counseling, and leadership coaching.",
            descAr:
              "برامج صحة مؤسسية مخصصة لدعم الصحة النفسية للموظفين، وتقليل الاحتراق الوظيفي، وتعزيز المرونة. تشمل ورش العمل والجلسات الجماعية والإرشاد الفردي السري وتدريب القيادة.",
            durationEn: "Customised programmes | On-site or virtual",
            durationAr: "برامج مخصصة | حضورياً أو عبر الإنترنت",
          },
        ],
      },
      {
        id: "assessment-centers",
        icon: <ClipboardCheck className="w-5 h-5" />,
        titleEn: "Assessment Centers",
        titleAr: "مراكز التقييم",
        services: [
          {
            id: "leadership-ac",
            titleEn: "Leadership Assessment Centers",
            titleAr: "مراكز تقييم القيادة",
            descEn:
              "Rigorous multi-method leadership evaluation using psychometric tools, structured interviews, and behavioural simulations to assess leadership competencies, decision-making style, and development potential for senior and executive roles.",
            descAr:
              "تقييم قيادي متعدد الأساليب يستخدم أدوات سيكومترية ومقابلات منظمة وسيناريوهات سلوكية لتقييم كفاءات القيادة وأسلوب اتخاذ القرار وإمكانية التطوير للأدوار القيادية والتنفيذية.",
            durationEn: "Full-day or multi-day format | Report provided",
            durationAr: "يوم كامل أو أيام متعددة | يُقدَّم تقرير",
          },
          {
            id: "talent-succession",
            titleEn: "Talent & Succession Assessment",
            titleAr: "تقييم المواهب والخلافة الوظيفية",
            descEn:
              "Strategic talent identification and succession planning assessments to pinpoint high-potential employees, evaluate readiness for advancement, and build a robust talent pipeline aligned with organisational goals.",
            descAr:
              "تقييمات استراتيجية لتحديد المواهب والتخطيط للخلافة الوظيفية لاكتشاف الموظفين ذوي الإمكانات العالية وتقييم استعدادهم للترقي وبناء خط مواهب متين.",
            durationEn: "Customised format | Detailed report provided",
            durationAr: "صيغة مخصصة | تقرير مفصل",
          },
          {
            id: "talent-acquisition",
            titleEn: "Talent Acquisition (Recruitment)",
            titleAr: "استقطاب المواهب (التوظيف)",
            descEn:
              "Psychologically-informed recruitment assessments integrating structured competency-based interviews, personality profiling, and cognitive evaluation to support data-driven hiring decisions and reduce turnover risk.",
            descAr:
              "تقييمات توظيف قائمة على علم النفس تدمج المقابلات المنظمة القائمة على الكفاءات وتحليل الشخصية والتقييم المعرفي لدعم قرارات التوظيف المبنية على البيانات.",
            durationEn: "Per role / batch | Flexible format",
            durationAr: "لكل دور / دفعة | صيغة مرنة",
          },
          {
            id: "graduate",
            titleEn: "Graduate Program Selection",
            titleAr: "اختيار برامج الخريجين",
            descEn:
              "Structured assessment processes for graduate and early-career candidate selection, using validated psychometric tools and competency frameworks to identify the best-fit candidates for graduate development programmes.",
            descAr:
              "عمليات تقييم منظمة لاختيار المرشحين في برامج الخريجين والوظائف المبكرة في المسيرة المهنية، باستخدام أدوات سيكومترية معتمدة وأطر الكفاءات.",
            durationEn: "Flexible format | Report provided",
            durationAr: "صيغة مرنة | يُقدَّم تقرير",
          },
        ],
      },
    ],
  },
];

const faqs = [
  {
    qEn: "Is everything discussed in therapy kept completely confidential?",
    qAr: "هل جميع ما يناقش في الجلسات يخضع لسرية تامة؟",
    aEn:
      "Yes, absolute confidentiality is the cornerstone of clinical practice. All sessions, client files, and personal data are strictly protected in accordance with CDA Dubai licensing regulations and international APA clinical ethics.",
    aAr:
      "نعم، السرية التامة هي الركيزة الأساسية لممارستنا. تخضع جميع الجلسات والسجلات لأعلى معايير الخصوصية وفقاً للوائح هيئة تنمية المجتمع بدبي (CDA) والجمعية الأمريكية لعلم النفس (APA).",
  },
  {
    qEn: "Do you offer sessions in both English and Arabic?",
    qAr: "هل تقدمون الجلسات باللغتين العربية والإنجليزية؟",
    aEn:
      "Yes. Nathalie is entirely bilingual, conducting psychotherapy, diagnostic assessments, and couples counseling with native fluency in both English and Arabic.",
    aAr:
      "نعم. ناتالي تتقن اللغتين العربية والإنجليزية بطلاقة تامة، وتقدم العلاج النفسي واستشارات الأزواج والتقييمات بكلتا اللغتين.",
  },
  {
    qEn: "Can I attend sessions online via telehealth?",
    qAr: "هل يمكنني حضور الجلسات عبر الإنترنت؟",
    aEn:
      "Yes. We offer secure, encrypted video consultations for clients residing across the UAE, GCC, and worldwide.",
    aAr:
      "نعم، نقدم جلسات مرئية عالية الأمان للعملاء المقيمين في مختلف إمارات الدولة، ودول الخليج، وحول العالم.",
  },
  {
    qEn: "Can I claim session costs through my health insurance in the UAE?",
    qAr: "هل يمكن استرداد تكاليف الجلسات عبر التأمين الصحي؟",
    aEn:
      "Many international and comprehensive local insurance policies cover psychological services on a pay-and-claim basis. As a CDA-licensed psychologist, Nathalie provides official clinical receipts and reimbursement claim forms.",
    aAr:
      "توفر العديد من وثائق التأمين الصحي تغطية لخدمات العلاج النفسي بنظام الاسترداد. بصفتها أخصائية مرخصة من CDA، تقدم ناتالي الفواتير الرسمية ونماذج الاسترداد المعتمدة.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCard({
  service,
  isAr,
  onBook,
}: {
  service: (typeof clusters)[0]["subClusters"][0]["services"][0];
  isAr: boolean;
  onBook: (name: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[#c5a059]/35 bg-white/80 overflow-hidden shadow-sm transition-all duration-200 hover:border-[#c5a059]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left rtl:text-right focus:outline-none cursor-pointer"
      >
        <span className="font-serif text-[15px] sm:text-base text-[#121110] font-medium leading-snug">
          {isAr ? service.titleAr : service.titleEn}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#936227] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-5 space-y-4 border-t border-[#c5a059]/20 pt-4 bg-[#fbf9f6]">
          <p className="font-serif text-sm text-[#2c2923] leading-relaxed">
            {isAr ? service.descAr : service.descEn}
          </p>

          {"subItems" in service && service.subItems && (
            <ul className="space-y-1">
              {(service.subItems as { en: string; ar: string }[]).map((s, i) => (
                <li key={i} className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-serif text-[#524939]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{isAr ? s.ar : s.en}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-serif text-[#6b6050]">
            <Clock className="w-3.5 h-3.5 text-[#936227]" />
            <span>{isAr ? service.durationAr : service.durationEn}</span>
          </div>

          <button
            onClick={() => onBook(isAr ? service.titleAr : service.titleEn)}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-5 py-2 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-xs shadow-sm hover:brightness-105 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>{isAr ? "احجز هذه الخدمة" : "Book This Service"}</span>
          </button>
        </div>
      )}
    </div>
  );
}

function SubClusterPanel({
  sub,
  isAr,
  onBook,
}: {
  sub: (typeof clusters)[0]["subClusters"][0];
  isAr: boolean;
  onBook: (name: string) => void;
}) {
  return (
    <div className="rounded-xl border border-[#c5a059]/40 bg-[#f6f1ea]/80 overflow-hidden">
      {/* Sub-cluster header */}
      <div className="flex items-center space-x-3 rtl:space-x-reverse px-5 py-4 border-b border-[#c5a059]/25 bg-[#ede6dc]/60">
        <span className="text-[#936227]">{sub.icon}</span>
        <h3 className="font-serif text-lg text-[#121110] font-normal">
          {isAr ? sub.titleAr : sub.titleEn}
        </h3>
      </div>

      {/* Services list */}
      <div className="p-4 sm:p-5 space-y-3">
        {sub.services.map((srv) => (
          <ServiceCard key={srv.id} service={srv} isAr={isAr} onBook={onBook} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Individual Therapy");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBook = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <main
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <InnerPageBackground />

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar
          currentLang={currentLang}
          onToggleLang={toggleLang}
          onOpenBooking={() => handleBook("General Consultation")}
        />

        <PageHeader
          badgeEn="Clinical Services"
          badgeAr="الخدمات النفسية المتخصصة"
          subtitleEn="Compassionate, Evidence-Based Care in Dubai"
          subtitleAr="رعاية نفسية إكلينيكية قائمة على الأدلة وبأعلى معايير الخصوصية"
          titleEn="Services"
          titleAr="الخدمات"
          descriptionEn="Confidential psychological care for individuals, couples, families, and organisations."
          descriptionAr="رعاية نفسية متخصصة للأفراد والأزواج والعائلات والمؤسسات في بيئة راقية وسرية."
        />

        {/* Clusters */}
        <section className="relative z-10 py-12 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto space-y-14">
            {clusters.map((cluster) => (
              <div key={cluster.id}>
                {/* Cluster header */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6 pb-4 border-b border-[#c5a059]/40">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e7cca1] via-[#d4af62] to-[#bc9242] flex items-center justify-center text-[#121110] shadow-md">
                    {cluster.icon}
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal tracking-tight">
                      {isAr ? cluster.titleAr : cluster.titleEn}
                    </h2>
                    <p className="font-serif text-sm text-[#936227]">
                      {isAr ? cluster.subtitleAr : cluster.subtitleEn}
                    </p>
                  </div>
                </div>

                {/* Sub-clusters */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {cluster.subClusters.map((sub) => (
                    <SubClusterPanel key={sub.id} sub={sub} isAr={isAr} onBook={handleBook} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#f4efe8]/90 border-y border-[#c5a059]/25">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/35 mb-2.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#936227]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#936227] font-medium">
                  {isAr ? "الأسئلة الشائعة" : "Common Inquiries"}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal tracking-tight">
                {isAr ? "إجابات على أكثر التساؤلات تكراراً" : "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-white/95 border border-[#c5a059]/35 hover:border-[#c5a059] overflow-hidden shadow-xs transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left rtl:text-right flex items-center justify-between space-x-4 rtl:space-x-reverse font-serif text-base sm:text-lg text-[#121110] hover:text-[#936227] transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="font-medium leading-snug">{isAr ? faq.qAr : faq.qEn}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#936227] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-3 font-serif text-sm sm:text-[15px] leading-relaxed text-[#2c2822] bg-[#fbf9f6] border-t border-[#c5a059]/15">
                        {isAr ? faq.aAr : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative z-10 py-12 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[#14151c] via-[#0d0e12] to-[#14151c] border-t border-[#c5a059]/30 text-white text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              {isAr ? "احجز جلستك الاستشارية في دبي" : "Schedule Your Consultation"}
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#ded9cd]">
              {isAr
                ? "مساحة دافئة وسرية لبدء رحلة التغيير الهادف."
                : "A serene, confidential space to begin your journey toward clarity and wholeness."}
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleBook("General Consultation")}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold shadow-md hover:brightness-105 transition-all cursor-pointer inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{isAr ? "احجز جلسة استشارية" : "Book A Confidential Session"}</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} onOpenBooking={() => handleBook("Consultation")} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
        currentLang={currentLang}
      />
    </main>
  );
}
