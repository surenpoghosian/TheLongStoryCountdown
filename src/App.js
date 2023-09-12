import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3rlD2xXmWrpqm_XW4_-PDRZQ-QMdKJUk",
  authDomain: "thelongstorycountdown.firebaseapp.com",
  projectId: "thelongstorycountdown",
  storageBucket: "thelongstorycountdown.appspot.com",
  messagingSenderId: "1038949686404",
  appId: "1:1038949686404:web:4f3949675a6154c8ce76d1",
  measurementId: "G-C6HL120KSP"
};


function App() {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
      <source src="/0725.mp4" type="video/mp4" />
      </video>
      
      <div className='content'>
        <span  className="title">The Long Story</span>
        <CountdownTimer />
      </div>      
    </div>
  );
}

export default App;
