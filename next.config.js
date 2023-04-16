/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "https://next-13-app-babulakterfsd.up.railway.app/"],
  }
}

module.exports = nextConfig

