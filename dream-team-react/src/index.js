import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

import firebase from "firebase/compat/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter><App /></BrowserRouter>
);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
