/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff2|woff|eot|ttf|otf)$/,
      use: "file-loader",
    });

    return config;
  },
};
