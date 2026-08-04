import { ArrowUp, Mail } from "lucide-react";

import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/brand/social-icons";
import { site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Enviar email"
            className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <Mail className="size-4.5" aria-hidden />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <GithubIcon className="size-4.5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <LinkedinIcon className="size-4.5" />
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name} · Full Stack Developer.
          Construido con Next.js, TypeScript y mucho café.
        </p>

        <a
          href="#inicio"
          className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Volver arriba
          <ArrowUp className="size-4" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
