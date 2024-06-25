/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["cdn-images-1.medium.com", "medium.com"],
  },
};
