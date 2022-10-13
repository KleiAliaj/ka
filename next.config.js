const prod = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: prod ? false : true,
});

module.exports = withPWA({
  images: {
    domains: [
      "imgix.cosmicjs.com",
      "images.unsplash.com",
      "dl.airtable.com",
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
      "external-content.duckduckgo.com",
    ],
  },
});
