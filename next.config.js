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
        source: "/bp",
        destination: "/bipolar",
        permanent: false,
      },
    ];
  },
});
