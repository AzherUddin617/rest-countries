/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["localhost", "flagcdn.com", "upload.wikimedia.org"],
    },
};

module.exports = nextConfig;
