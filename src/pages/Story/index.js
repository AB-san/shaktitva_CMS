import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components

import {
  Typography,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import { AllCard, Heading,LoadingProgress } from '../../components/index'
import { getEnglishStories, getHindiStories } from '../../store/action/story.actions';

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
  const lang = useSelector(state => state.lang);
  const { loadingStories } = useSelector(state => state.story);
  const stories = lang === "hi" ? useSelector(state => state.story.hi) : useSelector(state => state.story.en);

  if(loadingStories === true){
    return <LoadingProgress />
  }

  useEffect(() => {
    lang === "en" ? dispatch(getEnglishStories.request()) : dispatch(getHindiStories.request());
  }, [lang])


  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container >
        <Heading text="Stories Page" />
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingStories === false && stories.length > 0 ? `Stories loaded ${stories.length}` : "Loading..."}
        </Typography>
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {stories.length > 0 && stories.map((story, index) => {
              return (
                <AllCard cardType="story" index={index} story={story} />);
            })}
          </Grid>
        </Container>
      </Container>
    </div>
  )
};

export default Stories;