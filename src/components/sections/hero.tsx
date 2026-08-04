import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/brand/social-icons";
import { HeroRoles } from "@/components/sections/hero-roles";
import { HeroVisual } from "@/components/sections/hero-visual";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-0 sm:pt-40">
      <div
        aria-hidden
        className="bg-grid mask-radial absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-1/25 via-brand-2/15 to-brand-3/25 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3.5 py-1.5 text-sm font-medium">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            Hola, soy <span className="text-gradient">{site.firstName}</span>.
            <br />
            <HeroRoles />
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Convierto ideas en productos web reales con{" "}
            <strong className="font-semibold text-foreground">
              React, Next.js y TypeScript
            </strong>
            . Me obsesiona el detalle: interfaces accesibles, código limpio y
            rendimiento por encima de 95 en Lighthouse.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#proyectos">
                Ver proyectos
                <ArrowUpRight aria-hidden data-icon="inline-end" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-6"
            >
              <a href="#contacto">Hablemos</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Matías Sabbionari"
              className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              <GithubIcon className="size-4.5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Matías Sabbionari"
              className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              <LinkedinIcon className="size-4.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Enviar email a Matías Sabbionari"
              className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              <Mail className="size-4.5" aria-hidden />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>

      <TechMarquee />

      <div className="mt-8 flex justify-center">
        <a
          href="#sobre-mi"
          aria-label="Ir a la sección Sobre mí"
          className="flex size-10 animate-bounce items-center justify-center rounded-full border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
