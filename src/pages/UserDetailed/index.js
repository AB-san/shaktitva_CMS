import React, { useEffect } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/action/users.actions';
// import {
//   TextBox,
//   Heading,
//   StoryMetaData,
//   EditButtonGroup,
//   LoadingProgress
// } from '../../components/index'
// import { UserDetailed } from '..';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
}
export default userDetailed
