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
    <p className="container-fluid">soon.</p>
    </>
    )
}