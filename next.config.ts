import type { NextConfig } from "next";

// Served at the root of the custom domain (spaceflip.co), so no basePath.
// NEXT_PUBLIC_BASE_PATH stays exposed (empty) so asset-path helpers keep
// working and we can reintroduce a prefix later without touching components.
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
