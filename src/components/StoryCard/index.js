import React from 'react';
//Material-ui Components
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
  Link
} from '@material-ui/core';

// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  card: {
    height: '100%',
    minHeight: '200px',
    width: '100%',
    marginBottom: '20px'
  },
  cardMedia: {
    height: '100%',
    minHeight: '200px',
    objectFit: 'cover'
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const StoryCard = (props) => {
  const story = props.story;
  const classes = useStyles();
  return (
    
      <Card className={classes.card}>
        <Grid container key={props.index}>
        {/* <CardActionArea> */}
        <Grid item xs={6}>
          <CardMedia
            className={classes.cardMedia}
            // component="img"
            alt="Heroes"
            image={story.images[0]}
            title="Heroes"
          />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {story.heading}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {story.flash_card}
              </Typography>
            </CardContent>
          {/* </CardActionArea> */}
          <CardActions>
            {/* TODO: add style property: flex-direction: "reverse" */}
            <Link 
              component="button"
              variant="button"
              color="primary"
              to={`/story/${story.id}`}>
              View More
            </Link>
          </CardActions>
        </Grid>
      </Grid>
    </Card>

  )
}

export default StoryCard;