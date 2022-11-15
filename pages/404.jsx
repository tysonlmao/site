import Head from 'next/head'
import Image from 'next/image'

export default function pagenotfound() {
    return (
        <div>
            <Head>
                <title>404 :c</title>
            </Head>
            <div className="main-404">
                <div className="error-icon-404">
                    <Image src="https://assets.tysonlmao.dev/assets/mac_death.png" width="50"  height="50" alt="mac_death"/>
                </div>
                <div className="error-message">
                    <h2>404</h2>
                    <h3>Keep trying</h3>
                </div>
            </div>
        </div>
    )
}