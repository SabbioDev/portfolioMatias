export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
  tags: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Proyectos autónomos",
    period: "2025 — Presente",
    summary:
      "Convierto ideas en productos web reales, de punta a punta: investigación del problema, diseño de la solución, desarrollo frontend, integración con APIs, despliegue y mantenimiento.",
    achievements: [
      "Desarrollé y publiqué 2 productos en producción (dashboard financiero en Vercel y portfolio en Hostinger), con usuarios reales.",
      "Integré 5 APIs públicas con esquemas distintos y las unifiqué en una sola capa de datos normalizada.",
      "Apliqué buenas prácticas de SEO técnico, accesibilidad (WCAG AA) y performance en cada proyecto.",
      "Diseñé sistemas de componentes reutilizables con TypeScript y React para mantener el código limpio y escalable.",
    ],
    tags: ["Next.js", "React", "TypeScript", "APIs", "Deploys", "SEO"],
    current: true,
  },
  {
    role: "Autodidacta en constante aprendizaje",
    company: "Formación continua",
    period: "2023 — Presente",
    summary:
      "Aprendo construyendo: cada proyecto nuevo empieza con una pregunta real y termina en producción, no en un tutorial.",
    achievements: [
      "Profundizo en Node.js, MongoDB y arquitectura backend para cerrar la brecha full stack.",
      "Uso IA generativa (prompt engineering y agentes) como multiplicador de productividad en el flujo de desarrollo.",
      "Mantengo el hábito de versionar todo con Git y publicar el avance en GitHub.",
    ],
    tags: ["Node.js", "MongoDB", "IA", "Git"],
  },
];
