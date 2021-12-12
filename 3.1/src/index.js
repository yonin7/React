import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="container">
      <div className="green">
        <div className="blue">
          <div className="pink">
            <div className="purple"></div>
            <div className="purple"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
