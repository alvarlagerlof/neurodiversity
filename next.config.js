const { withPlausibleProxy } = require("next-plausible");
const { withNextBanner } = require("next-banner");

module.exports = withNextBanner({
  nextBanner: {
    domain: "https://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  },
  ...withPlausibleProxy()({
    pageExtensions: ["js", "jsx", "mdx", "tsx", "ts"],
    async redirects() {
      return [
        {
          source: "/asd",
          destination: "/autism",
          permanent: false,
        },
        {
          source: "/aspergers",
          destination: "/autism",
          permanent: false,
        },
        {
          source: "/bp",
          destination: "/bipolar",
          permanent: false,
        },
        {
          source: "/mpd",
          destination: "/did",
          permanent: false,
        },
        {
          source: "/anxietydisorder",
          destination: "/anxiety",
          permanent: false,
        },
      ];
    },
  }),
});
