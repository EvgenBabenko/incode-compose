import dashboardTypes from '../constants/dashboardTypes';

const initialState = {
  taskList: [],
  isRequest: false,
  isEditTask: false,
  taskDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case dashboardTypes.DASHBOARD_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case dashboardTypes.DASHBOARD_SUCCESS:
      return {
        ...state,
        isRequest: false,
        taskList: action.data,
      };
    case dashboardTypes.DASHBOARD_FAILURE:
      return {
        ...state,
        taskList: initialState.taskList,
      };
    case dashboardTypes.TASK_DETAILS_SUCCESS:
      return {
        ...state,
        isRequest: false,
        taskDetails: action.data,
      };
    case dashboardTypes.TASK_DETAILS_FAILURE:
      return {
        ...state,
        taskDetails: null,
      };
    case dashboardTypes.OPEN_EDIT_TASK:
      return {
        ...state,
        isEditTask: true,
      };
    case dashboardTypes.CLOSE_EDIT_TASK:
      return {
        ...state,
        isEditTask: initialState.isEditTask,
      };
    case dashboardTypes.CLEAR_DASHBOARD:
      return initialState;
    default:
      return state;
  }
};
