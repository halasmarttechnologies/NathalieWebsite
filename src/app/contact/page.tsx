"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import LuxuryBackground from "@/components/LuxuryBackground";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  ShieldCheck,
  Send,
  CheckCircle,
  MessageCircle,
  AlertCircle,
  CalendarCheck,
} from "lucide-react";

export default function ContactPage() {
  const { currentLang, toggleLang, isAr } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    format: "In-Person (Dubai Clinic)",
    service: "Individual Therapy",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Page Header */}
        <PageHeader
          badgeEn="Clinic & Inquiries"
          badgeAr="العيادة والتواصل المباشر"
          subtitleEn="A Discreet, Private Practice in Dubai"
          subtitleAr="عيادة متخصصة تتسم بأعلى درجات الخصوصية والراحة في دبي"
          titleEn="Contact & Clinic Location"
          titleAr="تواصل مع العيادة وموقعنا"
          descriptionEn="We invite you to reach out in total confidentiality. Whether you prefer in-person consultations in Dubai or telehealth worldwide, we are here to support your journey."
          descriptionAr="يسعدنا تواصلك معنا في أجواء من الأمان والسرية المطلقة. سواء كنت تفضل حضور الجلسات في عيادتنا بدبي أو عبر الإنترنت، نحن هنا لمساندتك."
        />

        {/* Main Contact Grid */}
        <section className="relative z-10 py-10 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Clinic Details & Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Clinic Address Card */}
              <div className="p-7 rounded-2xl bg-[#faf6ee]/95 backdrop-blur-md border border-[#c5a059] shadow-[0_8px_24px_rgba(150,120,70,0.1)] space-y-5">
                <h2 className="font-serif text-2xl text-[#121110] font-normal tracking-wide pb-2 border-b border-[#c5a059]/30">
                  {isAr ? "مقر العيادة وساعات العمل" : "Clinic Details & Hours"}
                </h2>

                <ul className="space-y-4 font-serif text-sm sm:text-[14.5px] text-[#332f27]">
                  <li className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <MapPin className="w-5 h-5 text-[#936227] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#121110] font-semibold">
                        {isAr ? "موقع العيادة في دبي" : "Dubai Practice Location"}
                      </strong>
                      <span>
                        {isAr
                          ? "مدينة دبي الطبية / مبنى العيادات الخاصة، جميرا، دبي، الإمارات العربية المتحدة"
                          : "Dubai Healthcare City & Jumeirah Specialist Clinics, Dubai, United Arab Emirates"}
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <Clock className="w-5 h-5 text-[#936227] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#121110] font-semibold">
                        {isAr ? "ساعات العمل والاستشارات" : "Consultation Hours"}
                      </strong>
                      <span>
                        {isAr
                          ? "الاثنين - الجمعة: 9:00 صباحاً - 8:00 مساءً | السبت: حسب الموعد المسبق"
                          : "Monday – Friday: 9:00 AM – 8:00 PM | Saturday: By Prior Appointment"}
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <Phone className="w-5 h-5 text-[#936227] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#121110] font-semibold">
                        {isAr ? "الهاتف والواتساب المباشر" : "Telephone & Direct WhatsApp"}
                      </strong>
                      <a
                        href="tel:+97140000000"
                        className="block hover:text-[#936227] transition-colors"
                      >
                        +971 4 000 0000 (Reception)
                      </a>
                      <a
                        href="https://wa.me/97150000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#936227] font-semibold hover:underline block mt-0.5"
                      >
                        WhatsApp: +971 50 000 0000
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <Mail className="w-5 h-5 text-[#936227] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#121110] font-semibold">
                        {isAr ? "البريد الإلكتروني السري" : "Confidential Email"}
                      </strong>
                      <a
                        href="mailto:contact@nathalierosenblum.com"
                        className="hover:text-[#936227] transition-colors"
                      >
                        contact@nathalierosenblum.com
                      </a>
                    </div>
                  </li>
                </ul>

                {/* WhatsApp Quick Action Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/97150000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#1d8a4e] hover:bg-[#187542] text-white font-serif font-semibold text-sm shadow-md transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isAr ? "محادثة فورية عبر واتساب" : "Chat on WhatsApp Directly"}</span>
                  </a>
                </div>
              </div>

              {/* Arrival & Discretion Card */}
              <div className="p-6 rounded-2xl bg-[#faf6ee]/90 border border-[#c5a059]/40 shadow-xs space-y-3 font-serif text-xs sm:text-sm text-[#443e34]">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-[#936227] font-semibold">
                  <Car className="w-4 h-4" />
                  <span>{isAr ? "مواقف السيارات والوصول" : "Parking & Private Arrival"}</span>
                </div>
                <p className="leading-relaxed">
                  {isAr
                    ? "تتوفر خدمة صف السيارات المجانية (Valet) ومواقف خاصة مظللة لضمان تجربة وصول هادئة وسلسة وبأعلى درجات الخصوصية الشخصية."
                    : "Complimentary valet parking and underground private spaces are available. The clinic features private discrete entrances ensuring complete confidentiality."}
                </p>
              </div>
            </div>

            {/* Right Column: Confidential Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#faf6ee]/95 backdrop-blur-md p-7 sm:p-9 rounded-2xl border border-[#c5a059] shadow-[0_12px_36px_rgba(150,120,70,0.12)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#936227]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#121110]">
                    {isAr ? "تم استلام رسالتك بسرية تامة" : "Message Received in Confidence"}
                  </h3>
                  <p className="font-serif text-base text-[#524c40] max-w-md mx-auto leading-relaxed">
                    {isAr
                      ? "شكراً لتواصلك مع عيادة ناتالي روزنبلوم. سنقوم بالرد عليك شخصياً وبمنتهى الخصوصية خلال أقل من 24 ساعة."
                      : "Thank you for reaching out to Nathalie Rosenblum's clinical practice. Our confidential intake team will respond personally within 24 hours."}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-sm shadow-md"
                    >
                      {isAr ? "إرسال رسالة أخرى" : "Send Another Message"}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="font-serif text-xs uppercase tracking-widest text-[#936227] font-semibold">
                      {isAr ? "نموذج التواصل السري" : "Confidential Inquiry"}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#121110] font-normal mt-1">
                      {isAr ? "أرسل استفسارك أو طلب موعد" : "Send A Confidential Message"}
                    </h2>
                    <p className="font-serif text-xs sm:text-sm text-[#665f52] mt-1">
                      {isAr
                        ? "جميع المعلومات المدخلة مشفرة وتخضع للسرية المهنية الإكلينيكية الكاملة."
                        : "All information submitted is strictly confidential and protected by clinical privacy standards."}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                          {isAr ? "الاسم الكامل" : "Full Name"} *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isAr ? "الاسم الكريم" : "Your name"}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                          {isAr ? "البريد الإلكتروني" : "Email Address"} *
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                          {isAr ? "رقم الهاتف / واتساب" : "Phone / WhatsApp"} *
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                          {isAr ? "طريقة الجلسة المفضلة" : "Preferred Format"}
                        </label>
                        <select
                          value={formData.format}
                          onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                        >
                          <option value="In-Person (Dubai Clinic)">
                            {isAr ? "حضورياً (عيادة دبي)" : "In-Person (Dubai Clinic)"}
                          </option>
                          <option value="Online Telehealth (Worldwide)">
                            {isAr ? "أونلاين عبر الإنترنت (عالمياً)" : "Online Telehealth (Worldwide)"}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                        {isAr ? "مجال الاستشارة المطلوب" : "Area of Interest"}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                      >
                        <option value="Individual Therapy">
                          {isAr ? "العلاج النفسي الفردي" : "Individual Psychotherapy"}
                        </option>
                        <option value="Couples Therapy">
                          {isAr ? "استشارات الأزواج والزواج" : "Couples & Marriage Therapy"}
                        </option>
                        <option value="Family Therapy">
                          {isAr ? "العلاج الأسري" : "Family Therapy"}
                        </option>
                        <option value="Diagnostic Assessment">
                          {isAr ? "التقييم التشخيصي النفسي" : "Diagnostic Psychological Assessment"}
                        </option>
                        <option value="General Inquiry">
                          {isAr ? "استفسار عام" : "General Inquiry"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-serif text-xs uppercase tracking-wider text-[#453f34] mb-1">
                        {isAr ? "تفاصيل الرسالة أو الاستفسار" : "Your Message or Questions"}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          isAr
                            ? "شاركنا باختصار ما تود استكشافه أو أي استفسارات بخصوص المواعيد..."
                            : "Briefly share the nature of your inquiry or preferred meeting times..."
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d9cdb8] rounded-xl focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e7cca1] via-[#d4af62] to-[#bc9242] text-[#121110] font-serif font-semibold text-base shadow-lg hover:brightness-105 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isAr ? "إرسال الاستفسار السري" : "Send Confidential Inquiry"}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Crisis Support Notice Banner */}
        <section className="relative z-10 py-8 px-4 sm:px-8 lg:px-12 bg-black/60 border-t border-[#c5a059]/25 text-center text-xs font-serif text-[#b8b0a1]">
          <div className="max-w-2xl mx-auto flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <AlertCircle className="w-4 h-4 text-[#e5be70] shrink-0" />
            <p>
              {isAr
                ? "تنويه: العيادة غير مخصصة لحالات الطوارئ النفسية الحادة الفورية. في حالات الخطر العاجل، يرجى التوجه لأقرب مستشفى أو الاتصال بخط الطوارئ الوطني 999 في دولة الإمارات."
                : "Clinical Notice: Private outpatient practice is not an emergency crisis center. For acute emergencies, please contact emergency medical services (999 in UAE) or your nearest hospital."}
            </p>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService="General Consultation"
        currentLang={currentLang}
      />
    </main>
  );
}
