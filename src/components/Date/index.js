import React from 'react';
import moment from 'moment';
//Material-ui Components
import {Typography , makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(8, 0, 6),
    }
  }));

const Heading = (props) =>{
  const classes = useStyles();
  return(
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {/* {moment(props.date, ["YYYY", moment.ISO_8601])} */}
        </Typography>
    );
}
export default Heading;