import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import Nav from '../components/nav';
import ChevronDown from '../public/chevron-down.svg';
import Database from '../public/database.svg';
import React, { useState, useEffect } from 'react';
import { initFirebase } from '../config/firebase'
import Nav from "../components/nav";
import "animate.css";

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

  let inspiration = [
    "Fail fast, fail cheaply",
    "Become lazy",
    "Read the fucking manual",
    "Target the low hanging fruit"
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
      <div className="root">
        <div className={`${styles.home}`}>
          <div className={`container-fluid ${styles.banner} d-flex justify-content-between align-items-center`}>
                <div className="col">
                  <div className={`${styles.bannertext} animate__animated animate__fadeInUp`}>
                    <h2 className={`s-1`}>{random}</h2>
                  </div>
            </div>
          </div>
          <br />
          <div className="text-content">
            
          </div>
        </div>
      </div>
    </>
  )
}