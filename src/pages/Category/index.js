import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Typography,
  Container,
  makeStyles,
  Paper,
  Grid,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
    // backgroundColor: "#242B2E",
    padding: theme.spacing(18, 0, 6),
  },
  heroButtons: {
    margin: theme.spacing(4, 1, 0),
  },
  text: {
    padding: theme.spacing(3, 2, 3)
  },
  icon: {
    margin: theme.spacing(-2, 3, 0)
  }
}));

const Category = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const insertStoryCategory = () => {
    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
    // dispatch(insertStoryCategory.request());
  }
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
            <IconButton aria-label="insert" color="primary">
              <AddCircleIcon className={classes.icon} color="primary" style={{ fontSize: 240 }} />
            </IconButton>
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
            <IconButton aria-label="insert" color="primary" onClick={()=>{handleClickOpen();insertStoryCategory()}}>
              <AddCircleIcon className={classes.icon} color="primary" style={{ fontSize: 240 }} />
            </IconButton>
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