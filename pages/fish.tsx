import styles from "../styles/Fish.module.css";
import Head from "next/head";
export default function fish() {
    return (
    <>
    <Head>
        <title>fash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="funky fish" />
        <meta property="og:url" content="https://tysonlmao.dev/fish" />
        <meta property="og:image" content="https://media.tenor.com/6m3I1g_WiokAAAAM/fish-spin-sha.gif" />
      </Head>
    <div className={styles.cover}></div>
    </>
    )
}