import Head from 'next/head'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Neofetch from '../components/neofetch'

export default function Home() {
  return (
    <div className="main-body">
      <Head>
        <title>Home | tysonlmao</title>
        <meta name="description" content="joe biden" />
      </Head>

      <Nav/>
        <header className="">
        </header>
        <main className="main-body">
          {/* <h2 className="main">welcome text</h2> */}
          <Neofetch/>
        </main>
      <Footer/>
    </div>
    
  )
}