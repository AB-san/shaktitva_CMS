import React, { useEffect } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getEnglishStories, getHindiStories } from '../../store/action/story.actions';
import {
  TextBox,
  Heading,
  StoryMetaData
} from '../../components/index'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//React h5 Audio Player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const storyDetailed = () => {

  const language = useSelector(state => state.lang);
  const dispatch = useDispatch();

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

  return (
    <div className={classes.heroContent}>
      <Container>
        <Heading text={specificStory[0].heading} />
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save as Draft
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ButtonGroup>
        <StoryMetaData
          Category={specificStory[0].category_id}
          Org={specificStory[0].organisation_id}
          DOP={specificStory[0].date_to_publish}
          Status={specificStory[0].status}
        />
        <TextBox text={specificStory[0].main_text} />
        <br />
        <TextBox text={specificStory[0].flash_card} />
        <br />
        <TextBox text={specificStory[0].moral} />
        <AudioPlayer
          src={specificStory[0].podcast_url}
          autoPlay={false}
        />
      </Container>
    </div>);
};

export default storyDetailed;