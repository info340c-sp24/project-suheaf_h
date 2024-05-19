import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN8p1WD-AXfRmL2JW2Sy_jjM7ajLFrBto",
  authDomain: "dream-team-b6f69.firebaseapp.com",
  projectId: "dream-team-b6f69",
  storageBucket: "dream-team-b6f69.appspot.com",
  messagingSenderId: "997360767928",
  appId: "1:997360767928:web:39bb18b8ad7179f326f54d",
  measurementId: "G-3L58DQ6WRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// TODO: Add SDKs for Firebase products that you want to u
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// https://firebase.google.com/docs/web/setup#available-libraries



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
