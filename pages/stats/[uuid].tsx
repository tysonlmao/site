import React from "react"
import Navigation from "../../components/nav"
import { useState, useEffect } from "react";
import Skeleton from "../../components/Skeleton";
import config from "../../config.json";
import NetworkLevel from "../../components/networkLevel";
import PlayerFirstLogin from "../../components/PlayerFirstLogin"
import PlayerBedwarsLevel from "../../components/PlayerBedwarsLevel"
import { useRouter } from "next/router";
import { PlayerData } from '../../components/statsInterface';
import styles from "../../styles/Stats.module.css";


export default function Stats() {
    // logic
  const [data, setData] = useState<PlayerData>();
  const [isLoading, setIsLoading] = useState(true);

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
            <Navigation/>
            <div className="page">
        <br />
          <div className="row">
            <div className="col">
        <div className={`card ${styles.statcard}`}>
          {data ? (
            <div className="row text-center justify-content-center">
                <h2>{data.player.displayname}</h2>
              <div className="col">
                <h3 className="skeleton-text">Network Level</h3>
                <NetworkLevel networkExp={data.player.networkExp} />
                <h3 className="skeleton-text">Karma</h3>
                <h4 className="skeleton-text">{data.player.karma}</h4>
                <h3 className="skeleton-text">AP</h3>
                <h4 className="skeleton-text">{data.player.achievementPoints}</h4>
                <h3 className="skeleton-text">First Login</h3>
                <PlayerFirstLogin firstLogin={data.player.firstLogin}/>
              </div>
            </div>
          ) : (
            <Skeleton/>
          )}
          </div>
            </div>
            <div className="col">
        <div className={`card ${styles.statcard}`}>
          {data ? (
            <div className="row text-center justify-content-center">
                <h2>BedWars</h2>
                <PlayerBedwarsLevel experience={data.player.stats.Bedwars.Experience}/>
              <div className="col-5">
                <h3 className="skeleton-text">Wins</h3>
                <h4 className="skeleton-text">{data.player.stats.Bedwars.wins_bedwars}</h4>
                <h3 className="skeleton-text">Finals</h3>
                <h4 className="skeleton-text">{data.player.stats.Bedwars.final_kills_bedwars}</h4>
                <h3 className="skeleton-text">Beds</h3>
                <h4 className="skeleton-text">{data.player.stats.Bedwars.beds_broken_bedwars}</h4>
                <h3 className="skeleton-text">Kills</h3>
                <h4 className="skeleton-text">{data.player.stats.Bedwars.kills_bedwars}</h4>
              </div>
              <div className="col-5">
                <h3 className="skeleton-text">WLR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Bedwars.wins_bedwars / data.player.stats.Bedwars.losses_bedwars * 100) / 100}</h4>
                <h3 className="skeleton-text">FKDR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Bedwars.final_kills_bedwars / data.player.stats.Bedwars.final_deaths_bedwars * 100) /100}</h4>
                <h3 className="skeleton-text">BBLR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Bedwars.beds_broken_bedwars / data.player.stats.Bedwars.beds_lost_bedwars * 100) / 100}</h4>
                <h3 className="skeleton-text">KDR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Bedwars.kills_bedwars / data.player.stats.Bedwars.deaths_bedwars * 100) / 100}</h4>
              </div>
            </div>
          ) : (
            <Skeleton/>
          )}
          </div>
            </div>
            <div className="col">
        <div className={`card ${styles.statcard}`}>
          {data ? (
            <div className="row text-center justify-content-center">
                <h2>Duels</h2>
              <div className="col-5">
                <h3 className="skeleton-text">Wins</h3>
                <h4 className="skeleton-text">{data.player.stats.Duels.wins}</h4>
                <h3 className="skeleton-text">Kills</h3>
                <h4 className="skeleton-text">{data.player.stats.Duels.kills}</h4>
                <h3 className="skeleton-text">BWS</h3>
                <h4 className="skeleton-text">{data.player.stats.Duels.best_overall_winstreak}</h4>
              </div>
              <div className="col-5">
                <h3 className="skeleton-text">WLR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Duels.wins / data.player.stats.Duels.losses * 100) / 100}</h4>
                <h3 className="skeleton-text">KDR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Duels.kills / data.player.stats.Duels.deaths * 100) /100}</h4>
                <h3 className="skeleton-text">CWS</h3>
                <h4 className="skeleton-text">?</h4>  {/* not sure how to implement */}
              </div>
              <h3 className="skeleton-text">Coins</h3>
              <h4 className="skeleton-text">{
              data.player.stats.Duels.coins}</h4>
            </div>
          ) : (
            <Skeleton/>
          )}
          </div>
            </div>
            <div className="col">
        <div className={`card ${styles.statcard}`}>
          {data ? (
            <div className="row text-center justify-content-center">
                <h2>SkyWars</h2>
              <div className="col-5">
                <h3 className="skeleton-text">Wins</h3>
                <h4 className="skeleton-text">{data.player.stats.SkyWars.wins}</h4>
                <h3 className="skeleton-text">Kills</h3>
                <h4 className="skeleton-text">{data.player.stats.SkyWars.kills}</h4>
                <h4 className="skeleton-text">Last</h4>
                <h3 className="skeleton-text">{data.player.stats.SkyWars.lastMode}</h3>
              </div>
              <div className="col-5">
                <h3 className="skeleton-text">WLR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Bedwars.wins_bedwars / data.player.stats.Bedwars.losses_bedwars * 100) / 100}</h4>
                <h3 className="skeleton-text">FKDR</h3>
                <h4 className="skeleton-text">{Math.round(data.player.stats.Bedwars.final_kills_bedwars / data.player.stats.Bedwars.final_deaths_bedwars * 100) /100}</h4>
                <h3 className="skeleton-text">WS</h3>
                <h4 className="skeleton-text">{data.player.stats.SkyWars.win_streak}</h4>
              </div>
              <h3 className="skeleton-text">Coins</h3>
              <h4 className="skeleton-text">{data.player.stats.SkyWars.coins}</h4>
            </div>
          ) : (
            <Skeleton/>
          )}
          </div>
            </div>
          </div>
        </div>
        </>
    )
}