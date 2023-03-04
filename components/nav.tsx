import styles from "../styles/Navigation.module.css";

import Compass from '../public/compass.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from '../firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useRouter } from "next/router";
import React from "react";
import { app } from "../firebase/firebase";


export default function Navigation() {    
    // const { user, login, logout } = useContext(AuthContext)
    initFirebase();
    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);

    return(
        <>
            <div className="navbar">
                <div className="container-fluid">
                    <div className={styles.navroot}>

                    <a href="/" className={styles.link}>tysonlmao.dev</a>
                    </div>
                    <div className={styles.navroot}>
                        <div className="row">
                            <div className="col">
                                <a href="/login" className={styles.link}>Sign in</a>
                            </div>
                            <div className="col">
                                <div className="btn-group">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle styles.a" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><span className="dropdown-item">Hi</span></li>
                                        <li><a href="/account/settings" className="dropdown-item"><span>Account</span></a></li>
                                        <li><a href="/" className="dropdown-item" onClick={() =>  auth.signOut()}><span>Sign out</span></a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}