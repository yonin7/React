import axios from 'axios';
import React from 'react';
import Button from '../src/components/Button';
import Joke from '../src/components/Joke';
import JokeAPI from '../src/api/unsplash';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { joke: '', categories: [] };
  }
  onClickSubmit = async () => {
    const joke = await JokeAPI.get('jokes/random');
    this.setState({ joke: joke.data.value });
  };
  onClickCategory = async () => {
    const categories = await JokeAPI.get('jokes/categories');
    console.log(categories);
    this.setState({ ...this.state, categories: categories.data });
    console.log(this.state);
  };
  categoriesButtons = () => {
    console.log(this.state.categories);
    return this.state.categories.map((category, i) => (
      <button key={i}>{category}</button>
    ));
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
