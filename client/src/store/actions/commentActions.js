import types from '../types/commentTypes';
import HTTP from '../../helpers/httpCommon';
import actionCreaters from '../../helpers/actionCreaters';
import store from '../store';

const index = id => store.getState().comments.commentList.findIndex(comment => comment._id === id);

export const getCommentList = () => actionCreaters('GET_COMMENT_LIST', () => HTTP().get('/comment/'));

export const addComment = payload => actionCreaters('ADD_COMMENT', () => HTTP().post('/comment/', { ...payload }));

export const updateComment = (id, payload) => actionCreaters('UPDATE_COMMENT', () => HTTP().put(`/comment/${id}`, { ...payload }), index(id));

export const deleteComment = id => actionCreaters('DELETE_COMMENT', () => HTTP().delete(`/comment/${id}`), index(id));

export const toggleEditComment = () => ({ type: types.TOGGLE_EDIT_COMMENT });
