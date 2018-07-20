import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import history from '../../../helpers/history';
import Profile from '../../../containers/Profile/ProfileContainer/ProfileContainer';
import TaskListContainer from '../../../containers/Tasks/TaskListContainer/TaskListContainer';
import TaskDetailsConainer from '../../../containers/Tasks/TaskDetailsContainer/TaskDetailsContainer';
import NotFound from '../../404/404';
import Signup from '../../../containers/Auth/SignupContainer/SignupContainer';
import Login from '../../../containers/Auth/LoginContainer/LoginContainer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Routing = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <PrivateRoute exact path="/" component={TaskListContainer} />
      <PrivateRoute path="/task/:id" component={TaskDetailsConainer} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default Routing;
