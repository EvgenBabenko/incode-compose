import React from 'react';
import T from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

class AddNew extends React.Component {
  state = {
    open: false,
  };

  handleOpenDialog = () => {
    const { edit, openEdit } = this.props;

    this.setState({ open: true });

    if (edit) openEdit();
  };

  handleCloseDialog = () => {
    const { edit, closeEdit } = this.props;

    this.setState({ open: false });

    if (edit) closeEdit();
  };

  render() {
    const { children, title } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Button onClick={this.handleOpenDialog} variant="fab" color="primary" aria-label="add" mini>
          <AddIcon />
        </Button>

        <Dialog
          open={open}
          onClose={this.handleCloseDialog}
          aria-labelledby="form-dialog-title"
        >

          <DialogTitle id="form-dialog-title">
            {title}
          </DialogTitle>

          <DialogContent>
            {children}
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary">
              Cancel
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}

AddNew.propTypes = {
  title: T.string.isRequired,
  children: T.element.isRequired,
  edit: T.bool,
  openEdit: T.func,
  closeEdit: T.func,
};

AddNew.defaultProps = {
  edit: false,
  openEdit: undefined,
  closeEdit: undefined,
};

export default AddNew;
