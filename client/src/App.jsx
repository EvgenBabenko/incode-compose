import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import getToken from './helpers/getToken';
import store from './store/store';
import Layout from './components/Layout/Layout';
import { getUser } from './store/actions/userActions';

if (getToken()) {
  store.dispatch(getUser());
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
);

export default App;
