/**
 * next.config.js - PWA configuration using next-pwa.
 * Install the dependency with: npm install next-pwa
 */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  // customize caching strategies if needed
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // existing Next.js config can be merged here
  reactStrictMode: true,
  // Enable the PWA plugin
  ...withPWA,
};

module.exports = nextConfig;
