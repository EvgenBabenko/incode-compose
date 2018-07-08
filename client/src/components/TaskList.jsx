import React from 'react';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import DoneIcon from '@material-ui/icons/Done';

import Task from './Task';
import NoItems from './NoItems';
import AddNew from './AddNew';
import TaskForm from './Forms/TaskForm';

const TaskList = (props) => {
  const {
    classes, taskList, addTask, isAdmin
  } = props;

  function submit(values) {
    addTask({ ...values });
  }

  return (
    <React.Fragment>
      {isAdmin
        ? (
          <AddNew title="New task">
            <TaskForm onSubmit={submit} {...props} />
          </AddNew>
        )
        : null
      }

      {taskList.length
        ? (
          <div>

            <List component="div">
              {taskList.map(task => <Task key={task._id} {...task} {...props} />)}
            </List>
          </div>
        )
        : (
          <NoItems text="No tasks for now">
            {<DoneIcon />}
          </NoItems>
        )
      }
    </React.Fragment>

  );
};

TaskList.propTypes = {
  taskList: T.arrayOf(T.object).isRequired,
  addTask: T.func.isRequired,
  classes: T.objectOf(T.string).isRequired,
};

export default TaskList;
