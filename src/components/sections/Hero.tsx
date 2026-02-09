"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { personalInfo, socialLinks, heroRoles } from "@/data/portfolio";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Sparkles } from "lucide-react";

function Typewriter({ words, speed = 100, pause = 2000 }: { words: string[]; speed?: number; pause?: number }) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplay(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplay(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex <= 1) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, speed, pause]);

  return (
    <span>
      {display}
      <span className="animate-pulse text-primary-400">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-primary-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-[15%] w-48 h-48 rounded-full bg-accent-500/5 blur-3xl animate-float-delayed" />
        <div className="absolute top-[60%] left-[60%] w-32 h-32 rounded-full bg-primary-500/3 blur-2xl animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {personalInfo.availability}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            <span className="text-[var(--text-primary)]">Hi, I&apos;m </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] h-10"
          >
            <Typewriter words={heroRoles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#projects" variant="primary" size="lg">
              <Sparkles size={18} />
              View My Work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <SocialLinks links={socialLinks} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" className="text-[var(--text-muted)] hover:text-primary-400 transition-colors">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
