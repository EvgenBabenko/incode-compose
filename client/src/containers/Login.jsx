import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import LogInForm from '../components/Forms/LogInForm';

import * as userActionCreators from '../actions/userActions';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { dispatch } = this.props;

    dispatch(userActionCreators.logIn(values));
  }

  render() {
    return (
      <LogInForm onSubmit={this.submit} title="Please login" primaryTitle="Login" secondaryTitle="SignUp" action="/signup" />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

LogIn.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(LogIn);
