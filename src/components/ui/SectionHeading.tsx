import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradient?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  gradient = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          gradient ? "gradient-text" : "text-[var(--text-primary)]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
