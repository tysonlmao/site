import '../lib/css/front.css';
import Link from 'next/link';

export default function HomePage() {
    return(
        <div className="front-container">
            <header>
            <nav className="nav-container">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/stats">Hypixel</Link></li>
                        <li><Link href="/posts">Blog</Link></li>
                    </ul>
                </nav>
            <div className="featured">
                <div className="featured-content">verified computer abuser</div>
            </div>
            </header>
            
        </div>
    );
}