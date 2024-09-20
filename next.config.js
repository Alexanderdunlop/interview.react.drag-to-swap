/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["videodelivery.net", "imagedelivery.net"],
  },
};

module.exports = nextConfig;
