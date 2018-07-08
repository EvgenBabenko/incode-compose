import dashboardTypes from '../constants/dashboardTypes';
import services from '../services';

const dashboardRequest = () => ({ type: dashboardTypes.DASHBOARD_REQUEST });
const dashboardSuccess = data => ({ type: dashboardTypes.DASHBOARD_SUCCESS, data });
const dashboardFailure = err => ({ type: dashboardTypes.DASHBOARD_FAILURE, err });

// export const fetchDashboard = userID => (dispatch) => {
export const fetchDashboard = () => async (dispatch) => {
  dispatch(dashboardRequest());

  try {
    const { data } = await services.dashboardService.fetchDashboard();

    dispatch(dashboardSuccess(data));
  } catch (err) {
    dispatch(dashboardFailure(err));
  }
};

const taskDetailsRequest = () => ({ type: dashboardTypes.TASK_DETAILS_REQUEST });
const taskDetailsSuccess = data => ({ type: dashboardTypes.TASK_DETAILS_SUCCESS, data });
const taskDetailsFailure = err => ({ type: dashboardTypes.TASK_DETAILS_FAILURE, err });

export const fetchTask = id => async (dispatch) => {
  dispatch(taskDetailsRequest());

  try {
    const { data } = await services.dashboardService.fetchTask(id);

    dispatch(taskDetailsSuccess(data));
  } catch (err) {
    dispatch(taskDetailsFailure(err));
  }
};

// const addTaskRequest = () => ({ type: dashboardTypes.ADD_TASK_REQUEST });
// const addTaskSuccess = data => ({ type: dashboardTypes.ADD_TASK_SUCCESS, data });
// const addTaskFailure = err => ({ type: dashboardTypes.ADD_TASK_FAILURE, err });

export const addTask = payload => async (dispatch) => {
  services.dashboardService.addTask(payload)
    .then(() => dispatch(fetchDashboard()));
};

export const updateTask = (id, payload) => (dispatch) => {
  services.dashboardService.updateTask(id, payload)
    .then(() => dispatch(fetchDashboard()))
    .then(() => dispatch(fetchTask(id)));
};

export const deleteTask = id => (dispatch) => {
  services.dashboardService.deleteTask(id)
    .then(() => dispatch(fetchDashboard()));
};

export const openEditTask = () => ({
  type: dashboardTypes.OPEN_EDIT_TASK,
});

export const closeEditTask = () => ({
  type: dashboardTypes.CLOSE_EDIT_TASK,
});
