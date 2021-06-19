import React from 'react'
import { useDispatch } from 'react-redux';

// actions
import { changeLanguage } from '../../store/action/language.actions';

// materialUI components
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const LanguageToggle = () => {
    const dispatch = useDispatch();

    return (
        <ToggleButtonGroup exclusive variant="contained" color="primary" aria-label="contained primary button group">
          <ToggleButton onClick ={()=>dispatch(changeLanguage.changeLang("en"))}> English</ToggleButton>
          <ToggleButton onClick ={()=>dispatch(changeLanguage.changeLang("hi"))} > हिंदी</ToggleButton>
        </ToggleButtonGroup>
      //   <ButtonGroup exclusive variant="contained" color="primary" aria-label="contained primary button group">
      //   <Button onClick ={()=>{dispatch(changeLanguage.changeLang("en"))}}> English</Button>
      //   <Button onClick ={()=>{dispatch(changeLanguage.changeLang("hi"))}}> हिंदी</Button>
      // </ButtonGroup>
    )
}

export default LanguageToggle;