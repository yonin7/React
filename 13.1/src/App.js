import Data from '../src/components/data';
import React from 'react';
import Button from '../src/components/Button';
import Joke from '../src/components/Joke';
import JokeAPI from '../src/api/unsplash';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], names: [], birthday: [] };
  }
  exportData = () => {
    this.setState({ data: Data });
  };
  dataNames = () => {
    return Data.map((person) => {
      this.setState({ name: person.name });
    });
  };
  dataNames = () => {
    return Data.map((person) => {
      if (person.name.slice(-4) < 1990) this.setState({ birthday: person });
    });
  };
  render() {
    return (
      <div className="App">
        <Button onClick={this.onClickSubmit} />
        <Joke joke={this.state.joke} />
        <button onClick={this.onClickCategory}>categories</button>
        <div>{this.categoriesButtons()}</div>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
