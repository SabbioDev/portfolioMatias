import { site } from "@/lib/data/site";

export function TechMarquee() {
  const items = [...site.technologies, ...site.technologies];

  return (
    <div className="relative mt-16 overflow-hidden border-y bg-muted/40 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-brand-1" aria-hidden />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
