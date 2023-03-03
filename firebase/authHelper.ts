import Compass from '../public/compass.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from '../firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useRouter } from "next/router";

const handleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      return result.user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  export { handleLogin };