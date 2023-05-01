import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import Nav from '../components/nav';
import ChevronDown from '../public/chevron-down.svg';
import Database from '../public/database.svg';
import React, { useState, useEffect } from 'react';
import { initFirebase } from '../config/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import Nav from "../components/nav";
import Coffee from "../components/coffee"
import "animate.css";

// junk
import PythonLogo from "../public/home/python.svg";
import TypeScriptLogo from "../public/home/typescript.svg";
import JavaScriptLogo from "../public/home/javascript.svg";
import HTMLLogo from "../public/home/html.svg";
import PHPLogo from "../public/home/php.svg";
import ReactLogo from "../public/home/react.svg";
import BootstrapLogo from "../public/home/bootstrap.svg";
import NodeLogo from "../public/home/node.svg";
import WordpressLogo from "../public/home/wordpress.svg";
import NextJSLogo from "../public/home/nextjs.svg";
import Footer from '../components/footer';

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default function Home() {
  const [show, setShow] = useState(false);
  function toggle(){
    setShow(!show);
  }

  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user)
  }

  let inspiration = [
    "Fail fast, fail cheaply",
    "Become lazy",
    "Read the fucking manual",
    "Target the low hanging fruit",
    "Be part of the solution"
  ]
  const [random, setRandom] = useState("");

  useEffect(() => {
    setRandom(inspiration[Math.floor(Math.random() * inspiration.length)]);
  }, []);

  return (
    <>
      <Head>
        <title>tysonlmao.dev | home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav/>
      <div className="page-content">
        <div className={`container-fluid ${styles.home}`}>
          <div className={`${styles.projectcontain} container-fluid ${styles.banner}`}>
              <h2 className={`${styles.bannertext} animate__bounce`}>{random}</h2>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className={`container-fluid ${styles.projectcontain}`}>
                <h4>tafe</h4>
                <a href="https://github.com/tysonlmao/tafe">
                  <p>tysonlmao/tafe</p>
                </a>
                <div className={styles.projectcontent}>
                  <p>This project is for the Certificate IV in IT (Web Development) at Holmesglen</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`container-fluid ${styles.projectcontain}`}>
                <h4>Landing page</h4>
                <a href="https://github.com/tysonlmaodev/website"><p>tysonlmaodev/website</p></a>
                <div className={styles.projectcontent}>
                  <p>This very page you are currently viewing! It is an ongoing project of mine that I hope to expand over time.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`container-fluid ${styles.projectcontain}`}>
                <h4>Stats</h4>
                <a href="https://github.com/tysonlmaodev/website"><p>tysonlmaodev/website</p></a>
                <a href="/stats">View project</a>
                <div className={styles.projectcontent}>
                  <p>A hypixel stats website, with pro functionality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  )
}

// export async function getSSP(context: any) {
//   const res = await fetch(`http://tysonlmaodev.local/wp-json/wp/v2/posts/`)
//   const data = await res.json()
//   console.log(res.status)
//   console.log(data)

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {
//       data
//     },
//   }
// }