"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface KeyboardNavProps {
  prevId?: string;
  nextId?: string;
}

export default function KeyboardNav({ prevId, nextId }: KeyboardNavProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate when focused on input elements
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      // Don't interfere with Cmd/Ctrl shortcuts
      if (e.metaKey || e.ctrlKey) return;

      if (e.key === "ArrowLeft" && prevId) {
        router.push(`/units/${prevId}`);
      } else if (e.key === "ArrowRight" && nextId) {
        router.push(`/units/${nextId}`);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [prevId, nextId, router]);

  return null;
}
