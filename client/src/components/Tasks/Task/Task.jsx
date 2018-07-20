import React, { Component } from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';

import StatusDropdown from '../StatusDropdown/StatusDropdown';
import history from '../../../helpers/history';
import TaskEditForm from '../TaskEditForm/TaskEditForm';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  task: {
    height: '110px',
    paddingRight: '140px',
  },
  taskContent: {
    height: '100px',
    overflow: 'hidden',
  },
  taskActions: {
    width: '120px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  taskControls: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditTaskState: false,
    };

    this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleOpenEditTask = this.handleOpenEditTask.bind(this);
    this.handleCloseEditTask = this.handleCloseEditTask.bind(this);
  }

  componentWillUnmount() {
    const { isEditTask, toggleEditTask } = this.props;

    if (isEditTask) toggleEditTask();
  }

  handleTaskUpdate(values) {
    const { updateTask, _id } = this.props;

    this.handleCloseEditTask();

    updateTask(_id, values);
  }

  handleRedirect() {
    const { _id } = this.props;

    history.push(`/task/${_id}`);
  }

  handleTaskDelete() {
    const { deleteTask, _id } = this.props;

    deleteTask(_id);
  }

  handleOpenEditTask() {
    const { isEditTask, toggleEditTask } = this.props;

    if (isEditTask) return;

    toggleEditTask();

    this.setState({ isEditTaskState: true });
  }

  handleCloseEditTask() {
    const { toggleEditTask } = this.props;

    toggleEditTask();

    this.setState({ isEditTaskState: false });
  }

  render() {
    const {
      title, description, classes, isAdmin,
    } = this.props;
    const { isEditTaskState } = this.state;

    return (
      <React.Fragment>
        {!isEditTaskState
          ? (
            <ListItem
              button
              className={classes.task}
              onClick={this.handleRedirect}
            >
              <ListItemText
                primary={title}
                secondary={description}
                className={classes.taskContent}
              />

              <ListItemSecondaryAction className={classes.taskActions}>
                {isAdmin
                  && (
                    <div className={classes.taskControls}>
                      <Tooltip title="Delete">
                        <Button onClick={this.handleTaskDelete} color="secondary" variant="fab" aria-label="delete" mini>
                          <DeleteIcon />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <Button onClick={this.handleOpenEditTask} color="primary" variant="fab" aria-label="edit" mini>
                          <Icon>
                            edit
                          </Icon>
                        </Button>
                      </Tooltip>
                    </div>
                  )}
                <div className={classes.taskDropdown}>
                  <StatusDropdown {...this.props} />
                </div>
              </ListItemSecondaryAction>

            </ListItem>
          )
          : (
            <TaskEditForm
              initialValues={this.props}
              onSubmit={this.handleTaskUpdate}
              handleCloseEditTask={this.handleCloseEditTask}
            />
          )
        }
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  _id: T.string.isRequired,
  title: T.string.isRequired,
  description: T.string,
  updateTask: T.func.isRequired,
  classes: T.objectOf(T.any).isRequired,
  deleteTask: T.func.isRequired,
  toggleEditTask: T.func.isRequired,
  isAdmin: T.bool.isRequired,
  isEditTask: T.bool.isRequired,
};

Task.defaultProps = {
  description: '',
};

export default withStyles(styles)(Task);
