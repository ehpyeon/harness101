"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang, type Translations } from "@/lib/i18n";

interface LangCtx {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangCtx>({
  lang: "ko",
  t: translations.ko,
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ko" || saved === "en") {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      localStorage.setItem("lang", next);
      document.documentElement.lang = next;
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as Translations, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
