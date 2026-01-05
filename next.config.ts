import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,        // Helps catch errors during development
  // swcMinify: true,              // Faster minification for production
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",  // Allows your Unsplash blog images
        port: "",                     // default
        pathname: "/**",              // all paths
      },
      {
        protocol: "https",
        hostname: "**.lottiefiles.com", // Optional: if you load Lotties via URL
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,      // Optional: smooth scroll restoration
  },
};

export default nextConfig;
