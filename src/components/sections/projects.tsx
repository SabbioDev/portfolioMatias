import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/lib/data/projects";

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo real, en producción"
          description="No son ejercicios: son productos publicados que resuelven problemas concretos. Cada uno cuenta su historia: problema, solución, arquitectura y lecciones."
        />

        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
