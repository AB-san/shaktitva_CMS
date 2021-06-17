import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
    }
  }));

const Heading = (props) =>{
  return(
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          {props.text}
        </Typography>
    );
}
export default Heading;