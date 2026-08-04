import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experiencia"
          title="Experiencia demostrable, no solo años de trabajo"
          description="Sin experiencia laboral formal todavía, pero con productos reales en producción y un flujo de trabajo de un profesional. Así lo traduzco."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-brand-1/50 via-brand-2/40 to-transparent sm:left-5"
          />

          <div className="flex flex-col gap-10">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.08}>
                <div className="relative pl-12 sm:pl-16">
                  <span
                    aria-hidden
                    className="absolute top-1.5 left-4 flex size-2.5 -translate-x-1/2 items-center justify-center sm:left-5"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-1 opacity-40" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-gradient-to-br from-brand-1 to-brand-3" />
                  </span>

                  <div className="rounded-2xl border bg-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-lg font-semibold">
                          {item.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.company}
                        </p>
                      </div>
                      <Badge
                        variant={item.current ? "default" : "secondary"}
                        className="rounded-full"
                      >
                        {item.period}
                      </Badge>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2.5 text-sm leading-relaxed"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-brand-1"
                            aria-hidden
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
