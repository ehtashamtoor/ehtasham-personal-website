"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 shadow-lg shadow-primary-500/25",
  secondary:
    "border border-primary-500/50 text-primary-400 hover:bg-primary-500/10",
  ghost: "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
  outline:
    "border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-primary-500/50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer",
    "active:scale-[0.98] hover:scale-[1.02]",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
