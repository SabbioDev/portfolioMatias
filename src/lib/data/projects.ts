export type ProjectDetail = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  lessons: string[];
  technologies: string[];
  repository: string;
  demo: string;
  year: string;
  featured: boolean;
  status: string;
  accent: "blue" | "violet" | "emerald" | "amber" | "rose" | "cyan";
};

export const projects: Project[] = [
  {
    slug: "finanzas-argentinas",
    name: "Finanzas Argentinas",
    tagline: "Dashboard de datos financieros en tiempo real",
    description:
      "Dashboard web que centraliza cotizaciones del dólar, euro, plazos fijos, bonos e indicadores económicos de Argentina, con actualización automática y una calculadora ARS → USD.",
    problem:
      "La información financiera en Argentina está dispersa en decenas de sitios, con formatos distintos, tiempos de actualización inconsistentes y mucha publicidad. Consultar una cotización requería abrir varias pestañas y comparar a mano.",
    solution:
      "Construí un dashboard único que consume múltiples fuentes públicas (DolarAPI, Bluelytics, ArgentinaDatos, data912 y Yahoo Finance) y las unifica en una interfaz limpia con estados de carga skeleton, actualización automática, calculadora de conversión y soporte de modo oscuro.",
    architecture:
      "Aplicación Next.js con App Router sobre una capa de datos desacoplada que normaliza las respuestas heterogéneas de cada API a un esquema común. Componentes reutilizables (tarjetas de cotización, tabla de plazos fijos, calculadora) con estados de carga, error y vacío. Despliegue continuo en Vercel.",
    challenges: [
      "Integrar 5 APIs con esquemas de datos completamente distintos y documentación parcial.",
      "Manejar fallos intermitentes de las fuentes sin romper la experiencia del usuario.",
      "Actualizar los datos en vivo manteniendo una interfaz fluida y sin re-renders innecesarios.",
      "Diseñar una experiencia responsive que funcione igual de bien en móvil que en escritorio.",
    ],
    lessons: [
      "Normalizar datos heterogéneos en la frontera de entrada evita que la complejidad se filtre al resto de la app.",
      "Los estados de carga y error son tan importantes como el dato final: mejoran la confianza del usuario.",
      "Separar la lógica de datos de los componentes de presentación hace el código más testable y mantenible.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "APIs REST",
      "Vercel",
      "Git",
    ],
    repository: "https://github.com/SabbioDev/finanzas-argentinas",
    demo: "https://web-finanzas-sigma.vercel.app/",
    year: "2025",
    featured: true,
    status: "En producción",
    accent: "blue",
  },
  {
    slug: "portfolio-milagros-ayul",
    name: "Portfolio Milagros Ayul",
    tagline: "Identidad digital para una profesional audiovisual",
    description:
      "Portfolio profesional one-page para una Lic. en Comunicación Audiovisual (fotografía, filmmaking y community management), con SEO técnico completo, modo oscuro y una identidad visual cuidada.",
    problem:
      "Una profesional creativa necesitaba presencia digital para conseguir clientes: su trabajo vivía en redes sociales con alcance limitado, sin un espacio propio que transmitiera su marca y posicionara en buscadores.",
    solution:
      "Diseñé y desarrollé un portfolio one-page con identidad visual propia (tipografías Sora + Inter, paleta y jerarquías definidas), SEO completo (meta tags, Open Graph, canonical, robots, sitemap), modo oscuro y carga optimizada de assets visuales.",
    architecture:
      "SPA construida con React y Vite, organizada en componentes modulares y reutilizables. Los metadatos de SEO se servían desde el documento raíz para garantizar indexabilidad, y el sitio se desplegó en Hostinger con assets optimizados para una carga inicial rápida.",
    challenges: [
      "Garantizar SEO correcto en una SPA, donde la indexación suele ser un punto débil.",
      "Traducir la identidad de una marca personal a un sistema visual coherente y memorable.",
      "Optimizar imágenes y assets audiovisuales para mantener un buen rendimiento sin sacrificar calidad.",
    ],
    lessons: [
      "El SEO técnico (Open Graph, canonical, meta descriptivas) es lo que convierte un sitio bonito en una herramienta que atrae clientes.",
      "Una identidad visual clara comunica profesionalismo antes de leer una sola palabra.",
      "El diseño debe resolverse primero en papel: la maquetación ordenada acelera todo el desarrollo.",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "HTML",
      "CSS",
      "Hostinger",
      "SEO",
      "Git",
    ],
    repository: "https://github.com/SabbioDev/portfolio-milagros-ayul",
    demo: "https://milagrosayulph.com/",
    year: "2025",
    featured: false,
    status: "En producción",
    accent: "violet",
  },
];
