/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

nextConfig
module.exports = {
  images: {
    domains: ['assets.tysonlmao.dev'],
    unoptimized: true,
  },
}
