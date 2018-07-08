import React from 'react';
import T from 'prop-types';

import Comments from '../containers/Comments';
import StatusDropdown from './Forms/StatusDropdown';

const TaskDetails = (props) => {
  const {
    taskDetails: {
      _id, title, description, status,
    },
  } = props;

  return (
    <React.Fragment>
      <h2>
        {`ID: ${_id} - ${title.toUpperCase()}`}
      </h2>
      <p>
        {description}
      </p>
      <StatusDropdown _id={_id} status={status} {...props} />
      <Comments taskID={_id} />
    </React.Fragment>
  );
};

TaskDetails.propTypes = {
  taskDetails: T.objectOf(T.string).isRequired,
};

export default TaskDetails;
