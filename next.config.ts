import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spaceai-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
