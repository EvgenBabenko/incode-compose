import React from 'react';
import T from 'prop-types';
import { reset } from 'redux-form';
import List from '@material-ui/core/List';

import Comment from '../Comment/Comment';
import CommentAddForm from '../CommentAddForm/CommentAddForm';
import NoItems from '../../NoItems/NoItems';
import Notification from '../../Notification/Notification';

const CommentList = (props) => {
  const { commentList, addComment, dispatch } = props;

  function handleCommentAdd(values) {
    addComment(values);

    dispatch(reset('commentAdd'));
  }

  return (
    <React.Fragment>
      <Notification {...props} />
      <CommentAddForm onSubmit={handleCommentAdd} {...props} />

      {commentList.length
        ? (
          <React.Fragment>
            <h2>
              {commentList.length === 1 ? `${commentList.length} comment` : `${commentList.length} comments`}
            </h2>
            <List>
              {commentList.map(comment => <Comment key={comment._id} {...comment} {...props} />)}
            </List>
          </React.Fragment>
        )
        : <NoItems text="No comments for now" />
      }
    </React.Fragment>
  );
};

CommentList.propTypes = {
  commentList: T.arrayOf(T.any).isRequired,
  dispatch: T.func.isRequired,
  addComment: T.func.isRequired,
};

export default CommentList;
