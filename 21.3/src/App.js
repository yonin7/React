import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input/Input';

function App() {
  const boxRef = React.useRef(null);

  const handleMouseEnter = () => {
    boxRef.current.src =
      'https://i.picsum.photos/id/833/200/300.jpg?hmac=b_oHYH2fuGTTRs2679QZsX0IQq4rTJaywPYnYnOGPtE';
  };

  return (
    <div>
      <img
        src={
          'https://i.picsum.photos/id/833/200/300.jpg?hmac=b_oHYH2fuGTTRs2679QZsX0IQq4rTJaywPYnYnOGPtE'
        }
        ref={boxRef}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
