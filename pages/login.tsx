import firebase from '../firebase/firebaseClient'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"; 
import Navigation from '../components/nav';
import styles from '../styles/Login.module.css'
import Footer from '../components/footer';
import Login from "../components/login"

export default function userLogin() {
    return (
        <>
            <div className={styles.pagecontent}>
                <Login/>
            </div>
        </>
    )
}