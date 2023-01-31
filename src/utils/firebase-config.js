import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAbJh_XKorbkvvAYkxLaxYh96EKo7BYElk",
  authDomain: "react-netflix-clone-6e43a.firebaseapp.com",
  projectId: "react-netflix-clone-6e43a",
  storageBucket: "react-netflix-clone-6e43a.appspot.com",
  messagingSenderId: "1050796652241",
  appId: "1:1050796652241:web:99e17029e2dbcdb80237f0",
  measurementId: "G-W0X608YYX9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
