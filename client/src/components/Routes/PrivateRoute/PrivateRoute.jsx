import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import T from 'prop-types';

import getToken from '../../../helpers/getToken';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (getToken()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
  />
);

PrivateRoute.propTypes = {
  component: T.func.isRequired,
  location: T.objectOf(T.string),
};

PrivateRoute.defaultProps = {
  location: undefined,
};

export default PrivateRoute;
