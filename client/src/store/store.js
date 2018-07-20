import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

import history from '../helpers/history';
import reducers from './reducers';

const middleware = routerMiddleware(history.history);

export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(thunk, middleware)),
);
