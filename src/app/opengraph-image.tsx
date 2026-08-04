import { ImageResponse } from "next/og";

import { site } from "@/lib/data/site";

export const alt = `${site.name} — Full Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b0c12 0%, #111327 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.25), transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              {site.name}
            </span>
            <span style={{ fontSize: 30, color: "#a5b4fc", marginTop: 6 }}>
              {site.role}
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            color: "#cbd5e1",
            fontSize: 26,
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
            <span
              key={tech}
              style={{
                border: "2px solid rgba(255,255,255,0.18)",
                borderRadius: 9999,
                padding: "8px 22px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
