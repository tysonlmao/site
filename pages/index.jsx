import Head from 'next/head'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className="main-body">
      <Head>
        <title>Front site</title>
        <meta name="description" content="joe biden" />
      </Head>

      <Nav/>
      <main className="main-body">
        <p>hi</p>
      </main>
      <Footer/>
    </div>
    
  )
}