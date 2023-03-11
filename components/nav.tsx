import styles from "../styles/Navigation.module.css";
import Compass from '../public/compass.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import React from "react";
import Database from "../public/database.svg"

export default function Nav() {
  return (
    <>
      <div className={styles.navroot}>
        <div className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className={styles.brand} href="/">tysonlmao.dev</a>
            <div>
            <a href="/stats" className={`${styles.navbutton}`} type="button" aria-expanded="false">
              <span><Database className={styles.compass}/></span>
            </a>
            <button className={`navbar-toggler ${styles.navbutton}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span><Compass className={styles.compass}/></span>
              {/* change */}
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              </ul>
              <div className="d-flex align-items-center">
                <div className={`dropdown me-3 ${styles.buttonlink}`}>
                  <button className={`btn dropdown-toggle styles.a ${styles.buttonlinks}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </button>
                  <ul className={`dropdown-menu ${styles.buttonlink}`}>
                    <li><span className="dropdown-item">Hi</span></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a href="/account/settings" className="dropdown-item"><span>Account</span></a></li>
                    <li><a href="/" className="dropdown-item"><span>Sign out</span></a></li>
                  </ul>
                </div>
                <a href="/login" className={`btn btn-outline-danger ${styles.buttonlinks}`}>Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
