/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "dfajrchny/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = {
  skipTrailingSlashRedirect: true,
};
