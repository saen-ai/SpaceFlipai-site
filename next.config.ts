import type { NextConfig } from "next";

// Only apply the GitHub Pages subdirectory basePath in CI builds.
// Local dev/build stays at the root so the site loads at "/".
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPages ? { basePath: "/spaceai-site" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
