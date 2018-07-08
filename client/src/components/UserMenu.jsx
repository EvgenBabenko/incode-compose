import React, { Component } from 'react';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import history from '../helpers/history';

const styles = {
  link: {
    textDecoration: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
};

class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleOpenMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleCloseMenu() {
    this.setState({ anchorEl: null });

    history.push('/profile');
  }

  handleLogout() {
    const { dispatch, logOut } = this.props;

    this.handleCloseMenu();

    dispatch(logOut());
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleOpenMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleCloseMenu}
        >
          <MenuItem onClick={this.handleCloseMenu}>
            Profile
          </MenuItem>
          <MenuItem onClick={this.handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: T.objectOf(T.string).isRequired,
};

export default withStyles(styles)(UserMenu);
