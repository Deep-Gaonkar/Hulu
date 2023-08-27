/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"]
  },
  env: {
    NEXT_API_KEY: process.env.NEXT_API_KEY,
  }
}

module.exports = nextConfig
