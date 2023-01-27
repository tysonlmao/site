import Head from 'next/head';
import '../styles/Home.module.css';
import Nav from '../components/nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>tysonlmao.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page-content">
        {/* nya */}
        <Nav/>
        <div className="h2-center">
          <h2>tysonlmao</h2>  
          <br />
          <h3>This site is in development. Visit <a href="https://beta.tysonlmao.dev">beta.tysonlmao.dev</a> for the preview build.</h3>
          <br />
          {/* <button className="glow-button">GitHub</button> */}
        </div>
      </div>
    </>
  )
}
