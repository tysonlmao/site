import styles from "../styles/Navigation.module.css";

import Compass from '../public/compass.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from '../firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useRouter } from "next/router";
import React from "react";

export default function Navigation() {    
    return(
        <>
            <div className="navbar">
                <div className="container-fluid">
                    <div className={styles.navroot}>

                    <a href="/">tysonlmao.dev</a>
                    </div>
                    <div className={styles.navroot}>
                        <div className="row">
                            <div className="col">
                                <a href="/login">Sign in</a>
                            </div>
                            <div className="col">
                                <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="/account/settings" className="dropdown-item">a</a></li>
                                    <li><a href="/account/settings" className="dropdown-item">Sign out</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}