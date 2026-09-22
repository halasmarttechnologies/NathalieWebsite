"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  currentLang: Language;
  toggleLang: (lang: Language) => void;
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  toggleLang: () => {},
  isAr: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  useEffect(() => {
    // Check saved preference from localStorage
    const saved = localStorage.getItem("nathalie_lang") as Language;
    if (saved === "en" || saved === "ar") {
      setCurrentLang(saved);
    }
  }, []);

  const toggleLang = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nathalie_lang", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = currentLang;
    }
  }, [currentLang]);

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        toggleLang,
        isAr: currentLang === "ar",
      }}
    >
      <div dir={currentLang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
