import '../styles/Navigation.module.css';
import Compass from 'components/svgs/compass.svg';

export default function Navigation() {
    return(
        <div className="nav-root">
            <div className="left-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">tysonlmao.dev</a>
                    </li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="navbar-nav">
                    <li>
                        <a href="#idklmao"><Compass className="compass"/></a>
                    </li>
                </div>
            </div>
        </div>
    )

}