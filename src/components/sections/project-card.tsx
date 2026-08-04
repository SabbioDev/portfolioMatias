import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ExternalLink,
  Lightbulb,
  Puzzle,
  ShieldAlert,
} from "lucide-react";

import { GithubIcon } from "@/components/brand/social-icons";
import { Reveal } from "@/components/motion/reveal";
import { ProjectPreview } from "@/components/sections/project-preview";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data/projects";

const details = [
  {
    value: "problema",
    label: "Problema",
    icon: ShieldAlert,
    render: (project: Project) => (
      <p className="text-muted-foreground">{project.problem}</p>
    ),
  },
  {
    value: "solucion",
    label: "Solución",
    icon: Lightbulb,
    render: (project: Project) => (
      <p className="text-muted-foreground">{project.solution}</p>
    ),
  },
  {
    value: "arquitectura",
    label: "Arquitectura",
    icon: Boxes,
    render: (project: Project) => (
      <p className="text-muted-foreground">{project.architecture}</p>
    ),
  },
  {
    value: "desafios",
    label: "Desafíos",
    icon: Puzzle,
    render: (project: Project) => (
      <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-brand-1">
        {project.challenges.map((challenge) => (
          <li key={challenge}>{challenge}</li>
        ))}
      </ul>
    ),
  },
  {
    value: "lecciones",
    label: "Lecciones aprendidas",
    icon: BookOpen,
    render: (project: Project) => (
      <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-brand-1">
        {project.lessons.map((lesson) => (
          <li key={lesson}>{lesson}</li>
        ))}
      </ul>
    ),
  },
];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={0.05}>
      <article
        id={`proyecto-${project.slug}`}
        className={`grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
          isEven ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        <div>
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <ProjectPreview project={project} />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gradient-to-r from-brand-1 to-brand-3 px-2.5 py-0.5 text-xs font-semibold text-white">
              {project.name}
            </span>
            <Badge variant="secondary" className="rounded-full">
              {project.status}
            </Badge>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>

          <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            {project.tagline}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Ver deploy
                <ExternalLink aria-hidden data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4" data-icon="inline-start" />
                Repositorio
                <ArrowUpRight aria-hidden data-icon="inline-end" />
              </a>
            </Button>
          </div>

          <Accordion type="single" collapsible className="mt-6">
            {details.map((detail) => (
              <AccordionItem key={detail.value} value={detail.value}>
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <detail.icon
                      className="size-4 text-brand-1"
                      aria-hidden
                    />
                    {detail.label}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{detail.render(project)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </article>
    </Reveal>
  );
}
