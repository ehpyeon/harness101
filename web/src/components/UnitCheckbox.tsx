"use client";

import { useEffect, useState, useCallback } from "react";
import { useLang } from "@/context/LangContext";

function loadProgress(): string[] {
  try {
    const saved = localStorage.getItem("harness-progress");
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function UnitCheckbox({ unitId }: { unitId: string }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { t } = useLang();

  const syncState = useCallback(() => {
    setIsCompleted(loadProgress().includes(unitId));
  }, [unitId]);

  useEffect(() => {
    syncState();
    // Listen for changes from other components (CompleteButton, other tabs)
    window.addEventListener("storage", syncState);
    return () => window.removeEventListener("storage", syncState);
  }, [syncState]);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const set = loadProgress();
    const next = set.includes(unitId)
      ? set.filter((id) => id !== unitId)
      : [...set, unitId];

    localStorage.setItem("harness-progress", JSON.stringify(next));
    setIsCompleted(next.includes(unitId));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={toggle}
      aria-label={isCompleted ? t.uncompleteAria : t.completeAria}
      aria-pressed={isCompleted}
      className={`flex-shrink-0 w-5 h-5 rounded border transition-all ${
        isCompleted
          ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
          : "border-[var(--color-border)] hover:border-[var(--color-text-muted)] text-transparent hover:text-[var(--color-text-muted)]/30"
      }`}
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
