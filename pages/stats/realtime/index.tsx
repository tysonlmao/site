import React from "react";
import styles from "../../../styles/Realtime.module.css";
import config from "../../../config.json";
import { PlayerData } from '../../../components/statsInterface';
import { useState, useEffect } from "react";

export default function Realtime() {
    async function getStats(username: string) {
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
          if (!hypixelData.success) {
            throw new Error(`API error : ${hypixelData.cause || "idk?"}`);
          }
          setData(hypixelData);
        } catch (error) {
          console.error(`Failed to retrieve stats for ${username}: ${error}`);
          throw error;
        }
      }

    const [data, setData] = useState<PlayerData>();
    const uuid = "364c34e6-7bd3-4c4a-8718-de6edca912da"
    useEffect(() => {
        if (uuid) {
          getStats(uuid as string);
        }
      }, [uuid]);
    return (
        <>
            <div className={`container-fluid ${styles.body}`}>
                <h1 className={`${styles.titles}`}>REALTIME ANALYTICS</h1>
                <p>where to?</p>
            </div>
        </>
    )
}