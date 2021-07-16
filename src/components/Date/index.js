import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';
//Material-ui Components
import {Typography } from '@material-ui/core';


const Dates = ({dateISO, title}) =>{
  let date = moment(dateISO);
  let dateComponent = date.utc().format('YYYY-MM-DD');
  let timeComponent = date.utc().format('HH:mm:ss');
  return(
        <Typography variant="body2" color="textSecondary" span>
         {title}: {timeComponent} &nbsp; {dateComponent}
        </Typography>     
    );
}

Dates.propType ={
  date:PropTypes.date,
  title: PropTypes.string
}
export default Dates;