export type CourseModule = {
  title: string;
  description: string;
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  courses: CourseModule[];
  credentialUrl?: string;
};

export const education: EducationItem[] = [
  {
    title: "Full Stack Developer",
    institution: "Coderhouse",
    period: "2025",
    description:
      "Carrera integral de desarrollo web de punta a punta: desde los fundamentos de HTML y CSS hasta la construcción de aplicaciones con React, Node.js y bases de datos. Cada módulo terminó con un proyecto práctico aprobado.",
    highlights: [
      "Desarrollo web con HTML, CSS, Sass y JavaScript",
      "React y programación orientada a componentes",
      "Backend con Node.js y persistencia con MongoDB",
      "Proyecto final integrador entregado y aprobado",
    ],
    courses: [
      {
        title: "Desarrollo Web",
        description:
          "HTML semántico, CSS moderno, Flexbox y Grid, preprocesador Sass, diseño responsive y publicación del primer sitio en hosting.",
      },
      {
        title: "JavaScript",
        description:
          "Sintaxis ES6+, manipulación del DOM, eventos, asincronía con promesas y async/await, consumo de APIs con Fetch y buenas prácticas de código.",
      },
      {
        title: "React",
        description:
          "Componentes, props, estado y hooks (useState, useEffect), React Router, Context, formularios controlados y armado de SPAs.",
      },
      {
        title: "Backend con Node.js y MongoDB",
        description:
          "Node.js, Express, creación de APIs REST, autenticación, persistencia con MongoDB y Mongoose, y despliegue del backend.",
      },
    ],
  },
];
