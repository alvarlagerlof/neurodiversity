import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const title = "Not OCD";
  const description = "OCD is not a joke! Find out here what it actually is";

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title}></meta>
        <meta property="og:site_name" content={title}></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:image" content="/social.jpg"></meta>
        <meta property="og:url" content="https://notocd.com"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@alvarlagerlof"></meta>
        <meta name="twitter:creator" content="@alvarlagerlof"></meta>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#D49DFF"></meta>

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

        <script
          async
          defer
          data-domain="alvar.dev"
          src="https://stats.notocd.com/js/index.outbound-links.js"
        ></script>

        <script
          async
          defer
          data-domain="notocd.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to notocd.com</h1>
        <p className={styles.description}>This site is under construction</p>
      </main>
      <footer className={styles.footer}>
        <p>Made by</p>
        <a
          href="https://twitter.com/alvarlagerlof"
          target="_blank"
          rel="noopener noreferrer"
        >
          @alvarlagerlof
        </a>
      </footer>
    </div>
  );
}
