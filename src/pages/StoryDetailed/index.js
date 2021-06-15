import React,{useState,useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getEnglishStories, getHindiStories } from '../../store/action/story.actions';

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

const storyDetailed = () =>{
    
    const [language, setlanguage] = useState("en");
    const dispatch = useDispatch();
    const { loadingStories } = useSelector(state => state.story);
    const stories = language==="hi"?useSelector(state=>state.story.hi):useSelector(state=>state.story.en);
    useEffect(() => {
      language === "en"?dispatch(getEnglishStories.request()):dispatch(getHindiStories.request());
    }, [language])
    
    const params=useParams();
    const storyID = params.StoryID;

    const specificStory = stories.filter(story=>story.id === storyID);

    console.log(specificStory);
    const classes = useStyles();

    if(specificStory[0] === undefined){
      return <h1>Loading</h1>;
    }

    return(
      <div className={classes.heroContent}>
        <Container>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            
            {specificStory[0].heading}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {specificStory[0].main_text}
          </Typography>
          <AudioPlayer
                      src={specificStory.podcast_url}
                      autoPlay={false}
                    />
        </Container>
      </div>);
};

export default storyDetailed;