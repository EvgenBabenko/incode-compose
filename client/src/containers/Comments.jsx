import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import CommentList from '../components/CommentList';

import * as commentActionCreators from '../actions/commentActions';
import * as mock from '../fixtures';

class Comments extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(commentActionCreators, dispatch);

    this.getComments = this.getComments.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    const { taskID, dispatch } = this.props;

    const comments = Object.values(mock.comment).filter(comment => comment.taskID === taskID);

    const loadComments = commentActionCreators.loadComments(comments);
    dispatch(loadComments);
  }

  submitCallback(values, commentID) {
    const {
      isEditComment, userID, taskID,
    } = this.props;

    const { dispatch } = this.props;

    if (isEditComment) {
      dispatch(commentActionCreators.updateComment(commentID, values));
    } else {
      dispatch(commentActionCreators.addComment({ ...values, userID, taskID }));
    }
  }

  render() {
    return (
      <CommentList
        submitCallback={this.submitCallback}
        {...this.props}
        {...this.boundActionCreators}
      />
    );
  }
}

const mapStateToProps = state => ({
  commentList: state.comments.commentList,
  userID: state.user.userID,
  isEditComment: state.comments.isEditComment,
});

Comments.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(Comments);
