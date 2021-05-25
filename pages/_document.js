import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
            data-domain="notocd.com"
            src="https://stats.notocd.com/js/index.outbound-links.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
