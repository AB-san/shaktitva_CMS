import React from 'react';
import PropTypes from 'prop-types';

//Material-ui Components
import {Typography , makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
      marginTop: '100px',
      marginBottom: '100px',
    },
  }));

const Heading = ({text}) =>{
  const classes = useStyles();
  return(
        <Typography className={classes.typography} component="h4" variant="h4" align="center" gutterBottom>
          {text}
        </Typography>
    );
}
Heading.propTypes ={
  text:PropTypes.string.isRequired
}
export default Heading;