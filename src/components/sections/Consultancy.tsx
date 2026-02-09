"use client";

import { consultancy, stats } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Lightbulb, LayoutDashboard, Layers, Rocket } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  lightbulb: Lightbulb,
  layout: LayoutDashboard,
  layers: Layers,
  rocket: Rocket,
};

const statItems = [
  { label: "Years Experience", value: stats.yearsExperience },
  { label: "Projects Delivered", value: stats.projectsDelivered },
  { label: "GitHub Repos", value: stats.githubRepos },
  { label: "Technologies", value: stats.technologiesUsed },
];

export function Consultancy() {
  return (
    <section id="consultancy" className="py-20 md:py-28 bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={consultancy.headline}
          subtitle={consultancy.subheadline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - description + stats */}
          <FadeIn direction="up">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
              {consultancy.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {statItems.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <p className="mt-1 text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right - offerings */}
          <StaggerContainer className="space-y-4">
            {consultancy.offerings.map((offering) => {
              const Icon = iconMap[offering.icon] || Lightbulb;
              return (
                <StaggerItem key={offering.title}>
                  <div className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary-500/30 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 shrink-0">
                      <Icon size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-16 text-center">
            <Button
              href={consultancy.cta.href}
              variant="primary"
              size="lg"
              className="pulse-glow"
            >
              {consultancy.cta.text}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
