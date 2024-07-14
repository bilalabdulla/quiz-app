import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "../config/firebase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/newquiz')
        } catch (err) {
            console.error(err)
        }
    }

    const signInGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate('/newquiz')
            
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <div className="login">
        <div className="login-div">
            <input placeholder="email" className="login-email" type="email"
            onChange={(e) => setEmail(e.target.value)} required/>
            <input placeholder="password" className="password" type="password"
            onChange={(e) => setPassword(e.target.value)} required/>
            <button onClick={signIn} className="sign-in-btn">Sign in</button> 
        </div>
      <button onClick={signInGoogle} className="google-btn">Sign in with Google</button>
    </div>
  )
}


