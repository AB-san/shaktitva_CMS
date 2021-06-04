import React, { Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Drawer from './components/drawer';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useSelector,useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards=[0,1,2,3,4,5,6,7,8,9]
function App() {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.moviesFetched)
  const movieFetchHandler = () => {
  axios.get('https://swapi.dev/api/films/')
  .then(response=>{
    const res = response.data.results;
  dispatch({type:'moviesRequestSent',movies:res});
  console.log(response.data.results);
  console.log(movieList);
  dispatch({type:'moviesRequestRecived'})
  })
}

  return (
      <Fragment>
      <CssBaseline />
      <Drawer />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Star Wars Movies
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            All the Star Wars data you've ever wanted:

            Planets, Spaceships, Vehicles, People, Films and Species

            From all SIX Star Wars films
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={movieFetchHandler} variant="contained" color="primary">
                    Fetch Movies
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {movieList.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4" component="h4">
                      Episode Number:{card.episode_id}<br />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.opening_crawl}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </Fragment>
  );
}

export default App;
