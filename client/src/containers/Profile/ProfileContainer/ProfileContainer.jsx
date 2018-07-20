import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import ProfileDetails from '../../../components/Profile/ProfileDetails/ProfileDetails';
import ProfileForm from '../../../components/Profile/ProfileForm/ProfileForm';
import DeleteAccauntDialog from '../../../components/Profile/DeleteAccountDialog/DeleteAccountDialog';
import {
  updateProfile,
  deleteAccount,
  openEditProfile,
  closeEditProfile,
} from '../../../store/actions/userActions';
import { clearNotifyMessage } from '../../../store/actions/commonActions';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenDeleteAccount: false,
    };

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators({
      deleteAccount, openEditProfile, closeEditProfile, clearNotifyMessage,
    }, dispatch);

    this.handleClickOpenDeleteAccount = this.handleClickOpenDeleteAccount.bind(this);
    this.handleCloseDeleteAccount = this.handleCloseDeleteAccount.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  handleClickOpenDeleteAccount() {
    this.setState({ isOpenDeleteAccount: true });
  }

  handleCloseDeleteAccount() {
    this.setState({ isOpenDeleteAccount: false });
  }

  handleUpdateProfile(values) {
    const { dispatch, user: { _id } } = this.props;

    dispatch(closeEditProfile());

    dispatch(updateProfile(_id, values));
  }

  render() {
    const { isEditProfile } = this.props;
    const { isOpenDeleteAccount } = this.state;

    return (
      <React.Fragment>
        {isEditProfile
          ? (
            <ProfileForm
              {...this.props}
              onSubmit={this.handleUpdateProfile}
              {...this.boundActionCreators}
            />
          )
          : (
            <ProfileDetails
              {...this.props}
              handleClickOpenDeleteAccount={this.handleClickOpenDeleteAccount}
              {...this.boundActionCreators}
            />
          )}

        {isOpenDeleteAccount
          && (
            <DeleteAccauntDialog
              {...this.props}
              {...this.state}
              handleCloseDeleteAccount={this.handleCloseDeleteAccount}
              {...this.boundActionCreators}
            />
          )
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isEditProfile: state.user.isEditProfile,
  initialValues: state.user.user.profile,
  notifyMessage: state.common.notifyMessage,
});

ProfileContainer.propTypes = {
  dispatch: T.func.isRequired,
  user: T.objectOf(T.any).isRequired,
  isEditProfile: T.bool.isRequired,
};

export default connect(mapStateToProps)(ProfileContainer);
