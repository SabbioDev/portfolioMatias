import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
  learning?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas y accesibles con React y Next.js.",
    icon: Layout,
    skills: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    description: "Servidores, APIs REST y autenticación con Node.js y Express.",
    icon: Server,
    skills: ["Node.js", "Express", "APIs REST", "Autenticación"],
  },
  {
    title: "Base de datos",
    description: "Persistencia de datos con documentos flexibles. En camino a dominar Mongo.",
    icon: Database,
    skills: ["MongoDB", "Mongoose"],
    learning: true,
  },
  {
    title: "Herramientas",
    description: "Flujo de trabajo real: versionado, CI, deploys y medición de performance.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Hostinger", "Lighthouse"],
  },
  {
    title: "IA",
    description: "Uso activo de IA para potenciar el desarrollo.",
    icon: Sparkles,
    skills: ["Prompt Engineering", "Agentes IA", "IA Generativa"],
  },
];
