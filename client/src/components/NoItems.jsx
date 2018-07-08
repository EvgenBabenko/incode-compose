import React from 'react';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const NoItems = ({ text, children, classes }) => (
  <div className={classes.root}>
    <p>
      {text}
    </p>
    {children}
  </div>
);

NoItems.propTypes = {
  classes: T.objectOf(T.string).isRequired,
  text: T.string,
  children: T.element,
};

NoItems.defaultProps = {
  text: '',
  children: null,
};

export default withStyles(styles)(NoItems);
