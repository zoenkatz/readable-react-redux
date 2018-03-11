import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Control, Form } from 'react-redux-form';
import { isEmail, isEmpty } from 'validator';
import { Field, reduxForm , Form} from 'redux-form';



class CreateEditComment extends Component {

    handleSubmit = (event, newComment) => {
        debugger;
        this.setState({
            newComment:{
                id: Date.now(),
                timestamp: Date.now(),
                body: newComment.body,
                author: newComment.author,
                parentId: this.props.post.id

            }
        });
       event.preventDefault();

        this.props.addCommentToPost(this.state.newComment);
        this.props.closeCreateEditComment();
    };

    state = {
        newComment : {
            id: Date.now(),
            timestamp:  Date.now(),
            body: '',
            author: '',
            parentId: this.props.post.id
        }
    };

    handleChange = (event, value) => {
        this.setState({
            newComment:{
                id: Date.now(),
                timestamp: Date.now(),
                body: value,
                author: this.state.newComment.author,
                parentId: this.props.post.id

            }
        });
    };


    render(){
        const {addCommentToPost, post, value , onChange, handleSubmit, values} = this.props;
        const {newComment, pristine, reset, submitting} = this.state;
        console.log(this.state.newComment.body)
        console.log(this.state.value);
        return (
            <div className="create-edit-comment">
                <form onSubmit={(e) => this.handleSubmit(e, this.state.newComment)}>
                    <h2>Add a comment</h2>

                    <label>
                        Comment:
                        <input value={this.state.value}  onChange={(e) => this.handleChange(e, e.target.value)} placeholder='Add post comment' type='text'/>
                    </label>
                    <button type="submit" disabled={pristine || submitting}>Submit comment</button>
                </form>
            </div>
        )
    };


}

CreateEditComment.propTypes = {
    addCommentToPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    closeCreateEditComment: PropTypes.func.isRequired
    //match: PropTypes.object.isRequired,
    //location: PropTypes.object.isRequired,
}
export default reduxForm({
    form: 'newComment'
})(CreateEditComment)

