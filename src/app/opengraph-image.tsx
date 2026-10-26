import { ImageResponse } from "next/og";

export const alt = "Mohamed Almadih - Senior Backend & Full-Stack Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#34d399",
            }}
          />
          <span
            style={{
              color: "#a5b4fc",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "3px",
            }}
          >
            ALMADIH.DEV
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Mohamed Almadih
          </h1>
          <p
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#818cf8",
              margin: 0,
            }}
          >
            Senior Backend & Full-Stack Engineer
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              margin: 0,
              maxWidth: "920px",
              lineHeight: 1.4,
            }}
          >
            7+ years building scalable distributed systems, high-throughput microservices, and resilient cloud architectures.
          </p>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {["Python", "Laravel", "PostgreSQL", "Docker", "AWS", "Redis", "CI/CD"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#e4e4e7",
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  fontSize: "19px",
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
