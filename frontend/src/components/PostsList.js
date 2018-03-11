import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import styles from '../App.css';

const PostsList = ({posts, onSortPostsList, loadSinglePost, comments, openCreateEditComment,  createEditComment, loadingCommentsToPost, category,
                       closeCreateEditComment, closeCreateEditPost, addCommentToPost ,editPost, deletePost, isEditPost, closeEditPost,
                       openEditPost, openEditComment, closeEditComment, createEditPost, isEditComment, deleteComment, editComment, voteComment, votePost}) => {

    posts = posts || [];

    return (
        <div className='posts-list'>
            <h3 className='posts-header'>
                Posts
            </h3>
            <div className="posts-sort">
                <select value={posts.value} onChange={(event) => onSortPostsList(posts, event.target.value)}>
                    <option value="voteScore">Vote Score</option>
                    <option value="timestamp">Timestamp</option>

                </select>
            </div>
            <ol>
                {posts && posts.map((post, j) => (
                    <div key={j} className='post-link'>
                        <li onClick={(e) => loadSinglePost(post.id)}>
                            <Link to={`/${post.category}/${post.id}`} className='post-title'>{post.title}</Link>
                            <Post post={post} comments={comments} openCreateEditComment={openCreateEditComment}
                                  createEditComment={createEditComment} loadSinglePost={loadSinglePost}
                                  loadingCommentsToPost={loadingCommentsToPost} addCommentToPost={addCommentToPost}
                                  closeCreateEditComment={closeCreateEditComment} closeCreateEditPost={closeCreateEditPost}
                                  editPost={editPost} deletePost={deletePost} isEditPost={isEditPost}
                                  openEditPost={openEditPost} closeEditPost={closeEditPost}
                                  openEditComment={openEditComment} closeEditComment={closeEditComment} isEditComment={isEditComment}
                                  deleteComment={deleteComment} editComment={editComment} createEditPost={createEditPost}
                                  voteComment={voteComment} votePost={votePost}></Post>
                        </li>
                    </div>
                ))}
            </ol>
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    onSortPostsList: PropTypes.func.isRequired,
    loadSinglePost: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    openCreateEditComment: PropTypes.func.isRequired,
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
    closeCreateEditPost: PropTypes.func.isRequired,
    closeEditPost: PropTypes.func.isRequired,
    openEditPost: PropTypes.func.isRequired,
    openEditComment: PropTypes.func.isRequired,
    isEditComment: PropTypes.bool.isRequired,
    votePost: PropTypes.func.isRequired
};

export default PostsList;