import types from '../types/userTypes';

const initialState = {
  user: {
    profile: {},
  },
  isLogin: false,
  isRequest: false,
  isEditProfile: false,
  isAdmin: false,
  tokenStorage: {
    isLocalStorage: false,
    token: null,
  },
};

const ADMIN = 'admin';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
    case types.UPDATE_PROFILE_REQUEST:
    case types.REGISTER_REQUEST:
    case types.LOGIN_REQUEST:
    case types.DELETE_ACCOUNT_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
      });
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        notifyMessage: action.message,
      };
    case types.DELETE_ACCOUNT_SUCCESS:
    case types.LOGOUT:
      return initialState;
    case types.GET_USER_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
        isAdmin: action.data.role === ADMIN,
        user: action.data,
      });
    case types.GET_USER_FAILURE:
      return {
        ...state,
        user: initialState.user,
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isRequest: false,
        user: action.data,
      };
    case types.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        user: initialState.user,
      };
    case types.DELETE_ACCOUNT_FAILURE:
      return state;
    case types.OPEN_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: true,
      };
    case types.CLOSE_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: false,
      };
    case types.TOGGLE_LOCAL_STORAGE:
      return {
        ...state,
        tokenStorage: {
          ...state.tokenStorage,
          isLocalStorage: !state.tokenStorage.isLocalStorage,
        },
      };
    case types.SAVE_TOKEN:
      return {
        ...state,
        tokenStorage: {
          ...state.tokenStorage,
          token: action.data,
        },
      };
    default:
      return state;
  }
};
