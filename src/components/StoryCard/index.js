import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//TODO: ADD Story ID route
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    card: {
      height: '100%',
      width:'100%',
    },
    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
  }));

const StoryCard = (props) =>{
  const story = props.story;
  const classes = useStyles();
              return (
                <Grid item key={props.index} md={12}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Heroes"
                        height="140"
                        image={story.images[0]}
                        title="Heroes"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {story.heading}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {story.flash_card}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                  </Button>
                  <Link to ={`/story/${story.id}`}>
                        Learn More
                  </Link>
                    </CardActions>
                  </Card>
                </Grid>
                
  )
}

export default StoryCard;