import React from "react";
import styles from "../../styles/Print.module.css";
import Image from "next/image";
import PrintCostCalculator from "../../components/printcalculator";
import Nav from "../../components/nav";

export default function Print() {
    return (
        <>
        <Nav/>
        <div className="page-content">
            <div className="container-fluid">
                <div className={styles.banner}>
                    <h1 className={styles.h1}>PRINT</h1>
                    <p className={styles.p}>3D print anything</p>
            </div>
            <div className={`row ${styles.row}`}>
                <div className={`container-fluid col-md-6 col-12 ${styles.cardtransparent}`}>
                    <PrintCostCalculator/>
                </div>
            <div className={`container-fluid col-md-6 col-12 ${styles.card}`}>
                <h2 className={`${styles.cardtitle}`}>Bring your STL</h2>
                <p className={`${styles.cardtext}`}>To get started on your print job, you can send us the STL to review so we can generate a quote for your print. We will send this quote to the supplied email address and correspond accordingly to get you what you want. Please allow up to 24-48 hours to process the order, and get back to you. Once you've payed up for the job, we will send it out within 1-2 business days! To get a quote for your STL, it only costs you $1!</p>
                <h3 className={styles.h3}>You will need to supply the following:</h3>
                <ul>
                <li className={styles.li}>A link to an STL (It's suggested to use a publicly accessible Google Drive link) for us to print</li>
                <li className={styles.li}>Your email address, so we can send you a quote based on your STL</li>
                <li className={styles.li}>And just $1</li>
                </ul>
            <div className={`${styles.button} btn`}>
                <a href="https://buy.stripe.com/7sI5npfje0t7dFK3ce">Get started</a>
            </div>
        </div>
    </div>
            </div>
        </div>
        </>
    )
}