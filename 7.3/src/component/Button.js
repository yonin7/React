import React from 'react';

class button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, color: 'black' };
  }
  click() {
    this.setState({ div: !this.state.num });
  }
  render() {
    return (
      <div>
        <button
          className="plus"
          onClick={() => {
            if (this.state.num < 10) {
              let newNum = this.state.num + 1;
              this.setState({ num: newNum });
              if (this.state.num < 10 && this.state.num >= -1) {
                this.state.color = 'green';
                if (this.state.num === 0) this.state.color = 'black';
              }
            }
          }}
        >
          plus
        </button>

        <input
          type="text"
          value={this.state.num}
          style={{ color: `${this.state.color}` }}
        ></input>

        <button
          className="minus"
          onClick={() => {
            if (this.state.num > -10) {
              let newNum = this.state.num - 1;
              this.setState({ num: newNum });
              if (this.state.num > -10 && this.state.num <= 1) {
                this.state.color = 'red';
                if (this.state.num === 0) this.state.color = 'black';
              }
            }
          }}
        >
          minus
        </button>

        {this.state.div && <div className="box"></div>}
      </div>
    );
  }
}

export default button;
