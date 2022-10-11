import React from 'react'

export default function Nav(){
    return(
        <div>
            <header className="nav-header">
                <nav>
                    <ul className="nav-links">
                        <li className="nav-li"><a className="nav-a" href="https://tysonlmao.dev/">Home</a></li>
                        <li className="nav-li"><a className="nav-a" href="https://github.com/tysonlmao">Projects</a></li>
                        <li className="nav-li"><a className="nav-a" href="#about">About</a></li>
                    </ul>
                </nav>
                <a className="nav-cta" href="/contact"><button className="nav-button">CONTACT</button></a>
            </header>
        </div>
    )
}