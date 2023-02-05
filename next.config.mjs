/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";

const config = withContentlayer({
  experimental: {
    appDir: true,
  },

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
  async rewrites() {
    return [
      {
        source: "/js/script.outbound-links.js",
        destination: "https://plausible.io/js/script.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
});

export default config;
