import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    makeStyles,
    Paper,
    Button,
  } from '@material-ui/core';

import { Date } from '../index'
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    card:{
      minWidth: theme.spacing(30),
      height: theme.spacing(30),
    },
    text: {
      padding:theme.spacing(3,2,3)
    },
    heroButtons: {
        margin: theme.spacing(4,1,0),
      },
    
  }));

const CategoryCard = (props) =>{
const category = props.category;
const classes = useStyles();
return(
<Paper elevation={2} className={classes.card}>
    <div className={classes.text}>
        <Typography variant="h6" color="textSecondary" component="p">
            {category.category_name.hi}
        </Typography>

        <Typography variant="h6" color="textSecondary" component="p">
            {category.category_name.en}
        </Typography>

        <Date date={category.createdAt} />

        <Date date={category.updatedAt} />

        <Button variant="contained" className={classes.heroButtons} color="primary"> Edit</Button>
        
        <Button variant="contained" className={classes.heroButtons} color="secondary"> Delete </Button>

    </div>
</Paper>);
}

CategoryCard.propTypes = {
  category:PropTypes.shape({
    category_name:PropTypes.shape({
      hi:PropTypes.string,
      en:PropTypes.string
    }),
    category_type:PropTypes.string,
    updateAt:PropTypes.string,
    createdAt:PropTypes.string,
  }),
}

export default CategoryCard;