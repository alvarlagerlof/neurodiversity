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
          <meta name="theme-color" content="#860091"></meta>

          <link rel="apple-touch-icon" href="/favicons/favicon-180x180.png"></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicons/favicon-96x96.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicons/favicon-192x192.png"
          ></link>
          <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico"></link>

          <meta name="monetization" content="$ilp.uphold.com/yGGixMZQUePn"></meta>

          <link href="https://rsms.me/inter/inter.css" rel="stylesheet"></link>

          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="/sitemap.xml"
          />
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
