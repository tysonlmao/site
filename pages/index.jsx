import Head from 'next/head'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Script from 'next/script'

export default function Home() {
  let bob = 578315;
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

          <h3>{'alert(bob)'}</h3>
        </main>
      {/* <Footer/> */}
    </div>
    
  )
} 