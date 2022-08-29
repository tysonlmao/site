import React from "react"
import Head from "next/head"


export default function Frog(){
    return(
        <div>
            <Head>
                <title>Frogged</title>
            </Head>

            <main>
                <form action="../results" method="get">
                <input type="text" id="frog" name="frog" value="dave"/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>

    )
}