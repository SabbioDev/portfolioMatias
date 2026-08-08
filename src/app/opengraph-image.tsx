import { ImageResponse } from "next/og";

import { site } from "@/lib/data/site";

export const alt = `${site.name} — ${site.role}`;
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
          background: "linear-gradient(135deg, #080a12 0%, #0d1024 55%, #131633 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 15%, rgba(99,102,241,0.4), transparent 55%), radial-gradient(circle at 85% 85%, rgba(34,211,238,0.28), transparent 55%), radial-gradient(circle at 80% 12%, rgba(192,132,252,0.22), transparent 45%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: 1,
            background: "rgba(255,255,255,0.05)",
            transform: "translateX(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "25%",
            width: 1,
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "75%",
            width: 1,
            background: "rgba(255,255,255,0.04)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            paddingLeft: 72,
            paddingRight: 72,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              borderRadius: 32,
              background:
                "linear-gradient(135deg, #6366f1 0%, #22d3ee 55%, #c084fc 100%)",
              boxShadow: "0 24px 64px rgba(99,102,241,0.45)",
              fontSize: 56,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            {site.initials}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 32,
            }}
          >
            <span
              style={{
                fontSize: 60,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                textAlign: "center",
              }}
            >
              {site.name}
            </span>
            <span
              style={{
                fontSize: 30,
                fontWeight: 500,
                color: "#a5b4fc",
                marginTop: 10,
                letterSpacing: "0.01em",
              }}
            >
              {site.role}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 18,
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.06)",
              padding: "8px 18px",
              color: "#e2e8f0",
              fontSize: 24,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: "#34d399",
              }}
            />
            Disponible para nuevas oportunidades
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 32,
            }}
          >
            {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
              <span
                key={tech}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderRadius: 9999,
                  padding: "10px 26px",
                  color: "#e2e8f0",
                  fontSize: 24,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
              color: "#94a3b8",
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            sabbio.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}