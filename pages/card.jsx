import react from 'react'
import Head from 'next/head'
import Footer from '../components/footer'

export default function Card() {
    return(
      <div className="card-body">
        <Head>
            <title>sarah is homophobic</title>
            <link href="http://fonts.cdnfonts.com/css/vcr-eas" rel="stylesheet" />
        </Head>

        <div className="w3-display-middle card-bounds">
            <div>
                <div className="pfp-block">
                    <img src="https://cdn.discordapp.com/avatars/644913030466895872/ff1dfe6b3d78297eeaa6856e4acaba70.png?size=1024" 
                    alt="picture" width="150" height="150"/>
                </div>
                <div className="info-block w3-display-topright">
                    <h2>TYSONLMAO</h2>
                    <h4>why am i here?</h4>
                </div>
                
                <p className="w3-display-bottommiddle w3-text-green">WORKING</p>
            </div>
        </div>

        <Footer/>
      </div>
    )
}
