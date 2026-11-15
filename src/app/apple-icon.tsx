import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0071e3",
          color: "#ffffff",
          fontSize: "88px",
          fontWeight: 800,
          letterSpacing: "-3px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        MA
      </div>
    ),
    { ...size }
  );
}
