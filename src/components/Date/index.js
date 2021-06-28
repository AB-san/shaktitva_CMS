import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';
//Material-ui Components
import {Typography , makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
  }));

const Dates = (props) =>{
  console.log(props)
  let date = moment(props.date);
  let dateComponent = date.utc().format('YYYY-MM-DD');
  let timeComponent = date.utc().format('HH:mm:ss');
  return(
        <Typography variant="body2" color="textSecondary" paragraph>
         {timeComponent} {dateComponent}
        </Typography>     
    );
}

Dates.propType ={
  date:PropTypes.date
}
export default Dates;