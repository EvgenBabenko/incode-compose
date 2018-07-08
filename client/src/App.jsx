import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import config from './config';
import store from './helpers/store';
import Layout from './components/Layout';
import * as userActions from './actions/userActions';

const hasUserToken = JSON.parse(localStorage.getItem(config.StorageKey));

if (hasUserToken) {
  store.dispatch(userActions.getUser());
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
);

export default App;
