import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    { name: 'CSS', completed: true },
    { name: 'JavaScript', completed: true },
    { name: 'Learn React', completed: false },
    { name: 'Learn mongoDB', completed: false },
    { name: 'Learn Node JS', completed: false },
  ]);
  const changeData = (index) => {
    const temp = [...data];
    temp[index].completed = !temp[index].completed;
    setData([...temp]);
  };
  const mapping = () => {
    return data.map((language, index) => {
      return (
        <div key={index}>
          {language.name},{language.completed ? 'true' : 'false'},
          <span onClick={() => changeData(index)}>read</span>
        </div>
      );
    });
  };
  return <div className="container">{mapping()}</div>;
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
