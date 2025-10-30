/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  eslint: {
    // Ignore ESLint errors during production builds (CI/Vercel)
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "substackcdn.com",
      },
      {
        protocol: "https",
        hostname: "substack-post-media.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "verichains.io",
        pathname: "/_next/static/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
