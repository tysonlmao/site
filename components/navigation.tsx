import Link from 'next/link';
import './nav.css';
import '../lib/css/front.css';

export default function Nav() {

    return(
        <div>
            <header>
                <nav className="front">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}