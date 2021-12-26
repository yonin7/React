import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sunt'
  );
  const [length] = useState(50);
  const [active, setActive] = useState(false);

  const textLength = active ? text : text.slice(0, length);

  const changeLength = () => {
    setActive(!active);
  };
  return (
    <div className="container">
      {textLength}
      <span onClick={changeLength}>
        {active ? '...Read More' : '...Read Less'}
      </span>
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
