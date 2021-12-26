import React, { useState } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const timeCalc = (e) => {
    try {
      let value = Number(e.target.value);
      if (e.target.name === 'seconds' && e.target.value >= 0) {
        setValues(value, value / 60, value / 3600);
      } else if (e.target.name === 'minutes' && e.target.value >= 0) {
        setValues(value * 60, value, value / 60);
      } else if (e.target.name === 'hours' && e.target.value >= 0) {
        setValues(value * 3600, value * 60, value);
      }
    } catch (error) {
      setValues(0, 0, 0);
    }
    // setShoes(value);
  };
  const setValues = (sec, min, hr) => {
    setSeconds(sec);
    setMinutes(min);
    setHours(hr);
  };

  return (
    <div className="container">
      <form>
        <label>Seconds:</label>
        <input type="text" name="seconds" value={seconds} onChange={timeCalc} />
        <label>Minutes:</label>
        <input type="text" name="minutes" value={minutes} onChange={timeCalc} />
        <label>Hours:</label>
        <input type="text" name="hours" value={hours} onChange={timeCalc} />
      </form>
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
