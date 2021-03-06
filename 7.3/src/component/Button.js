import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, color: 'black' };
  }
  increase = () => {
    if (this.state.number < 10) {
      this.setState({ number: this.state.number + 1 });
      this.changecolor(this.state.number);
    }
  };
  decrease = () => {
    if (this.state.number > -10) {
      this.setState({ number: this.state.number - 1 });
      this.changecolor(this.state.number);
    }
  };
  changecolor = (value) => {
    if (value > 0) {
      this.setState({ color: 'green' });
    } else if (value < 0) {
      this.setState({ color: 'red' });
    } else this.setState({ color: 'black' });
  };
  render() {
    return (
      <div>
        <button className="plus" onClick={this.increase}>
          Increase
        </button>
        <input
          type="text"
          value={this.state.number}
          style={{ color: `${this.state.color}` }}
        ></input>
        <button className="minus" onClick={this.decrease}>
          Decrease
        </button>
      </div>
    );
  }
}

export default Button;
