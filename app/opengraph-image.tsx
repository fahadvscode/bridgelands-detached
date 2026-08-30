import { ImageResponse } from "next/og";

export const alt = "Bridgelands Detached Homes — Coming Soon, Woodbridge, Vaughan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #101E31 0%, #1F3350 58%, #2A4264 100%)",
          padding: "64px",
          color: "#F9F8F6",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#C17F4A",
            marginBottom: 16,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Coming Soon · Woodbridge, Vaughan
        </div>
        <div style={{ fontSize: 52, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Bridgelands Detached
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#C17F4A",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            maxWidth: 880,
            color: "#ECE8E2",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Expected detached-home collection near Weston Road & Teston Road, by Arista Homes, Deco
          Homes, and Opus Homes.
        </div>
      </div>
    ),
    { ...size },
  );
}
