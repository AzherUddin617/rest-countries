/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["localhost", "flagcdn.com"],
    },
};

module.exports = nextConfig;
