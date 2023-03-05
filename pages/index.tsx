import Head from 'next/head';
import '../styles/Home.module.css';
// import Nav from '../components/nav';
import ChevronDown from '../public/chevron-down.svg';
import Database from '../public/database.svg';
import React, { useState, useEffect } from 'react';
import { initFirebase } from '../config/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import Nav from "../components/nav";

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
        <title>tysonlmao.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-content">
        <div className="h2-center">
          <h2>tysonlmao</h2>  
          <br />
          <div className="container-fluid">
          <div className="row">
            <div className="col">
              <button className="btn glow-button"><a href="https://twitter.com/tysonlmfao" target="_blank">Twitter</a></button>
            </div>
            <div className="col">
              <button className="btn glow-button"><a href="#">Discord</a></button>
            </div>
          <div className="col">
          <button className="btn glow-button"><a href="https://github.com/tysonlmao" target="_blank">GitHub</a></button>
          </div>
          </div>
          <br className="spacer-2rem"/>
        </div>
          </div>
      </div>
    </>
  )
}
