import React, { useState } from 'react';
import Emoji from './components/Emoji/Emoji';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [counter, setCounter] = useState(0);

  const changeLikes = () => {
    setLikes(likes + 1);
    setCounter(counter + 1);
  };
  const changeDislikes = () => {
    setDislikes(dislikes + 1);
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <div className="count-container">
        <Emoji count={likes} />
        <Emoji count={dislikes} />
      </div>
      <Card className="card-container" imgIndex={counter} />
      <div className="button-container">
        <Button handleClick={changeLikes} name="like" />
        <Button handleClick={changeDislikes} name="dislike" />
      </div>
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
