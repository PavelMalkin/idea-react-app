import React, {Component} from 'react';
import { connect } from 'react-redux'
import { createIdea } from '../redux/actions/dataActions'

class NewIdea extends Component {

    state = {
        idea: null,
        description: null
    };

    handleChange= e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.createIdea(this.state, this.props.history);
    };

    render() {
        return (
            <div className='idea'>
                <form onSubmit={this.handleSubmit}>
                    <span>Idea</span>
                    <input type="text" id="idea" onChange={this.handleChange}/>
                    <span>Content</span>
                    <textarea className='idea-field' id="description" onChange={this.handleChange}/>
                    <button>Post!</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    createIdea
};

export default connect(null, mapDispatchToProps)(NewIdea);
