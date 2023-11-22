import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWfCVvRgBa_OrLf_5pqAFdE4lhnOX3BE0",
  authDomain: "nike-app-27599.firebaseapp.com",
  projectId: "nike-app-27599",
  storageBucket: "nike-app-27599.appspot.com",
  messagingSenderId: "807465409884",
  appId: "1:807465409884:web:02d7023c41196897b43599"
};
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)