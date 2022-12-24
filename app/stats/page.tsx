import './Stats.module.css';

async function getHypixelStats() {
    // let keys = ["183ad17f-0912-4f16-9f19-7d2606ae25ae", "c90911f6-255c-43c8-91a7-2b2e1f761320"];
    let keys = ["183ad17f-0912-4f16-9f19-7d2606ae25ae"];
    const uuid = "364c34e6-7bd3-4c4a-8718-de6edca912da" // tysonlmao

    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    fetch(`https://api.hypixel.net/player?key=${randomKey}&uuid=${uuid}`)
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then(({ player }) => {
        let playerKarma = player.karma
    })
}

export default async function StatsPage() {
    return(
        <div>
            <div className="container"> 
                {/* <p>{playerKarma}</p> */}
            </div>
        </div>
    )
}