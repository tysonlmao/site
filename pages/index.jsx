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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eMdMcsms68M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eMdMcsms68M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eMdMcsms68M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </main>
      <Footer/>
    </div>
    
  )
}