import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import history from '../history.js'
import Comments from './Comments.js'
import CreateEditComment from './CreateEditComment'
import EditPost from './EditPost'
import Modal from 'react-modal';
import EditComment from './EditComment'
import {votePost} from "../actions/index";

class Post extends Component {
    isCurrentPost = false;
    isCurrentComment = false;

    componentDidMount(){
        debugger;
        this.props.loadingCommentsToPost(this.props.post.id);
        this.props.loadSinglePost(this.props.post.id);
        this.props.closeCreateEditPost();

    }

    onDeletePost = (postId) => {
        let locationPath="";
        let history = {};
        if (this.props.history) {
            locationPath = this.props.history.location.pathname;
            history = this.props.history;
        }

        let posts = this.props.posts;
        this.props.deletePost(postId).then((data) => {
            if (locationPath && locationPath.indexOf("postId") > -1) {
                history.push('/404');
            }
        });


    };

    onEditPost = () => {
        this.isCurrentPost = true;
        this.props.openEditPost();
    };

    onCreateComment = () => {
        this.isCurrentComment = true;
        this.props.openCreateEditComment();
    };

    render() {
        const {post, comments, closeCreateEditComment, openCreateEditComment, createEditComment, editPost, history,
            deletePost ,deleteComment ,editComment, closeEditPost, openEditPost, isEditPost, closeEditComment, openEditComment, isEditComment} = this.props;
        const date = new Date(post.timestamp);

        return (
            <div className="post">
                <div className="post-details">
                    <table>
                        <caption>Post title - {post.title}</caption>
                        <thead>
                            <tr>
                                <th>Post body</th>
                                <th>Post author</th>
                                <th>Post created on</th>
                                <th>Post vote score</th>
                                <th>Post comments number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{post.body}</td>
                                <td>{post.author}</td>
                                <td>{date.toString()}</td>
                                <td>{post.voteScore}</td>
                                <td>{post.commentCount}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className="add-comment">
                    <button onClick={(e) => this.onCreateComment()}>Add a comment</button>
                </div>
                <div className='buttons'>
                    <button className='edit' onClick={(e) => this.onEditPost(this)}>Edit Post</button>
                    <button className='delete' onClick={(e) => this.onDeletePost(post.id)}>Delete Post</button>
                    <button onClick={(e) => this.props.votePost({id: post.id, option: 'upVote'})}>Vote up</button>
                    <button onClick={(e) =>  this.props.votePost({id: post.id, option: 'downVote'})}>Vote down</button>
                </div>

                <Comments comments={comments} voteComment={this.props.voteComment} editComment={editComment} isEditComment={isEditComment} openEditComment={openEditComment} closeEditComment={closeEditComment} deleteComment={deleteComment}/>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    ariaHideApp={false}
                    isOpen={createEditComment && this.isCurrentComment}
                    onRequestClose={closeCreateEditComment}
                    contentLabel='Modal'
                >
                    <CreateEditComment post={post} addCommentToPost={this.props.addCommentToPost} closeCreateEditComment={closeCreateEditComment}/>
                </Modal>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    ariaHideApp={false}
                    isOpen={isEditPost && this.isCurrentPost}
                    onRequestClose={closeEditPost}
                    contentLabel='Modal'
                >
                    <EditPost loadSinglePost={this.props.loadSinglePost} editPost={this.props.editPost} post={post} closeEditPost={this.props.closeEditPost}/>
                </Modal>
            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    loadSinglePost: PropTypes.func.isRequired,
    loadingCommentsToPost:  PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    openCreateEditComment: PropTypes.func.isRequired,
    createEditComment: PropTypes.bool.isRequired,
    closeCreateEditComment: PropTypes.func.isRequired,
    closeCreateEditPost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    isEditPost: PropTypes.bool.isRequired,
    closeEditPost: PropTypes.func.isRequired,
    openEditPost: PropTypes.func.isRequired,
    isEditComment: PropTypes.bool.isRequired,
    openEditComment: PropTypes.func.isRequired,
    closeEditComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    voteComment: PropTypes.func.isRequired,
    votePost: PropTypes.func.isRequired



}

//Post = withRouter(Post);
export default Post;