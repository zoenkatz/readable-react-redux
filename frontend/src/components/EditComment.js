import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Control, Form, Field } from 'react-redux-form';
import { isEmail, isEmpty } from 'validator';


class EditComment extends Component {

    handleSubmit = (event, newComment) => {

        this.setState({
            comment:{
                id: this.props.comment.id,
                timestamp: this.props.comment.timestamp,
                body: newComment.body,
                author: newComment.author,
                parentId: this.props.comment.parentId
            }
        });
        debugger;

        event.preventDefault();
        this.props.editComment(this.state.comment).then(() => {
            this.props.closeEditComment();
        });

    };

    state = {
        comment:{
            id: this.props.comment.id,
            timestamp: this.props.comment.timestamp,
            body: this.props.comment.body,
            author: this.props.comment.author,
            parentId: this.props.comment.parentId
        }
    };

    handleChange = (value, postKey) => {
        debugger;
        switch(postKey) {
            case 'body':
                this.setState({
                    comment: {
                        id: this.props.comment.id,
                        timestamp: this.props.comment.timestamp,
                        body: value,
                        author: this.props.comment.author,
                        parentId: this.props.comment.parentId
                    }
                });
                break;



        }
    };

    render(){
        const {categories} = this.props;
        const {comment} = this.state;
        return (
            <div className="edit-post">
                <form onSubmit={(e) => this.handleSubmit(e, this.state.comment)}>
                    <h2>Edit comment</h2>
                    <label>
                        Body:
                        <input value={this.state.comment.body} placeholder='Comment body' type='text' onChange={e => this.handleChange(e.target.value, 'body')}/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    };


}

EditComment.propTypes = {
    editComment: PropTypes.func.isRequired,
    closeEditComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired
}

export default EditComment;
