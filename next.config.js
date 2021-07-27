module.exports = {
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
        source: "/mpd",
        destination: "/did",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/js/script.js",
        destination: "https://plausible.io/js/plausible.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};
