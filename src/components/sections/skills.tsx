import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionGroup, MotionItem } from "@/components/motion/motion-group";
import { SectionHeading } from "@/components/sections/section-heading";
import { skillGroups } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tecnologías que uso para construir"
          description="Agrupadas por área, tal como las aplico en proyectos reales."
        />

        <MotionGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <MotionItem key={group.title} className="h-full">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-3 text-white">
                    <group.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">
                      {group.title}
                    </h3>
                    {group.learning ? (
                      <Badge
                        variant="secondary"
                        className="mt-0.5 rounded-full text-[0.65rem]"
                      >
                        Aprendiendo
                      </Badge>
                    ) : null}
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-foreground/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionItem>
          ))}
        </MotionGroup>
      </div>
    </section>
  );
}
