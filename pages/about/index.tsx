import React from "react"
import styles from "../../styles/About.module.css";
import { useState, useEffect } from "react";
import Countdown from "../../components/Countdown";
import Countup from "../../components/Countup"
import Nav from "../../components/nav";

export default function about() {
    const startTimeID = new Date("2022-06-01");
    return (

        <>
        <Nav/>
        <div className={`container-fluid ${styles.page}`}>
            <h1 className={styles.heading}>About me</h1>
            <div className="row">   
            <div className={`col-md ${styles.section} col-sm-12`}>
                <h2 className={styles.subheading}>Birthday In</h2>
                <div className="countdown">
                    <Countdown date={new Date("2024-3-27")}/>
                </div>
            </div>
            <div className={`col-md ${styles.section} col-sm-12`}>
                <h2 className={styles.subheading}>Job position</h2>
                <div className={styles.countdown}>
                    <Countup startTime={startTimeID}/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
