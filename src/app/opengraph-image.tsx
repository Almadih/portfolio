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
          backgroundColor: "#fbfbfd",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#0071e3",
            }}
          />
          <span
            style={{
              color: "#0071e3",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "3px",
            }}
          >
            ALMADIH.DEV
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "66px",
              fontWeight: 800,
              color: "#1d1d1f",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Mohamed Almadih
          </h1>
          <p
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#0071e3",
              margin: 0,
            }}
          >
            Senior Backend & Full-Stack Engineer
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#6e6e73",
              margin: 0,
              maxWidth: "960px",
              lineHeight: 1.45,
            }}
          >
            7+ years building scalable distributed systems, high-throughput microservices, and resilient cloud architectures.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["Python", "Laravel", "PostgreSQL", "Docker", "AWS", "Redis", "500GB+ Ingestion"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  color: "#1d1d1f",
                  padding: "9px 20px",
                  borderRadius: "9999px",
                  fontSize: "18px",
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
