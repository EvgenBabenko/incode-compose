import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import AuthButton from '../../../components/Header/AuthButton/AuthButton';
import { logout } from '../../../store/actions/userActions';

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    this.boundActionCreators = bindActionCreators({ logout }, dispatch);
  }

  render() {
    return (
      <AuthButton {...this.props} {...this.boundActionCreators} />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

AuthContainer.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(AuthContainer);
