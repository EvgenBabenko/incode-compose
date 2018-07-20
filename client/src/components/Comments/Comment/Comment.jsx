import React, { Component } from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';

import CommentEditForm from '../CommentEditForm/CommentEditForm';

const styles = {
  comment: {
    minHeight: '110px',
    paddingRight: '140px',
    alignItems: 'flex-start',
  },
  commentContent: {
    overflow: 'hidden',
  },
  commentActions: {
    width: '120px',
    height: '120px',
    display: 'flex',
    justifyContent: 'space-around',
    top: '65%',
  },
};

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditCommentState: false,
    };

    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
    this.handleOpenEditComment = this.handleOpenEditComment.bind(this);
    this.handleCloseEditComment = this.handleCloseEditComment.bind(this);
  }

  componentWillUnmount() {
    const { isEditComment, toggleEditComment } = this.props;

    if (isEditComment) toggleEditComment();
  }

  handleCommentUpdate(values) {
    const { updateComment, _id } = this.props;

    this.handleCloseEditComment();

    updateComment(_id, values);
  }

  handleCommentDelete() {
    const { deleteComment, _id } = this.props;

    deleteComment(_id);
  }

  handleOpenEditComment() {
    const { isEditComment, toggleEditComment } = this.props;

    if (isEditComment) return;

    toggleEditComment();

    this.setState({ isEditCommentState: true });
  }

  handleCloseEditComment() {
    const { toggleEditComment } = this.props;

    toggleEditComment();

    this.setState({ isEditCommentState: false });
  }

  render() {
    const {
      content, createdAt, classes,
    } = this.props;
    const { isEditCommentState } = this.state;

    return (
      <React.Fragment>
        {!isEditCommentState
          ? (
            <ListItem className={classes.comment}>
              <ListItemText primary={content} secondary={`Created at ${new Date(createdAt).toLocaleString()}`} className={classes.commentContent} />
              <ListItemSecondaryAction className={classes.commentActions}>
                <Tooltip title="Delete">
                  <Button onClick={this.handleCommentDelete} color="secondary" variant="fab" aria-label="delete" mini>
                    <DeleteIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Edit">
                  <Button onClick={this.handleOpenEditComment} color="primary" variant="fab" aria-label="edit" mini>
                    <Icon>
                      edit
                    </Icon>
                  </Button>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          )
          : (
            <CommentEditForm
              initialValues={this.props}
              onSubmit={this.handleCommentUpdate}
              handleCloseEditComment={this.handleCloseEditComment}
            />
          )
        }
      </React.Fragment>
    );
  }
}

Comment.propTypes = {
  _id: T.string.isRequired,
  content: T.string.isRequired,
  createdAt: T.string.isRequired,
  updateComment: T.func.isRequired,
  deleteComment: T.func.isRequired,
  classes: T.objectOf(T.any).isRequired,
  isEditComment: T.bool.isRequired,
  toggleEditComment: T.func.isRequired,
};

export default withStyles(styles)(Comment);
