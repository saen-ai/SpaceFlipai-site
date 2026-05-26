import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#E8B931",
          fontSize: 300,
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        SF
      </div>
    ),
    { ...size }
  );
}
