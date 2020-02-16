import React, {Component} from 'react';
import { connect } from 'react-redux'
import { updateIdea, createIdea } from '../../redux/actions/dataActions'

class NewPost extends Component {
    state = {
        idea: '',
        description: ''
    };

    componentDidMount() {
        this.setState({
            idea: this.props.idea.idea,
            description: this.props.idea.description
        })
    }

    handleChange= e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.idea.updatedIdeaID) {
            this.props.updateIdea(this.props.idea.updatedIdeaID, this.state);
        } else {
            this.props.createIdea(this.state);
        }
        this.props.handleSubmit();
    };


    render() {

        let {handleUpdateCancel, key} = this.props;

        return (
            <div className='idea'  key={key}>
                <form onSubmit={this.handleSubmit}>
                    <span>Idea</span>
                    <input type="text" id="idea" onChange={this.handleChange} value={this.state.idea} />
                    <span>Content</span>
                    <textarea className='idea-field' id="description" onChange={this.handleChange} value={this.state.description}/>
                    <button className='reg-button'>Post!</button>
                </form>
                <button className="reg-button" onClick={() => handleUpdateCancel()}>Cancel</button>
            </div>
        );
    }

}

const mapDispatchToProps = {
    updateIdea,
    createIdea
};


export default connect(null, mapDispatchToProps)(NewPost);
