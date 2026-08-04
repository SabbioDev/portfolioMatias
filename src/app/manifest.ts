import type { MetadataRoute } from "next";

import { site } from "@/lib/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Full Stack Developer`,
    short_name: site.firstName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c12",
    theme_color: "#0b0c12",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
