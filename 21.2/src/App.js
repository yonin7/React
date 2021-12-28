import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input/Input';

function App() {
  const inputRef = useRef(null);

  // useEffect(() => {}, []);
  const handlePlayVideo = () => {
    inputRef.current.play();
  };

  const handlePauseVideo = () => {
    inputRef.current.pause();
  };
  return (
    <div className="container">
      <video ref={inputRef}>
        <source
          src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={handlePlayVideo}>start</button>
      <button onClick={handlePauseVideo}>pause</button>
      {/* {toggle && <input ref={inputRef} value={data}></input>} */}
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
