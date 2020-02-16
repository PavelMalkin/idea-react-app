import React, {Component} from 'react';

class Buttons extends Component {
    render() {
        return (
                <div>
                    <button className="reg-button" id={this.props.id} onClick={() => this.props.handleDelete(this.props.id)}><b>&#128465;</b></button>
                    <button className="reg-button" id={this.props.id} onClick={() => this.props.handleInput(this.props.id)}><b>&#9998;</b></button>
                </div>
        );
    }
}

export default Buttons;
