import React from 'react';
import { Field, reduxForm } from 'redux-form';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

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
  card: {
    width: '92%',
    padding: '20px',
    margin: '20px',
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

const TaskForm = (props) => {
  const {
    handleSubmit, pristine, submitting, classes, handleCloseEditTask,
  } = props;

  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Card className={classes.card}>
          <Field name="title" component={renderTextField} label="Task title" fullWidth />
          <Field name="description" component={renderTextField} label="Task description" multiLine rows={2} fullWidth />
          <div className={classes.button}>
            <Button color="primary" type="submit" disabled={pristine || submitting} autoFocus>
              Edit the task
            </Button>
            <Button onClick={handleCloseEditTask} color="primary">
              Cancel
            </Button>
          </div>
        </Card>
      </form>
    </MuiThemeProvider>
  );
};

TaskForm.propTypes = {
  handleSubmit: T.func.isRequired,
  handleCloseEditTask: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
  classes: T.objectOf(T.any).isRequired,
};

renderTextField.propTypes = {
  input: T.objectOf(T.any).isRequired,
  label: T.string.isRequired,
  meta: T.objectOf(T.any).isRequired,
};

const TaskFormWrapper = reduxForm({
  form: 'taskEdit',
  validate,
})(TaskForm);

export default withStyles(styles)(TaskFormWrapper);
