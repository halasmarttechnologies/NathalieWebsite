"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import InnerPageBackground from "@/components/InnerPageBackground";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  Bookmark,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  X,
  Sparkles,
  Share2,
  Check,
} from "lucide-react";

export default function LibraryPage() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: "all", labelEn: "All Articles", labelAr: "كافة المقالات" },
    { id: "anxiety", labelEn: "Anxiety & Wellness", labelAr: "القلق والصحة النفسية" },
    { id: "existential", labelEn: "Existential Meaning", labelAr: "المعنى والعلاج الوجودي" },
    { id: "relationships", labelEn: "Couples & Marriage", labelAr: "العلاقات والزواج" },
    { id: "neurodivergence", labelEn: "Adult ADHD", labelAr: "تشتت الانتباه والتنوع العصبي" },
  ];

  const articles = [
    {
      id: "dubai-anxiety",
      category: "anxiety",
      dateEn: "September 2026",
      dateAr: "سبتمبر 2026",
      readTimeEn: "6 min read",
      readTimeAr: "قراءة 6 دقائق",
      titleEn: "Navigating High-Functioning Anxiety in Fast-Paced Dubai",
      titleAr: "التعامل مع القلق عالي الأداء في إيقاع دبي المتسارع",
      excerptEn:
        "Why ambitious professionals in the UAE often excel outwardly while privately battling chronic hypervigilance, exhaustion, and the silent fear of slowing down.",
      excerptAr:
        "لماذا يحقق المهنيون الطموحون في الإمارات نجاحات بارزة خارجياً بينما يعانون داخلياً من التوتر الدائم، والإرهاق، والخوف من التباطؤ.",
      contentEn: `In a vibrant, hyper-ambitious metropolis like Dubai, success is often equated with relentless acceleration. High-functioning anxiety frequently disguises itself as exceptional competence: flawless organization, unwavering punctuality, perfectionism, and an inability to say no.

Yet behind closed doors, clients report a persistent bodily hum of tension, sleep fragmentation, and the terror that if they pause, everything they have built might unravel. 

In existential psychotherapy, we view anxiety not merely as a biological misfire, but as an alarm signaling that your life pace has alienated you from your genuine emotional needs. Healing begins when we learn to distinguish between healthy motivation and fear-driven striving.`,
      contentAr: `في مدينة نابضة بالحياة والطموح مثل دبي، غالباً ما يقترن النجاح بالتسارع المتواصل. يتخفى "القلق عالي الأداء" في كثير من الأحيان وراء قناع الكفاءة الاستثنائية: التنظيم المتقن، الانضباط الشديد، السعي للكمال، وصعوبة رفض الطلبات.

لكن خلف الأبواب المغلقة، يعاني أصحاب هذا النمط من شد عصبي دائم، واضطرابات في النوم، وشعور خفي بالرعب من أن التوقف ولو للحظة قد يؤدي لانهيار كل ما بنوه.

من منظور العلاج النفسي الوجودي، لا نعتبر القلق مجرد خلل عضوي، بل إنذاراً ينبهك إلى أن وتيرة حياتك قد باعدت بينك وبين احتياجاتك النفسية الحقيقية. يبدأ التعافي الحقيقي حين نميز بين الدافع الصحي للإنجاز، والركض القهري المدفوع بالخوف.`,
    },
    {
      id: "existential-meaning",
      category: "existential",
      dateEn: "August 2026",
      dateAr: "أغسطس 2026",
      readTimeEn: "8 min read",
      readTimeAr: "قراءة 8 دقائق",
      titleEn: "Existential Therapy: Finding Meaning When Life Feels Overwhelming",
      titleAr: "العلاج النفسي الوجودي: اكتشاف المعنى في أوقات الشتات والضياع",
      excerptEn:
        "Exploring how confronting life's fundamental questions—freedom, isolation, and purpose—unlocks lasting emotional freedom and authentic peace.",
      excerptAr:
        "كيف يفتح التأمل الصادق في أسئلة الوجود الكبرى — الحرية، العزلة، والهدف — أبواب السلام الداخلي والحرية العاطفية المستدامة.",
      contentEn: `Traditional therapy often asks: "How can we eliminate your distressing symptom?" Existential therapy asks a deeper question: "What is this symptom trying to teach you about the way you are living?"

When we experience overwhelming life transitions, relocations, grief, or mid-career vacuums, our foundational assumptions about the world shake. This disorientation is not pathology; it is an invitation to examine what truly matters.

Rooted in the philosophies of Viktor Frankl and Rollo May, existential psychotherapy empowers individuals to author their own lives with courage, self-responsibility, and profound peace.`,
      contentAr: `يسأل العلاج النفسي التقليدي غالباً: "كيف نتخلص من هذا العرض المزعج؟" أما العلاج الوجودي فيطرح سؤالاً أعمق: "ما الذي يحاول هذا الألم إخبارك به عن الطريقة التي تعيش بها؟"

حين نمر بتحولات كبرى كالهجرة، أو فقدان الأحبة، أو أزمات منتصف العمر، تهتز افتراضاتنا المسبقة عن العالم. هذا الارتباك ليس مرضاً يستوجب الخجل منه، بل دعوة واعية لإعادة فحص ما يهمنا حقاً.

مستنداً إلى أطروحات فيكتور فرانكل ورولو ماي، يمنحك العلاج الوجودي القدرة على كتابة فصول حياتك بشجاعة، ومسؤولية ذاتية، وسكينة حقيقية.`,
    },
    {
      id: "cross-cultural-couples",
      category: "relationships",
      dateEn: "July 2026",
      dateAr: "يوليو 2026",
      readTimeEn: "7 min read",
      readTimeAr: "قراءة 7 دقائق",
      titleEn: "Cross-Cultural Relationships: Bridging Arab Traditions & Modern Partnership",
      titleAr: "الزيجات متعددة الثقافات: التوفيق بين التقاليد العربية والشراكة الحديثة",
      excerptEn:
        "How couples in multicultural hubs cultivate mutual respect when extended family expectations, cultural codes, and communication styles clash.",
      excerptAr:
        "كيف يبني الأزواج في المجتمعات العالمية تفاهماً متيناً عند تباين توقعات الأسرة الممتدة، والعادات الثقافية، وأساليب التعبير عن المشاعر.",
      contentEn: `In cosmopolitan environments like Dubai, intercultural marriages represent some of the most beautiful and complex relational tapestries. Yet, conflicts frequently arise not from a lack of love, but from differing unspoken cultural templates.

In Arab family culture, relational dynamics prioritize family duty, collective honor, and subtle, high-context communication. Western frameworks often emphasize individual autonomy and direct verbal confrontation.

When couples learn to decode each other's cultural language through Emotion-Focused Therapy and The Gottman Method, misunderstandings transform into rich empathy and unbreakable partnership.`,
      contentAr: `في بيئة عالمية مثل دبي، تمثل الزيجات متعددة الثقافات نسيجاً إنسانياً غنياً وفريداً. ومع ذلك، لا تنشأ الخلافات عادةً من نقص المحبة، بل من اختلاف القوالب الثقافية غير المصرح بها.

في الثقافة الأسرية العربية، تحظى روابط العائلة الممتدة، والواجب، والتواصل غير المباشر بتقدير بالغ، بينما تركز الأطر الغربية غالباً على الاستقلال الفردي والمصارحة اللفظية المباشرة.

حين يتعلم الشريكان فك شيفرة لغة الآخر الثقافية من خلال العلاج المرتكز على العواطف وطريقة غوتمان، يتحول سوء الفهم إلى تعاطف عميق وشراكة متينة.`,
    },
    {
      id: "adult-adhd",
      category: "neurodivergence",
      dateEn: "June 2026",
      dateAr: "يونيو 2026",
      readTimeEn: "5 min read",
      readTimeAr: "قراءة 5 دقائق",
      titleEn: "Understanding Adult ADHD: Beyond Distraction and Procrastination",
      titleAr: "فهم اضطراب فرط الحركة وتشتت الانتباه لدى البالغين: أبعد من مجرد السهو والتسويف",
      excerptEn:
        "Deconstructing executive dysfunction, rejection sensitivity, and the toll of lifelong masking in high-achieving men and women.",
      excerptAr:
        "تفكيك صعوبات الوظائف التنفيذية، والحساسية المفرطة للرفض، والإرهاق الناتج عن التظاهر المستمر بالمثالية لدى البالغين الناجحين.",
      contentEn: `For decades, ADHD was stereotyped as a condition of hyperactive schoolboys. Today, clinical research reveals millions of adults—particularly women and high-performing executives—struggling silently with executive dysfunction.

Adult ADHD is not a deficit of attention; it is a dysregulation of attention. The brain struggles to initiate unstimulating tasks, leading to painful cycles of procrastination followed by midnight panic sprints.

Accurate diagnostic assessment brings immense relief, replacing decades of self-blame with tailored cognitive strategies and neurological self-acceptance.`,
      contentAr: `لعقود طويلة، ارتبط اضطراب فرط الحركة وتشتت الانتباه بنمط نمطي للأطفال كثيري الحركة. أما اليوم، فتثبت الأبحاث الإكلينيكية أن ملايين البالغين — خاصة النساء والمهنيين الناجحين — يعانون في صمت من صعوبة إدارة مهامهم التنفيذية.

اضطراب فرط الحركة لدى البالغين ليس نقصاً في الانتباه، بل هو صعوبة في تنظيم الانتباه وتوجيهه. يعاني الدماغ من بدء المهام الروتينية غير المحفزة، مما يؤدي لدوائر مؤلمة من التسويف يعقبها سباق محموم لإنهاء العمل.

يوفر التقييم التشخيصي الدقيق ارتياحاً هائلاً، حيث يحل الفهم والاستراتيجيات السلوكية محل سنوات طويلة من لوم الذات.`,
    },
  ];

  const books = [
    {
      titleEn: "Man's Search for Meaning",
      titleAr: "الإنسان يبحث عن المعنى",
      authorEn: "Viktor E. Frankl",
      authorAr: "فيكتور إي. فرانكل",
      descEn: "A profound foundational text on existential purpose and resilience in the face of suffering.",
      descAr: "عمل تأسيسي خالد حول اكتشاف المعنى والصلابة النفسية في مواجهة أقسى ظروف المعاناة.",
    },
    {
      titleEn: "The Seven Principles for Making Marriage Work",
      titleAr: "المبادئ السبعة لنجاح الزواج",
      authorEn: "John M. Gottman, Ph.D.",
      authorAr: "د. جون إم. غوتمان",
      descEn: "Decades of empirical marriage research distilled into practical relational tools.",
      descAr: "خلاصة عقود من الأبحاث الإكلينيكية حول استدامة المودة وحل الخلافات الزوجية.",
    },
    {
      titleEn: "The Myth of Normal: Trauma, Illness and Healing",
      titleAr: "أسطورة الطبيعي: الصدمة والمرض والتعافي",
      authorEn: "Gabor Maté, M.D.",
      authorAr: "د. غابور ماتيه",
      descEn: "An essential exploration of emotional inquiry, somatic trauma, and authentic wholeness.",
      descAr: "كتاب محوري حول الاستقصاء العطوف وجذور الصدمات الجسدية والنفسية في المجتمع الحديث.",
    },
  ];

  const filteredArticles = articles.filter(
    (a) => activeCategory === "all" || a.category === activeCategory
  );

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
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Page Header */}
        <PageHeader
          badgeEn="Clinical Library & Insights"
          badgeAr="المكتبة الإكلينيكية والمقالات التوعوية"
          subtitleEn="Essays, Psychological Reflections & Healing Guides"
          subtitleAr="مقالات إكلينيكية، تأملات وجودية، وأدلة للتوازن النفسي في دبي"
          titleEn="Mind & Meaning Library"
          titleAr="مكتبة العقل والمعنى"
          descriptionEn="Thoughtful clinical perspectives on modern anxiety, existential depth, cross-cultural relationships, and authentic living."
          descriptionAr="رؤى إكلينيكية متخصصة تتناول قضايا القلق المعاصر، البحث عن المعنى، استقرار العلاقات، وبناء حياة تتسم بالسكينة والوعي."
        />

        {/* Category Tabs */}
        <section className="relative z-10 pt-2 pb-8 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-serif text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-semibold shadow-md"
                    : "bg-white/90 border border-[#c5a059]/40 text-[#121110] hover:border-[#c5a059] shadow-xs"
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative z-10 py-6 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="group p-7 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-[#c5a059]/45 hover:border-[#c5a059] shadow-[0_8px_24px_rgba(150,120,70,0.08)] hover:shadow-[0_16px_36px_rgba(150,120,70,0.16)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs font-serif text-[#8a8374] mb-3">
                    <span className="inline-flex items-center space-x-1 rtl:space-x-reverse">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{isAr ? art.dateAr : art.dateEn}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center space-x-1 rtl:space-x-reverse">
                      <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{isAr ? art.readTimeAr : art.readTimeEn}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl text-[#121110] group-hover:text-[#936227] transition-colors font-normal leading-snug mb-3">
                    {isAr ? art.titleAr : art.titleEn}
                  </h2>

                  <p className="font-serif text-sm sm:text-[14.5px] leading-relaxed text-[#403b32] mb-6">
                    {isAr ? art.excerptAr : art.excerptEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5a059]/25 flex items-center justify-between text-xs font-serif font-semibold text-[#936227] group-hover:text-[#121110] transition-colors">
                  <span>{isAr ? "قراءة المقال الكامل" : "Read Full Clinical Essay"}</span>
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recommended Clinical Reading Section */}
        <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12 bg-black/60 border-y border-[#c5a059]/25 text-white">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#e5be70] font-semibold">
                {isAr ? "قراءات موصى بها" : "Recommended Literature"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1">
                {isAr ? "كتب أساسية في رحلة الوعي الذاتي" : "Curated Clinical Reading"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {books.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#14151e]/90 border border-[#c5a059]/30 hover:border-[#c5a059] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#c5a059]/15 flex items-center justify-center mb-3">
                      <Bookmark className="w-5 h-5 text-[#e5be70]" />
                    </div>
                    <h3 className="font-serif text-lg text-white font-normal mb-1">
                      {isAr ? b.titleAr : b.titleEn}
                    </h3>
                    <p className="font-serif text-xs text-[#d4af62] mb-2.5">
                      {isAr ? b.authorAr : b.authorEn}
                    </p>
                    <p className="font-serif text-xs sm:text-sm text-[#cfc9be] leading-relaxed">
                      {isAr ? b.descAr : b.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#faf6ee] border border-[#c5a059] rounded-2xl p-6 sm:p-9 shadow-2xl text-[#22201c]"
            dir={isAr ? "rtl" : "ltr"}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 text-[#6c675e] hover:text-[#c5a059] p-1.5 rounded-full hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="font-serif text-xs uppercase tracking-widest text-[#936227]">
                {isAr ? selectedArticle.dateAr : selectedArticle.dateEn} •{" "}
                {isAr ? selectedArticle.readTimeAr : selectedArticle.readTimeEn}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal mt-1 mb-3">
                {isAr ? selectedArticle.titleAr : selectedArticle.titleEn}
              </h2>
              <div className="w-16 h-[1.5px] bg-[#c5a059] mb-4" />
            </div>

            <div className="space-y-4 font-serif text-[15px] sm:text-[16px] leading-[1.85] text-[#2c2822] whitespace-pre-line">
              {isAr ? selectedArticle.contentAr : selectedArticle.contentEn}
            </div>

            <div className="mt-8 pt-5 border-t border-[#c5a059]/30 flex flex-wrap items-center justify-between gap-3">
              <span className="font-serif text-xs text-[#827969]">
                {isAr
                  ? "بقلم: ناتالي روزنبلوم - أخصائية نفسية مرخصة في دبي"
                  : "By Nathalie Rosenblum, M.S. - Licensed Psychologist in Dubai"}
              </span>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  setIsBookingOpen(true);
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif text-xs font-semibold shadow-sm hover:brightness-105 transition-all"
              >
                {isAr ? "استشارة في هذا الموضوع" : "Consult On This Topic"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer currentLang={currentLang} onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService="Consultation from Library"
        currentLang={currentLang}
      />
    </main>
  );
}
