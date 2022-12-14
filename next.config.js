require('dotenv').config();
/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    PORT: process.env.PORT,
    APP_ZONE: process.env.APP_ZONE,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    minimumCacheTTL: 84600,
    domains: ['domain.com'],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
};
