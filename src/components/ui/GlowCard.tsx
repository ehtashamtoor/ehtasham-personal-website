"use client";

import { cn } from "@/lib/utils";
import { useCallback, useRef, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "glow-card glass rounded-2xl p-6 md:p-8 transition-transform duration-200 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
