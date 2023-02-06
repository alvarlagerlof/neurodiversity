"use client";

import { Inter } from "@next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import { Globals } from "react-spring";

import { ContentInset } from "./components/ContentInset";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { TopBar } from "./components/TopBar";
import "./global.css";
import { useReducedMotion } from "./useReducedMotion";

const inter = Inter({
  subsets: ["latin"],
});

export const revalidate = 120;

export default function RootLayout({ children }: React.PropsWithChildren) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#860091"></meta>

        <link rel="icon" href="/favicons/favicon.ico"></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-16x16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-192x192.png"
          sizes="192x192"
        ></link>

        <Script
          defer
          data-domain="neurodiversity.wiki"
          src="/js/script.outbound-links.js"
        ></Script>

        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </head>

      <body className="text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
        <TopBar />
        <div className="flex flex-col min-h-screen space-y-20 sm:space-y-24">
          <div className="flex-1 flex flex-col space-y-12 sm:space-y-24">
            <Navbar />

            <div className="space-y-12 w-full">
              <ContentInset size="normal">
                <div className="space-y-12">{children}</div>
              </ContentInset>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
