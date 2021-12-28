import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input/Input';

function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('');
  const inputRef = useRef();

  useEffect(() => {}, []);
  const focus = () => {
    setToggle(!toggle);
    if (toggle) {
      inputRef.current.focus();
      setData(inputRef.current.value);
    }
  };

  return (
    <div className="container">
      <button onClick={focus}>{toggle ? 'save' : 'edit'}</button>
      {toggle && (
        <input
          ref={inputRef}
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input>
      )}
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
