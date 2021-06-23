import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components

import {
  Typography,
  Container,
  makeStyles,
  TextField,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import { Heading } from '../../components/index'
import { getEnglishStates, getHindiStates } from '../../store/action/states.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(18, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const States = () =>{
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    const { loadingStatesDetails } = useSelector(state => state.states);
    console.log(loadingStatesDetails);
    
    useEffect(() => {
      lang === "en" ? dispatch(getEnglishStates.request()) : dispatch(getHindiStates.request());
    }, [lang])
    
    const StatesDetails = lang === "hi" ? useSelector(state => state.states.states_hi) : useSelector(state => state.states.states_en);
    console.log(StatesDetails);
    const classes = useStyles();
    return(
      <div className={classes.heroContent}>
      <Container>
        <Heading text="States" />
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingStatesDetails === false && StatesDetails.length > 0 ? `States loaded ${StatesDetails.length}` : "Loading..."}
        </Typography>
        <Autocomplete
        id="combo-box-demo"
        options={StatesDetails}
        getOptionLabel={(option) => option.state}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search Box" variant="outlined" />}
        />
         {StatesDetails.map(StateDetail => 
         (
           <List>
           <ListItem button onClick={handleClick}>
          <ListItemText primary={StateDetail.state} />
        </ListItem>
        {StateDetail.cities.map(city =>(
          <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button >
            <ListItemText primary={city} />
          </ListItem>
        </List>
      </Collapse>
        ))}
        
      </List>))}
      </Container>
      </div>
    )
}
export default States;
