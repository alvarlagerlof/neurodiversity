const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
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
        source: "/js/script.js",
        destination: "https://plausible.io/js/plausible.outbound-links.js",
        permanent: false,
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
        permanent: false,
      },
    ];
  },
});
