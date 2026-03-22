"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { UNITS, LEARNING_ORDER, LAYER_ICONS } from "@/lib/units";
import { useLang } from "@/context/LangContext";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { t, lang } = useLang();

  const orderedUnits = LEARNING_ORDER.map((id) => UNITS.find((u) => u.id === id)).filter((u): u is typeof UNITS[number] => u !== undefined);

  const filtered = query.trim()
    ? orderedUnits.filter((u) => {
        const q = query.toLowerCase();
        const subtitle = lang === "en" ? (u.en?.subtitle ?? u.subtitle) : u.subtitle;
        const layerLabel = lang === "en" ? (u.en?.layerLabel ?? u.layerLabel) : u.layerLabel;
        return (
          u.title.toLowerCase().includes(q) ||
          subtitle.toLowerCase().includes(q) ||
          u.motto.toLowerCase().includes(q) ||
          u.number.toLowerCase().includes(q) ||
          layerLabel.toLowerCase().includes(q)
        );
      })
    : orderedUnits;

  const navigate = useCallback((unit: typeof UNITS[0]) => {
    setIsOpen(false);
    setQuery("");
    router.push(`/units/${unit.id}`);
  }, [router]);

  // Cmd+K to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        navigate(filtered[activeIndex]);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, activeIndex, filtered, navigate]);

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          type="text"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t.searchAriaLabel}
        />
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="px-5 py-4 text-sm text-[var(--color-text-muted)] text-center">
              {t.noResults}
            </div>
          ) : (
            filtered.map((unit, idx) => {
              const subtitle = lang === "en" ? (unit.en?.subtitle ?? unit.subtitle) : unit.subtitle;
              const layerLabel = lang === "en" ? (unit.en?.layerLabel ?? unit.layerLabel) : unit.layerLabel;
              return (
                <div
                  key={unit.id}
                  className={`command-result ${idx === activeIndex ? "active" : ""}`}
                  onClick={() => navigate(unit)}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <svg viewBox="0 0 16 16" fill={LAYER_ICONS[unit.layer].color} className="w-3.5 h-3.5 flex-shrink-0">
                    <path d={LAYER_ICONS[unit.layer].path} fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                  <div className="unit-number">{unit.number}</div>
                  <div className="flex-1 min-w-0">
                    <div className="unit-title">{subtitle}</div>
                    <div className="unit-subtitle">{unit.title} &middot; {layerLabel}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="border-t border-[var(--color-border-subtle)] px-4 py-2 flex items-center justify-between text-[10px] text-[var(--color-text-muted)]">
          <span>{t.kbNavigate}</span>
          <span>{t.kbSelect}</span>
          <span>{t.kbClose}</span>
        </div>
      </div>
    </div>
  );
}
