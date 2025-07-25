/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Druzza-D Cyber Registry',
    description: 'Registry/Workspaces for cybersecurity Tools',
    icon: '/img/logo.svg',
    listUrl: 'https://druzza-d.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Druzza-D/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
