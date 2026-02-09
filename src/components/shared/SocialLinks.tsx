"use client";

import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import type { SocialLink } from "@/types";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageCircle,
};

interface SocialLinksProps {
  links: SocialLink[];
  size?: "sm" | "md";
  className?: string;
}

export function SocialLinks({ links, size = "md", className }: SocialLinksProps) {
  const iconSize = size === "sm" ? 18 : 20;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links
        .filter((link) => link.url !== "#")
        .map((link) => {
          const Icon = iconMap[link.platform];
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={cn(
                "flex items-center justify-center rounded-lg transition-all duration-200",
                "text-[var(--text-muted)] hover:text-primary-400 hover:-translate-y-0.5",
                "border border-transparent hover:border-primary-500/30 hover:bg-primary-500/5",
                size === "sm" ? "p-2" : "p-2.5"
              )}
            >
              <Icon size={iconSize} />
            </a>
          );
        })}
    </div>
  );
}
