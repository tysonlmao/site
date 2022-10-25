import Head from 'next/head'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className="main-body">
      <Head>
        <title>Home | tysonlmao</title>
        <meta name="description" content="joe biden" />
      </Head>

      <Nav/>
        <main className="main-body">
          {/* <h2 className="main">welcome text</h2> */}
          <center><iframe className="iframe-temp" width="560" height="315" src="https://www.youtube.com/embed/pepjd7zwbtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        </main>
    </div>
    
  )
}