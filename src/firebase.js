import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-93c4e.firebaseapp.com",
  projectId: "chat-93c4e",
  storageBucket: "chat-93c4e.appspot.com",
  messagingSenderId: "1024232401291",
  appId: "1:1024232401291:web:db3eefa0f4dad4f0eb678e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();