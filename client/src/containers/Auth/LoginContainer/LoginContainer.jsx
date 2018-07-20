import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import AuthForm from '../../../components/Auth/AuthForm/AuthForm';
import { login, toggleLocalStorage, logout } from '../../../store/actions/userActions';
import { clearNotifyMessage } from '../../../store/actions/commonActions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    dispatch(logout());

    this.boundActionCreators = bindActionCreators({
      toggleLocalStorage, clearNotifyMessage,
    }, dispatch);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { dispatch } = this.props;

    dispatch(login(values));
  }

  render() {
    return (
      <AuthForm
        onSubmit={this.submit}
        title="Login"
        titleButton="Login"
        titleRedirect="Don't have an InCode account yet? "
        titleRedirectButton="Sign up now!"
        actionRedirect="/signup"
        {...this.props}
        {...this.boundActionCreators}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLocalStorage: state.user.tokenStorage.isLocalStorage,
  notifyMessage: state.common.notifyMessage,
});

LoginContainer.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(LoginContainer);
