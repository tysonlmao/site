import "./Stats.module.css";
import Nav from "../../components/nav";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth";
import Skeleton from "../../components/Skeleton";
import config from "../../config.json";
import NetworkLevel from "../../components/networkLevel";
import PlayerFirstLogin from "../../components/PlayerFirstLogin"
import PlayerBedwarsLevel from "../../components/PlayerBedwarsLevel"
import { useRouter } from "next/router";
const API_KEY = config.API_KEY;

interface PlayerData {
  player: {
    displayname: string;
    karma: number;
    networkExp: number;
    achievementPoints: number;
    firstLogin: number;
    stats: {
      Bedwars: {
        wins_bedwars: number;
        final_kills_bedwars: number;
        final_deaths_bedwars: number;
        beds_broken_bedwars: number;
        beds_lost_bedwars: number;
        kills_bedwars: number;
        deaths_bedwars: number;
        losses_bedwars: number;
        Experience: number;
      },
      Duels: {
        wins: number;
        losses: number;
        kills: number;
        deaths: number;
        best_overall_winstreak: number;
        current_overall_winstreak: number;
        coins: number;
      },
      SkyWars: {
        wins: number;
        losses: number;
        kills: number;
        lastMode: string;
        win_streak: number;
        coins: number;
      };
    };
  };
}


export default function Stats() {
  const [data, setData] = useState<PlayerData>();
  const [isLoading, setIsLoading] = useState(true);

  async function getStats(id: string) {
    setIsLoading(true);
    try {
      let uuid = id;

      const res = await fetch(
        `https://api.hypixel.net/player?key=${API_KEY}&uuid=${uuid}`
      );
      if (!res.ok) {
        // epic error handling
        throw new Error(`Error`);
      }
      const data = await res.json();
      setIsLoading
      if (!data.success) {
        throw new Error(`API error : ${data.cause || "idk?"}`);
      }
      setData(data);
    } catch (error) {
      console.error(`Failed to retrieve stats for ${id}: ${error}`);
      throw error;
    }
    // insert your hypixel api key inside the quotation marks
    // let apiKey = "601d75a0-84c0-40ad-b2d7-6b598e0d48a2";
  }

  useEffect(() => {
  }, []);

  const router = useRouter()
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    getStats("f138952a-3492-4573-80db-d928fd3cde33")
    return <div>Loading</div>
  }
  if (!user) {
    router.push("/");
  }

  const callApi = async () => {
  }

  return (
    <>
      <Nav />
      <div>
        <button onClick={() =>  auth.signOut()} className="btn btn-primary">Sign out</button>
        <button onClick={callApi}>fetch</button>
      </div>
      <div className="page">
        <br />
          <div className="row">
            <div className="col">
        <div className="card stat-card">
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
        <div className="card stat-card">
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
        <div className="card stat-card">
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
        <div className="card stat-card">
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
  );
}