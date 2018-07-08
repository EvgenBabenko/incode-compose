import React from 'react';
import T from 'prop-types';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

import AddNew from './AddNew';

const styles = {
  root: {
    display: 'flex',
  },
};

const Conrols = (props) => {
  const {
    title, children, _id, classes, deleteTask, isAdmin,
  } = props;

  function handleDeleteItem() {
    deleteTask(_id);
  }

  return (
    <React.Fragment>
      {isAdmin
        ? (
          <div className={classes.root}>
            <AddNew title={title} edit {...props}>
              {children}
            </AddNew>
            <Button onClick={handleDeleteItem} variant="fab" aria-label="delete" mini>
              <DeleteIcon />
            </Button>
          </div>
        )
        : null
      }
    </React.Fragment>
  );
};

Conrols.propTypes = {
  title: T.string.isRequired,
  children: T.element.isRequired,
  _id: T.string.isRequired,
  deleteTask: T.func.isRequired,
  classes: T.objectOf(T.string).isRequired,
};

export default withStyles(styles)(Conrols);
