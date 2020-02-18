import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getComments } from "../../redux/actions/dataActions";
import moment from "moment";

class Comment extends Component {
    componentDidMount() {
        this.props.getComments(this.props.idea.id)
    }

    render() {
        const { idea } = this.props;

        return (
            <div className='comments'>
                {idea.comments.map( comment => {
                    return (
                        <div className='comment' key={comment.id}>
                            <div>Wrote: {comment.author.username} {moment(comment.created).format('DD/MMM/YY HH:MM')}</div>
                            <div>{comment.comment}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapDispatchToProps = ({
    getComments
});

export default connect(null, mapDispatchToProps)(Comment);
