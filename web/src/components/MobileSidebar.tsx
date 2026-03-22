"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LEARNING_ORDER, UNITS, LAYER_ICONS, type UnitMeta } from "@/lib/units";
import { useLang } from "@/context/LangContext";

const ACT_COLOR: Record<string, string> = {
  prologue: "text-indigo-400/70",
  act1: "text-blue-400/70",
  act2: "text-emerald-400/70",
  act3: "text-amber-400/70",
};

export function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { t, lang } = useLang();

  useEffect(() => { setMounted(true); }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden ml-auto p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        aria-label={t.menuOpen}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Portal: render overlay + panel directly on document.body */}
      {mounted && ReactDOM.createPortal(
        <>
          {/* Overlay */}
          <div
            className={`mobile-sidebar-overlay ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <nav
            className={`mobile-sidebar-panel ${isOpen ? "open" : ""}`}
            aria-hidden={!isOpen}
          >
        <div className="flex items-center justify-between mb-6">
          <span className="font-semibold text-sm text-[var(--color-text)]">{t.sidebarTitle}</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            aria-label={t.menuClose}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {(["prologue", "act1", "act2", "act3"] as const).map((actKey) => {
          const actInfo = t.acts[actKey];
          const actUnits = LEARNING_ORDER
            .map((uid) => UNITS.find((u) => u.id === uid))
            .filter((u): u is UnitMeta => u !== undefined)
            .filter((u) => u.act === actKey);
          if (actUnits.length === 0) return null;
          return (
            <div key={actKey} className="mb-4">
              <div className="px-2 mb-1.5 flex items-center gap-2">
                <div className={`text-[10px] font-bold uppercase tracking-widest ${ACT_COLOR[actKey]}`}>
                  {actInfo.label}
                </div>
                <div className="flex-1 h-px bg-[var(--color-border-subtle)]" />
              </div>
              <div className="space-y-px">
                {actUnits.map((u) => {
                  const uIcon = LAYER_ICONS[u.layer];
                  const subtitle = lang === "en" ? (u.en?.subtitle ?? u.subtitle) : u.subtitle;
                  return (
                    <Link
                      key={u.id}
                      href={`/units/${u.id}`}
                      onClick={() => setIsOpen(false)}
                      tabIndex={isOpen ? 0 : -1}
                      className="block px-2.5 py-2 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <svg viewBox="0 0 16 16" fill={uIcon.color} className="w-3 h-3 flex-shrink-0 opacity-60">
                          <path d={uIcon.path} fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                        <span className="font-mono text-[10px] text-[var(--color-text-muted)]">{u.number}</span>
                        <span className="text-[11px] text-[var(--color-text-muted)]">{u.title}</span>
                      </div>
                      <div className="pl-3.5 text-[12px] leading-snug text-[var(--color-text-secondary)]">
                        {subtitle}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
        </>,
        document.body
      )}
    </>
  );
}
