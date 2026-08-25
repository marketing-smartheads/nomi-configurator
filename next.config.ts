import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Altijd unoptimized in development om private IP / SSRF errors met lokaal WordPress te voorkomen
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'tg-backend.development',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'tg-backend.development',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;