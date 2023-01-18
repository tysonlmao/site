import '../lib/css/global.css';
import '../lib/css/front.css';
import Nav from '../components/navigation';

export const getStaticProps = async () => {
    const res = await fetch('https://api.hypixel.net/player?key=565e1845-12fb-4e18-9a8b-fda93fa3cd57&uuid=364c34e6-7bd3-4c4a-8718-de6edca912da');
    const data = await res.json();

    return {
        props: { test: data }
    }
}

export default function HomePage({ test }) {
    return(
        <div className="page-content">
            <Nav/>

            <div className="container-sm">
                <div className="nav nav-tabs">
                    <div className="nav-item" id="tysonlmao">
                        <button className="nav-link active statistic-duels">tysonlmao</button>
                    </div>
                </div>
                <div>
                    <div className="row align-items-start">
                        <div className="col">
                            Game
                        </div>
                        <div className="col">
                            Wins
                        </div>
                        <div className="col">
                            Losses
                        </div>
                        <div className="col">
                            WLR
                        </div>
                        <div className="col">
                            WS
                        </div>
                        <div className="col">
                            BWS
                        </div>
                    </div>
                    <div className="row align-items-start">
                        <div className="col">
                            SkyWars 1v1
                        </div>
                        <div className="col">
                            {test.map(test => (
                                <div key={test.player}>
                                    <a>
                                        <h3>{ test.displayname }</h3>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="col">
                            ?
                        </div>
                        <div className="col">
                            ?
                        </div>
                        <div className="col">
                            ?
                        </div>
                        <div className="col">
                            ?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}