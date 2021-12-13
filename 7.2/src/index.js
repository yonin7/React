import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { div: false };
  }

  click() {
    this.setState({ div: !this.state.div });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.click();
          }}
        >
          {this.state.div ? 'hide' : 'show'}
        </button>

        {this.state.div && <div className="box"></div>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
