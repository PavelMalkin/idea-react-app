import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getComments } from "../../redux/actions/dataActions";
import moment from "moment";
import {Card, CardContent, Typography, makeStyles} from '@material-ui/core'



class Comment extends Component {

    componentDidMount() {
        this.props.getComments(this.props.idea.id)
    }

    render() {


        const { idea } = this.props;

        return (
            <Card className='comments'>
                {idea.comments.map( comment => {
                    return (
                        <CardContent className='comment' key={comment.id}>
                            <Typography >Wrote: {comment.author.username} {moment(comment.created).format('DD/MMM/YY HH:MM')}</Typography>
                            <div>{comment.comment}</div>
                        </CardContent>
                    )
                })}
            </Card>
        );
    }
}

const mapDispatchToProps = ({
    getComments
});

export default connect(null, mapDispatchToProps)(Comment);
