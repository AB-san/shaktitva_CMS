import React from 'react';
import { 
  makeStyles,
  CircularProgress,
  Container
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100px !important',
    height: '100px !important',
    '& > * + *': {
      margin: theme.spacing(20),
    },
  },
}));
//TODO: center align on page
const LoadingProgress = () => {
const classes=useStyles();
  return (
    <Container >
      <CircularProgress  className={classes.root}/>
    </Container>
  );
}

export default LoadingProgress;