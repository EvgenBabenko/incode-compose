import React from 'react';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LoginButtonContainer from '../containers/LoginButtonContainer';
import history from '../helpers/history';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = (props) => {
  const { classes } = props;

  function handleRedirect() {
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={handleRedirect} color="default">
            Home
          </Button>
          <Typography variant="title" color="inherit" className={classes.flex}>
            InCode-App
          </Typography>
          <LoginButtonContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: T.objectOf(T.string).isRequired,
};

export default withStyles(styles)(Header);
