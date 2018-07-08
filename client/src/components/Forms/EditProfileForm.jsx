import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { RadioGroup } from 'redux-form-material-ui';

import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import InputTemplate from '../InputTemplate';

const EditProfileForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, closeEditProfile,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <InputTemplate name="avatar" label="Avatar" type="text" />
      <InputTemplate name="firstName" label="First name" type="text" />
      <InputTemplate name="lastName" label="Last name" type="text" />
      <div>
        <label>
          Gender
        </label>
        <Field name="gender" aria-label="gender" label="Gender" component={RadioGroup}>
          <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
          <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
        </Field>
      </div>
      <InputTemplate name="dateOfBirth" label="Date of birt" type="date" />
      <InputTemplate name="address" label="Address" area />
      <InputTemplate name="skills" label="Skills" type="text" />
      <InputTemplate name="experience" label="experience" type="text" />
      <div>
        <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary">
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset} variant="contained" color="primary">
          Clear Values
        </Button>
        <Link to="/">
          <Button onClick={closeEditProfile} type="button" variant="contained" color="primary">
            Cancel edit
          </Button>
        </Link>
      </div>
    </form>
  );
};

EditProfileForm.propTypes = {
  handleSubmit: T.func.isRequired,
  closeEditProfile: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
  reset: T.func.isRequired,
};

export default reduxForm({
  form: 'profile', // a unique identifier for this form
})(EditProfileForm);
