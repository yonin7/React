import React, { useState } from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState(['one', 'two', 'three', 'four', 'five']);

  const handleDelete = (id) => {
    // const arrCopy = [...arr];
    // console.log(e.target.checked);
    // let newArr = arr.forEach((number) => {});
  };
  const handleReset = () => {
    const resetArr = [...arr];
    setArr(resetArr);
  };
  const displayInputs = () => {
    return arr.map((input, index) => {
      return (
        <div key={input}>
          <label>{input}</label>
          <input type="checkbox" name={input} />
        </div>
      );
    });
  };

  return (
    <div className="container">
      {displayInputs()}
      <form>
        <input
          type="submit"
          name="Delete"
          value="Delete"
          onClick={handleDelete}
        />
        <input type="submit" name="Reset" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
