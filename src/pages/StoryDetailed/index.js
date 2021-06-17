import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getEnglishStories, getHindiStories } from '../../store/action/story.actions';
import { TextBox, Heading, MediaComponent,MetaData} from '../../components/index'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//React h5 Audio Player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const storyDetailed = () => {

  const [language, setLanguage] = useState("en");
  const dispatch = useDispatch();
  const { loadingStories } = useSelector(state => state.story);
  const stories = language === "hi" ? useSelector(state => state.story.hi) : useSelector(state => state.story.en);
  useEffect(() => {
    language === "en" ? dispatch(getEnglishStories.request()) : dispatch(getHindiStories.request());
  }, [language])

  const params = useParams();
  const storyID = params.StoryID;

  const specificStory = stories.filter(story => story.id === storyID);

  const classes = useStyles();
  if (specificStory[0] === undefined) {
    return <h1>Loading</h1>;
  }
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className={classes.heroContent}>
      <Container>
        <Heading text={specificStory[0].heading} />
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button > English</Button>
          <Button > हिंदी</Button>
    </ButtonGroup>
    <MetaData 
    Category={specificStory[0].category_id} 
    Org={specificStory[0].organisation_id} 
    DOP={specificStory[0].date_to_publish} 
    Status={specificStory[0].status}
    />
        <TextBox text={specificStory[0].main_text} />
          <TextBox text={specificStory[0].flash_card} />
          <TextBox text={specificStory[0].moral} />
        <AudioPlayer
          src={specificStory[0].podcast_url}
          autoPlay={false}
        />
      </Container>
    </div>);
};

export default storyDetailed;