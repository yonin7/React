import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import Button from './component/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { increment: 0 };
    this.counter = this.counter.bind(this);
  }
  counter() {
    this.setState({ increment: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.counter}>increment</button>
        <div>{this.state.increment}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
