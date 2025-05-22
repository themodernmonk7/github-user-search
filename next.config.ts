import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "avatars3.githubusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars3.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
