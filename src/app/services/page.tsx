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
  User,
  Heart,
  Users,
  ClipboardCheck,
  Briefcase,
  CheckCircle2,
  Clock,
  ShieldAlert,
  HelpCircle,
  CalendarCheck,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Individual Therapy");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBook = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const services = [
    {
      id: "individual",
      iconSrc: "/images/exact/icon-individual.png",
      titleEn: "Individual Psychotherapy",
      titleAr: "العلاج النفسي الفردي",
      subtitleEn: "Deep Personal Clarity, Healing & Emotional Resilience",
      subtitleAr: "وضوح شخصي عميق، تعافٍ، ومرونة عاطفية",
      descriptionEn:
        "One-on-one clinical therapy tailored to your internal world. Drawing on Existential Psychotherapy, Compassionate Inquiry, and CBT, we address the root causes of distress rather than merely subduing symptoms. Ideal for navigating anxiety, depression, burnout, grief, self-esteem, or profound life transitions.",
      descriptionAr:
        "علاج إكلينيكي فردي مخصص لعالمك الداخلي. بالاستناد إلى العلاج الوجودي والاستقصاء العطوف والعلاج المعرفي السلوكي، نعمل على معالجة الجذور الحقيقية للألم النفسي بدلاً من تسكين الأعراض فقط. مثالي لتجاوز القلق، الاكتئاب، الاحتراق الوظيفي، الصدمات، ومحطات التحول الحياتية الكبرى.",
      benefitsEn: [
        "Relief from chronic anxiety, panic, and pervasive worry",
        "Overcoming depressive episodes, emotional numbness, and grief",
        "Healing unresolved developmental and acute trauma (PTSD)",
        "Cultivating self-worth, emotional regulation, and clear boundaries",
      ],
      benefitsAr: [
        "التحرر من نوبات الهلع والقلق المزمن والأفكار المقلقة",
        "تجاوز حالات الاكتئاب والانفصال العاطفي ومشاعر الحزن الدفين",
        "تضميد جروح الصدمات النفسية النمائية وتجارب الماضي (PTSD)",
        "بناء تقدير الذات والتنظيم الانفعالي ورسم حدود صحية في العلاقات",
      ],
      durationEn: "50 Minutes | In-Person (Dubai) or Online Telehealth",
      durationAr: "50 دقيقة | حضورياً في عيادة دبي أو عبر الإنترنت",
    },
    {
      id: "couples",
      iconSrc: "/images/exact/icon-couples.png",
      titleEn: "Couples & Marriage Counseling",
      titleAr: "استشارات الأزواج والزواج",
      subtitleEn: "Restoring Intimacy, Trust & Compassionate Communication",
      subtitleAr: "استعادة المودة، الثقة، والتواصل العاطفي الصادق",
      descriptionEn:
        "Grounding our work in The Gottman Method and Emotion-Focused Therapy (EFT), couples therapy provides a neutral, safe space to untangle painful conflict loops. Whether you are navigating cultural differences, repairing after infidelity, or seeking deeper intimacy, we reconstruct connection with warmth and mutual respect.",
      descriptionAr:
        "بالاعتماد على طريقة غوتمان الرائدة والعلاج المرتكز على العواطف (EFT)، توفر استشارات الأزواج مساحة محايدة وآمنة لتفكيك حلقات الخلاف المتكررة. سواء كنتم تواجهون تحديات التكيف بين الثقافات، أو تسعون لترميم الثقة بعد صدمات الخيانة، نعمل معاً على إعادة بناء جسور المودة والاحترام المتبادل.",
      benefitsEn: [
        "Breaking repetitive argument patterns and defensive withdrawal",
        "Rebuilding broken trust and emotional safety after betrayal",
        "Navigating multicultural, interfaith, and extended-family dynamics",
        "Deepening emotional intimacy and shared life vision",
      ],
      benefitsAr: [
        "كسر دورات الجدال العقيمة وتجنب الانسحاب العاطفي والدفاعية",
        "إعادة بناء الثقة والشعور بالأمان العاطفي بعد الأزمات",
        "إدارة التحديات الخاصة بالزيجات متعددة الثقافات وتأثير الأسرة الممتدة",
        "تعميق القرب العاطفي والاتفاق على رؤية مشتركة للحياة المستقبلية",
      ],
      durationEn: "75 Minutes | In-Person (Dubai) or Online Telehealth",
      durationAr: "75 دقيقة | حضورياً في عيادة دبي أو عبر الإنترنت",
    },
    {
      id: "family",
      iconSrc: "/images/exact/icon-family.png",
      titleEn: "Family Therapy & Relational Systems",
      titleAr: "العلاج الأسري والأنظمة العلائقية",
      subtitleEn: "Generational Harmony, Healthy Boundaries & Mutual Understanding",
      subtitleAr: "تناغم الأجيال، الحدود الصحية، والتفاهم المشترك",
      descriptionEn:
        "Families are interconnected ecosystems where individual distress often reflects systemic stress. Drawing on systemic therapy and cultural attunement, Nathalie helps families resolve intergenerational friction, support adolescents through difficult milestones, and establish healthy communication without blame.",
      descriptionAr:
        "الأسرة نظام مترابط، والضيق الذي يشعر به فرد غالباً ما يعكس توتراً في المنظومة ككل. بالاعتماد على العلاج الأسري النظمي والحساسية للقيم الثقافية، تساعد ناتالي العائلات على حل الخلافات بين الأجيال، ودعم المراهقين خلال مراحلهم الانتقالية الصعبة، وبناء تواصل إيجابي قائم على التقدير المتبادل.",
      benefitsEn: [
        "Resolving parent-adolescent conflicts and communication barriers",
        "Navigating high-conflict divorces and co-parenting transitions",
        "Managing the stress of relocation and expat family life in Dubai",
        "Creating clear, supportive boundaries and familial empathy",
      ],
      benefitsAr: [
        "حل النزاعات بين الآباء والأبناء وفتح قنوات حوار بناءة",
        "التعامل المتوازن مع حالات الانفصال والتربية المشتركة",
        "إدارة ضغوط الانتقال والاستقرار الأسري للأسر المقيمة في دبي",
        "وضع حدود أسرية صحية تعزز التعاطف والدعم المتبادل",
      ],
      durationEn: "75 Minutes | In-Person (Dubai) or Online Telehealth",
      durationAr: "75 دقيقة | حضورياً في عيادة دبي أو عبر الإنترنت",
    },
    {
      id: "assessment",
      iconSrc: "/images/exact/icon-individual.png",
      titleEn: "Diagnostic Psychological Assessment",
      titleAr: "التقييم التشخيصي النفسي الشامل",
      subtitleEn: "Rigorous Clinical Evaluation for ADHD, Autism, Mood & Personality",
      subtitleAr: "تقييم إكلينيكي دقيق لاضطرابات الانتباه، التوحد، والمزاج",
      descriptionEn:
        "Comprehensive diagnostic evaluations adhering to APA and international clinical guidelines. We provide formal assessments for Adult ADHD, Autism Spectrum conditions, bipolar disorder, depressive syndromes, and complex personality dynamics, complete with clear, actionable recommendations.",
      descriptionAr:
        "تقييمات تشخيصية شاملة ومتوافقة مع المعايير الدولية والجمعية الأمريكية لعلم النفس. نقدم تقييمات رسمية لتشتت الانتباه وفرط الحركة لدى البالغين (ADHD)، طيف التوحد، اضطرابات المزاج، والأنماط المعقدة للشخصية، مع تقرير إكلينيكي مفصل وتوصيات علاجية واضحة.",
      benefitsEn: [
        "Accurate clinical diagnosis compliant with CDA Dubai standards",
        "Adult ADHD and Neurodivergence diagnostic clarity",
        "Differential diagnosis between anxiety, trauma, and mood cycles",
        "Personalized psychological roadmap and accommodation guidance",
      ],
      benefitsAr: [
        "تشخيص إكلينيكي دقيق ومعتمد لدى الجهات الصحية وهيئة تنمية المجتمع",
        "توضيح تشخيص اضطراب فرط الحركة ونقص الانتباه والتنوع العصبي",
        "التشخيص التفريقي الدقيق بين القلق، الصدمات، واضطرابات المزاج",
        "خارطة طريق علاجية مخصصة وتوصيات مهنية وتعليمية",
      ],
      durationEn: "Multi-session diagnostic protocol with comprehensive written report",
      durationAr: "بروتوكول تشخيصي متعدد الجلسات مع تقرير إكلينيكي مكتوب",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "Initial Clinical Consultation",
      titleAr: "الجلسة الاستشارية الأولى",
      descEn:
        "A 50-minute confidential exploration of your primary concerns, emotional history, and current difficulties in a welcoming, non-judgmental environment.",
      descAr:
        "جلسة استكشافية سرية مدتها 50 دقيقة للتعرف على أبرز التحديات، والتاريخ العاطفي، والظروف الحالية في بيئة مريحة ومحايدة تماماً.",
    },
    {
      num: "02",
      titleEn: "Collaborative Formulation",
      titleAr: "صياغة الخطة العلاجية المشتركة",
      descEn:
        "Together, we map out the core emotional and psychological patterns shaping your challenges, establishing clear, meaningful objectives for therapy.",
      descAr:
        "معاً، نحدد الأنماط العاطفية والنفسية الجذرية التي تؤثر على حياتك، ونضع أهدافاً واضحة وملموسة تلبي احتياجاتك الشخصية.",
    },
    {
      num: "03",
      titleEn: "Targeted Interventions",
      titleAr: "التدخلات العلاجية المركزة",
      descEn:
        "Utilizing evidence-based tools (CBT, EFT, Schema Therapy, Existential Inquiry) to process pain, rewire behavioral loops, and strengthen inner resources.",
      descAr:
        "تطبيق تقنيات علاجية مثبتة علمياً لمعالجة الصدمات، وإعادة تشكيل الاستجابات السلوكية، وتعزيز القوة النفسية الداخلية.",
    },
    {
      num: "04",
      titleEn: "Integration & Sustainable Growth",
      titleAr: "الدمج والنمو المستدام",
      descEn:
        "Solidifying healthy relational patterns, emotional independence, and authentic purpose that last well beyond the therapy room.",
      descAr:
        "ترسيخ أنماط علائقية صحية، واستقلال عاطفي متين، ووضوح وجودي يستمر ويزدهر في حياتك اليومية والمستقبلية.",
    },
  ];

  const faqs = [
    {
      qEn: "Is everything discussed in therapy kept completely confidential?",
      qAr: "هل جميع ما يناقش في الجلسات يخضع لسرية تامة ومطلقة؟",
      aEn:
        "Yes, absolute confidentiality is the sacred cornerstone of clinical practice. All sessions, client files, and personal data are strictly protected in accordance with CDA Dubai licensing regulations and international APA clinical ethics.",
      aAr:
        "نعم، السرية التامة هي الركيزة الأساسية لممارستنا الإكلينيكية. تخضع جميع الجلسات والسجلات لأعلى معايير الخصوصية وفقاً للوائح هيئة تنمية المجتمع بدبي (CDA) والجمعية الأمريكية لعلم النفس (APA).",
    },
    {
      qEn: "Do you offer sessions in both English and Arabic?",
      qAr: "هل تقدمون الجلسات باللغتين العربية والإنجليزية؟",
      aEn:
        "Yes. Nathalie is entirely bilingual, conducting psychotherapy, diagnostic assessments, and couples counseling with native fluency in both English and Arabic.",
      aAr:
        "نعم بكل تأكيد. ناتالي تتقن اللغتين العربية والإنجليزية بطلاقة تامة، وتقدم العلاج النفسي الفردي واستشارات الأزواج والتقييمات بكلتا اللغتين.",
    },
    {
      qEn: "Can I attend sessions online via telehealth?",
      qAr: "هل يمكنني حضور الجلسات عبر الإنترنت (عن بُعد)؟",
      aEn:
        "Yes. We offer secure, encrypted video consultations for clients residing across the UAE, GCC, and worldwide who prefer remote therapy.",
      aAr:
        "نعم، نقدم جلسات استشارية مرئية عالية الأمان والتشفير للعملاء المقيمين في مختلف إمارات الدولة، ودول الخليج، وحول العالم.",
    },
    {
      qEn: "Can I claim session costs through my health insurance in the UAE?",
      qAr: "هل يمكن استرداد تكاليف الجلسات عبر التأمين الصحي في الإمارات؟",
      aEn:
        "Many international and comprehensive local insurance policies cover psychological services on a pay-and-claim basis. As a CDA-licensed psychologist, Nathalie provides official clinical receipts and reimbursement claim forms.",
      aAr:
        "توفر العديد من وثائق التأمين الصحي الدولية والمحلية تغطية لخدمات العلاج النفسي بنظام الاسترداد. بصفتها أخصائية مرخصة من CDA، تقدم ناتالي الفواتير الرسمية والنماذج المعتمدة لتقديمها لشركتك التأمينية.",
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
          onOpenBooking={() => handleBook("General Consultation")}
        />

        {/* Page Header */}
        <PageHeader
          badgeEn="Clinical Services"
          badgeAr="الخدمات النفسية المتخصصة"
          subtitleEn="Compassionate, Evidence-Based Psychotherapy in Dubai"
          subtitleAr="رعاية نفسية إكلينيكية قائمة على الأدلة وبأعلى معايير الخصوصية"
          titleEn="Therapeutic Modalities & Services"
          titleAr="الخدمات والبرامج العلاجية"
          descriptionEn="Confidential psychological care for individuals, couples, and families seeking profound emotional clarity, relational healing, and personal growth."
          descriptionAr="رعاية نفسية فردية وأسرية متخصصة تهدف إلى تحقيق الوضوح العاطفي، وترميم العلاقات، واستعادة التوازن الداخلي في بيئة راقية وسرية."
        />

        {/* Detailed Services Grid */}
        <section className="relative z-10 py-12 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto space-y-12">
            {services.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#faf6ee]/95 backdrop-blur-md border border-[#c5a059] shadow-[0_12px_36px_rgba(150,120,70,0.12)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(150,120,70,0.2)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-12 h-12 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center shrink-0">
                        <Image
                          src={srv.iconSrc}
                          alt={srv.titleEn}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal tracking-tight">
                          {isAr ? srv.titleAr : srv.titleEn}
                        </h2>
                        <p className="font-serif text-xs sm:text-sm text-[#936227] font-medium">
                          {isAr ? srv.subtitleAr : srv.subtitleEn}
                        </p>
                      </div>
                    </div>

                    <p className="font-serif text-[15px] sm:text-[15.5px] leading-[1.8] text-[#2c2923]">
                      {isAr ? srv.descriptionAr : srv.descriptionEn}
                    </p>

                    {/* Duration / Format Badge */}
                    <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-lg bg-[#f0e7d5] border border-[#c5a059]/30 text-xs font-serif text-[#524939]">
                      <Clock className="w-3.5 h-3.5 text-[#936227]" />
                      <span>{isAr ? srv.durationAr : srv.durationEn}</span>
                    </div>
                  </div>

                  {/* Right Column: Key Benefits & Action */}
                  <div className="lg:col-span-5 bg-white/70 p-6 rounded-xl border border-[#c5a059]/40 flex flex-col justify-between h-full space-y-5">
                    <div>
                      <h3 className="font-serif text-sm uppercase tracking-wider text-[#936227] font-semibold mb-3">
                        {isAr ? "أبرز أهداف ونتائج العلاج" : "Clinical Focus & Outcomes"}
                      </h3>
                      <ul className="space-y-2.5 font-serif text-sm text-[#38332a]">
                        {(isAr ? srv.benefitsAr : srv.benefitsEn).map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2 rtl:space-x-reverse">
                            <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleBook(isAr ? srv.titleAr : srv.titleEn)}
                        className="w-full py-3 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-sm shadow-md hover:brightness-105 transition-all cursor-pointer inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
                      >
                        <CalendarCheck className="w-4 h-4" />
                        <span>{isAr ? "طلب حجز هذه الجلسة" : `Book ${srv.titleEn}`}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Therapeutic Roadmap */}
        <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12 bg-black/70 border-y border-[#c5a059]/25 text-white">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#e5be70] font-semibold">
                {isAr ? "رحلتك العلاجية" : "The Clinical Process"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1">
                {isAr ? "ماذا تتوقع خلال رحلة العلاج" : "What To Expect in Therapy"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#14151e]/90 border border-[#c5a059]/30 hover:border-[#c5a059] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-3xl sm:text-4xl text-[#c5a059] font-normal block mb-2">
                      {st.num}
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal mb-2">
                      {isAr ? st.titleAr : st.titleEn}
                    </h3>
                    <p className="font-serif text-xs sm:text-sm text-[#cfc9be] leading-relaxed">
                      {isAr ? st.descAr : st.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#936227]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#936227]">
                  {isAr ? "الأسئلة الشائعة" : "Common Inquiries"}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal">
                {isAr ? "إجابات على أكثر التساؤلات تكراراً" : "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#faf6ee] border border-[#c5a059]/50 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left rtl:text-right flex items-center justify-between space-x-4 rtl:space-x-reverse font-serif text-base sm:text-lg text-[#1a1a1a] hover:text-[#936227] transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="font-medium">{isAr ? faq.qAr : faq.qEn}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#936227] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 font-serif text-sm sm:text-[15px] leading-relaxed text-[#403b32] border-t border-[#c5a059]/20">
                        {isAr ? faq.aAr : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking CTA Banner */}
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
