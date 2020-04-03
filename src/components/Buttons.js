import React, {Component} from 'react';
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

class Buttons extends Component {
    render() {

        let { id, handleDelete,  handleInput} = this.props;

        return (
            <div>
                <IconButton aria-label="delete" size="small" id={id} onClick={() => handleDelete(id)}>
                    <DeleteIcon size="small"/>
                </IconButton>

                <IconButton id={id} onClick={() => handleInput(id)}>
                    <CreateIcon/>
                </IconButton>
            </div>
        );
    }
}

export default Buttons;
