import 'bootstrap/dist/css/bootstrap.css'
import '../../lib/css/global.css';

export default function Time() {

    let efthe16 = new Date().toLocaleString("en-US", {timeZone: "Europe/Athens", hour: '2-digit', minute: '2-digit', hour12: true});

    let tysonlmao = new Date().toLocaleString("en-US", {timeZone: "Australia/Melbourne", hour: '2-digit', minute: "2-digit", hour12: true})

    console.log(efthe16, "efthe16 locale");
    console.log(tysonlmao, "tysonlmao locale");

    return (
        <div>
            <div>
                <h3>locale time for tysonlmao <span>{tysonlmao}</span></h3>
            </div>
            <div>
                <h3>locale time for efthe16 <span>{efthe16}</span></h3>
            </div>
        </div>
    )
}