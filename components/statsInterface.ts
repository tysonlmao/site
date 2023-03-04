export interface PlayerData {
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