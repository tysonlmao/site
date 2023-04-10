import React from "react";
import styles from "../../../styles/Realtime.module.css";
import config from "../../../config.json";
import { PlayerData } from '../../../components/statsInterface';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRef } from 'react';
import Countup from "../../../components/Countup";
import Nav from "../../../components/nav";
import html2canvas from 'html2canvas'; // Import the library
const sessionStartTime = new Date()

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
  const [originalData, setOriginalData] = useState<PlayerData>();
  const router = useRouter();
  const { uuid } = router.query;

  console.log(data)

  useEffect(() => {
    if (uuid) {
      getStats(uuid as string);
      const intervalId = setInterval(() => {
        getStats(uuid as string);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [uuid]);

  useEffect(() => {
    if (data && !originalData) {
      setOriginalData(data);
    }
  }, [data, originalData]);

  useEffect(() => {
    if (data && originalData) {
      if (JSON.stringify(data.player.stats) !== JSON.stringify(originalData.player.stats)) {
        console.log('Stats have changed!');
      }
    }
  }, [data, originalData]);
  

    const saveSession = async () => {
      const statContainer = document.querySelector(`.${styles.statcontainer}`);
      if (statContainer) {
          const canvas = await html2canvas(statContainer);
          const imgData = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imgData;
          link.download = `${data?.player.displayname}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
  };
    return (
        <>
          <Nav/>
          <div className={`container-fluid ${styles.body}`}>
                <h1 className={`${styles.titles}`}>REALTIME ANALYTICS</h1>
                <p>supercharge your hypixel experience</p>
                {/* Add the Save Session button */}
                <div className={`container-fluid ${styles.statcontainer}`}>
                <h2 className={`text-center mt-1 ${styles.stattitle}`}>{data?.player.displayname}</h2>
                <div className={`text-center ${styles.stattitle} text-white`}>
                  <Countup startTime={sessionStartTime}/>
                </div>
                    <h2 className={styles.sessiontitle}>LIVE SESSION</h2>
                    {originalData && (
                      <>
                    <div className={`row text-center ${styles.text}`}>
                        <h3 className={styles.sessiontitle}>BEDWARS</h3>
                        {data && (
                          <>
                            <div className="col-sm">
                            <p className={styles.stattitle}>Wins</p>
                            <h3 className={styles.stat}>+{data.player.stats.Bedwars.wins_bedwars - originalData.player.stats.Bedwars.wins_bedwars}</h3>
                            </div>
                            <div className="col-sm">
                            <p className={styles.stattitle}>Finals</p>
                            <h3 className={styles.stat}>+{data.player.stats.Bedwars.final_kills_bedwars - originalData.player.stats.Bedwars.final_kills_bedwars}</h3>
                            </div>
                            <div className="col-sm">
                            <p className={styles.stattitle}>Beds</p>
                            <h3 className={styles.stat}>+{data.player.stats.Bedwars.beds_broken_bedwars - originalData.player.stats.Bedwars.beds_broken_bedwars}</h3>
                            </div>
                        </>
                        )}
                    </div>
                    {data && (
                      <>
                    <div className={`row text-center  ${styles.text}`}>
                      <div className="col-sm">
                        <p className={styles.stattitle}>Games <br /> lost</p>
                        <h3 className={styles.statdanger}>+{data.player.stats.Bedwars.losses_bedwars - originalData.player.stats.Bedwars.losses_bedwars}</h3>
                      </div>
                      <div className="col-sm">
                        <p className={styles.stattitle}>Final <br />deaths</p>
                        <h3 className={styles.statdanger}>+{data.player.stats.Bedwars.final_deaths_bedwars - originalData.player.stats.Bedwars.final_deaths_bedwars}</h3>
                      </div>
                      <div className="col-sm">
                        <p className={styles.stattitle}>Beds <br /> lost</p>
                        <h3 className={styles.statdanger}>+{data.player.stats.Bedwars.beds_lost_bedwars - originalData.player.stats.Bedwars.beds_lost_bedwars}</h3>
                      </div>
                    </div>
                    <div className={`row text-center ${styles.text}`}>
                      <div className="col-sm">
                        <p className={styles.stattitle}>
                          WLR
                        </p>
                        <h3 className={styles.stat}>TBA</h3>
                      </div>
                      <div className="col-sm">
                        <p className={styles.stattitle}>FKDR</p>
                        <h3 className={styles.stat}>TBA</h3>
                      </div>
                      <div className="col-sm">
                        <p className={styles.stattitle}>BBLR</p>
                        <h3 className={styles.stat}>TBA</h3>
                      </div>
                    </div>
                    </>
                    )}
                      </>
                    )}
                    {originalData && (
                      <div className={`row text-center ${styles.text}`}>
                        {/* <h3 className={styles.sessiontitle}>DUELS</h3> */}
                        {data && (
                          <>
                            {/* <div className="col-sm">
                            <p className={styles.stattitle}>Wins</p>
                            <h3 className={styles.stat}>{data.player.stats.Duels.wins - originalData.player.stats.Duels.wins}</h3>
                            </div>
                            <div className="col-sm">
                            <p className={styles.stattitle}>WLR</p>
                            <h3 className={styles.stat}>{Math.round(data.player.stats.Duels.wins / data.player.stats.Duels.losses * 100) /100}</h3>
                            </div>
                            <div className="col-sm">
                            <p className={styles.stattitle}>Kills</p>
                            <h3 className={styles.stat}>{data.player.stats.Duels.kills - originalData.player.stats.Duels.kills}</h3>
                            </div>
                            <div className="col-sm">
                            <p className={styles.stattitle}>KDR</p>
                            <h3 className={styles.stat}>{Math.round(data.player.stats.Duels.kills / data.player.stats.Duels.deaths * 100) /100}</h3>
                          </div> */}
                        </>
                        )}
                    </div>
                    )}


                </div>
                    <button className={`btn btn-primary ${styles.saveButton} d-flex justify-content-center`} onClick={saveSession}>Save Session</button>
            </div>
        </>
    )
}