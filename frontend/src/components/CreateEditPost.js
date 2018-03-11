import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Control, Form, Field } from 'react-redux-form';
import { isEmail, isEmpty } from 'validator';


class CreateEditPost extends Component {

    handleSubmit = (event, newPost) => {


        this.setState({
            newPost:{
                id: Date.now(),
                timestamp: (Date.now()),
                title: newPost.title,
                body: newPost.body,
                author: newPost.author,
                category: newPost.category

            }
        });
        debugger;
        // this.setState((state) => ({
        //     form: {
        //         timestamp: (Date.now()).toString()
        //     }
        // }))
        this.props.addNewPost(this.state.newPost);
        event.preventDefault();
        this.props.closeCreateEditPost();
    };

    state = {
        newPost : {
            id:  Date.now(),
            timestamp: 0,// (Date.now()).toString(),
            title: '',
            body: '',
            author: '',
            category: ''
        }
    };

    selectPostCategory = (categoryName) => {
            // form: {
            //     id: state.id,
            //     category: categoryName,
            //     title: state.title,
            //     body: state.body,
            //     author: state.author
            // }
    };
    handleChange = (value, postKey) => {
        debugger;
        switch(postKey) {
            case 'title':
                this.setState({
                    newPost: {
                        id:  Date.now() + '',
                        timestamp: (Date.now()),
                        title: value,
                        body: this.state.newPost.body,
                        author: this.state.newPost.author,
                        category: this.state.newPost.category
                    }
                });
                break;
            case 'body':
                this.setState({
                    newPost: {
                        id:Date.now() + '',
                        timestamp: (Date.now()),
                        title: this.state.newPost.title,
                        body: value,
                        author: this.state.newPost.author,
                        category: this.state.newPost.category
                    }
                });
                break;

            case 'author':
                this.setState({
                    newPost: {
                        id: Date.now() + '',
                        timestamp: (Date.now()),
                        title: this.state.newPost.title,
                        body: this.state.newPost.body,
                        author: value,
                        category: this.state.newPost.category
                    }
                });
                break;
            case 'category':
                this.setState({
                    newPost: {
                        id: Date.now() + '',
                        timestamp: (Date.now()),
                        title: this.state.newPost.title,
                        body: this.state.newPost.body,
                        author: this.state.newPost.author,
                        category: value
                    }
                });
                break;

        }
    };

    render(){
        const {categories} = this.props;
        const {newPost} = this.state;
        //console.log(newPost.title.$form)
      return (
          <div className="create-edit-post">
              <form onSubmit={(e) => this.handleSubmit(e, this.state.newPost)}>
                  <h2>Add a new post</h2>
                  <label>
                      Title:
                      <input value={this.state.newPost.title} placeholder='Post title' type='text' onChange={e => this.handleChange(e.target.value, 'title')}/>
                  </label>
                  <label>
                      Body:
                      <input value={this.state.newPost.body} placeholder='Post body' type='text' onChange={e => this.handleChange(e.target.value, 'body')}/>
                  </label>
                  <label>
                      Author:
                      <input value={this.state.newPost.author} placeholder='Post author' type='text' onChange={e => this.handleChange(e.target.value, 'author')}/>
                  </label>
                  <label>
                      Category:
                      <select onChange={(event) => this.handleChange(event.target.value, 'category')}>
                          <option value='ChooseCategory'>Choose a category</option>
                          {categories.map((category, k) => (
                              <option key={k} value={category.name}>{category.name}</option>
                          ))}
                      </select>
                  </label>
                  <button type="submit" value="Create Post">Create Post</button>
              </form>
          </div>
      )
    };


}

CreateEditPost.propTypes = {
    addNewPost: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    closeCreateEditPost: PropTypes.func.isRequired
    //match: PropTypes.object.isRequired,
    //location: PropTypes.object.isRequired,
}

export default CreateEditPost;
