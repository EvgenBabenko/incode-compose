import React from 'react';
import T from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Notification from '../../Notification/Notification';

const styles = {
  profileDetailsRoot: {
    display: 'flex',
    width: '460px',
    margin: '0 auto',
    marginTop: '10px',
  },
  profileDetailsItem: {
    margin: '10px',
    fontSize: '0.975rem',
  },
  profileDetailsAvatar: {
    width: '120px',
  },
};

const ProfileDetails = (props) => {
  const {
    classes, user, openEditProfile, handleClickOpenDeleteAccount,
  } = props;
  const { profile, email } = user;

  const mapProfile = {
    Email: email,
    'First name': profile.firstName,
    'Last name': profile.lastName,
    Gender: profile.gender,
    'Date of birth': profile.dateOfBirth,
    Address: profile.address,
    Skills: profile.skills,
    Experience: profile.experience,
  };

  return (
    <React.Fragment>
      <Notification {...props} />
      <Card className={classes.profileDetailsRoot}>
        <div className={classes.profileDetailsAvatar}>
          <img src={profile.avatar} alt="user avatar" />
        </div>
        <div>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              username
            </Typography>
            {Object.keys(mapProfile).map(key => (
              <Typography key={key} component="p" className={classes.profileDetailsItem}>
                {`${key}: ${mapProfile[key]}`}
              </Typography>
            ))}
          </CardContent>
          <CardActions>
            <Button onClick={handleClickOpenDeleteAccount} color="secondary" variant="contained">
              Delete accaunt
            </Button>
            <Button onClick={openEditProfile} color="primary" variant="contained">
              Edit
            </Button>
          </CardActions>
        </div>
      </Card>
    </React.Fragment>
  );
};

ProfileDetails.propTypes = {
  user: T.objectOf(T.any).isRequired,
  openEditProfile: T.func.isRequired,
  classes: T.objectOf(T.any).isRequired,
  handleClickOpenDeleteAccount: T.func.isRequired,
};

export default withStyles(styles)(ProfileDetails);
