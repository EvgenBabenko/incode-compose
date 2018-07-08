import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import TaskList from '../components/TaskList';

import * as dashboardActionCreators from '../actions/dashboardActions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(dashboardActionCreators, dispatch);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // dispatch(dashboardActionCreators.fetchDashboard(userID));
    dispatch(dashboardActionCreators.fetchDashboard());
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
  userID: state.user.userID,
  isAdmin: state.user.isAdmin,
  isLogin: state.user.isLogin,
  taskList: state.dashboard.taskList,
  isEditTask: state.dashboard.isEditTask,
});

Dashboard.propTypes = {
  dispatch: T.func.isRequired,
  taskList: T.arrayOf(T.object).isRequired,
  isLogin: T.bool.isRequired,
  isEditTask: T.bool.isRequired,
  userID: T.number,
};

Dashboard.defaultProps = {
  userID: null,
};

export default connect(mapStateToProps)(Dashboard);
