import axios from 'axios';
import React from 'react';
import Button from '../src/components/Button';
import Joke from '../src/components/Joke';
import JokeAPI from '../src/api/unsplash';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
      categoryJoke: '',
      categories: [],
      errorMessage: '',
      isLoading: false,
    };
  }
  onClickSubmit = async () => {
    try {
      const joke = await JokeAPI.get('jokes/random');
      this.setState({ joke: joke.data.value });
    } catch (e) {
      const message = e.response.data.message;
      this.setState({ errorMessage: message });
    }
  };
  onClickCategory = async () => {
    const categories = await JokeAPI.get('jokes/categories');
    console.log(categories);
    this.setState({ ...this.state, categories: categories.data });
    console.log(this.state);
  };
  categoryJoke = async (category) => {
    try {
      const joke = await JokeAPI.get(`jokes/random?category=${category}`);
      this.setState({ joke: joke.data.value });
    } catch (e) {
      const message = e.response.data.message;
      this.setState({ errorMessage: message });
    }
  };
  categoriesButtons = () => {
    console.log(this.state.categories);
    return this.state.categories.map((category, i) => (
      <button key={i} onClick={() => categoryJoke(category)}>
        {category}
      </button>
    ));
  };

  render() {
    const { joke, errorMessage } = this.state;
    return (
      <div className="App">
        <Button onClick={this.onClickSubmit} />
        <Joke joke={this.state} />
        <button onClick={this.onClickCategory}>categories</button>
        <div>{this.categoriesButtons()}</div>
        <p>{this.categoryJoke}</p>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
