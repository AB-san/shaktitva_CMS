import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
    Typography,
    Container,
    makeStyles,
    Paper,
  } from '@material-ui/core';

  import { CRUDButtonGroup,Heading } from '../../components/index'
  import { getStoryCategory, getLegalCategory } from '../../store/action/category.actions';


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    card:{
      width: theme.spacing(30),
      height: theme.spacing(25),
    },
    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(18, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    text: {
      padding:theme.spacing(3,2,3)
    }
  }));

  const Category = () =>{

    const dispatch = useDispatch();
    const { loadingCategory } = useSelector(state => state.category);
    useEffect(() => {
        dispatch(getStoryCategory.request());
        dispatch(getLegalCategory.request());
      }, [])

      const storyCategory = useSelector(state => state.category.story);
      const legalCategory = useSelector(state => state.category.legal);

      const classes = useStyles();
      
      return(
        <div className={classes.heroContent}>
      
      <Container >
        <Heading text="Categories" />
        
        <Heading text="Story" />
        <CRUDButtonGroup />
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingCategory === false && storyCategory.length > 0 ? `Story Category loaded ${storyCategory.length}` : "Loading..."}
        </Typography>
        {storyCategory.length > 0 && storyCategory.map((category, index) => {
              return (
                <div>
                {/* //TODO:MAKE THIS INTO A TABLE */}
            <Paper elevation = {2} className={classes.card}>
            <div className={classes.text}>
            <Typography  variant="body2" color="textSecondary" component="p">
              {category._id}
            </Typography>
            
            <Typography variant="body2" color="textSecondary"  component="p">
              {category.category_name.hi}
            </Typography>
            
            <Typography variant="body2" color="textSecondary"  component="p">
              {category.category_name.en}
            </Typography>
            
            <Typography variant="body2" color="textSecondary"  component="p">
              {category.createdAt}
            </Typography>
            
            <Typography variant="body2" color="textSecondary"  component="p">
              {category.updatedAt}
            </Typography>
            </div>
            </Paper>
            <br />
            </div>
              );
        })}
      
        <Heading text="Legal" />
        <CRUDButtonGroup />
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingCategory === false && legalCategory.length > 0 ? `Legal Category loaded ${legalCategory.length}` : "Loading..."}
        </Typography>
        {legalCategory.length > 0 && legalCategory.map((category, index) => {
              return (
                <div>
                {/* //TODO:MAKE THIS INTO A TABLE */}
                <Paper display="inline" elevation = {2} className={classes.card}>
                <div className={classes.text}>
            <Typography variant="body2" color="textSecondary"  component="p">
              {category._id}
            </Typography>
            
            <Typography variant="body2" color="textSecondary"  component="p">
              {category.category_name.hi}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
              {category.category_name.en}
            </Typography>
            
            <Typography variant="body2" color="textSecondary"  component="p">
              {category.createdAt}
            </Typography>
            
            <Typography variant="body2" color="textSecondary"  component="p">
              {category.updatedAt}
            </Typography>
            </div>
            </Paper>
            <br />
            </div>
              );
        })}
      </Container>
    </div>
      );
    }
export default Category;