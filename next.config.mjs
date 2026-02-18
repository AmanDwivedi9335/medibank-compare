/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep default route behavior on Vercel to avoid trailing-slash path mismatches.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
