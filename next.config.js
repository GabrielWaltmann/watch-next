/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  redirects: [
    {source: "/entrar", destination: "/Entrar"},
  ]
}

