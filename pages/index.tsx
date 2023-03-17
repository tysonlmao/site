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

export async function getStaticProps() {
  return {
    props: { }
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
                <h4>Project placeholder</h4>
                <p>tysonlmao/placeholder</p>
                <div className={styles.projectcontent}>
                  <p>This is some placeholder text to fill the box that will have something cool here eventually</p>
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
            <h4>Languages</h4>
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
        </div>
      </div>
    </>
  )
}
