"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { cn } from "@/lib/utils";

const categories = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
] as const;

type Category = (typeof categories)[number]["value"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const featured = projects.filter((p) => p.featured);
  const filtered =
    activeCategory === "all"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Selected Work"
          subtitle="Projects I'm proud to have built"
        />

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                activeCategory === cat.value
                  ? "text-primary-400"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]",
              )}
            >
              {cat.label}
              {activeCategory === cat.value && (
                <motion.div
                  layoutId="projectFilter"
                  className="absolute inset-0 bg-primary-500/10 rounded-lg border border-primary-500/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        {activeCategory === "all" && (
          <div className="space-y-8 mb-12">
            {featured.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
          </div>
        )}

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
