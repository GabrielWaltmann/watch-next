/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  rewrites: [
    {source: "/Entrar", destination: "/entrar"},
  ]
}

