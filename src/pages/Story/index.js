import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import {StoryCard,Heading} from '../../components/index'
import { Link } from 'react-router-dom';
import { getEnglishStories,getHindiStories } from '../../store/action/story.actions';
import { changeLanguage } from '../../store/action/language.actions';



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


const Stories = () => {
  const dispatch = useDispatch();
  const lang  = useSelector(state=>state.lang);
  const { loadingStories } = useSelector(state => state.story);
  const stories = lang==="hi"?useSelector(state=>state.story.hi):useSelector(state=>state.story.en);

  
  useEffect(() => {
    lang === "en"?dispatch(getEnglishStories.request()):dispatch(getHindiStories.request());
  }, [lang])
  // console.log(dispatch("CHANGE_LANG"));

  
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container >
        <Heading text="Stories Page" />
        <Typography variant="h5" align="center" style={{color:"#fff"}} paragraph>
          {loadingStories === false && stories.length > 0 ? `Stories loaded ${stories.length}` : "Loading..."}
        </Typography>
        
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick ={()=>dispatch(changeLanguage.changeLang())}> English</Button>
          <Button onClick ={()=>dispatch(changeLanguage.changeLang())} > हिंदी</Button>
        </ButtonGroup>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {stories.length > 0 && stories.map((story, index) => {
              return (
              <StoryCard index={index} story={story} />);
            })}
          </Grid>
        </Container>
      </Container>
    </div>
  )
};

export default Stories;