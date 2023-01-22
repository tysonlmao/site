import 'bootstrap/dist/css/bootstrap.css'
import '../../lib/css/front.css';
import '../../lib/css/global.css';
import Nav from '../../components/navigation';

export default function HomePage() {
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
                        <div className="col">
                            ?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}