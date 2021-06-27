import React from 'react';
import {
    Typography,
    makeStyles,
    Paper,
    Button,
  } from '@material-ui/core';

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

        <Typography variant="body2" color="textSecondary" component="p">
            {category.createdAt}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            {category.updatedAt}
        </Typography>

        <Button variant="contained" className={classes.heroButtons} color="primary"> Edit</Button>
        <Button variant="contained" className={classes.heroButtons} color="secondary"> Delete </Button>

    </div>
</Paper>);
}
export default CategoryCard;