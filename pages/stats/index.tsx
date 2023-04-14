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
      router.push(`/stats/${playerName}`);
    }
    }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

    return(
    <>
    <Nav/>
    <div className={styles.container}>
        <div className="row align-items-center justify-content-center">
        <div className="col-md-3">
            <p className={styles.text}>search for a players stats...</p>
            <input type="text" className={` ${styles.btnsearch} form-control form-control-sm`} placeholder="name" onKeyDown={handleKeyDown} onChange={handleChange} value={playerName} />
        </div>
        </div>
    </div>
    <div className={styles.container2}></div>

    </>
    )
}