import React from 'react';
import T from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteAccountDialog = (props) => {
  const {
    deleteAccount, isOpenDeleteAccount, handleCloseDeleteAccount, user: { _id },
  } = props;

  function handleDeleteAccount() {
    deleteAccount(_id);
  }

  return (
    <div>
      <Dialog
        open={isOpenDeleteAccount}
        onClose={handleCloseDeleteAccount}
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure want to delete your account?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteAccount} color="primary">
            Agree
          </Button>
          <Button onClick={handleCloseDeleteAccount} color="primary" autoFocus>
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DeleteAccountDialog.propTypes = {
  deleteAccount: T.func.isRequired,
  handleCloseDeleteAccount: T.func.isRequired,
  isOpenDeleteAccount: T.bool.isRequired,
  user: T.objectOf(T.any).isRequired,
};

export default DeleteAccountDialog;
