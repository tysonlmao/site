import './time.css';
import 'bootstrap/dist/css/bootstrap.css'

export default function Time() {

    let efthe16 = new Date().toLocaleString("en-US", {timeZone: "Europe/Athens", hour: '2-digit', minute: '2-digit', hour12: true});

    let tysonlmao = new Date().toLocaleString("en-US", {timeZone: "Australia/Melbourne", hour: '2-digit', minute: "2-digit", hour12: true});

    let kirbboard = new Date().toLocaleString("en-US", {timeZone: "America/New_York", hour: '2-digit', minute: "2-digit", hour12: true});

    let tatp = new Date().toLocaleString("en-US", {timeZone: "Etc/GMT+1", hour: '2-digit', minute: "2-digit", hour12: true});

    console.log(efthe16, "efthe16 locale");
    console.log(tatp, "tatp locale")
    console.log(tysonlmao, "tysonlmao locale");

    return (
        <div className="page-content">
            <div>
                <h3>locale time for tysonlmao is <span>{tysonlmao}</span></h3>
            </div>
            <div>
                <h3>locale time for efthe16 is <span>{efthe16}</span></h3>
            </div>
            <div>
                <h3>locale time for tatp is <span>{tatp}</span></h3>
            </div>
        </div>
    )
}