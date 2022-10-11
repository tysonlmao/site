import React from 'react'

export default function Nav(){
    return(
        <div>
            <div className="construction">
                <h3 className="construction-content">This page is under construction!</h3>
            </div>
            <header className="nav-header">
                <nav>
                    <ul className="nav-links">
                        <li className="nav-li"><a className="nav-a" href="#">Home</a></li>
                        <li className="nav-li"><a className="nav-a" href="https://github.com/tysonlmao">Projects</a></li>
                        <li className="nav-li"><a className="nav-a" href="#">About</a></li>
                    </ul>
                </nav>
                <a className="nav-cta" href="#"><button className="nav-button">Contact</button></a>
            </header>
        </div>
    )
}