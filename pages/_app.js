import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PlausibleProvider } from "../components/Plausible";

import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider>
      <Head>
        {/* Next.js complains if this isn't here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div className="flex flex-col h-screen">
        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <Navbar />

          <main className="max-w-3xl w-full space-y-12">
            <Component {...pageProps} />
            <Footer />
          </main>
        </div>
      </div>
    </PlausibleProvider>
  );
}

export default MyApp;
