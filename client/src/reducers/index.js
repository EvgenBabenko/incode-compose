import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import user from './userReducers';
import dashboard from './dashboardReducers';
import comments from './commentReducers';

export default combineReducers({
  user,
  dashboard,
  comments,
  router: routerReducer,
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
});
