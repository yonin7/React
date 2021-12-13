import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Card from './component/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Card img={faker.image.image()} title="hello" text="how are you" />
        <Card img={faker.image.image()} title="hi" text="good" />
        <Card img={faker.image.image()} title="moo" text="bad" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
