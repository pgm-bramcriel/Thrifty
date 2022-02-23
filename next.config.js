/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['storage.googleapis.com', 'cdn.weatherapi.com'],
  },
}

module.exports = nextConfig