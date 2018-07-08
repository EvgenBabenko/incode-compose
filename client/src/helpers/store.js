import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import history from './history';
import reducer from '../reducers';

const middleware = routerMiddleware(history);

export default createStore(
  reducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk, middleware)),
);
