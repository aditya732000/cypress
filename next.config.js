/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['yvdgzhvziwxybvccpuut.supabase.co'],
  },
};

module.exports = nextConfig;
