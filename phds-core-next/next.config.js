// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withTM = require("next-transpile-modules")([
  // This is required always
  // "@partnerhero/phds-core/CssBaseLine",
  // If you are using the core package, make sure to include this
  "@partnerhero/phds-core",
  "@localhost/phds-core",
]);

module.exports = withTM(nextConfig);
