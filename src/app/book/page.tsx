"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LuxuryBackground from "@/components/LuxuryBackground";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Video,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Award,
} from "lucide-react";

export default function BookPage() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "Individual Therapy",
    format: "In-Person (Dubai Clinic)",
    date: "",
    timeSlot: "Morning (09:00 – 12:00)",
    name: "",
    email: "",
    phone: "",
    languagePref: "English",
    notes: "",
  });
  const [bookingRef, setBookingRef] = useState("");

  const services = [
    {
      id: "Individual Therapy",
      titleEn: "Individual Psychotherapy",
      titleAr: "العلاج النفسي الفردي",
      descEn: "50 mins • Anxiety, depression, trauma, existential depth",
      descAr: "50 دقيقة • القلق، الاكتئاب، الصدمات، والوضوح الوجودي",
    },
    {
      id: "Couples Therapy",
      titleEn: "Couples & Marriage Therapy",
      titleAr: "استشارات الأزواج والزواج",
      descEn: "75 mins • Communication, trust repair, cross-cultural harmony",
      descAr: "75 دقيقة • التواصل، استعادة الثقة، وتناغم العلاقات",
    },
    {
      id: "Family Therapy",
      titleEn: "Family Therapy",
      titleAr: "العلاج الأسري",
      descEn: "75 mins • Intergenerational dynamics, adolescent transitions",
      descAr: "75 دقيقة • ديناميكيات الأسرة، وتناغم الأجيال",
    },
    {
      id: "Diagnostic Assessment",
      titleEn: "Diagnostic Psychological Assessment",
      titleAr: "التقييم التشخيصي النفسي",
      descEn: "Comprehensive testing • ADHD, Autism, Mood & Personality",
      descAr: "تقييم إكلينيكي شامل • تشتت الانتباه، التوحد، والمزاج",
    },
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete booking
      const ref = `NR-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setStep(4);
    }
  };

  return (
    <main
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <LuxuryBackground />

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar currentLang={currentLang} onToggleLang={toggleLang} />

        {/* Page Header */}
        <PageHeader
          badgeEn="Consultation Reservation"
          badgeAr="حجز المواعيد والاستشارات"
          subtitleEn="Discreet, Professional & Confidential"
          subtitleAr="جلسات علاجية تتسم بأعلى درجات الخصوصية والأمان"
          titleEn="Book A Confidential Session"
          titleAr="حجز موعد جلسة علاجية سرية"
          descriptionEn="Begin your clinical journey with Nathalie Rosenblum. Choose your preferred service, session format, and appointment window below."
          descriptionAr="ابدأ رحلتك العلاجية مع ناتالي روزنبلوم. حدد نوع الخدمة المطلوبة، طريقة الحضور، والموعد الأنسب لك أدناه."
        />

        {/* Main Booking Container */}
        <section className="relative z-10 py-10 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[860px] mx-auto bg-[#faf6ee]/95 backdrop-blur-md border border-[#c5a059] rounded-2xl shadow-[0_16px_48px_rgba(150,120,70,0.15)] overflow-hidden">
            {/* Top Gold Progress Ribbon */}
            <div className="bg-[#12131a] px-6 sm:px-10 py-4 border-b border-[#c5a059]/40 flex items-center justify-between text-xs font-serif text-[#ded9cd]">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>
                  {isAr
                    ? "مرخصة رسمياً من هيئة تنمية المجتمع (CDA) في دبي"
                    : "CDA Licensed Clinical Psychologist • Dubai"}
                </span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-[#e5be70] font-semibold">
                <span>{isAr ? `الخطوة ${step} من 3` : `Step ${Math.min(step, 3)} of 3`}</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 text-[#22201c]">
              {step === 4 ? (
                /* Step 4: Booking Completed */
                <div className="py-8 text-center space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#936227]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="font-serif text-xs uppercase tracking-widest text-[#936227]">
                      {isAr ? "تم استلام الطلب بنجاح" : "Reservation Requested"}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#121110] font-normal mt-1">
                      {isAr ? "شكراً لتواصلك مع العيادة" : "Your Consultation Is Requested"}
                    </h2>
                    <p className="font-serif text-sm text-[#5f584b] mt-1">
                      {isAr ? "رقم مرجع الحجز: " : "Booking Reference: "}
                      <strong className="text-[#121110] font-semibold tracking-wider">
                        {bookingRef}
                      </strong>
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="max-w-md mx-auto bg-white/70 p-5 rounded-xl border border-[#c5a059]/30 text-left rtl:text-right font-serif text-sm space-y-2 text-[#3c362d]">
                    <div className="flex justify-between border-b border-[#c5a059]/20 pb-2">
                      <span className="text-[#7c7465]">{isAr ? "الخدمة" : "Service"}:</span>
                      <strong className="text-[#121110]">{formData.service}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#c5a059]/20 pb-2">
                      <span className="text-[#7c7465]">{isAr ? "طريقة الجلسة" : "Format"}:</span>
                      <strong className="text-[#121110]">{formData.format}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#c5a059]/20 pb-2">
                      <span className="text-[#7c7465]">{isAr ? "الفترة المفضلة" : "Time Slot"}:</span>
                      <strong className="text-[#121110]">{formData.timeSlot}</strong>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#7c7465]">{isAr ? "العميل" : "Client"}:</span>
                      <strong className="text-[#121110]">{formData.name}</strong>
                    </div>
                  </div>

                  <p className="font-serif text-sm text-[#4c463a] max-w-lg mx-auto leading-relaxed">
                    {isAr
                      ? "سيتواصل معك منسق الاستشارات في عيادتنا بدبي عبر الواتساب أو الهاتف لتأكيد الموعد النهائي وتزويدك باستمارة التسجيل السرية."
                      : "Our intake coordinator in Dubai will reach out via phone or WhatsApp shortly to confirm your exact appointment slot and provide secure intake documentation."}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/"
                      className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-sm shadow-md"
                    >
                      {isAr ? "العودة للرئيسية" : "Return to Home"}
                    </Link>
                    <Link
                      href="/contact"
                      className="px-6 py-2.5 rounded-full border border-[#c5a059] bg-[#faf6ee] text-[#936227] font-serif font-semibold text-sm hover:bg-[#c5a059] hover:text-[#121110] transition-colors"
                    >
                      {isAr ? "تفاصيل موقع العيادة" : "Clinic Location Details"}
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNext} className="space-y-6">
                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <div className="space-y-5 animate-in fade-in">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal">
                          {isAr ? "اختر نوع الخدمة العلاجية" : "Select Your Psychological Service"}
                        </h2>
                        <p className="font-serif text-sm text-[#665f52] mt-1">
                          {isAr
                            ? "جميع الجلسات تقدم بسرية تامة باللغتين العربية أو الإنجليزية."
                            : "All services are confidential and offered in English or Arabic."}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((srv) => (
                          <div
                            key={srv.id}
                            onClick={() => setFormData({ ...formData, service: srv.id })}
                            className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                              formData.service === srv.id
                                ? "bg-[#f5ebd9] border-[#c5a059] shadow-md ring-1 ring-[#c5a059]"
                                : "bg-white/80 border-[#d9cdb8] hover:border-[#c5a059]"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-serif text-lg text-[#121110] font-medium">
                                  {isAr ? srv.titleAr : srv.titleEn}
                                </h3>
                                <div
                                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                    formData.service === srv.id
                                      ? "border-[#c5a059] bg-[#c5a059]"
                                      : "border-[#b5ad9e]"
                                  }`}
                                >
                                  {formData.service === srv.id && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                  )}
                                </div>
                              </div>
                              <p className="font-serif text-xs text-[#5c5649]">
                                {isAr ? srv.descAr : srv.descEn}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Format Selection */}
                      <div className="pt-4 border-t border-[#c5a059]/25">
                        <label className="block font-serif text-sm font-semibold text-[#121110] mb-3">
                          {isAr ? "طريقة حضور الجلسة" : "Session Format"}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div
                            onClick={() =>
                              setFormData({
                                ...formData,
                                format: "In-Person (Dubai Clinic)",
                              })
                            }
                            className={`p-4 rounded-xl border cursor-pointer flex items-center space-x-3 rtl:space-x-reverse ${
                              formData.format === "In-Person (Dubai Clinic)"
                                ? "bg-[#f5ebd9] border-[#c5a059] ring-1 ring-[#c5a059]"
                                : "bg-white/80 border-[#d9cdb8]"
                            }`}
                          >
                            <MapPin className="w-5 h-5 text-[#936227] shrink-0" />
                            <div>
                              <strong className="block text-sm font-serif text-[#121110]">
                                {isAr ? "حضورياً في عيادة دبي" : "In-Person (Dubai Clinic)"}
                              </strong>
                              <span className="text-xs font-serif text-[#665f52]">
                                {isAr ? "مدينة دبي الطبية / جميرا" : "Dubai Healthcare City / Jumeirah"}
                              </span>
                            </div>
                          </div>

                          <div
                            onClick={() =>
                              setFormData({
                                ...formData,
                                format: "Online Telehealth (Worldwide)",
                              })
                            }
                            className={`p-4 rounded-xl border cursor-pointer flex items-center space-x-3 rtl:space-x-reverse ${
                              formData.format === "Online Telehealth (Worldwide)"
                                ? "bg-[#f5ebd9] border-[#c5a059] ring-1 ring-[#c5a059]"
                                : "bg-white/80 border-[#d9cdb8]"
                            }`}
                          >
                            <Video className="w-5 h-5 text-[#936227] shrink-0" />
                            <div>
                              <strong className="block text-sm font-serif text-[#121110]">
                                {isAr ? "عبر الإنترنت (عن بُعد)" : "Online Telehealth"}
                              </strong>
                              <span className="text-xs font-serif text-[#665f52]">
                                {isAr ? "جلسات مرئية مشفرة وآمنة عالمياً" : "Secure encrypted video worldwide"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-sm shadow-md hover:brightness-105 transition-all flex items-center space-x-2 rtl:space-x-reverse"
                        >
                          <span>{isAr ? "المتابعة لاختيار التاريخ" : "Continue to Schedule"}</span>
                          {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <div className="space-y-5 animate-in fade-in">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal">
                          {isAr ? "اختر التاريخ والوقت المفضل" : "Preferred Date & Time Window"}
                        </h2>
                        <p className="font-serif text-sm text-[#665f52] mt-1">
                          {isAr
                            ? "سنبذل قصارى جهدنا لتأكيد الموعد المناسب لجدولك الزمني."
                            : "We will accommodate your timing preferences as closely as possible."}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1.5">
                            {isAr ? "التاريخ المقترح" : "Preferred Consultation Date"} *
                          </label>
                          <div className="relative">
                            <Calendar className="w-4 h-4 text-[#8a8374] absolute left-3 top-3" />
                            <input
                              required
                              type="date"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full pl-10 pr-3 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1.5">
                            {isAr ? "الفترة الزمنية المفضلة" : "Preferred Time Slot"}
                          </label>
                          <div className="relative">
                            <Clock className="w-4 h-4 text-[#8a8374] absolute left-3 top-3" />
                            <select
                              value={formData.timeSlot}
                              onChange={(e) =>
                                setFormData({ ...formData, timeSlot: e.target.value })
                              }
                              className="w-full pl-10 pr-3 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                            >
                              <option>Morning (09:00 – 12:00)</option>
                              <option>Afternoon (12:00 – 16:00)</option>
                              <option>Evening (16:00 – 20:00)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1.5">
                          {isAr ? "لغة الجلسة المفضلة" : "Preferred Language of Therapy"}
                        </label>
                        <select
                          value={formData.languagePref}
                          onChange={(e) =>
                            setFormData({ ...formData, languagePref: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                        >
                          <option>English</option>
                          <option>العربية (Arabic)</option>
                          <option>Bilingual (English & Arabic)</option>
                        </select>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-6 py-2.5 rounded-full border border-[#c5a059] bg-[#faf6ee] text-[#936227] font-serif text-sm font-semibold hover:bg-[#c5a059] hover:text-[#121110] transition-colors"
                        >
                          {isAr ? "السابق" : "Back"}
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-sm shadow-md hover:brightness-105 transition-all flex items-center space-x-2 rtl:space-x-reverse"
                        >
                          <span>{isAr ? "المتابعة للبيانات الشخصية" : "Continue to Contact Details"}</span>
                          {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact & Intake */}
                  {step === 3 && (
                    <div className="space-y-5 animate-in fade-in">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal">
                          {isAr ? "البيانات الشخصية والسرية" : "Confidential Client Information"}
                        </h2>
                        <p className="font-serif text-sm text-[#665f52] mt-1">
                          {isAr
                            ? "تستخدم هذه البيانات فقط لغرض تأكيد الموعد والتواصل الإكلينيكي المشفر."
                            : "Your details remain entirely confidential and will solely be used to confirm your consultation."}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                            {isAr ? "الاسم الكامل" : "Full Name"} *
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-[#8a8374] absolute left-3 top-3" />
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder={isAr ? "الاسم" : "Your full name"}
                              className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                            {isAr ? "البريد الإلكتروني" : "Email Address"} *
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-[#8a8374] absolute left-3 top-3" />
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="email@example.com"
                              className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                          {isAr ? "رقم الهاتف / واتساب للتأكيد" : "Phone / WhatsApp for Confirmation"} *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#8a8374] absolute left-3 top-3" />
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+971 50 123 4567"
                            className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                          {isAr ? "ملاحظات سرية إضافية (اختياري)" : "Confidential Notes (Optional)"}
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder={
                            isAr
                              ? "أي تفاصيل تود مشاركتها مسبقاً لمساعدة الأخصائية في التحضير للجلسة..."
                              : "Any brief notes regarding what brings you to therapy or specific questions..."
                          }
                          className="w-full px-3 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-2.5 rounded-full border border-[#c5a059] bg-[#faf6ee] text-[#936227] font-serif text-sm font-semibold hover:bg-[#c5a059] hover:text-[#121110] transition-colors"
                        >
                          {isAr ? "السابق" : "Back"}
                        </button>
                        <button
                          type="submit"
                          className="px-9 py-3.5 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-base shadow-lg hover:brightness-105 transition-all flex items-center space-x-2 rtl:space-x-reverse cursor-pointer"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>{isAr ? "تأكيد طلب حجز الجلسة" : "Confirm Consultation Request"}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </main>
  );
}
