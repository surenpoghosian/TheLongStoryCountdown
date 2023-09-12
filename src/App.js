import React from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';

function App() {
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
