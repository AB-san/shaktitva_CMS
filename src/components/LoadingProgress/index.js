import React from 'react';
import { 
  makeStyles,
  CircularProgress
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      margin: theme.spacing(20),
    },
  },
}));

export default function LoadingProgress() {
const classes=useStyles();
  return (
      <CircularProgress  className={classes.root}/>
  );
}
