import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
//actions
import { getEnglishLegal, getHindiLegal } from '../../store/action/legal.actions';
//React h5 Audio Player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
//custom components
import {
  TextBox,
  Heading,
  EditButtonGroup
} from '../../components/index'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(15, 10, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

  const legalMisuse = () => {

    const language = useSelector(state => state.lang);
    const dispatch = useDispatch();
  
    const legalstories = language === "hi" ? useSelector(state => state.legal.legal_hi) : useSelector(state => state.legal.legal_en);
    useEffect(() => {
      language === "en" ? dispatch(getEnglishLegal.request()) : dispatch(getHindiLegal.request());
    }, [language])

    console.log(legalstories);
  
    const params = useParams();

    const legalID = params.LegalID;
    console.log(legalID)
    const legalStory = legalstories.filter(legalstory => legalstory._id === legalID)[0];
    console.log(legalStory);
  
    const classes = useStyles();
    if(legalStory === undefined){
      return <h1>Loading</h1>
    }
    return(
    <div className={classes.heroContent}>
    <Heading text={legalStory.misuse_heading} />
    <EditButtonGroup status="4"/>
    <TextBox text={legalStory.misuse_text}/>
    {/* <Date date={legalStory.createdAt}/>
    <Date date={legalStory.updatedAt}/> */}
    <AudioPlayer
          style={{display:"block"}}
          src={legalStory.misuse_podcast}
          autoPlay={false}
        />
    </div>);
}

export default legalMisuse;