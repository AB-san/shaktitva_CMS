import React, { useEffect } from 'react';
import { Button, Container, makeStyles, Grid } from '@material-ui/core';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/action/users.actions';
import {
  TextBox,
  Heading,
  LoadingProgress,
  Date
} from '../../components/index'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: "#242B2E",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    paddingLeft: theme.spacing(4),
  },
  images: {
    height: "10rem",
    width: "10rem",
  }
}));

const userDetailed = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loadingUsers } = useSelector(state => state.users);
  useEffect(() => {
    dispatch(getUsers.request());
  }, [])
  const Users = useSelector(state => state.users.users);
  const params = useParams();
  const UserID = params.UserID;
  const specificUser = Users.filter(User => User._id === UserID)[0];
  console.log(specificUser);

  if (specificUser === undefined || loadingUsers === true) {
    return <LoadingProgress />
  }

  return (
    <div className={classes.heroContent}>
      <Container>
        <Heading text={specificUser.name} />
        {specificUser.profile_image && <img className={classes.images} src={specificUser.profile_image} alt={specificUser.name} />}
        <TextBox text={`Phone Number : ${specificUser.phone}`} />
        <TextBox text={`I am here for : ${specificUser.i_am_here_for[0]}`} />
        {specificUser.description && <TextBox text={`Description : ${specificUser.description}`} />}
        <TextBox text={`Education Status : ${specificUser.education_status}`} />
        <TextBox text={`Following : ${specificUser.following_count}`} />
        <TextBox text={`Followers : ${specificUser.follower_count}`} />
        <TextBox text={`City : ${specificUser.city}`} />
        <TextBox text={`District : ${specificUser.district}`} />
        <TextBox text={`State : ${specificUser.state}`} />
        <TextBox text={`Username : ${specificUser.username}`} />
        <TextBox text={`Followers : ${specificUser.follower_count}`} />
        <TextBox text={`Relationship Status : ${specificUser.relationshipstatus}`} />
        <TextBox text={`Activity Value : ${specificUser.activityValue}`} />
        <TextBox text={`Accessory Value : ${specificUser.accessoryValue}`} />
        <Grid container>
          <Grid item xs={6}>
            <Date date={specificUser.createdAt} />
          </Grid>
          <Grid item xs={6}>
            <Date date={specificUser.updatedAt} />
          </Grid>
          <Grid item xs={4}>
          {/* //TODO:Add padding to buttons */}
            <Button className={classes.heroButtons} variant="contained" color="primary" fullWidth="true">
              <EditIcon />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.heroButtons} variant="contained" color="secondary" fullWidth="true">
              <BlockIcon />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.heroButtons} variant="contained" color="secondary" fullWidth="true">
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default userDetailed
