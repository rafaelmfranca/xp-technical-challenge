/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pro.clear.com.br'],
  },
};

module.exports = nextConfig;
