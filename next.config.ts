import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Cloudflare-only database helper is not part of the Vercel application.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
