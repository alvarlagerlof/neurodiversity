import { NextBannerMeta } from "next-banner";
import PlausibleProvider from "next-plausible";
import Head from "next/head";

import "../globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextBannerMeta>
      <PlausibleProvider
        domain="neurodiversity.wiki"
        customDomain="neurodiversity.wiki"
        trackOutboundLinks
      >
        <Head>
          {/* Next.js complains if this isn't here */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <Component {...pageProps} />
      </PlausibleProvider>
    </NextBannerMeta>
  );
}
