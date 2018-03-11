import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import history from '../history.js'
import Comments from './Comments.js'
import CreateEditComment from './CreateEditComment'
import Modal from 'react-modal';
import EditComment from './EditComment.js'

class Comment extends Component {
    componentDidMount(){

    }

    render() {
        const {comment, isEditComment, closeEditComment, editComment} = this.props;
        console.log(comment);

        return (
            <div className="comment">
                <table>
                    <caption>Comment Details</caption>
                    <thead>
                        <tr>
                            <th>Comment</th>
                            <th>Vote Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{comment.body}</td>
                            <td>{comment.voteScore}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired

}

export default Comment;