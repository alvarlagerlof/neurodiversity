import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { ContentInset } from "./components/ContentInset";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { PrefersReducedMotion } from "./components/PrefersReducedMotion";
import { TopBar } from "./components/TopBar";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const revalidate = 120;

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    site: "@alvarlagerlof",
    creator: "@alvarlagerlof",
  },
  openGraph: {
    type: "website",
    siteName: "neurodiversity.wiki",
  },
  icons: [
    { url: "/favicons/favicon.ico" },
    { url: "/favicons/favicon-16x16.png", sizes: "16x16" },
    { url: "/favicons/favicon-32x32.png", sizes: "32x32" },
    { url: "/favicons/favicon-192x192.png", sizes: "192x192" },
  ],
  themeColor: "#860091",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
        <Script
          defer
          data-domain="neurodiversity.wiki"
          src="/js/script.outbound-links.js"
        ></Script>
        <PrefersReducedMotion />
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
