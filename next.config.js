const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
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
    ];
  },
});
