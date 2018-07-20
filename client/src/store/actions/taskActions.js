import types from '../types/taskTypes';
import HTTP from '../../helpers/httpCommon';
import actionCreaters from '../../helpers/actionCreaters';
import store from '../store';

const index = id => store.getState().tasks.taskList.findIndex(task => task._id === id);

export const fetchDashboard = () => actionCreaters('DASHBOARD', () => HTTP().get('/'));

export const fetchTask = id => actionCreaters('TASK_DETAILS', () => HTTP().get(`/${id}`));

export const addTask = payload => actionCreaters('ADD_TASK', () => HTTP().post('/', { ...payload }));

export const updateTask = (id, payload) => actionCreaters('UPDATE_TASK', () => HTTP().put(`/${id}`, { ...payload }), index(id));

export const deleteTask = id => actionCreaters('DELETE_TASK', () => HTTP().delete(`/${id}`), index(id));

export const clearTaskDetails = () => ({ type: types.CLEAR_TASK_DETAILS });

export const toggleEditTask = () => ({ type: types.TOGGLE_EDIT_TASK });
