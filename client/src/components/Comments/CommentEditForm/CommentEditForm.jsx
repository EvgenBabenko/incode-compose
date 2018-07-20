import React from 'react';
import { Field, reduxForm } from 'redux-form';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

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

const CommentEditForm = (props) => {
  const {
    handleSubmit, pristine, submitting, classes, handleCloseEditComment,
  } = props;

  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Card className={classes.card}>
          <Field name="content" component={renderTextField} label="Comment content" multiLine rows={2} fullWidth />
          <Button color="primary" type="submit" disabled={pristine || submitting} className={classes.button}>
            Edit the comment
          </Button>
          <Button onClick={handleCloseEditComment} color="primary">
            Cancel
          </Button>
        </Card>
      </form>
    </MuiThemeProvider>
  );
};

CommentEditForm.propTypes = {
  handleSubmit: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
  classes: T.objectOf(T.any).isRequired,
  handleCloseEditComment: T.func.isRequired,
};

renderTextField.propTypes = {
  input: T.objectOf(T.any).isRequired,
  label: T.string.isRequired,
  meta: T.objectOf(T.any).isRequired,
};

const CommentEditFormWrapper = reduxForm({
  form: 'commentEdit',
})(CommentEditForm);

export default withStyles(styles)(CommentEditFormWrapper);
