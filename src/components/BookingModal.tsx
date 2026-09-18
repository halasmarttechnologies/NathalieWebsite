"use client";

import React, { useState } from "react";
import { X, CheckCircle, Calendar, Clock, User, Mail, Phone } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
  currentLang?: "en" | "ar";
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedService,
  currentLang = "en",
}: BookingModalProps) {
  const isAr = currentLang === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedService || "Individual Therapy",
    date: "",
    time: "Morning (09:00 - 12:00)",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#fbf8f2] border border-[#c5a059] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-[#2a2a2e]"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Top Accent Gold Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8f6c2c] via-[#c5a059] to-[#8f6c2c]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6c675e] hover:text-[#c5a059] p-1.5 rounded-full hover:bg-black/5 transition-colors focus:outline-none"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059]">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-3xl text-[#1e1f24]">
              {isAr ? "تم استلام طلبك بنجاح" : "Appointment Requested"}
            </h3>
            <p className="font-serif text-base text-[#5a5750] max-w-md mx-auto">
              {isAr
                ? "شكراً لتواصلك مع الدكتورة ناتالي روزنبلوم. سيتواصل معك فريقنا في دبي لتأكيد الموعد المناسب وتزويدك بكافة التفاصيل."
                : "Thank you for reaching out to Nathalie Rosenblum's clinical practice in Dubai. Our intake coordinator will contact you promptly to finalize your appointment."}
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#d9b87b] via-[#c5a059] to-[#b38a42] text-[#161618] font-serif font-semibold shadow-md hover:brightness-105 transition-all"
              >
                {isAr ? "إغلاق" : "Close"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#8e6d2f]">
                {isAr ? "احجز جلستك" : "Consultation Booking"}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1e1f24] mt-1">
                {isAr ? "حجز جلسة استشارية" : "Book A Confidential Session"}
              </h2>
              <p className="font-serif text-sm text-[#66625a] mt-1">
                {isAr
                  ? "جلسات استشارية فردية، أسرية، وللأزواج باللغتين العربية والإنجليزية."
                  : "In-person at our Dubai clinic or online worldwide via secure telehealth."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-[#55524b] mb-1">
                    {isAr ? "الاسم الكامل" : "Full Name"} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-[#8f8a7e]" />
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={isAr ? "الاسم" : "Your name"}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/90 border border-[#d9cdb8] rounded-lg focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-[#55524b] mb-1">
                    {isAr ? "البريد الإلكتروني" : "Email Address"} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-[#8f8a7e]" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/90 border border-[#d9cdb8] rounded-lg focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-[#55524b] mb-1">
                    {isAr ? "رقم الهاتف / واتساب" : "Phone / WhatsApp"} *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-[#8f8a7e]" />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+971 50 123 4567"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/90 border border-[#d9cdb8] rounded-lg focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-[#55524b] mb-1">
                    {isAr ? "نوع الخدمة" : "Therapy Service"}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-white/90 border border-[#d9cdb8] rounded-lg focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  >
                    <option value="Individual Therapy">Individual Therapy</option>
                    <option value="Couples Therapy">Couples & Marriage Therapy</option>
                    <option value="Family Therapy">Family Therapy</option>
                    <option value="Diagnostic Assessment">Diagnostic Assessment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-[#55524b] mb-1">
                    {isAr ? "التاريخ المفضل" : "Preferred Date"}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-[#8f8a7e]" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/90 border border-[#d9cdb8] rounded-lg focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-[#55524b] mb-1">
                    {isAr ? "الوقت المفضل" : "Preferred Time Slot"}
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 w-4 h-4 text-[#8f8a7e]" />
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/90 border border-[#d9cdb8] rounded-lg focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    >
                      <option>Morning (09:00 - 12:00)</option>
                      <option>Afternoon (12:00 - 16:00)</option>
                      <option>Evening (16:00 - 20:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-serif text-xs uppercase tracking-wider text-[#55524b] mb-1">
                  {isAr ? "ملاحظات إضافية (اختياري)" : "Confidential Notes (Optional)"}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder={
                    isAr
                      ? "اذكر باختصار استفسارك أو رغبتك في جلسة حضورية أو عبر الإنترنت..."
                      : "Briefly share the nature of support you are seeking or if you prefer in-person / online..."
                  }
                  className="w-full px-3 py-2 text-sm bg-white/90 border border-[#d9cdb8] rounded-lg focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d9b87b] via-[#c5a059] to-[#b38a42] text-[#161618] font-serif font-semibold text-base shadow-lg hover:brightness-105 transition-all duration-200"
                >
                  {isAr ? "تأكيد وإرسال طلب الحجز" : "Confirm Consultation Request"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
