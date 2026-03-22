"use client";

import { useEffect, useState } from "react";
import { LEARNING_ORDER } from "@/lib/units";
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

export default function ProgressBar() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const sync = () => setCompleted(new Set(loadProgress()));
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const progress = (completed.size / LEARNING_ORDER.length) * 100;

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-xs text-[var(--color-text-muted)] flex-shrink-0">
        {completed.size}/{LEARNING_ORDER.length}
      </span>
    </div>
  );
}

export function CompleteButton({ unitId }: { unitId: string }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    setIsCompleted(loadProgress().includes(unitId));
  }, [unitId]);

  const toggle = () => {
    const set = loadProgress();

    let next: string[];
    if (set.includes(unitId)) {
      next = set.filter((id) => id !== unitId);
      setIsCompleted(false);
      setJustCompleted(false);
    } else {
      next = [...set, unitId];
      setIsCompleted(true);
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 500);
    }

    localStorage.setItem("harness-progress", JSON.stringify(next));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={isCompleted}
      aria-label={isCompleted ? t.uncompleteAria : t.completeAria}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        justCompleted ? "complete-pop " : ""
      }${
        isCompleted
          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20"
          : "bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      }`}
    >
      {isCompleted ? t.completedButton : t.completeButton}
    </button>
  );
}
