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
          
        </header>
        <main className="main-body">
          {/* probably add content here */}
        </main>
      <Footer/>
    </div>
    
  )
}