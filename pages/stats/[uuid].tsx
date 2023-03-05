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
        <div className={styles.page}>
          <h2>{data?.player.displayname}</h2>
        </div>
          <div className={`card ${styles.statcard}`}>
            {data ? (
              <div className="text-center">
                  <h2>{data.player.displayname}</h2>
                  <h3 className="skeleton-text">Network Level</h3>
                  <NetworkLevel networkExp={data.player.networkExp} />
                  <h3 className="skeleton-text">Karma</h3>
                  <h4 className="skeleton-text">{data.player.karma}</h4>
                  <h3 className="skeleton-text">AP</h3>
                  <h4 className="skeleton-text">{data.player.achievementPoints}</h4>
                  <h3 className="skeleton-text">First Login</h3>
                  <PlayerFirstLogin firstLogin={data.player.firstLogin}/>
                </div>
            ) : (
              <Skeleton/>
            )}
          </div>
        </>
    )
}