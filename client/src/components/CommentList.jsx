import React from 'react';
import T from 'prop-types';

import List from '@material-ui/core/List';

import Comment from './Comment';
import AddNew from './AddNew';
import CommentForm from './Forms/CommentForm';
import NoItems from './NoItems';

const CommentList = (props) => {
  const { commentList, submitCallback } = props;

  function submit(values) {
    submitCallback(values);
  }

  return (
    <React.Fragment>
      <AddNew title="New comment">
        <CommentForm onSubmit={submit} {...props} />
      </AddNew>

      {commentList.length
        ? (
          <React.Fragment>
            <h2>
              Comments
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
  commentList: T.arrayOf(T.object).isRequired,
  submitCallback: T.func.isRequired,
};

export default CommentList;
