import Image from "next/image";

import type { Project } from "@/lib/data/projects";

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border bg-card">
      <Image
        src={project.image}
        alt={`Captura de ${project.name}: ${project.tagline}`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={project.featured}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between rounded-b-lg bg-black/35 px-3 py-1.5 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-white/70" />
          <span className="size-2 rounded-full bg-white/40" />
          <span className="size-2 rounded-full bg-white/40" />
        </div>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white">
          {project.status}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}