/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './src/components/ui/CldImageLoader.tsx',
  },
};

module.exports = nextConfig;
