import types from '../types/userTypes';
import history from '../../helpers/history';
import config from '../../config';
import HTTP from '../../helpers/httpCommon';
import { createNotifyMessage, clearNotifyMessage } from './commonActions';
import actionCreaters from '../../helpers/actionCreaters';

export const toggleLocalStorage = () => ({ type: types.TOGGLE_LOCAL_STORAGE });

export const saveToken = data => ({ type: types.SAVE_TOKEN, data });

export const getUser = () => actionCreaters('GET_USER', () => HTTP().get('/auth/me'));

export const logout = () => {
  localStorage.removeItem(config.StorageKey);

  history.push('/login');

  return { type: types.LOGOUT };
};

const auth = (typePrefix, fn, redirect) => async (dispatch, getState) => {
  dispatch(clearNotifyMessage());

  dispatch({ type: `${typePrefix}_REQUEST` });

  try {
    const data = await fn();

    if (getState().user.tokenStorage.isLocalStorage) {
      if (data.data.token) {
        localStorage.setItem(config.StorageKey, JSON.stringify(data.data.token));
      }
    } else {
      dispatch(saveToken(data.data.token));
    }

    dispatch({ type: `${typePrefix}_SUCCESS`, data });

    dispatch(getUser());

    history.push('/');
  } catch (error) {
    const { response: { data: { message } } } = error;

    dispatch(createNotifyMessage(message));

    history.push(redirect);
  }
};

export const login = payload => auth('LOGIN', () => HTTP().post('/auth/login', { ...payload }), '/login');

export const signup = payload => auth('REGISTER', () => HTTP().post('/auth/signup', { ...payload }), '/signup');

export const updateProfile = (id, payload) => actionCreaters('UPDATE_PROFILE', () => HTTP().put(`/user/${id}`, { ...payload }));

export const deleteAccount = id => async (dispatch) => {
  dispatch({ type: types.DELETE_ACCOUNT_REQUEST });

  try {
    const { data } = await HTTP().delete(`/user/${id}`);

    dispatch({ type: types.DELETE_ACCOUNT_SUCCESS, data });

    dispatch(logout());

    history.push('/login');
  } catch (error) {
    dispatch({ type: types.DELETE_ACCOUNT_FAILURE, error });
  }
};

export const openEditProfile = () => ({ type: types.OPEN_EDIT_PROFILE });

export const closeEditProfile = () => ({ type: types.CLOSE_EDIT_PROFILE });
