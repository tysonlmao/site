import { initFirebase } from '../firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router";

export default function userLogin() {
    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter()
  
    if (loading) {
        return <div>loading...</div>
    }

    if (user) {
        router.push("/stats")
        return <div className='page'>Hi {user.displayName}</div>
    }
    const signIn = async () => {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user)
    }
    return (
        <button onClick={signIn}>
            <div className="btn btn-primary">Sign In</div>
        </button>
    )
}