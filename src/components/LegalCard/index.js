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
  makeStyles
} from '@material-ui/core';

import {TextBox} from '../index' 
//React h5 Audio Player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  card: {
    height: '100%',
    width: '100%',
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(18, 10, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const LegalCard = (props) => {
  const details = props.details;
  const classes = useStyles();
  return (
    <Grid item key={props.index} md={12}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Heroes"
            height="140"
            image={details.preview_image}
            title="NGOs"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {details.heading}
            </Typography>
            <br />
            <TextBox text={details.category}/>
            <Typography variant="body2" color="textSecondary" component="p">
              {details.brief_text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>

          {details.misuse_text!=null&&details.misuse_text.length>0&&<Link to={`/legal/misuse/${details._id}`}>
            Misuse
          </Link>}
          <Link to={`/legal/${details._id}`}>
            Law
          </Link>
          {details.misuse_text!=null&&details.example_text.length>0&&<Link to={`/legal/example/${details._id}`}>
            Example
          </Link>}
          <AudioPlayer
          style={{display:"block"}}
          src={details.podcast_url}
          autoPlay={false}
        />
        </CardActions>
      </Card>
    </Grid>

  )
}

export default LegalCard;