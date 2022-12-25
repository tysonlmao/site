import './Stats.module.css';

// async function getHypixelStats() {
//     // let keys = ["183ad17f-0912-4f16-9f19-7d2606ae25ae", "c90911f6-255c-43c8-91a7-2b2e1f761320"];
//     let keys = ["183ad17f-0912-4f16-9f19-7d2606ae25ae"];
//     const uuid = "364c34e6-7bd3-4c4a-8718-de6edca912da" // tysonlmao

//     const randomKey = keys[Math.floor(Math.random() * keys.length)];

//     fetch(`https://api.hypixel.net/player?key=${randomKey}&uuid=${uuid}`)
//     .then((response) => response.json())
//     // .then((data) => console.log(data));
//     .then(({ player }) => {
//         let playerKarma = player.karma
//     })
// }

export default async function StatsPage() {
    return(
        <div>
            <div className="container bg-red-100"> 
                <h2>tysonlmao</h2>
                <h5>level 211</h5>
                <h5>karma 19m</h5>
                <h5>quests</h5>
            </div>

            <div className="container-stats-gm" id="bw">
                <h2>Bedwars</h2>
                <h5>level 424</h5>
                <div className="container-highlight">
                    <p>Iron: 1,213,453</p>
                    <p>Gold: 200,000</p>
                    <p>Emeralds: 13,000</p>
                    <p>Diamonds: 34,000</p>
                </div>

                <section>
                    <h5>Wins: 2000</h5>
                    <h5>Losses: 4000</h5>
                    <h5>WLR: 0.49WLR</h5>

                </section>
            </div>
        </div>
    )
}