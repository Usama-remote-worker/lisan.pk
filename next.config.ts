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
  async redirects() {
    return [
      {
        source: '/blog/missed-21-may-deadline-saudi-scholarship-still-open-till-31-may',
        destination: '/blog/fully-funded-scholarship-deadlines-saudi-universities-2026',
        permanent: true,
      },
      {
        source: '/blog/saudi-scholarship-extended-date-2026-apply-before-new-deadline',
        destination: '/blog/fully-funded-scholarship-deadlines-saudi-universities-2026',
        permanent: true,
      },
      {
        source: '/blog/saudi-scholarship-2026-document-translation-may-21-deadline',
        destination: '/blog/fully-funded-scholarship-deadlines-saudi-universities-2026',
        permanent: true,
      },
      {
        source: '/blog/urgent-scholarship-document-translation-before-21-may-2026-pakistan',
        destination: '/blog/fully-funded-scholarship-deadlines-saudi-universities-2026',
        permanent: true,
      },
      {
        source: '/blog/saudia-scholarship-programs-still-open-2026',
        destination: '/blog/fully-funded-scholarship-deadlines-saudi-universities-2026',
        permanent: true,
      },
      {
        source: '/blog/saudi-scholarship-document-translation-avoid-mistakes-before-21-may',
        destination: '/blog/saudi-scholarship-document-translation',
        permanent: true,
      },
      {
        source: '/blog/transcript-translation-saudi-scholarship-urgent-certified',
        destination: '/blog/transcript-translation-for-saudi-scholarship',
        permanent: true,
      },
      {
        source: '/blog/same-day-arabic-translation-pakistan-saudi-applications',
        destination: '/blog/urgent-arabic-translation-documents-pakistan-same-day',
        permanent: true,
      },
      {
        source: '/blog/top-rated-arabic-translation-services-students-saudi-scholarships',
        destination: '/blog/best-translation-agency-in-pakistan-certified-documents',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


