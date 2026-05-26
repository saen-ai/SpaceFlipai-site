import type { NextConfig } from "next";

// Deployed on Vercel — full Next.js runtime with image optimization.
// Served at the root of spaceflip.co, so there is no basePath; the empty
// NEXT_PUBLIC_BASE_PATH keeps the asset-path helpers resolving to "/...".
const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
