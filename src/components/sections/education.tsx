import { Award, GraduationCap } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { education } from "@/lib/data/education";

export function Education() {
  const main = education[0];

  return (
    <section id="educacion" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Educación"
          title="Formación con base sólida y proyección"
          description="Estudio de forma estructurada y en paralelo construyo. Esta combinación es la que hace crecer a un developer junior."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br from-brand-1/30 to-brand-3/30 blur-2xl"
              />
              <div className="relative flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-3 text-white">
                  <GraduationCap className="size-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {main.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {main.institution} · {main.period}
                  </p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                {main.description}
              </p>
              <ul className="relative mt-4 space-y-2">
                {main.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-1"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col gap-4">
              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-dashed bg-muted/40 p-6 text-center">
                <Award
                  className="mx-auto size-10 text-brand-1"
                  aria-hidden
                />
                <h3 className="mt-3 font-heading text-base font-semibold">
                  Certificado Full Stack Developer
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Certificación de la carrera Full Stack Developer de
                  Coderhouse, que valida desarrollo frontend con React, backend
                  con Node.js y bases de datos con MongoDB.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="font-heading text-base font-semibold">
                  Formación en curso
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Profundizando en Node.js, MongoDB y arquitectura backend para
                  completar el perfil full stack, mientras sigo usando IA
                  generativa como herramienta de trabajo diaria.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Node.js", "MongoDB", "APIs REST", "IA Generativa"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
