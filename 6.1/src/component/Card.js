import React from 'react';
import Button from './Button';

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.img} />
      </div>
      <div>{props.title}</div>
      <div>{props.text}</div>
      <div>
        <div>
          <Button title="important" />
          <Button title="not important" />
        </div>
      </div>
    </div>
  );
};

export default Card;
