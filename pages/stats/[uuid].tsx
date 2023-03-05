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
        <div className="container-fluid">
        <div className={styles.title}>
          <h2 className={`${styles.title} text-center`}>{data?.player.displayname}</h2>
        </div>
          <div className={`card ${styles.statcard}`}>
            {data && (
              <div className={` text-center ${styles.stats}`}>
                  <NetworkLevel networkExp={data.player.networkExp} />
                  <h3><span className={styles.statvalue}>{data.player.karma}</span> Karma</h3>
                  <PlayerFirstLogin firstLogin={data.player.firstLogin}/>
                  <h3><span className={styles.statvalue}>{data.player.achievementPoints}</span> AP</h3>
                </div>
            )}
          </div>
        </div>
        <div className="accordion">
          <div className="acoordion-item">
            <h2 className="accordion-header" id="bedwars">
              <button className="accordion-button" type="button"></button>
            </h2>
          </div>
        </div>
        <Footer/>
        </>
    )
}