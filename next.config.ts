import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xbtdpjgchvegpfyrtbjx.supabase.co",
      },
    ],
  },
};

export default nextConfig;