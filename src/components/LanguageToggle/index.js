import React from 'react'
import { useDispatch } from 'react-redux';
import{
  makeStyles,
} from '@material-ui/core';
// actions
import { changeLanguage } from '../../store/action/language.actions';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
 button:{
  marginTop:"5px",
  backgroundColor:"#20bf55",
  backgroundImage:"linearGradient(315deg, #20bf55 0%, #01baef 74%)"
 }
}));
// materialUI components

const LanguageToggle = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <ToggleButtonGroup exclusive variant="contained" color="primary" aria-label="contained primary button group" >
          <ToggleButton className={classes.button} size="small" onClick ={()=>dispatch(changeLanguage.changeLang("en"))}> English</ToggleButton>
          <ToggleButton className={classes.button} size="small" onClick ={()=>dispatch(changeLanguage.changeLang("hi"))} > हिंदी</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default LanguageToggle;