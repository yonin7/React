import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Card from './component/Card';


const App = () => {
  return (
    <div>
      <Card img={faker.image.avatar()} title="hello" text="how are you"/>
      <Card img={} title="hi" text="good"/>
      <Card img={} title="moo" text="bad"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
