import userTypes from '../constants/userTypes';
import services from '../services';
import history from '../helpers/history';

const getUserRequest = () => ({ type: userTypes.GET_USER_REQUEST });
const getUserSuccess = data => ({ type: userTypes.GET_USER_SUCCESS, data });
const getUserFailure = err => ({ type: userTypes.GET_USER_FAILURE, err });

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const { data } = await services.userService.getUser();

    dispatch(getUserSuccess(data));
  } catch (err) {
    dispatch(getUserFailure(err));
  }
};

const updateProfileRequest = () => ({ type: userTypes.UPDATE_PROFILE_REQUEST });
const updateProfileSuccess = data => ({ type: userTypes.UPDATE_PROFILE_SUCCESS, data });
const updateProfileFailure = err => ({ type: userTypes.UPDATE_PROFILE_FAILURE, err });

export const updateProfile = (id, payload) => async (dispatch) => {
  dispatch(updateProfileRequest());

  try {
    const { data } = await services.userService.updateProfile(id, payload);

    dispatch(updateProfileSuccess(data));
  } catch (err) {
    dispatch(updateProfileFailure(err));
  }
};

export const openEditProfile = () => ({ type: userTypes.OPEN_EDIT_PROFILE });

export const closeEditProfile = () => ({ type: userTypes.CLOSE_EDIT_PROFILE });

const registerRequest = () => ({ type: userTypes.REGISTER_REQUEST });
const registerSuccess = data => ({ type: userTypes.REGISTER_SUCCESS, data });
const registerFailure = err => ({ type: userTypes.REGISTER_FAILURE, err });

export const signUp = payload => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const data = await services.userService.auth('/auth/signup', payload);

    dispatch(registerSuccess(data));

    await dispatch(getUser());

    history.push('/');
  } catch (err) {
    dispatch(registerFailure(err));

    history.push('/signup');
  }
};

export const logOut = () => {
  services.userService.logOut();

  history.push('/login');

  return { type: userTypes.LOGOUT };
};

const loginRequest = () => ({ type: userTypes.LOGIN_REQUEST });
const loginSuccess = data => ({ type: userTypes.LOGIN_SUCCESS, data });
const loginFailure = err => ({ type: userTypes.LOGIN_FAILURE, err });

export const logIn = payload => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const data = await services.userService.auth('/auth/login', payload);

    dispatch(loginSuccess(data));

    await dispatch(getUser());

    history.push('/');
  } catch (err) {
    dispatch(loginFailure(err));

    history.push('/login');
  }
};
