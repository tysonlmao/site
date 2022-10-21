import React from 'react'

export default function Nav(){
    return(
        <div>
            <header className="nav-header">
                <nav>
                    <div className="nav-links">
                        <button className="nav-li"><a className="nav-a" href="https://tysonlmao.dev/">Home</a></button>
                        <button className="nav-li"><a className="nav-a" href="https://github.com/tysonlmao">Projects</a></button>
                        <button className="nav-li nav-li-about"><a className="nav-a dropbtn" href="#about">About</a></button>
                    </div>
                </nav>
                {/* <a className="nav-cta" href="/contact"> */}
                <button className="nav-button"><a href="https://discord.gg/czwZFXQszb"></a>Discord</button>
            </header>
        </div>
    )
}