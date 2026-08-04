import { site } from "@/lib/data/site";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
    knowsAbout: site.technologies,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Coderhouse",
    },
    sameAs: [site.github, site.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} — Full Stack Developer`,
    url: site.url,
    inLanguage: "es-AR",
    description: site.description,
  };
}
