export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  credentialUrl?: string;
};

export const education: EducationItem[] = [
  {
    title: "Full Stack Developer",
    institution: "Coderhouse",
    period: "2025",
    description:
      "Carrera integral de desarrollo web de punta a punta: desde los fundamentos de HTML y CSS hasta la construcción de aplicaciones con React, Node.js y bases de datos.",
    highlights: [
      "Desarrollo web con HTML, CSS, Sass y JavaScript",
      "React y programación orientada a componentes",
      "Backend con Node.js y persistencia con MongoDB",
      "Proyecto final integrador entregado y aprobado",
    ],
  },
];
