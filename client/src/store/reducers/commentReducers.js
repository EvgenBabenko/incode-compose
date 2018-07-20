import types from '../types/commentTypes';

const initialState = {
  isRequest: false,
  commentList: [],
  isEditComment: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENT_LIST_REQUEST:
    case types.ADD_COMMENT_REQUEST:
    case types.UPDATE_COMMENT_REQUEST:
    case types.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case types.GET_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        isRequest: false,
        commentList: action.data,
      };
    case types.GET_COMMENT_LIST_FAILURE:
      return {
        ...state,
        commentList: initialState.commentList,
      };
    case types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isRequest: false,
        commentList: state.commentList.concat(action.data),
      };
    case types.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        isRequest: false,
        commentList: [
          ...state.commentList.slice(0, action.index),
          action.data,
          ...state.commentList.slice(action.index + 1),
        ],
      };
    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        isRequest: false,
        commentList: [
          ...state.commentList.slice(0, action.index),
          ...state.commentList.slice(action.index + 1),
        ],
      };
    case types.TOGGLE_EDIT_COMMENT:
      return {
        ...state,
        isEditComment: !state.isEditComment,
      };
    default:
      return state;
  }
};
