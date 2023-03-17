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
  return (
    <>
      <Head>
        <title>tysonlmao.dev | home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-content">
        <div className={`container-fluid ${styles.home}`}>
          <h2>My Projects</h2>
          <p>my all-time projects archive</p>

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
        <div className={`container-fluid ${styles.home}`}>
          <h2>Tools</h2>
          <p>Developer toolbox</p>
          <div className={styles.spacer}></div>
          <div className="row text-center">
            <div className={`col`}>
              <HTMLLogo className={styles.logos}/>
              <p>HTML</p>
            </div>
            <div className="col">
              <PythonLogo className={styles.logos}/>
              <p className={styles.slightspacer}>Python</p>
            </div>
            <div className="col">
              <JavaScriptLogo className={styles.logos}/>
              <p className={styles.slightspacer}>JavaScript</p>
            </div>
            <div className="col">
              <TypeScriptLogo className={styles.logos}/>
              <p className={styles.slightspacer}>TypeScript</p>
            </div>
            <div className="col">
              <PHPLogo className= {styles.logos}/>
              <p className={styles.slightspacer}>PHP</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <ReactLogo className={styles.logos}/>
              <p>React</p>
            </div>
            <div className="col">
              <BootstrapLogo className={styles.logos}/>
              <p>Bootstrap</p>
            </div>
            <div className="col">
              <NodeLogo className={styles.logos}/>
              <p>Node</p>
            </div>
            <div className="col">
              <WordpressLogo className={styles.logos} />
              <p>WordPress</p>
            </div>
            <div className="col">
              <NextJSLogo className={styles.logos} />
              <p>NextJS</p>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  )
}
