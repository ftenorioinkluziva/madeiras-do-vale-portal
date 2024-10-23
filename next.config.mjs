/** @type {import('next').NextConfig} */
//const nextConfig = {};

//export default nextConfig;

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["cdn.leonardo.ai","i.ibb.co","ibb.co"]
    },
  }

  

  export default nextConfig