import React from 'react';
import PropTypes from 'prop-types';

//Material-ui Components
import {Typography , makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  }));

const Heading = (props) =>{
  const classes = useStyles();
  return(
        <Typography className={classes.typography} component="h1" variant="h2" align="center" gutterBottom>
          {props.text}
        </Typography>
    );
}
Heading.propTypes ={
  text:PropTypes.string
}
export default Heading;