import { Rocket, Target, Users } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

const stats = [
  { value: "2", label: "Productos en producción" },
  { value: "5+", label: "APIs integradas" },
  { value: "100%", label: "Proyectos propios" },
];

const pillars = [
  {
    icon: Rocket,
    title: "De idea a producción",
    text: "No me quedo en el tutorial: cada proyecto arranca con un problema real y termina publicado, con usuarios usándolo.",
  },
  {
    icon: Target,
    title: "Obsesión por el detalle",
    text: "Accesibilidad AA, SEO técnico, animaciones con propósito y performance sobre 95 en Lighthouse no son opcionales.",
  },
  {
    icon: Users,
    title: "IA como aliada",
    text: "Uso prompt engineering y agentes de IA para multiplicar mi velocidad, siempre entendiendo lo que genero.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Historia de un desarrollador que construye en serio"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Empecé con la misma pregunta que todo el mundo:{" "}
                <em className="text-foreground">
                  «¿qué hay detrás de una página web?»
                </em>{" "}
                Esa curiosidad me llevó a estudiar de forma intensiva y a
                elegir Coderhouse para estructurar el camino. Ahí no solo
                aprendí a escribir código: aprendí a{" "}
                <strong className="text-foreground">entregar proyectos</strong>.
              </p>
              <p>
                Hoy soy <strong className="text-foreground">Full Stack Developer</strong>{" "}
                con foco en el ecosistema de React, y tengo dos productos en
                producción que resuelven necesidades reales: un dashboard
                financiero con datos en vivo de Argentina y un portfolio
                profesional con SEO completo.
              </p>
              <p>
                Estoy cursando mi etapa de backend con Node.js y MongoDB para
                cerrar la brecha full stack. Mi objetivo es claro: crecer en un
                equipo donde pueda aportar desde el día uno y seguir subiendo la
                vara de calidad en cada feature.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 divide-x rounded-2xl border bg-card p-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-4 py-4 text-center">
                    <p className="font-heading text-2xl font-bold text-gradient">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-tight text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.16 + index * 0.08}>
                <div className="flex gap-4 rounded-2xl border bg-card p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-3 text-white">
                    <pillar.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.text}
                    </p>
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
