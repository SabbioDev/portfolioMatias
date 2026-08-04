import { Mail } from "lucide-react";

import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/brand/social-icons";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/lib/data/site";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Matías Sabbionari",
    href: site.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "@SabbioDev",
    href: site.github,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="¿Tenés una oportunidad? Hablemos"
          description="Estoy disponible para roles Full Stack Junior / Frontend y proyectos freelance. Respondo rápido por cualquiera de estos canales."
        />

        <Reveal>
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 text-center">
            <p className="text-base leading-relaxed text-muted-foreground">
              Elegí el canal que prefieras. Si me escribís por email,{" "}
              <strong className="text-foreground">
                contame el contexto
              </strong>{" "}
              del proyecto o la posición: respondo siempre, aunque no sea la
              búsqueda perfecta.
            </p>

            <div className="flex w-full max-w-md flex-col gap-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border bg-card p-4 text-left transition-colors hover:border-foreground/20"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-3 text-white">
                    <channel.icon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {channel.label}
                    </span>
                    <span className="block font-medium group-hover:text-foreground">
                      {channel.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
