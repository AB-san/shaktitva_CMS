import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { getStories } from '../../store/action/story.actions';

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
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
  }));


const Stories = () =>{

    const dispatch = useDispatch();
    const { stories, loadingStories } = useSelector(state=>state.story);
    useEffect(()=>{
      dispatch(getStories.request());
    },[])

    const classes = useStyles();
    return(
      <div className={classes.heroContent}>
        <Container>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Stories Page
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {loadingStories==false && stories.length>0 ? `Stories loaded ${stories.length}`:"Loading..."}
          </Typography>
          <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {stories.length>0 && stories.map((story,index)=>{
            return(
              <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={story.images[0]}
                    title="Contemplative Reptile"
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
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
              </Grid>
            )
          })}
          </Grid>
          </Container>
        </Container>
      </div>
    )
};

export default Stories;