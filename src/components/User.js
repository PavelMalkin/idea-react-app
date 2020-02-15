import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getData, deleteIdea, updateIdea} from "../redux/actions/dataActions";
import Buttons from "./Buttons";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {updatedIdeaID: '',
            idea: null,
            description: null
        };
    };


    componentDidMount() {
        this.props.getData();
    }

    handleDelete = (id) => {
        this.props.deleteIdea(id);
    };

    handleChange= e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();

       let idea = {
           idea: this.state.idea,
           description: this.state.description
       };
      this.props.updateIdea(this.state.updatedIdeaID, idea);
      this.setState({
          updatedIdeaID: null
      });
    };


    handleInput = (id) => {
        console.log(id);
        // console.log('target handleInput', e.target, e.target.id);
        let idea = this.props.ideas.find( res => res.id === id);
        // console.log('idea finded', idea);
        this.setState({
            updatedIdeaID: id,
            idea: idea.idea,
            description: idea.description
        });
    };

    render() {
        const {user , ideas} = this.props;
        let cards = 'No data';
        let userIdeas = '';
        if (ideas.length) {
            userIdeas = ideas.filter(res => res.author.username === user.username);
            cards = userIdeas.map(res => {
                if (res.id === this.state.updatedIdeaID) {
                    return (
                        <div className='idea'  key={res.id}>
                            <form onSubmit={this.handleSubmit}>
                                <span>Idea</span>
                                <input type="text" id="idea" onChange={this.handleChange} value={this.state.idea} />
                                <span>Content</span>
                                <textarea className='idea-field' id="description" onChange={this.handleChange} value={this.state.description}/>
                                <button>Post!</button>
                            </form>
                        </div>
                    )
                } else {
                    return (
                        <div key={res.id} className="cards">
                            <div>IDEA : {res.idea}</div>
                            <div>Description : {res.description}</div>
                            <div>Created at: {res.createdDate} by {res.author.username}</div>
                            <div>Updated at: {res.updated}</div>
                            <Buttons id={res.id} handleInput={this.handleInput}  handleDelete={this.handleDelete}/>
                            {/*<button id={res.id} onClick={this.handleDelete} ><b>&#128465;</b></button>*/}
                            {/*<button id={res.id} onClick={this.handleInput} ><b>&#9998;</b></button>*/}
                        </div>
                    )
                }
            })
        }

        return (
            <div>
                <div className="user-info">
                    <div>User name: {user.username}</div>
                </div>
                <div>
                    {cards}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    ideas: state.data.ideas
});

const mapDispatchToProps = {
    getData,
    deleteIdea,
    updateIdea
};

export default connect(mapStateToProps,mapDispatchToProps)(User);
