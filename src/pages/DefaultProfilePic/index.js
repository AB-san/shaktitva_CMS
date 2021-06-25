import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
    Typography,
    Container,
    makeStyles,
    Paper,
    Button
  } from '@material-ui/core';
  import AddCircleIcon from '@material-ui/icons/AddCircle';

  import { Heading } from '../../components/index'
  import { getProfilePicture } from '../../store/action/profilePic.actions';

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    card:{
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(18, 0, 6),
    },
    heroButtons: {
      margin: theme.spacing(4,1,0),
    },
    text: {
      padding:theme.spacing(3,2,3)
    }
  }));

  const DefailtProfilePic = () =>{

    const dispatch = useDispatch();
    const { loadingProfilePictures } = useSelector(state => state.profilePic);
    useEffect(() => {
        dispatch(getProfilePicture.request());
      }, [])

      const ProfilePictures = useSelector(state => state.profilePic.profilePictures);
      console.log(ProfilePictures);
      const classes = useStyles();
      return(
          <div>
          <h1>HEY</h1>
          <h1>HEY</h1>
          <h1>HEY</h1>
          <h1>HEY</h1>
          <h1>HEY</h1>
          <h1>HEY</h1>
          
          </div>
      );
  }
      
export default DefailtProfilePic;