import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  default: "bg-primary-500/10 text-primary-400 border-primary-500/20",
  accent: "bg-accent-500/10 text-accent-400 border-accent-500/20",
  outline: "bg-transparent text-[var(--text-secondary)] border-[var(--border-subtle)]",
};

export function Badge({
  text,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-mono",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variants[variant],
        className
      )}
    >
      {text}
    </span>
  );
}
