import React from "react"
import Navigation from "../../components/nav"
import { useState, useEffect } from "react";
import config from "../../config.json";
import NetworkLevel from "../../components/networkLevel";
import PlayerFirstLogin from "../../components/PlayerFirstLogin"
import PlayerBedwarsLevel from "../../components/PlayerBedwarsLevel"
import { useRouter } from "next/router";
import { PlayerData } from '../../components/statsInterface';
import styles from "../../styles/Stats.module.css";
import Footer from "../../components/footer";
import Nav from "../../components/nav";


export default function Stats() {
    // logic
  const [data, setData] = useState<PlayerData>();
  const [isLoading, setIsLoading] = useState(true);
  const [bwOpen, bwSetOpen] = useState(false);
  const toggleBW = () => bwSetOpen(!bwOpen);

  async function getStats(username: string) {
    setIsLoading(true);
    try {
      let API_KEY = config.NEXT_HYPIXEL_API_KEY || process.env.NEXT_HYPIXEL_API_KEY;
  
      // Query Mojang API for UUID based on username
      const mojangRes = await fetch(`https://api.ashcon.app/mojang/v2/user/${username}`, {
        mode: 'cors'
      });
      if (!mojangRes.ok) {
        throw new Error(`Error getting UUID from Mojang API: ${mojangRes.statusText}`);
      }
      const mojangData = await mojangRes.json();
      const uuid = mojangData.uuid;

  
      // Query Hypixel API with UUID
      const hypixelRes = await fetch(`https://api.hypixel.net/player?key=${API_KEY}&uuid=${uuid}`);
      if (!hypixelRes.ok) {
        throw new Error(`Error getting stats from Hypixel API: ${hypixelRes.statusText}`);
      }
      const hypixelData = await hypixelRes.json();
      setIsLoading(false);
      if (!hypixelData.success) {
        throw new Error(`API error : ${hypixelData.cause || "idk?"}`);
      }
      setData(hypixelData);
    } catch (error) {
      console.error(`Failed to retrieve stats for ${username}: ${error}`);
      throw error;
    }
  }

  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    if (uuid) {
      getStats(uuid as string);
    }
  }, [uuid]);

    return (
        <>
        <Nav />
        <div className="container-fluid">
        <div className={styles.title}>
          <h2 className={`${styles.title} text-center`}>{data?.player.displayname}</h2>
        </div>
          <div className={`card ${styles.statcard}`}>
            {data && (
              <div className={` text-center ${styles.stats}`}>
                  <NetworkLevel networkExp={data.player.networkExp} />
                  <h3><span className={styles.statvalue}>{data.player.karma.toLocaleString()}</span> Karma</h3>
                  <PlayerFirstLogin firstLogin={data.player.firstLogin}/>
                  <h3><span className={styles.statvalue}>{data.player.achievementPoints.toLocaleString()}</span> AP</h3>
                </div>
            )}
          </div>
        </div>
        <div className={`container-fluid ${styles.containaccord}`}>
        <div className={`${styles.accordion} accordion`} id="accordionExample">
          <div className={`${styles.accorditem} ${styles.accorditem1} accordion-item`}>
            <h2 className={`${styles.accordionhead} ${styles.accorditem1}accordion-header`} id="headingOne">
              <button className={` ${styles.accordbutton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Bedwars
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className={`container-fluid statcontainer`}>
                  {data && (
                    <>
                    {/* temporary fix */}
                    {/* <PlayerBedwarsLevel experience={data.player.stats.Bedwars.Experience} /> */}
                    <div className={styles.text}>
                      <p>Coins</p>
                      <h3>{data.player.stats.Bedwars.coins}</h3>
                    </div>
                    <div className={`row text-center ${styles.text}`}>
                      <div className="col-sm">
                        <p className={styles.stattitle}>Wins</p>
                        <h3>{data.player.stats.Bedwars.wins_bedwars}</h3>
                      </div>
                      <div className="col-sm">
                        <p className={styles.stattitle}>Final Kills</p>
                        <h3>{data.player.stats.Bedwars.final_kills_bedwars}</h3>
                      </div>
                      <div className="col-sm">
                        <p className={styles.stattitle}>Beds Broken</p>
                        <h3>{data.player.stats.Bedwars.beds_broken_bedwars}</h3>
                      </div>
                      <div className="col-sm">
                        <p className={styles.stattitle}>Kills</p>
                        <h3>{data.player.stats.Bedwars.kills_bedwars}</h3>
                      </div>
                    </div>
                    <button onClick={toggleBW}>a</button>
                    <div id="show-all">
                      <div className="row text-center">
                        <div className={`${styles.column} col`}></div>
                        <div className={`${styles.column} col`}>Finals</div>
                        <div className={`${styles.column} col`}>FKDR</div>
                        <div className={`${styles.column} col`}>Wins</div>
                        <div className={`${styles.column} col`}>WLR</div>
                      </div>
                      <div className="row text-center">
                        <div className={`${styles.column} col`}>Overall</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.final_kills_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.final_kills_bedwars / data.player.stats.Bedwars.final_deaths_bedwars * 100) /100}</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.wins_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.wins_bedwars / data.player.stats.Bedwars.losses_bedwars * 100) / 100}</div>
                      </div>
                      <div className="row text-center">
                        <div className={`${styles.column} col`}>Solo</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.eight_one_final_kills_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.eight_one_final_kills_bedwars / data.player.stats.Bedwars.eight_one_final_deaths_bedwars * 100) /100}</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.eight_one_wins_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.eight_one_wins_bedwars / data.player.stats.Bedwars.eight_one_losses_bedwars * 100) / 100}</div>
                      </div>
                      <div className="row text-center">
                      <div className={`${styles.column} col`}>Doubles</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.eight_two_final_kills_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.eight_two_final_kills_bedwars / data.player.stats.Bedwars.eight_two_final_deaths_bedwars * 100) /100}</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.eight_two_wins_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.eight_two_wins_bedwars / data.player.stats.Bedwars.eight_two_losses_bedwars * 100) / 100}</div>
                      </div>
                      <div className="row text-center">
                      <div className={`${styles.column} col`}>Threes</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.four_three_final_kills_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.four_three_final_kills_bedwars / data.player.stats.Bedwars.four_three_final_deaths_bedwars * 100) /100}</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.four_three_wins_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.four_three_wins_bedwars / data.player.stats.Bedwars.four_three_losses_bedwars * 100) / 100}</div>
                      </div>
                      <div className="row text-center">
                      <div className={`${styles.column} col`}>Fours</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.four_four_final_kills_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.four_four_final_kills_bedwars / data.player.stats.Bedwars.four_four_final_deaths_bedwars * 100) /100}</div>
                        <div className={`${styles.column} col`}>{data.player.stats.Bedwars.four_four_wins_bedwars}</div>
                        <div className={`${styles.column} col`}>{Math.round(data.player.stats.Bedwars.four_four_wins_bedwars / data.player.stats.Bedwars.four_four_losses_bedwars * 100) / 100}</div>
                      </div>
                    </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.accorditem} ${styles.accorditem2}accordion-item`}>
            <h2 className="accordion-header" id="headingTwo">
              <button className={` ${styles.accordbutton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Duels
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                
              </div>
            </div>
          </div>
          <div className={`${styles.accorditem} ${styles.accorditem3}accordion-item`}>
            <h2 className="accordion-header" id="headingThree">
              <button className={`${styles.accordbutton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Skywars
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}