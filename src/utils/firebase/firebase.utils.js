import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy6Oj81yq5UpxMOXHe8pgdunrwlJmHc3A",
  authDomain: "crwn-clothing-53a43.firebaseapp.com",
  projectId: "crwn-clothing-53a43",
  storageBucket: "crwn-clothing-53a43.appspot.com",
  messagingSenderId: "606713137414",
  appId: "1:606713137414:web:7bfa28a1a02cbf5f4c7687",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
