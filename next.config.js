const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  images: {
    domains: ["imgix.cosmicjs.com", "images.unsplash.com", "dl.airtable.com"],
  },
});
