const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
  // Using Modularized Imports
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', '@mui/lab']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.tgfu.online-library.uz',
        pathname: '/media/thumbs/*'
      },
      {
        protocol: 'https',
        hostname: 'api.tgfu.online-library.uz',
        pathname: '/media/news/*'
      },
      {
        protocol: 'https',
        hostname: 'api.tgfu.online-library.uz',
        pathname: '/media/announcements/*'
      },
    ]
  }
};

module.exports = nextConfig;
