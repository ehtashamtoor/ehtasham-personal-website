"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const sectionIds = ["home", "services", "projects", "experience", "consultancy", "contact"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const activeSection = useActiveSection(sectionIds);

  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === "down" && scrollY > 300 && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHidden && "-translate-y-full",
        mobileOpen
          ? "bg-[var(--bg-body)] shadow-lg"
          : isScrolled
            ? "glass shadow-lg"
            : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="block" aria-label="Home">
          <Image
            src="/images/logos/logo.svg"
            alt="Toor logo"
            width={80}
            height={50}
            className="h-8 md:h-10 w-auto navbar-logo"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive
                    ? "text-primary-400"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="px-4 pb-6 pt-2 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    const el = document.querySelector(link.href);
                    if (el) {
                      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    activeSection === link.href.replace("#", "")
                      ? "text-primary-400 bg-primary-500/10"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  const el = document.querySelector("#contact");
                  if (el) {
                    setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
                  }
                }}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
