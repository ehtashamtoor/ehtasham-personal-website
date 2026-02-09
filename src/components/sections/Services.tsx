"use client";

import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Code, Brain, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  brain: Brain,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What I Do"
          subtitle="Solutions tailored to your needs"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <StaggerItem key={service.id}>
                <GlowCard className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                      <Icon size={24} className="text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                      >
                        <CheckCircle
                          size={16}
                          className="text-accent-400 mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
