import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/translate-:source([a-z0-9-]+)-to-:target([a-z0-9-]+)',
        destination: '/translate/:source/:target',
      },
      {
        source: '/:document([a-z0-9-]+)-translation-services',
        destination: '/services/document/:document',
      },
    ]
  },
};

export default nextConfig;


