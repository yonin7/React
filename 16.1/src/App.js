import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

// import Data from '../src/components/data';
// import Button from '../src/components/Button';
// import Joke from '../src/components/Joke';
// import JokeAPI from '../src/api/unsplash';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" exact component={ProductDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
