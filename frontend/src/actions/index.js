import * as api from '../utils/api'
import * as actionTypes from './actionTypes.js'

export function voteCommentSuccess(data){
    return {type: actionTypes.VOTE_COMMENT_SUCCESS, data};
}

export function voteComment(params){
    debugger;
    return function(dispatch) {
        return api.votingOnComment(params.id, params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(voteCommentSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function votePostSuccess(data){
    return {type: actionTypes.VOTE_POST_SUCCESS, data};
}

export function votePost(params){
    debugger;
    return function(dispatch) {
        return api.votingOnPost(params.id, params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(votePostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function editCommentSuccess(data){
    return {type: actionTypes.EDIT_COMMENT_SUCCESS, data};
}

export function editComment(params){
    debugger;
    return function(dispatch) {
        return api.editExistingComment(params.id, params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(editCommentSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}


export function deleteCommentSuccess(data){
    return {type: actionTypes.DELETE_COMMENT_SUCCESS, data};
}

export function deleteComment(params){
    debugger;
    return function(dispatch) {
        return api.deletedFlagCommentToTrue(params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(deleteCommentSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deletePostSuccess(data){
    return {type: actionTypes.DELETE_POST_SUCCESS, data};
}

export function deletePost(params){
    debugger;
    return function(dispatch) {
        return api.deleteFlag(params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(deletePostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function editPostSuccess(data){
    return {type: actionTypes.EDIT_POST_SUCCESS, data};
}

export function editPost(params){
    debugger;
    return function(dispatch) {
        return api.editPost(params.id, params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(editPostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function addCommentToPostSuccess(data){
    return {type: actionTypes.ADD_COMMENT_TO_POST_SUCCESS, data};
}

export function addCommentToPost(params){
    debugger;
    return function(dispatch) {
        return api.addCommentToPost(params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(addCommentToPostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadingCommentsToPostSuccess(data){
    return {type: actionTypes.LOAD_COMMENTS_SUCCESS, data};
}

export function loadingCommentsToPost(params){
    debugger;
    return function(dispatch) {
        return api.getCommentsForPost(params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(loadingCommentsToPostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function addNewPostSuccess(data) {
    return {type: actionTypes.ADD_NEW_POST_SUCCESS, data};
}

export function addNewPost(params) {
    return function(dispatch) {
        return api.addNewPost(params).then(data => {
            if(!data){
                data = null;
            }
            dispatch(addNewPostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadSinglePostSuccess(data) {
    return {type: actionTypes.LOAD_SINGLE_POST_SUCCESS, data};
}

export function loadSinglePost(postId) {
    return function(dispatch) {
        return api.fetchDetailsForSinglePost(postId).then(data => {
            dispatch(loadSinglePostSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadPostsSuccess(posts) {
    return {type: actionTypes.LOAD_POSTS_SUCCESS, posts};
}

export function loadPosts() {
    return function(dispatch) {
        return api.fetchPosts().then(posts => {
            dispatch(loadPostsSuccess(posts));
        }).catch(error => {
            throw(error);
        });
    };
}



export function loadPostsForCategorySuccess(posts){
    return {type: actionTypes.LOAD_POSTS_FOR_CATEGORY_SUCCESS, posts};
}

export function loadPostsForCategory(category) {
    return function(dispatch) {
        return api.fetchPostsForCategory(category).then(posts => {
            dispatch(loadPostsForCategorySuccess(posts));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadCategoriesSuccess(categories) {
    return {type: actionTypes.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
    return function(dispatch) {
        return api.fetchCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => {
            throw(error);
        });
    };
}