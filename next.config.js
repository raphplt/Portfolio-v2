/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: "./",
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    // domains: ["localhost"],
    unoptimized: true,
  },
  basePath: "/raph-portfolio",
};


module.exports = nextConfig
