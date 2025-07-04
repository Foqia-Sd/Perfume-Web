import type { NextConfig } from "next";

// Ensure ESLint does not block production builds on Vercel
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  }
  /* config options here */
};

export default nextConfig;
