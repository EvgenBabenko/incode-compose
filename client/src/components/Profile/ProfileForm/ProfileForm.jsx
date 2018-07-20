import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { RadioGroup, TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  profileFormRoot: {
    display: 'flex',
    width: '460px',
    margin: '0 auto',
    marginTop: '10px',
  },
  button: {
    alignSelf: 'flex-start',
  },
  radioForm: {
    display: 'inline-flex',
    position: 'relative',
    top: '6px',
    height: '32px',
  },
  profileFormAvatar: {
    width: '120px',
  },
};

class ProfileForm extends Component {
  componentWillUnmount() {
    const { closeEditProfile } = this.props;

    closeEditProfile();
  }

  render() {
    const {
      handleSubmit, pristine, submitting, classes, user: { profile }, closeEditProfile,
    } = this.props;

    return (
      <Card className={classes.profileFormRoot}>
        <div className={classes.profileFormAvatar}>
          <img src={profile.avatar} alt="user avatar" />
        </div>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div>
              {'Avatar: '}
              <Field name="avatar" component={TextField} type="text" />
            </div>
            <div>
              {'First name: '}
              <Field name="firstName" component={TextField} type="text" />
            </div>
            <div>
              {'Last name: '}
              <Field name="lastName" component={TextField} type="text" />
            </div>
            <div>
              {'Gender: '}
              <Field name="gender" aria-label="gender" label="Gender" component={RadioGroup} className={classes.radioForm}>
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
              </Field>
            </div>
            <div>
              {'Date of birth: '}
              <Field name="dateOfBirth" component={TextField} type="date" />
            </div>
            <div>
              {'Address: '}
              <Field name="address" component={TextField} multiline rows="1" />
            </div>
            <div>
              {'Skills: '}
              <Field name="skills" component={TextField} type="text" />
            </div>
            <div>
              {'Experience: '}
              <Field name="experience" component={TextField} type="text" />
            </div>
          </CardContent>
          <CardActions>
            <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary">
              Submit
            </Button>
            <Button onClick={closeEditProfile} type="button" variant="contained" color="primary">
              Cancel edit
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

ProfileForm.propTypes = {
  handleSubmit: T.func.isRequired,
  closeEditProfile: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
  classes: T.objectOf(T.any).isRequired,
  user: T.objectOf(T.any).isRequired,
};

const ProfileFormWrapper = reduxForm({
  form: 'profile',
})(ProfileForm);

export default withStyles(styles)(ProfileFormWrapper);
