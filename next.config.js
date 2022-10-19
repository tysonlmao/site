/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

nextConfig
module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}
