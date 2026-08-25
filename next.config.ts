import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: isDev ? 'http' : 'https',
        hostname: isDev ? 'tg-backend.development' : 'cms.nomi-configurator.nl',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;