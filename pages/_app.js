import styles from '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/fonts.css";

import { pageview } from '../firebase/ga';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import config from "../config.json";
const firebaseConfig = config.firebase;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.default.initializeApp(firebaseConfig);
    }

    // Listen for changes to the user's token
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Check for the custom claim indicating it's their first login
        user.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.firstLogin) {
            // Redirect the user to the onboarding page
            window.location.href = '/onboarding';
          }
        });
      }
    });


    const handleRouteChange = (url) => {
      pageview(url);
    };

    require("bootstrap/dist/js/bootstrap");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <div className="pagecolor">
        <Component {...pageProps} />
      </div>
    </>
  );;



}
