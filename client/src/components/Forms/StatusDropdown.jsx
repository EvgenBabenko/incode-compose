import React, { Component } from 'react';
import T from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class StatusDropdown extends Component {
  handleChange = (event) => {
    const { _id, updateTask } = this.props;

    updateTask(_id, { status: event.target.value });
  };

  render() {
    const { status } = this.props;

    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="taskStatus-simple">
            Status
          </InputLabel>
          <Select
            value={status}
            onChange={this.handleChange}
            inputProps={{
              name: 'taskStatus',
              id: 'taskStatus-simple',
            }}
          >
            <MenuItem value="To do">
              To do
            </MenuItem>
            <MenuItem value="In progress">
              In progress
            </MenuItem>
            <MenuItem value="Rewiew">
              Rewiew
            </MenuItem>
            <MenuItem value="Done">
              Done
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

StatusDropdown.propTypes = {
  updateTask: T.func.isRequired,
  _id: T.string.isRequired,
  status: T.string.isRequired,
};

export default StatusDropdown;
