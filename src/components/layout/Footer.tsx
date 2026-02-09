"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { navLinks } from "@/data/navigation";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <a
              href="#home"
              className="text-2xl font-bold gradient-text"
            >
              {personalInfo.name}
            </a>
            <p className="mt-3 text-[var(--text-secondary)] text-sm max-w-xs">
              {personalInfo.title}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-primary-400 transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Connect
            </h3>
            <SocialLinks links={socialLinks} size="sm" />
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              {personalInfo.email}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-primary-400 transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
