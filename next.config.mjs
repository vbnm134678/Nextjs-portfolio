/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/06eea82f-0a3c-4a47-b087-2eedf7c2ae0c/**",
      },
    ],
  },
};

export default nextConfig;
