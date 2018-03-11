import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import _ from 'lodash'
import CategoriesList from "./CategoriesList";
import PostsList from "./PostsList";
import CreateEditPost from './CreateEditPost'
import Modal from 'react-modal';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index.js'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import history from '../history.js'


class Category extends Component {
    componentDidMount(){
        this.props.loadPostsForCategory(this.props.category);
        this.props.closeCreateEditPost();
    }

    render() {
    const {posts, category, categories, comments, openCreateEditComment,  createEditComment, loadingCommentsToPost,
        closeCreateEditComment, closeCreateEditPost, addCommentToPost ,editPost, deletePost, isEditPost, closeEditPost,
        openEditPost, openEditComment, closeEditComment, isEditComment, deleteComment, editComment, voteComment, votePost,createEditPost, onSortPostsList, loadPostsForCategory, loadSinglePost, openCreateEditPost} = this.props;

    return (
            <div className="category">
                <CategoriesList categories={categories} loadPostsForCategory={loadPostsForCategory}/>
                <PostsList posts={posts} category={category} onSortPostsList={onSortPostsList} loadPostsForCategory={loadPostsForCategory}
                           loadSinglePost={loadSinglePost}
                           comments={comments} openCreateEditComment={openCreateEditComment}
                           createEditComment={createEditComment}
                           loadingCommentsToPost={loadingCommentsToPost} addCommentToPost={addCommentToPost}
                           closeCreateEditComment={closeCreateEditComment} closeCreateEditPost={closeCreateEditPost}
                           history={history} editPost={editPost} deletePost={deletePost} isEditPost={isEditPost}
                           openEditPost={openEditPost} closeEditPost={closeEditPost}
                           openEditComment={openEditComment} closeEditComment={closeEditComment} isEditComment={isEditComment}
                           deleteComment={deleteComment} editComment={editComment}
                           voteComment={voteComment} votePost={votePost} createEditPost={createEditPost}
                />
                <button id='addNewPost' className='button' onClick={(e) => this.props.openCreateEditPost()}>Add new post</button>

            </div>
        )
    }

}

Category.propTypes = {
    posts: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    createEditPost: PropTypes.bool.isRequired,
    onSortPostsList: PropTypes.func.isRequired,
    loadPostsForCategory: PropTypes.func.isRequired,
    openCreateEditPost: PropTypes.func.isRequired,
    closeCreateEditPost: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    createEditComment: PropTypes.bool.isRequired,
    loadingCommentsToPost: PropTypes.func.isRequired,
    addCommentToPost: PropTypes.func.isRequired,
    closeCreateEditComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    isEditPost: PropTypes.bool.isRequired,
    deleteComment: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    voteComment: PropTypes.func.isRequired,
    closeEditComment: PropTypes.func.isRequired,
    closeEditPost: PropTypes.func.isRequired,
    openEditPost: PropTypes.func.isRequired,
    openEditComment: PropTypes.func.isRequired,
    isEditComment: PropTypes.bool.isRequired,
    votePost: PropTypes.func.isRequired
    //match: PropTypes.object.isRequired,
    //location: PropTypes.object.isRequired,
}


//Category = withRouter(Category);
export default Category;

