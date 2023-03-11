import React, { useEffect, useState } from "react";
import styles from "../styles/Stats.module.css"

const EASY_LEVELS = 4;
const EASY_LEVELS_XP = 7000;
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP;
const LEVELS_PER_PRESTIGE = 100;
const HIGHEST_PRESTIGE = 10;

function getExpForLevel(level: number) {
  if (level == 0) return 0;

  var respectedLevel = getLevelRespectingPrestige(level);
  if (respectedLevel > EASY_LEVELS) {
    return 5000;
  }

  switch (respectedLevel) {
    case 1:
      return 500;
    case 2:
      return 1000;
    case 3:
      return 2000;
    case 4:
      return 3500;
  }
  return 5000;
}

function getLevelRespectingPrestige(level: number) {
  if (level > HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE) {
    return level - HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE;
  } else {
    return level % LEVELS_PER_PRESTIGE;
  }
}

function getLevelForExp(exp: number) {
  var prestiges = Math.floor(exp / XP_PER_PRESTIGE);
  var level = prestiges * LEVELS_PER_PRESTIGE;
  var expWithoutPrestiges = exp - prestiges * XP_PER_PRESTIGE;

  for (let i = 1; i <= EASY_LEVELS; ++i) {
    var expForEasyLevel = getExpForLevel(i);
    if (expWithoutPrestiges < expForEasyLevel) {
      break;
    }
    level++;
    expWithoutPrestiges -= expForEasyLevel;
  }
  //returns players bedwars level, remove the Math.floor if you want the exact bedwars level returned
  return level + Math.floor(expWithoutPrestiges / 5000);
}

function PlayerLevel({ experience }: { experience: number}) {
  const [level, setLevel] = useState(getLevelForExp(experience));

  useEffect(() => {
    setLevel(getLevelForExp(experience));
  }, [experience]);

  // const prestigeColors = [
  //   '#AAAAAA',    // prestige 0-99
  //   '#FFFFFF',  // prestige 100-199
  //   '#FFAA00',   // prestige 200-299
  //   '#55FFFF', // prestige 300-399
  //   '#00AA00', // prestige 400-499
  //   '#00AAAA', // prestige 500-599`
  //   '#AA0000', // prestige 600-699
  //   '#FF55FF', // prestige 700-799
  // ];
  

  const levelElements = Array.from({ length: level}, (_, i) => {
    const style = i % 100 === 0 ? { color: "rgb(255, 255, 255" } : { color: "rgb("}
  })
}

export default function PlayerBedwarsLevel({ experience }: { experience: number }) {
  const level = getLevelForExp(experience);
  console.log(level)
  if (level >= 100) {
    return (
      <h3 className={`${styles.statcontainer}`} style={{color: "rgb(255, 255 , 255)"}}>[{level}✫]</h3>
      );
    }
}
