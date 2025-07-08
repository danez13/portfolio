import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio", // <-- Important
  images: {
    unoptimized: true, // <-- Crucial for GitHub Pages
  },
};

export default nextConfig;