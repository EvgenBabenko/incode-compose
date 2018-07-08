import userTypes from '../constants/userTypes';

const initialState = {
  isLogin: false,
  profile: {},
  isRequest: false,
  isEditProfile: false,
  isAdmin: false,
  userID: null,
};

const ADMIN = 'admin';

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_USER_REQUEST:
    case userTypes.UPDATE_PROFILE_REQUEST:
    case userTypes.REGISTER_REQUEST:
    case userTypes.LOGIN_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case userTypes.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
      });
    case userTypes.REGISTER_FAILURE:
      return {
        ...state,
        ...initialState,
      };
    case userTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
      });
    case userTypes.LOGIN_FAILURE:
      return {
        ...state,
        ...initialState,
      };
    case userTypes.LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    case userTypes.GET_USER_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
        profile: action.data.profile,
        isAdmin: action.data.role === ADMIN,
        userID: action.data._id,
      });
    case userTypes.GET_USER_FAILURE:
      return {
        ...state,
        profile: {},
      };
    case userTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isRequest: false,
        profile: action.data.profile,
      };
    case userTypes.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        profile: {},
      };
    case userTypes.OPEN_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: true,
      };
    case userTypes.CLOSE_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: false,
      };
    default:
      return state;
  }
};
