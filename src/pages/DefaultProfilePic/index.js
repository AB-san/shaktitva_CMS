import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Typography,
  Container,
  makeStyles,
  Paper,
  Button,
  Grid
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Heading,LoadingProgress } from '../../components/index'
import { getProfilePic } from '../../store/action/profilePic.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  card: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(18, 0, 6),
  },
  heroButtons: {
    margin: theme.spacing(4, 1, 0),
  },
  text: {
    padding: theme.spacing(3, 2, 3)
  },
  images: {
    margin: theme.spacing(0,4,0),
    width:theme.spacing(17),
    height:theme.spacing(17)
  }
}));

const DefailtProfilePic = () => {

  const dispatch = useDispatch();
  const { loadingProfilePic } = useSelector(state => state.profilePic);
  const classes = useStyles();
  useEffect(() => {
    dispatch(getProfilePic.request());
  }, [])
  
  const ProfilePic = useSelector(state => state.profilePic.profilePic);
  console.log(ProfilePic);
  if(loadingProfilePic === true){
    return <LoadingProgress />
  }
  return (
    <div className={classes.heroContent}>
      <Container >
        <Heading text="Default Profile Pictures" />
        <Typography variant="h4" align="center" style={{ color: "#fff" }} paragraph>
          {loadingProfilePic === false && ProfilePic.length > 0 ? `Profile Pic loaded ${ProfilePic.length}` : "Loading..."}
        </Typography>
        <Grid container justify="center" alignItems="center" spacing="3">
          <Grid item xs>
        <Paper elevation={2} className={classes.card}>
          <AddCircleIcon color="primary" style={{ fontSize: 240 }} />
        </Paper>
        </Grid>
        {ProfilePic.length > 0 && ProfilePic.map((pic) => {
          return (
            <Grid item xs>
              <Paper elevation={2} className={classes.card}>
                <div className={classes.text}>
                  <img className={classes.images} src={pic.image} />
                  <Button variant="contained" className={classes.heroButtons} color="primary"> Edit</Button>
                  <Button variant="contained" className={classes.heroButtons} color="secondary"> Delete </Button>
                </div>
              </Paper>
            </Grid>);
        })}
        </Grid>
      </Container>
    </div>
  );
}

export default DefailtProfilePic;