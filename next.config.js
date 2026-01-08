/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to allow API routes to work
  // If you need static export for production, consider using ISR or generating graph data at build time
  images: { unoptimized: true },
};

module.exports = nextConfig;
