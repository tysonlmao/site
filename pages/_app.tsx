import localFont from '@next/font/local'

const RobotoMono = localFont({ src: '../lib/fonts/RobotoMono.woff' });

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return(
      <Component {...pageProps} />
  )
 
  
}
