"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";

export default function SettingsToggles() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();

  return (
    <div className="flex items-center gap-2">
      {/* Language toggle: KO | EN */}
      <div
        role="group"
        aria-label={t.langToggleLabel}
        className="flex items-center rounded-lg border border-[var(--color-border)] overflow-hidden text-[11px] font-medium"
      >
        <button
          onClick={() => lang !== "ko" && toggleLang()}
          className={`px-2.5 py-1 transition-colors ${
            lang === "ko"
              ? "bg-[var(--color-accent)] text-white"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          }`}
        >
          KO
        </button>
        <div className="w-px h-4 bg-[var(--color-border)]" />
        <button
          onClick={() => lang !== "en" && toggleLang()}
          className={`px-2.5 py-1 transition-colors ${
            lang === "en"
              ? "bg-[var(--color-accent)] text-white"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          }`}
        >
          EN
        </button>
      </div>

      {/* Theme toggle: sun/moon */}
      <button
        onClick={toggleTheme}
        aria-label={t.themeToggleLabel}
        className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] border border-transparent hover:border-[var(--color-border)] transition-all"
      >
        {theme === "dark" ? (
          /* Sun icon for light mode */
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          /* Moon icon for dark mode */
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
