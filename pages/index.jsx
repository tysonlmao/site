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
        <header className="">
          <div>
            <h2>Welcome to tysonlmao.dev</h2>
          </div>
        </header>
        <main className="main-body">
          {/* probably add content here */}
        </main>
      {/* <Footer/> */}
    </div>
    
  )
}