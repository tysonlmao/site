import firebase from '../firebase/firebaseClient'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"; 
import Navigation from '../components/nav';
import styles from '../styles/Login.module.css'
import Footer from '../components/footer';
import Login from "../components/login"
import Head from 'next/head';
import Nav from '../components/nav';

export default function userLogin() {
    return (
        <>
        <Head>
            <title>tysonlmao.dev | login</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
         <Nav/>
            <div className={styles.pagecontent}>
                <Login/>
            </div>
        </>
    )
}