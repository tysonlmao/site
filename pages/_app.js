import styles from '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/fonts.css";
import 'animate.css';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';


import config from "../config.json";
import Footer from '../components/footer';
import Nav from "../components/nav";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {

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
