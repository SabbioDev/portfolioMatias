# Portfolio — Matías Sabbionari

Portfolio profesional de **Full Stack Developer** construido con Next.js 16, TypeScript, App Router, Tailwind CSS v4, shadcn/ui, Framer Motion, React Hook Form y Zod.

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 + shadcn/ui |
| Animaciones | Framer Motion |
| Iconos | Lucide + iconos de marca propios |
| Temas | next-themes (dark / light / system) |

## Empezar

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Personalización

Toda la información editable está centralizada en `src/lib/data/`:

- `site.ts` — nombre, email, GitHub, LinkedIn, URL del sitio y tecnologías del hero.
- `projects.ts` — los 2 proyectos (descripción, problema, solución, arquitectura, desafíos, lecciones, links).
- `skills.ts` — tecnologías agrupadas por categoría.
- `experience.ts` — experiencia demostrable.
- `education.ts` — educación y certificaciones.

### Pendientes antes de publicar

1. **Repositorios**: en `projects.ts` hay URLs placeholder de GitHub (`https://github.com/SabbioDev/<proyecto>`). Reemplazalas por las reales.
2. **URL del sitio**: en `site.ts`, cambiá `url` por tu dominio real (afecta canonical, OG, sitemap y robots).
3. **Avatar y capturas**: el hero usa un avatar SVG con tus iniciales. Si querés foto real, reemplazá el contenido de `HeroVisual`. Para capturas reales de proyectos, agregalas en `public/` y usá `next/image` en `ProjectPreview`.

## Comandos

```bash
npm run dev       # desarrollo
npm run build     # build de producción
npm run start     # servidor de producción
npm run lint      # eslint
```

## Deploy

Recomendado: **Vercel**.

```bash
npm i -g vercel
vercel
```

## SEO incluido

- Metadata completa (title template, description, OG, Twitter Card, canonical).
- `robots.ts`, `sitemap.ts`, `manifest.ts`.
- `opengraph-image.tsx` generada con `next/og`.
- Favicon SVG en `app/icon.svg`.
- Datos estructurados JSON-LD (Person + WebSite).

## Accesibilidad y performance

- Skip link, focus rings, aria-labels, contraste AA, `prefers-reduced-motion`.
- Animaciones solo con `whileInView` + `MotionConfig reducedMotion="user"`.
- Fonts auto-optimizadas con `next/font`, imágenes SVG ligeras, sin dependencias pesadas.
