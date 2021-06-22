import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components

import {
  Typography,
  Container,
  makeStyles
} from '@material-ui/core';

import { Heading } from '../../components/index'
import { getEnglishState, getHindiState } from '../../store/action/state.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const Legal = () =>{
    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    const { loadingStateDetails } = useSelector(state => state.states);
    
    
    useEffect(() => {
      lang === "en" ? dispatch(getEnglishState.request()) : dispatch(getHindiState.request());
    }, [lang])
    
    const StateDetails = lang === "hi" ? useSelector(state => state.states.state_hi) : useSelector(state => state.states.state_en);
    console.log(StateDetails);
    const classes = useStyles();
    return(
      <div>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      </div>
    )
}
export default Legal;
