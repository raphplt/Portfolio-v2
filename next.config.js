/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: "./",
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    // domains: ["localhost"],
    unoptimized: true,
  },
  basePath: "/portfolio",
};


module.exports = nextConfig
