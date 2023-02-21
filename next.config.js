/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  redirects: [
    {
      source: "/source-path",
      destination: "/destination-path",
      statusCode: 301
    }
  ]
}

