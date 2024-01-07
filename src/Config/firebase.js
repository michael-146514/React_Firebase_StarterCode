import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFH0wD4j-3fKWUBNRBRgsxahX6SIS7gTY",
  authDomain: "collegemarket-222eb.firebaseapp.com",
  databaseURL: "https://collegemarket-222eb-default-rtdb.firebaseio.com",
  projectId: "collegemarket-222eb",
  storageBucket: "collegemarket-222eb.appspot.com",
  messagingSenderId: "401044916083",
  appId: "1:401044916083:web:a7b87425960ea00dd96706",
  measurementId: "G-0LC518NT8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
