import React, { Component } from 'react';
import T from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class StatusDropdown extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { _id, updateTask } = this.props;

    updateTask(_id, { status: event.target.value });
  }

  render() {
    const { status } = this.props;

    const mapStatuses = [
      'To do',
      'In progress',
      'Rewiew',
      'Done',
    ];

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
            {mapStatuses.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
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
