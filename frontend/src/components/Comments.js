import React, {Component} from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash'
import Category from './Category'
import {Link} from 'react-router-dom'
import Comment from './Comment.js'
import EditComment from './EditComment'
import Modal from 'react-modal';

class Comments extends Component {

    currentCommentId = 0;
    onEditComment = (data, current) => {
        this.currentCommentId = current.id;
        this.props.openEditComment();
    };
    render(){

        let {comments, closeEditComment, openEditComment, isEditComment, deleteComment, editComment, voteComment } = this.props;
        comments = comments || [];
        return (
            <div className="comments-list">
                <ol>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <Comment editComment={editComment} isEditComment={isEditComment}
                                     closeEditComment={closeEditComment} comment={comment}/>
                            <button onClick={(e) => this.onEditComment(this, comment)}>Edit comment</button>
                            <button onClick={(e) => deleteComment(comment.id)}>Delete comment</button>
                            <button onClick={(e) => voteComment({id: comment.id, option: 'upVote'})}>Vote up</button>
                            <button onClick={(e) => voteComment({id: comment.id, option: 'downVote'})}>Vote down
                            </button>

                            <Modal
                                className='modal'
                                overlayClassName='overlay'
                                ariaHideApp={false}
                                isOpen={isEditComment && comment.id === this.currentCommentId}
                                onRequestClose={closeEditComment}
                                contentLabel='Modal'
                            >
                                <EditComment editComment={editComment} comment={comment}
                                             closeEditComment={closeEditComment}/>
                            </Modal>
                        </div>

                    ))}
                </ol>
            </div>
        )
    }

}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    closeEditComment: PropTypes.func.isRequired,
    openEditComment: PropTypes.func.isRequired,
    isEditComment: PropTypes.bool.isRequired,
    editComment: PropTypes.func.isRequired,
    voteComment: PropTypes.func.isRequired
};

export default Comments;