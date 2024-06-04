// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN8p1WD-AXfRmL2JW2Sy_jjM7ajLFrBto",
  authDomain: "dream-team-b6f69.firebaseapp.com",
  projectId: "dream-team-b6f69",
  storageBucket: "dream-team-b6f69.appspot.com",
  messagingSenderId: "997360767928",
  appId: "1:997360767928:web:7a73bca87c7c6a1126f54d",
  measurementId: "G-GTSM1ET460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
