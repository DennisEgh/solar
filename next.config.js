/** @type{import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl ({
  experimental: {
    
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },

});

