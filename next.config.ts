import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com"
      }
    ],
    qualities: [75, 95] // Add quality levels used in your images
  }
};

export default nextConfig;
