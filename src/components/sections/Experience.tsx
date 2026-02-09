"use client";

import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[var(--bg-section)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Career Journey"
          subtitle="My professional experience and growth"
        />

        <div className="relative overflow-hidden">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn
                key={exp.id}
                direction="up"
                delay={i * 0.1}
              >
                <div
                  className={cn(
                    "relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8",
                    i % 2 === 0 ? "md:text-right" : ""
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary-500 bg-[var(--bg-body)] z-10 mt-2">
                    {i === 0 && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-primary-500/40" />
                    )}
                  </div>

                  {/* Content - alternating sides */}
                  <div
                    className={cn(
                      "ml-10 md:ml-0",
                      i % 2 === 0
                        ? "md:col-start-1 md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    )}
                  >
                    <div className="glass rounded-xl p-6">
                      <div className={cn("flex items-center gap-3 mb-3", i % 2 === 0 && "md:flex-row-reverse")}>
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10">
                          <Briefcase size={18} className="text-primary-400" />
                        </div>
                        <div className={cn(i % 2 === 0 && "md:text-right")}>
                          <h3 className="font-bold text-[var(--text-primary)]">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className={cn("flex items-center gap-2 mb-4 text-xs text-[var(--text-muted)] font-mono", i % 2 === 0 && "md:justify-end")}>
                        <span>{exp.period.start} — {exp.period.end}</span>
                        <Badge
                          text={exp.type}
                          size="sm"
                          variant={exp.type === "full-time" ? "accent" : "outline"}
                        />
                      </div>

                      <ul className={cn("space-y-2 mb-4", i % 2 === 0 && "md:text-right")}>
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-[var(--text-secondary)]"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className={cn("flex flex-wrap gap-1.5", i % 2 === 0 && "md:justify-end")}>
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} text={tech} size="sm" variant="outline" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty column for spacing on alternating side */}
                  {i % 2 === 0 ? (
                    <div className="hidden md:block md:col-start-2" />
                  ) : (
                    <div className="hidden md:block md:col-start-1" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
