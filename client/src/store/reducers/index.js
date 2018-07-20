import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import user from './userReducers';
import tasks from './taskReducers';
import comments from './commentReducers';
import common from './commonReducers';

export default combineReducers({
  user,
  tasks,
  comments,
  common,
  router: routerReducer,
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
});
