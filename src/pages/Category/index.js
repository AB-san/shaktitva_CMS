import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
    Typography,
    Container,
    makeStyles
  } from '@material-ui/core';

  import { Heading } from '../../components/index'
  import { getStoryCategory, getLegalCategory } from '../../store/action/category.actions';


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(18, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
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
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingCategory === false && storyCategory.length > 0 ? `Story Category loaded ${storyCategory.length}` : "Loading..."}
        </Typography>
        {storyCategory.length > 0 && storyCategory.map((category, index) => {
              return (
                <div>
                {/* //TODO:MAKE THIS INTO A TABLE */}
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category._id}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.category_name.hi}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.category_name.en}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.createdAt}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.updatedAt}
            </Typography>
            <br />
            </div>
              );
        })}
      
        <Heading text="Legal" />
      
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingCategory === false && legalCategory.length > 0 ? `Legal Category loaded ${legalCategory.length}` : "Loading..."}
        </Typography>
        {legalCategory.length > 0 && legalCategory.map((category, index) => {
              return (
                <div>
                {/* //TODO:MAKE THIS INTO A TABLE */}
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category._id}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.category_name.hi}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.category_name.en}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.createdAt}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" style={{ color: "#fff" }} component="p">
              {category.updatedAt}
            </Typography>
            
            <br />
            </div>
              );
        })}
      </Container>
    </div>
      );
    }
export default Category;