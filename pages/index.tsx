import Head from 'next/head';
import '../styles/Home.module.css';
import Nav from '../components/nav';
import ChevronDown from '../public/chevron-down.svg';
import React, { useState, useEffect } from 'react';
import Stats from '../components/stats';

export default function Home() {
  const [show, setShow] = useState(false);
  function toggle(){
    setShow(!show);
  }
  return (
    <>
      <Head>
        <title>tysonlmao.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/83587481?s=400&u=e8c52e914792770017fc513b8b319ec73713c094"></meta>
      </Head>

      <div className="page-content">
        <Nav/>
        <div className="h2-center">
          <h2>tysonlmao</h2>  
          <br />
          <button className="glow-button"><a href="https://github.com/tysonlmao" target="_blank">GitHub</a></button>
          <button className="glow-button"><a href="https://twitter.com/tysonlmfao" target="_blank">Twitter</a></button>
          <button className="glow-button"><a href="#">Discord</a></button>
          <br className="spacer-2rem"/>
          <a onClick={toggle}><ChevronDown className="button-reset icon-svg"/></a>
        </div>

        <div className="stats" style={{display: show?"block":"none"}}>
          <Stats />
        </div>
      </div>
    </>
  )
}
