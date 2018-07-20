import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import TaskDetails from '../../../components/Tasks/TaskDetails/TaskDetails';
import { fetchTask, clearTaskDetails, updateTask } from '../../../store/actions/taskActions';

class TaskDetailsContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators({ updateTask }, dispatch);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const { dispatch } = this.props;

    dispatch(fetchTask(id));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(clearTaskDetails());
  }

  render() {
    const { taskDetails } = this.props;

    return (
      taskDetails
        ? <TaskDetails {...this.props} {...this.boundActionCreators} />
        : (
          <h1>
            Loading...
          </h1>
        )
    );
  }
}

const mapStateToProps = state => ({
  taskDetails: state.tasks.taskDetails,
});

TaskDetailsContainer.propTypes = {
  dispatch: T.func.isRequired,
  match: T.objectOf(T.any).isRequired,
  taskDetails: T.objectOf(T.any),
};

TaskDetailsContainer.defaultProps = {
  taskDetails: null,
};

export default connect(mapStateToProps)(TaskDetailsContainer);
