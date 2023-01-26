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
        <br />
        <p>page content</p>
      </div>
    </>
  )
}