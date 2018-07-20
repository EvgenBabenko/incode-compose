import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import CommentList from '../../../components/Comments/CommentList/CommentList';
import {
  getCommentList,
  addComment,
  updateComment,
  deleteComment,
  toggleEditComment,
} from '../../../store/actions/commentActions';
import { clearNotifyMessage } from '../../../store/actions/commonActions';

class CommentListContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators({
      addComment, updateComment, deleteComment, toggleEditComment, clearNotifyMessage,
    }, dispatch);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getCommentList());
  }

  render() {
    return (
      <CommentList
        {...this.props}
        {...this.boundActionCreators}
      />
    );
  }
}

const mapStateToProps = state => ({
  commentList: state.comments.commentList,
  isEditComment: state.comments.isEditComment,
  notifyMessage: state.common.notifyMessage,
});

CommentListContainer.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(CommentListContainer);
