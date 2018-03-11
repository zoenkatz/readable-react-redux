import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions/index.js'
import Modal from 'react-modal';
import * as api from './utils/api';
import './App.css';
import CreateEditPost from './components/CreateEditPost'
import Post from './components/Post'
import Category from './components/Category'
import CategoriesList from './components/CategoriesList'
import PostsList from './components/PostsList'
import {Route, withRouter} from 'react-router-dom'
import './App.css'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import NotExist from "./components/NotExist";

class App extends Component {
    state = {
        categories: [],
        createEditPost: false,
        createEditComment: false,
        posts:[],
        comments: [],
        isEditPost: false,
        isEditComment: false
    }

    onSortPostsList = (list, filter) => {
        if(filter === 'timestamp') {
            this.setState(() => ({posts: list.sort((a, b) => a.timestamp - b.timestamp)}));
        }
        else if(filter === 'voteScore'){
            this.setState(() => ({posts: list.sort((a, b) => a.voteScore - b.voteScore)}));
        }
    };
    onSortCategoriesList = (list, filter) => {
        if(filter === 'timestamp') {
            this.setState(() => ({categories: list.sort((a, b) => a.timestamp - b.timestamp)}));
        }
        else if(filter === 'voteScore'){
            this.setState(() => ({categories: list.sort((a, b) => a.voteScore - b.voteScore)}));
        }
    };
    openCreateEditPost = () => this.setState(() => ({ createEditPost: true }));
    closeCreateEditPost = () => this.setState(() => ({ createEditPost: false }));
    openCreateEditComment = () => this.setState(() => ({ createEditComment: true }));
    closeCreateEditComment = () => this.setState(() => ({ createEditComment: false }));
    openEditPost = (post) => this.setState(() => ({ isEditPost: true }));
    closeEditPost = () => this.setState(() => ({ isEditPost: false }));
    openEditComment = () => this.setState(() => ({ isEditComment: true }));
    closeEditComment = () => this.setState(() => ({ isEditComment: false }));


    componentWillUpdate(){
        let history = this.props.history;
        if(this.props.history.location.pathname.split('/').length > 2) {
            return api.fetchDetailsForSinglePost(this.props.history.location.pathname.split('/')[2]).then(function(post){

                if(_.isEmpty(post)) {
                    history.push('/404');
                }

            });
        }
    }

    render() {
         const {createEditPost , createEditComment, isEditPost, isEditComment ,categories, posts} = this.state;
         const { post, addNewPost, editPost, selectCategory, history} = this.props;

        return (

            <div className='container'>
                <h2 className='header'>Readable starter project</h2>
                {(this.props.location.pathname.indexOf('404') > -1 || (this.props.location.pathname.indexOf("postId") > -1 && !_.some(this.props.posts, {'id':this.props.location.pathname.split('/')[2]}) && !this.props.posts.length)) ?
                    <Route exact path='/404' render={() => (
                        <div className='lists'>
                            <NotExist/>
                        </div>

                    )}/> :
                    <div>
                        <Route exact path='/' render={() => (

                            <div className='lists'>
                                <CategoriesList categories={this.props.categories}
                                                loadPostsForCategory={this.props.loadPostsForCategory}
                                                createEditPost={createEditPost}
                                                closeCreateEditPost={this.props.closeCreateEditPost}/>
                                <PostsList posts={this.props.posts} onSortPostsList={this.onSortPostsList}
                                           loadPostsForCategory={this.props.loadPostsForCategory}
                                           loadSinglePost={this.props.loadSinglePost}
                                           comments={this.props.comments} openCreateEditComment={this.openCreateEditComment}
                                           createEditComment={createEditComment}
                                           loadingCommentsToPost={this.props.loadingCommentsToPost}
                                           addCommentToPost={this.props.addCommentToPost}
                                           closeCreateEditComment={this.closeCreateEditComment}
                                           closeCreateEditPost={this.closeCreateEditPost}
                                           history={history} editPost={this.props.editPost}
                                           deletePost={this.props.deletePost} isEditPost={isEditPost}
                                           openEditPost={this.openEditPost} closeEditPost={this.closeEditPost}
                                           openEditComment={this.openEditComment} closeEditComment={this.closeEditComment}
                                           isEditComment={isEditComment}
                                           deleteComment={this.props.deleteComment} editComment={this.props.editComment}
                                           voteComment={this.props.voteComment} votePost={this.props.votePost}
                                           createEditPost={createEditPost}
                                />
                                <button id='addNewPost' className='button' onClick={(e) => this.openCreateEditPost()}>Add
                                    new post
                                </button>
                            </div>

                        )}/>
                    {this.props.categories.map((category, index) => (
                        <div key={index}>
                        <Route exact path={`/${category.path}`} render={() => (
                        <div id='category-page'>
                            <Link className='button' to={'/'}>Go to homepage</Link>
                            <Category category={category} categories={this.props.categories} posts={this.props.posts}
                                      onSortPostsList={this.onSortPostsList}
                                      createEditPost={createEditPost}
                                      closeCreateEditPost={this.closeCreateEditPost}
                                      loadPostsForCategory={this.props.loadPostsForCategory}
                                      loadSinglePost={this.props.loadSinglePost} history={history}
                                      openCreateEditPost={this.openCreateEditPost}
                                      comments={this.props.comments} createEditComment={createEditComment}
                                      loadingCommentsToPost={this.props.loadingCommentsToPost}
                                      addCommentToPost={this.props.addCommentToPost}
                                      closeCreateEditComment={this.closeCreateEditComment}
                                      deletePost={this.props.deletePost} isEditPost={isEditPost}
                                      openEditPost={this.openEditPost} closeEditPost={this.closeEditPost}
                                      isEditComment={isEditComment} closeEditComment={this.closeEditComment}
                                      deleteComment={this.props.deleteComment} editComment={this.props.editComment}
                                      editPost={this.props.editPost}
                                      voteComment={this.props.voteComment} votePost={this.props.votePost}
                                      openEditComment={this.openEditComment}
                                      openCreateEditComment={this.openCreateEditComment}
                            />
                        </div>
                    )}/>
                        {this.props.posts.map((post, i) => (
                            <Route key={i} exact path={`/${category.name}/${post.id}`} render={() => (

                                <div id='post-page'>
                                    <Link className='button' to={'/'}>Go to homepage</Link>
                                    <Post category={category} post={post} comments={this.props.comments}
                                          openCreateEditComment={this.openCreateEditComment}
                                          createEditComment={createEditComment} loadSinglePost={this.props.loadSinglePost}
                                          loadingCommentsToPost={this.props.loadingCommentsToPost}
                                          addCommentToPost={this.props.addCommentToPost}
                                          closeCreateEditComment={this.closeCreateEditComment}
                                          closeCreateEditPost={this.closeCreateEditPost}
                                          history={history} editPost={this.props.editPost}
                                          deletePost={this.props.deletePost} isEditPost={isEditPost}
                                          openEditPost={this.openEditPost} closeEditPost={this.closeEditPost}
                                          openEditComment={this.openEditComment} closeEditComment={this.closeEditComment}
                                          isEditComment={isEditComment}
                                          deleteComment={this.props.deleteComment} editComment={this.props.editComment}
                                          voteComment={this.props.voteComment} votePost={this.props.votePost}
                                    />
                                </div>
                            )}/>
                        ))}
                        </div>
                        ))}


                        <Modal
                        className='modal'
                        overlayClassName='overlay'
                        ariaHideApp={false}
                        isOpen={createEditPost}
                        onRequestClose={this.closeCreateEditPost}
                        contentLabel='Modal'
                        >
                        <CreateEditPost addNewPost={this.props.addNewPost} categories={this.props.categories} closeCreateEditPost={this.closeCreateEditPost}/>
                        </Modal>
                    </div>}

            </div>
        )
    }
}

App.propTypes = {
    posts: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired
}

function mapStateToProps (state, props) {
     return {
         posts: state.posts,
         categories: state.categories,
         category: state.category,
         post: state.post,
         comments: state.comments,
         comment: state.comment
     }
}

function mapDispatchToProps (dispatch) {
    return {
       // actions: bindActionCreators(actions, dispatch),
        addNewPost: (data) => dispatch(actions.addNewPost(data)),
        editPost: (data) => dispatch(actions.editPost(data)),
        deletePost: (data) => dispatch(actions.deletePost(data)),
        addCommentToPost: (data) => dispatch(actions.addCommentToPost(data)),
        editComment: (data) => dispatch(actions.editComment(data)),
        voteComment: (data) => dispatch(actions.voteComment(data)),
        votePost: (data) => dispatch(actions.votePost(data)),
        deleteComment: (data) => dispatch(actions.deleteComment(data)),
         //selectCategory: (data) => dispatch(actions.selectCategory(data)),
        loadPostsForCategory: (data) => dispatch(actions.loadPostsForCategory(data)),
        loadSinglePost: (data) => dispatch(actions.loadSinglePost(data)),
        loadingCommentsToPost: (data) => dispatch(actions.loadingCommentsToPost(data))


    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))

