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
    description: "Interfaces modernas, responsivas y accesibles.",
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
    ],
  },
  {
    title: "Backend",
    description: "Servidores y APIs. Estoy en camino a dominar este lado.",
    icon: Server,
    skills: ["Node.js"],
    learning: true,
  },
  {
    title: "Base de datos",
    description: "Persistencia de datos con documentos flexibles.",
    icon: Database,
    skills: ["MongoDB"],
  },
  {
    title: "Herramientas",
    description: "Flujo de trabajo real: versionado, CI y deploys.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Hostinger"],
  },
  {
    title: "IA",
    description: "Uso activo de IA para potenciar el desarrollo.",
    icon: Sparkles,
    skills: ["Prompt Engineering", "Agentes IA", "IA Generativa"],
  },
];
