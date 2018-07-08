import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import history from '../helpers/history';
import Profile from '../containers/Profile';
import Dashboard from '../containers/Dashboard';
import TaskDetailsConainer from '../containers/TaskDetailsConainer';
import NotFound from './404';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';
import PrivateRoute from './PrivateRoute';

const Routing = () => (
  <ConnectedRouter history={history}>
    <React.Fragment>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/task/:id" component={TaskDetailsConainer} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      {/* <Route component={NotFound} /> */}
    </React.Fragment>
  </ConnectedRouter>
);

export default Routing;
