import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKK4rItWpOvrhobIs0d_RKvLwDKBMSYRA",
  authDomain: "quiz-app-fec91.firebaseapp.com",
  projectId: "quiz-app-fec91",
  storageBucket: "quiz-app-fec91.appspot.com",
  messagingSenderId: "1042276176231",
  appId: "1:1042276176231:web:f6b7e7f85249fa79ca1fc2",
  measurementId: "G-E979BZNE3L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)
