import { ImageResponse } from "next/og";

// Required for `output: export` — generate the OG image at build time.
export const dynamic = "force-static";

export const alt = "SpaceFlip — AI Room Redesign & Interior Design App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(232,185,49,0.18), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 130,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#ffffff",
          }}
        >
          <span>Space</span>
          <span style={{ color: "#E8B931" }}>Flip</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            color: "rgba(255,255,255,0.62)",
          }}
        >
          AI Room Redesign — Snap. Transform. Love it.
        </div>
        <div
          style={{
            marginTop: 56,
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(232,185,49,0.85)",
          }}
        >
          spaceflip.co
        </div>
      </div>
    ),
    { ...size }
  );
}
