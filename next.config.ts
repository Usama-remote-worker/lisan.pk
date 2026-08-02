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
  // INVARIANT: Do NOT set output: 'export' in this config.
  //
  // This project relies on Next.js server-side rewrites to map the public URL
  // patterns for two programmatic clusters to their internal dynamic route segments:
  //
  //   /translate-<source>-to-<target>  →  /translate/[source]/[target]   (168 pages)
  //   /<document>-translation-services →  /services/document/[document]   (13 pages)
  //
  // next.config.ts rewrites are a runtime feature of the Next.js Node.js server.
  // They are silently ignored when output: 'export' is set (static HTML export mode).
  // If static export is ever enabled, all 181 pages in these clusters will return
  // a 404 in production with no build-time warning.
  //
  // The project must be deployed via the Next.js runtime (e.g. Vercel Node.js preset),
  // not as a static file export.
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


