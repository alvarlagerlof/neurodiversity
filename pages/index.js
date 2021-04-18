import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Not OCD</title>
        <link rel="icon" href="/favicon.ico" />
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
