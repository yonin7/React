import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input/Input';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      {toggle && <Input />}
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
