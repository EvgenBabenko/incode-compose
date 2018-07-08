import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import LoginButton from '../components/LoginButton';

import * as userActionCreators from '../actions/userActions';

class LoginButtonContainer extends Component {
  // static propTypes = {
  //   isLogin: T.string.isRequired,
  // };

  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(userActionCreators, dispatch);
  }

  render() {
    return (
      <LoginButton
        {...this.props}
        {...this.boundActionCreators}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

LoginButtonContainer.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(LoginButtonContainer);
