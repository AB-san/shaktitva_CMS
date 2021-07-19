import React from 'react';
import { 
  makeStyles,
  CircularProgress,
  Container
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100px !important',
    height: '100px !important',
    '& > * + *': {
      margin: theme.spacing(20),
    },
  },
  container:{
    position:"absolute",
    left:"50%",
    bottom:"50%",
  }
}));
//TODO: center align on page
const LoadingProgress = () => {
const classes=useStyles();
  return (
    <Container className={classes.container}>
      <CircularProgress  className={classes.root}/>
    </Container>
  );
}

export default LoadingProgress;