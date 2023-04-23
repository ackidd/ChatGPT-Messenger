import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDpsZOO1uWuGfjB8_gMOXFe9s_VHt8QbM",
  authDomain: "chatgpt-site.firebaseapp.com",
  projectId: "chatgpt-site",
  storageBucket: "chatgpt-site.appspot.com",
  messagingSenderId: "235425108929",
  appId: "1:235425108929:web:9da78fffaaf5dc8f7e5540"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
