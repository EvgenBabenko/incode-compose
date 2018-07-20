import React from 'react';
import { Field, reduxForm } from 'redux-form';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

import validate from './validate';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-start',
  },
};

const renderTextField = ({
  input, label, meta: { touched, error }, ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const TaskAddForm = (props) => {
  const {
    handleSubmit, pristine, submitting, classes,
  } = props;

  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Field name="title" component={renderTextField} label="Task title" fullWidth />
        <Field name="description" component={renderTextField} label="Task description" multiLine rows={2} fullWidth />
        <Button color="primary" type="submit" disabled={pristine || submitting} className={classes.button}>
          Add a task
        </Button>
      </form>
    </MuiThemeProvider>
  );
};

TaskAddForm.propTypes = {
  handleSubmit: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
  classes: T.objectOf(T.any).isRequired,
};

renderTextField.propTypes = {
  input: T.objectOf(T.any).isRequired,
  label: T.string.isRequired,
  meta: T.objectOf(T.any).isRequired,
};

const TaskAddFormWrapper = reduxForm({
  form: 'taskAdd',
  validate,
})(TaskAddForm);

export default withStyles(styles)(TaskAddFormWrapper);
