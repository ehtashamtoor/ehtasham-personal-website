"use client";

import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export function TechStack() {
  return (
    <section id="techstack" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technologies I Work With"
          subtitle="My technical toolkit for building modern applications"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4 font-mono">
                {category}
              </h3>
              <StaggerContainer staggerDelay={0.05} className="space-y-2">
                {categorySkills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg glass hover:border-primary-500/30 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
