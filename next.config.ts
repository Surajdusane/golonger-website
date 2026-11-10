import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  poweredByHeader: false,
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
