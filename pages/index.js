import Head from "next/head";
import Content from "../components/Content";

export default function Home() {
  const title = "What is OCD?";
  const description = "OCD is misunderstood. Find out what it is here";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title}></meta>
        <meta property="og:site_name" content="Not OCD"></meta>
        <meta property="og:description" content={description}></meta>
        <meta
          property="og:image"
          content="https://notocd.com/social.jpeg"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@alvarlagerlof"></meta>
        <meta name="twitter:creator" content="@alvarlagerlof"></meta>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#D49DFF"></meta>

        <link rel="icon" href="/favicon.ico"></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-192x192.png"
          sizes="192x192"
        ></link>

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@600&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>

        <script
          async
          defer
          data-domain="alvar.dev"
          src="https://stats.notocd.com/js/index.outbound-links.js"
        ></script>
      </Head>
      <Content />
    </div>
  );
}
