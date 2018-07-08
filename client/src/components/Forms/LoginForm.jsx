import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import T from 'prop-types';

import { TextField } from 'redux-form-material-ui';

import Button from '@material-ui/core/Button';

const LoginForm = (props) => {
  const {
    handleSubmit, pristine, submitting, primaryTitle, secondaryTitle, action, title,
  } = props;

  return (
    <React.Fragment>
      <h2>
        {title}
      </h2>
      <form onSubmit={handleSubmit}>
        <Field
          autoFocus
          name="email"
          component={TextField}
          type="text"
          label="Email"
          margin="dense"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <Field
          name="password"
          component={TextField}
          type="password"
          label="Password"
          margin="dense"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <Button color="primary" type="submit" variant="contained" disabled={pristine || submitting}>
          {primaryTitle}
        </Button>
        <p>
          or
        </p>
        <Link to={action}>
          <Button type="button" color="primary">
            {secondaryTitle}
          </Button>
        </Link>
      </form>
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  handleSubmit: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);
