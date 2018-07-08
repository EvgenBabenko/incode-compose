import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import LogInForm from '../components/Forms/LogInForm';

import * as userActionCreators from '../actions/userActions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { dispatch } = this.props;

    dispatch(userActionCreators.signUp(values));
  }

  render() {
    return (
      <LogInForm onSubmit={this.submit} title="Please register" primaryTitle="SignUp" secondaryTitle="Login" action="/login" />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

SignUp.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(SignUp);
