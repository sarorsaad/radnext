// Import the NextConfig type for TypeScript support. Remove if not using TypeScript
/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  // Your existing Next.js configuration options here

  // Add the i18n configuration with correct locale settings
  i18n: {
    locales: ["defaultLocale", "otherLocale"], // Specify your actual locales here, e.g., ["en", "ar"]
    defaultLocale: "defaultLocale", // Set your actual default locale, e.g., "en"
  },

  // Any additional Next.js configurations you have
};

// Now wrap the nextConfig with nextTranslate and export it
module.exports = nextTranslate(nextConfig);
