import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
