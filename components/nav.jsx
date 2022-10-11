import React from 'react'

export default function Nav(){
    return(
        <header className="nav-header">
            <h2 className="nav-logo">tysonlmao.dev</h2>
            <nav className="">
                <ul className="nav-links">
                    <li className="nav-li"><a className="nav-a" href="#">Home</a></li>
                    <li className="nav-li"><a className="nav-a" href="https://github.com/tysonlmao">Projects</a></li>
                    <li className="nav-li"><a className="nav-a" href="#">About</a></li>
                </ul>
            </nav>
            <a className="nav-cta" href="#"><button className="nav-button">Contact</button></a>
        </header>
    )
}