import React from 'react'
import { useDispatch } from 'react-redux';

// actions
import { changeLanguage } from '../../store/action/language.actions';

// materialUI components
import { ButtonGroup, Button } from '@material-ui/core';

const LanguageToggle = () => {
    const dispatch = useDispatch();

    return (
        // <ToggleButtonGroup exclusive variant="contained" color="primary" aria-label="contained primary button group">
        //   <ToggleButton onClick ={()=>dispatch(changeLanguage.changeLang())}> English</ToggleButton>
        //   <ToggleButton onClick ={()=>dispatch(changeLanguage.changeLang())} > हिंदी</ToggleButton>
        // </ToggleButtonGroup>
        <ButtonGroup exclusive variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick ={()=>dispatch(changeLanguage.changeLang())}> English</Button>
        <Button onClick ={()=>dispatch(changeLanguage.changeLang())} > हिंदी</Button>
      </ButtonGroup>
    )
}

export default LanguageToggle;