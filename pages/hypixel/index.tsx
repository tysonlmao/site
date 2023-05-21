import React from "react"
import Navigation from "../../components/nav"
import styles from "../../styles/StatsSearch.module.css"
import Link from "next/link"
import { useState } from 'react';
import { useRouter } from 'next/router';
import Nav from "../../components/nav";

function useMyRouter() {
    // const router = useRouter();
    // const { stat } = router.query;

    // return { stat }
}

useMyRouter()

export default function Stats() {
    const [playerName, setPlayerName] = useState('');
    const router = useRouter();

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Enter') {
      router.push(`/u/${playerName}`);
    }
    }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

    return(
    <>
    <Nav/>
    <div className="container-fluid">
            <input type="text" className={` ${styles.btnsearch} form-control form-control-sm`} placeholder="name" onKeyDown={handleKeyDown} onChange={handleChange} value={playerName} />
    </div>
    </>
    )
}