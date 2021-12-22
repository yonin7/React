import React from 'react';
import Input from './components/Input';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Homepage from './components/Homepage';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';

// import Data from '../src/components/data';
// import Button from '../src/components/Button';
// import Joke from '../src/components/Joke';
// import JokeAPI from '../src/api/unsplash';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [{ id: '', name: '' }] };
  }

  hendleCreate = (ele) => {
    // const id=this.state.list.id +1
    const newList = this.state.list;
    this.setState({ list: { ...this.state.list, newList } });
  };
  hendleDelete = (ele) => {
    // const id=this.state.list.id +1
    const newList = this.state.list;
    this.setState({ newList: { ele } });
  };
  hendleUpdate = (ele) => {
    // const id=this.state.list.id +1
    const newList = this.state.list;
    this.setState({ newList: { ele } });
  };

  display = () => {};

  render() {
    return (
      <div className="App">
        <Input createCB={this.hendleCreate} />
        {this.display()}
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
