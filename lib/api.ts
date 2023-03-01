const API_KEY = "<your hypixel api key>";

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

export async function getStats(id: string) {
  try {
    const res = await fetch(
      `https://api.hypixel.net/player?key=${API_KEY}&uuid=${id}`
    );
    if (!res.ok) {
      // epic error handling
      throw new Error(`Error`);
    }
    const data = await res.json();
    if (!data.success) {
      throw new Error(`API error : ${data.cause || "idk?"}`);
    }
    return data;
  } catch (error) {
    console.error(`Failed to retrieve stats for ${id}: ${error}`);
    throw error;
  }
}
