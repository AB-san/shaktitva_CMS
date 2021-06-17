import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getEnglishStories, getHindiStories } from '../../store/action/story.actions';
import { TextBox, Heading } from '../../components/index'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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
        {/* <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={language}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem >हिंदी</MenuItem>
            <MenuItem >English</MenuItem>
          </Select>
        </FormControl> */}
        <TextBox story={specificStory[0].main_text} />
        <Grid md={6} >
          <TextBox story={specificStory[0].flash_card} />
        </Grid>
        <Grid md={6}>
          <TextBox story={specificStory[0].moral} />
        </Grid>
        <AudioPlayer
          src={specificStory[0].podcast_url}
          autoPlay={false}
        />
      </Container>
    </div>);
};

export default storyDetailed;