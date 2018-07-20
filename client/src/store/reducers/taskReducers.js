import types from '../types/taskTypes';

const initialState = {
  isRequest: false,
  taskList: [],
  taskDetails: null,
  isEditTask: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DASHBOARD_REQUEST:
    case types.TASK_DETAILS_REQUEST:
    case types.ADD_TASK_REQUEST:
    case types.UPDATE_TASK_REQUEST:
    case types.DELETE_TASK_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case types.DASHBOARD_SUCCESS:
      return {
        ...state,
        isRequest: false,
        taskList: action.data,
      };
    case types.DASHBOARD_FAILURE:
      return {
        ...state,
        taskList: initialState.taskList,
      };
    case types.TASK_DETAILS_SUCCESS:
      return {
        ...state,
        isRequest: false,
        taskDetails: action.data,
      };
    case types.TASK_DETAILS_FAILURE:
      return {
        ...state,
        taskDetails: null,
      };
    case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        isRequest: false,
        taskList: state.taskList.concat(action.data),
      };
    case types.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        isRequest: false,
        taskList: [
          ...state.taskList.slice(0, action.index),
          action.data,
          ...state.taskList.slice(action.index + 1),
        ],
        taskDetails: state.taskDetails ? action.data : null,
      };
    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        isRequest: false,
        taskList: [
          ...state.taskList.slice(0, action.index),
          ...state.taskList.slice(action.index + 1),
        ],
      };
    case types.CLEAR_TASK_DETAILS:
      return {
        ...state,
        taskDetails: null,
      };
    case types.TOGGLE_EDIT_TASK:
      return {
        ...state,
        isEditTask: !state.isEditTask,
      };
    default:
      return state;
  }
};
