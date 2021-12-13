import React from 'react';
import ReactDOM from 'react-dom';
import Button from './component/Button';
import './style.css';

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
