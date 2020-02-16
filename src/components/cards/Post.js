import React, {Component} from 'react';
import moment from "moment";
import Buttons from "../Buttons";
import { connect } from 'react-redux'
import {deleteIdea, upVote, downVote } from '../../redux/actions/dataActions'

class Post extends Component {

    handleDelete = (id) => {
        this.props.deleteIdea(id);
    };

    handleUpvote = (id) => {
        this.props.upVote(id);
    };

    handleDownvote = (id) => {
        this.props.downVote(id);
    };


    render() {
        let {key, idea, user, handleInput} = this.props;
        let upvotes = '';
        let downvotes = '';

        if (idea.upvotes.length) {
            idea.upvotes.map(upvote => upvotes += ' ' + (upvote.username) + ';'
            )}

        if (idea.downvotes.length) {
            idea.downvotes.map(upvote => downvotes += ' ' + (upvote.username)
            )}

        return (
            <div>
                <div key={key} className="cards">
                    <h3>IDEA : {idea.idea}</h3>
                    <p>{idea.description}</p>
                    <small>Created
                        at: {moment(idea.createdDate).format('DD/MMM/YY HH:MM')} by {idea.author.username}</small>
                    <br/>
                    <small>{(idea.createdDate === idea.updated) ? null : (
                        `Updated at: ` + moment(idea.updated).format('DD/MMM/YY HH:MM')
                    )}
                    </small>

                    <div>
                        {(user.isLoggedIn && user.username === idea.author.username) ?
                            <Buttons id={idea.id} handleInput={handleInput}
                                     handleDelete={() => this.handleDelete(idea.id)}/>
                            : null}
                    </div>

                    <div className="votes">
                        <div className='vote' onClick={() => this.handleUpvote(idea.id)}>+</div>
                        <div className='tooltip'>{idea.upvotes.length - idea.downvotes.length} &#9825;
                            <span className="tooltiptext">
                                <div>Upvotes: {upvotes}</div>
                                <div>Downvotes: {downvotes}</div>
                            </span>
                        </div>
                        <div className="vote" onClick={() => this.handleDownvote(idea.id)}>-</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps= (state) => ({
    user: state.user,
    ideas: state.data.ideas
});

const mapDispatchToProps = {
    deleteIdea,
    upVote,
    downVote
};


export default connect(mapStateToProps, mapDispatchToProps)(Post);
