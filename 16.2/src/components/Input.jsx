import React from 'react'

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: {} };
    }
    display = () => {
        return(
         <div>
            <input type="text"></input>
            <button onClick={this.props.onClick}>Create</button>
        </div>
        )
    };

    render() {
        return (
        <div>
            <input type="text"></input>
            <button onClick={this.props.onClick(this.display)}>Create</button>
        </div>
        )
    }
}


