import commentTypes from '../constants/commentTypes';

const newComment = payload => ({
  _id: Date.now(),
  content: payload.content,
  createdAt: Date.now(),
  updatetAt: Date.now(),
  createdByID: payload.userID,
  taskID: payload.taskID,
});

export const loadComments = payload => ({
  type: commentTypes.LOAD_COMMENTS,
  payload,
});

export const addComment = payload => ({
  type: commentTypes.ADD_COMMENT,
  payload: newComment(payload),
});

export const updateComment = (id, payload) => ({
  type: commentTypes.UPDATE_COMMENT,
  id,
  payload,
});

export const deleteComment = id => ({
  type: commentTypes.DELETE_COMMENT,
  id,
});

export const openEditComment = () => ({
  type: commentTypes.OPEN_EDIT_COMMENT,
});

export const closeEditComment = () => ({
  type: commentTypes.CLOSE_EDIT_COMMENT,
});
