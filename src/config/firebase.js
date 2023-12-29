// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDcbr4vVy0o79iEPCkses_Zwhyxwx_UMEY",
  authDomain: "memory-game-15a54.firebaseapp.com",
  projectId: "memory-game-15a54",
  storageBucket: "memory-game-15a54.appspot.com",
  messagingSenderId: "910593048451",
  appId: "1:910593048451:web:1d765cb127ded15d2d80b6",
  measurementId: "G-0R181DJ9NC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const googleProvider= new GoogleAuthProvider();