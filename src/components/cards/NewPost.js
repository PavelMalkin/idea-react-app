import React, {Component} from 'react';
import { connect } from 'react-redux'
import { updateIdea, createIdea } from '../../redux/actions/dataActions'
import Button from "@material-ui/core/Button";

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
        let {idea, description} = this.state;

        return (
            <div className='idea'  key={key}>
                <form onSubmit={this.handleSubmit}>
                    <span>Idea</span>
                    <input type="text" id="idea" onChange={this.handleChange} value={idea} />
                    <span>Content</span>
                    <textarea className='idea-field' id="description" onChange={this.handleChange} value={description}/>
                    <Button size="small" variant="contained" color="primary">Post!</Button>
                </form>
                <Button size="small" variant="contained" color="primary" onClick={() => handleUpdateCancel()}>Cancel</Button>
            </div>
        );
    }

}

const mapDispatchToProps = {
    updateIdea,
    createIdea
};


export default connect(null, mapDispatchToProps)(NewPost);
