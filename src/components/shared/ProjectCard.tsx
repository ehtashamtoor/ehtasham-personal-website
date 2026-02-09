"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  if (featured) {
    return (
      <div className="glass rounded-2xl overflow-hidden group">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative aspect-video lg:aspect-auto overflow-hidden bg-surface-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-400 mb-2">
              Featured Project
            </span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="text-sm text-primary-400 font-medium mt-1">
              {project.subtitle}
            </p>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} text={tech} variant="accent" />
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Live <ExternalLink size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  GitHub <Github size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-surface-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full",
                  "bg-white/10 backdrop-blur-sm text-white hover:bg-primary-500 transition-colors",
                )}
                aria-label="View live"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full",
                  "bg-white/10 backdrop-blur-sm text-white hover:bg-primary-500 transition-colors",
                )}
                aria-label="View source"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          {project.title}
        </h3>
        <p className="text-xs text-primary-400 font-medium mt-1">
          {project.subtitle}
        </p>
        <p className="mt-3 text-sm text-[var(--text-secondary)] line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} text={tech} size="sm" variant="outline" />
          ))}
          {project.technologies.length > 4 && (
            <Badge
              text={`+${project.technologies.length - 4}`}
              size="sm"
              variant="outline"
            />
          )}
        </div>
      </div>
    </div>
  );
}
