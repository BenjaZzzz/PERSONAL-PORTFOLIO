"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Locale, translations } from "./i18n";

type LanguageContextType = {
  locale: Locale;
  t: typeof translations.es;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLocale = () => setLocale((prev) => prev === "es" ? "en" : "es");

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};