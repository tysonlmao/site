import Head from 'next/head';
// import Nav from '../components/nav';
import React, { useState, useEffect } from 'react';
import Nav from "../components/nav";
import "animate.css";
import styles from "../styles/Home.module.css";
import Footer from '../components/footer';
import Compass from "../public/compass.svg";

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default function Home() {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }

  let inspiration = [
    "Fail fast, fail cheaply",
    "Become lazy",
    "Read the fucking manual",
    "Target the low hanging fruit",
    "Be part of the solution",
    "Do the simple things",
    "Start simple, get complex",
    "Don't ice an uncooked cake",
    "Less haste, more speed"
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
      <div className="root">
        <div className={`${styles.home}`}>
          <div className={`container-fluid ${styles.banner} d-flex justify-content-between align-items-center`}>
            <div className="col">
              <div className={`${styles.bannertext} animate__animated animate__fadeInUp`}>
                <h2 className={`s-1 text-center`}>{random}</h2>
              </div>
            </div>
          </div>
          <>
            {/* add a navigation here */}
            <div className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navbarcustom}`}>
          <div className="container-fluid">
            <a className={`${styles.brand} ${styles.navtext}`} href="/">tysonlmao.dev</a>
            <div>
            {/* <a href="/stats" className={`${styles.navbutton}`} type="button" aria-expanded="false">
              <span><Database className={styles.compass}/></span>
            </a> */}
            <button className={`navbar-toggler ${styles.navbutton}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span><Compass className={styles.compass}/></span>
              {/* change */}
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              </ul>
              <div className="d-flex align-items-center">
                <div className={`dropdown me-3 ${styles.buttonlink}`}>
                </div>
                <a href="/hypixel" className={`text-white text-decoration-none ${styles.navtext}`}>Stats</a>
              </div>
            </div>
          </div>
        </div>
          </>
        </div>
      </div>
    </>
  );
}
