import React, {useState} from 'react'
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
  backgroundColor:"#20bf55"
 }
}));
// materialUI components

const LanguageToggle = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [value, setValue] = useState("en");

    const handleChange = (lang) => {
      dispatch(changeLanguage.changeLang("en"));
      setValue(lang);
    }

    return (
        <ToggleButtonGroup 
          value={value}
          exclusive variant="contained" color="primary" aria-label="contained primary button group" >
          <ToggleButton 
            className={classes.button} 
            size="small" 
            onClick ={()=>handleChange("en")}
            selected={value==="en"}  
          > English</ToggleButton>
          <ToggleButton 
            selected={value==="hi "}  
          className={classes.button} size="small" onClick ={()=>handleChange("hi")}> हिंदी</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default LanguageToggle;