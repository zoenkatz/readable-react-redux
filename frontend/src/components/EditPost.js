import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Control, Form, Field } from 'react-redux-form';
import { isEmail, isEmpty } from 'validator';


class EditPost extends Component {

    handleSubmit = (event, post) => {

        this.setState({
            post:{
                id: this.props.post.id,
                timestamp: this.props.post.timestamp,
                title: post.title,
                body: post.body,
                author: this.props.post.author,
                category: this.props.post.category
            }
        });
        debugger;

        event.preventDefault();
        this.props.editPost(this.state.post).then(() => {
            return this.props.loadSinglePost(this.props.post.id);
        }).then(() => {
            this.props.closeEditPost();
        });
    };

    state = {
        post : {
            id: this.props.post.id,
            timestamp: this.props.post.timestamp,
            title: this.props.post.title,
            body: this.props.post.body,
            author: this.props.post.author,
            category: this.props.post.category
        }
    };

    handleChange = (value, postKey) => {
        debugger;
        switch(postKey) {
            case 'title':
                this.setState({
                    post: {
                        id: this.props.post.id,
                        timestamp: this.props.post.timestamp,
                        title: value,
                        body: this.state.post.body,
                        author: this.props.post.author,
                        category: this.props.post.category
                    }
                });
                break;
            case 'body':
                this.setState({
                    post: {
                        id: this.props.post.id,
                        timestamp: this.props.post.timestamp,
                        title: this.state.post.title,
                        body: value,
                        author: this.props.post.author,
                        category: this.props.post.category
                    }
                });
                break;



        }
    };

    render(){
        const {categories} = this.props;
        const {post} = this.state;
        return (
            <div className="edit-post">
                <form onSubmit={(e) => this.handleSubmit(e, this.state.post)}>
                    <h2>Edit post</h2>
                    <label>
                        Title:
                        <input value={this.state.post.title} placeholder='Post title' type='text' onChange={e => this.handleChange(e.target.value, 'title')}/>
                    </label>
                    <label>
                        Body:
                        <input value={this.state.post.body} placeholder='Post body' type='text' onChange={e => this.handleChange(e.target.value, 'body')}/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    };


}

EditPost.propTypes = {
    editPost: PropTypes.func.isRequired,
    closeEditPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    loadSinglePost: PropTypes.func.isRequired
}

export default EditPost;
