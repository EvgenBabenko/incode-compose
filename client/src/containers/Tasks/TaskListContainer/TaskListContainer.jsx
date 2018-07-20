import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import TaskList from '../../../components/Tasks/TaskList/TaskList';
import {
  fetchDashboard,
  addTask,
  deleteTask,
  updateTask,
  toggleEditTask,
} from '../../../store/actions/taskActions';
import { clearNotifyMessage } from '../../../store/actions/commonActions';

class TaskListContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators({
      addTask, deleteTask, updateTask, toggleEditTask, clearNotifyMessage,
    }, dispatch);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchDashboard());
  }

  render() {
    const { isLogin } = this.props;

    return (
      <React.Fragment>
        {
          isLogin
            ? (
              <TaskList
                {...this.props}
                {...this.boundActionCreators}
              />
            )
            : (
              <p>
                Loading ...
              </p>
            )
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: state.user.isAdmin,
  isLogin: state.user.isLogin,
  taskList: state.tasks.taskList,
  isEditTask: state.tasks.isEditTask,
  notifyMessage: state.common.notifyMessage,
});

TaskListContainer.propTypes = {
  dispatch: T.func.isRequired,
  taskList: T.arrayOf(T.object).isRequired,
  isLogin: T.bool.isRequired,
};

export default connect(mapStateToProps)(TaskListContainer);
