import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import AuthForm from '../../../components/Auth/AuthForm/AuthForm';
import { signup, toggleLocalStorage } from '../../../store/actions/userActions';
import { clearNotifyMessage } from '../../../store/actions/commonActions';

class SignupContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    this.boundActionCreators = bindActionCreators({
      toggleLocalStorage, clearNotifyMessage,
    }, dispatch);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { dispatch } = this.props;

    dispatch(signup(values));
  }

  render() {
    return (
      <AuthForm
        onSubmit={this.submit}
        title="Create your account"
        titleButton="Create accaunt"
        titleRedirect="Already have an account with us? "
        titleRedirectButton="Log in instead."
        actionRedirect="/login"
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

SignupContainer.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(SignupContainer);
