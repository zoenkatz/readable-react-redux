import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes.js'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'


const initialCommentState = {
    id: null,
    parentId: null,
    timestamp: null,
    body: null,
    author: null,
    voteScore: null,
    deleted: null,
    parentDeleted: null
};

function comments(state = [], action){
    debugger;
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS_SUCCESS:
            return action.data;
        case actionTypes.ADD_COMMENT_TO_POST_SUCCESS:
            return state.concat(action.data);
        case actionTypes.DELETE_COMMENT_SUCCESS:
            return _.reject(state, {'id': action.data.id});
        case actionTypes.VOTE_COMMENT_SUCCESS:
            return _.reject(state, {'id': action.data.id}).concat(action.data);
        case actionTypes.EDIT_COMMENT_SUCCESS:
            return _.reject(state, {'id': action.data.id}).concat(action.data);
        case actionTypes.LOAD_SINGLE_POST_SUCCESS:
            return state;
        default :
            return state
    }
}

function categories(state = [], action) {
    debugger;
    switch (action.type) {
        case actionTypes.LOAD_CATEGORIES_SUCCESS:
            return action.categories.categories;

        default :
            return state
    }
}

function posts(state = [], action) {

    switch (action.type) {
        case actionTypes.LOAD_POSTS_SUCCESS:
            return action.posts;
        case actionTypes.LOAD_POSTS_FOR_CATEGORY_SUCCESS:
            return action.posts;
        case actionTypes.ADD_NEW_POST_SUCCESS:
            return state.concat(action.data);
        case actionTypes.EDIT_POST_SUCCESS:
            return _.reject(state, {'id': action.data.id}).concat(action.data);
        case actionTypes.DELETE_POST_SUCCESS:
            return _.reject(state, {'id': action.data.id});
        case actionTypes.VOTE_POST_SUCCESS:
            return _.reject(state, {'id': action.data.id}).concat(action.data);
        case actionTypes.DELETE_COMMENT_SUCCESS:
            (_.find(state, {'id': action.data.parentId}).commentCount--);
            return state;
        case actionTypes.ADD_COMMENT_TO_POST_SUCCESS:
            _.find(state, {'id': action.data.parentId}).commentCount++;
            return state;
        case actionTypes.LOAD_SINGLE_POST_SUCCESS:
            return state;
        case actionTypes.DELETE_POST_SUCCESS:
            return _.reject(state, {'id': action.data.id});
        default :
            return state
    }
}

const initialPostState = {
    id: null,
    timestamp: null,
    title: null,
    body: null,
    author: null,
    category: null,
    voteScore: null,
    deleted: null
}

const initialNewPostState = {
    id:'',
    timestamp:'',
    title: '',
    body:'',
    author: '',
    category:''
};

const newPost = formReducer('newPost', initialNewPostState);
const newComment = formReducer('newComment', initialNewPostState);


export default combineReducers({
    posts,
    categories,
    newPost,
    newComment,
    comments
})