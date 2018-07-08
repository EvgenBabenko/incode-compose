import React from 'react';
import T from 'prop-types';

import Button from '@material-ui/core/Button';

import UserMenu from './UserMenu';
import history from '../helpers/history';

const User = (props) => {
  const { isLogin } = props;

  function handleRedirect() {
    history.push('/');
  }

  return (
    <React.Fragment>
      {!isLogin
        ? (
          <Button onClick={handleRedirect} color="inherit">
            Login
          </Button>
        )
        : <UserMenu {...props} />
      }
    </React.Fragment>
  );
};

User.propTypes = {
  isLogin: T.bool.isRequired,
};

export default User;
