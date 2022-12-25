import Link from 'next/link';
import './nav.css';

export default function Nav() {
    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/stats">Hypixel</Link></li>
                        <li><Link href="/posts">Blog</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}