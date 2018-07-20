import React from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Comments from '../../../containers/Comments/CommentListContainer/CommentListContainer';
import StatusDropdown from '../StatusDropdown/StatusDropdown';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '85%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  dropdown: {
    alignSelf: 'flex-end',
  },
};

const TaskDetails = (props) => {
  const {
    taskDetails: {
      _id, title, description, status,
    },
    classes,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.details}>
        <h2>
          {`${title.toUpperCase()}`}
        </h2>
        <p>
          {description.length ? description : 'No description'}
        </p>
        <div className={classes.dropdown}>
          <StatusDropdown _id={_id} status={status} {...props} />
        </div>
      </div>
      <Comments taskID={_id} />
    </div>
  );
};

TaskDetails.propTypes = {
  taskDetails: T.objectOf(T.any).isRequired,
  classes: T.objectOf(T.any).isRequired,
};

export default withStyles(styles)(TaskDetails);
