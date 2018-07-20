import React, { Component } from 'react';
import { reset } from 'redux-form';
import T from 'prop-types';
import List from '@material-ui/core/List';
import DoneIcon from '@material-ui/icons/Done';
import { withStyles } from '@material-ui/core/styles';

import Task from '../Task/Task';
import NoItems from '../../NoItems/NoItems';
import TaskAddForm from '../TaskAddForm/TaskAddForm';
import Notification from '../../Notification/Notification';

const styles = {
  taskListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '85%',
  },
};

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(values) {
    const { addTask, dispatch } = this.props;

    addTask(values);

    dispatch(reset('taskAdd'));
  }

  render() {
    const { taskList, classes, ...others } = this.props;
    const { isAdmin } = this.props;

    return (
      <div className={classes.taskListWrapper}>
        <Notification {...this.props} />
        {isAdmin
          && <TaskAddForm onSubmit={this.handleAddTask} {...others} />}

        {taskList.length
          ? (
            <List component="div">
              {taskList.map(task => <Task key={task._id} {...others} {...task} />)}
            </List>
          )
          : (
            <NoItems text="No tasks for now">
              <DoneIcon />
            </NoItems>
          )
        }
      </div>

    );
  }
}

TaskList.propTypes = {
  taskList: T.arrayOf(T.any).isRequired,
  dispatch: T.func.isRequired,
  updateTask: T.func.isRequired,
  deleteTask: T.func.isRequired,
  addTask: T.func.isRequired,
  isAdmin: T.bool.isRequired,
  classes: T.objectOf(T.any).isRequired,
};

export default withStyles(styles)(TaskList);
