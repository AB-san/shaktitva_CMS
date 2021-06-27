import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Typography,
  Container,
  makeStyles,
  Paper,
  Button,
  Grid
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Heading, LoadingProgress, CategoryCard } from '../../components/index'
import { getStoryCategory, getLegalCategory } from '../../store/action/category.actions';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  card: {
    minWidth: theme.spacing(30),
    height: theme.spacing(30),
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(18, 0, 6),
  },
  heroButtons: {
    margin: theme.spacing(4, 1, 0),
  },
  text: {
    padding: theme.spacing(3, 2, 3)
  },
  icon:{ 
    margin:theme.spacing(0,3,0)
  }
}));

const Category = () => {

  const dispatch = useDispatch();
  const { loadingCategory } = useSelector(state => state.category);
  useEffect(() => {
    dispatch(getStoryCategory.request());
    dispatch(getLegalCategory.request());
  }, [])

  const storyCategory = useSelector(state => state.category.story);
  const legalCategory = useSelector(state => state.category.legal);

  const classes = useStyles();

  if (loadingCategory === true) {
    return <LoadingProgress />
  }

  return (
    <div className={classes.heroContent}>

      <Container >
        <Heading text="Categories" />

        <Heading text="Story" />
        <Typography variant="h3" align="center" style={{ color: "#fff" }} paragraph>
          {loadingCategory === false && storyCategory.length > 0 ? `Story Category loaded ${storyCategory.length}` : "Loading..."}
        </Typography>
        <Grid container justify="center" alignItems="center" spacing="2">
          <Grid item xs>
            <Paper elevation={2} className={classes.card}>
              <AddCircleIcon className={classes.icon} color="primary" style={{ fontSize: 240 }} />
            </Paper>
          </Grid>

          {storyCategory.length > 0 && storyCategory.map((category) => {
            return (
              <Grid item xs>
                <CategoryCard category={category} />
              </Grid>
            );
          })}
        </Grid>
        <br />
        <Heading text="Legal" />
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingCategory === false && legalCategory.length > 0 ? `Legal Category loaded ${legalCategory.length}` : "Loading..."}
        </Typography>
        <Grid container justify="center" alignItems="center" spacing="2">
          <Grid item xs>
            <Paper elevation={2} className={classes.card}>
              <AddCircleIcon className={classes.icon} color="primary" style={{ fontSize: 240 }} />
            </Paper>
          </Grid>
          {legalCategory.length > 0 && legalCategory.map((category) => {
            return (
              <Grid item xs>
                <CategoryCard category={category} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
export default Category;