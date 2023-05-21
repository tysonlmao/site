import React from "react";
import styles from "../styles/NotFound.module.css";
import Cross from "../public/cross.svg";

export default function pagenotfound() {
    return (
        <>
            <div className={styles.error}>
                    <a href="/" className="btn btn-danger">Back home</a>
                <div className={`styles.icon align-items-center d-flex justify-content-center`}>   
                    <Cross className={styles.cross}/>
                </div>
            </div>
        </>
    )
}