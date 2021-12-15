import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ favoriteColor: 'blue' }), 1000);
  };

  componentDidUpdate = () => {
    document.querySelector(
      '#Box'
    ).innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  };

  render() {
    return (
      <div className="App">
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="Box">
          The updated favorite color is {this.state.favoriteColor}
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
