import React, { useEffect } from 'react';

import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux';

import { getStoryCategory, getLegalCategory } from '../../store/action/category.actions';

//Material-ui Components
import {
    Chip,
    Avatar,
    makeStyles
} from '@material-ui/core';

import { LoadingProgress } from '../index';
const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    }
}))


const CategoryChip = (props) => {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    
    const { loadingCategory } = useSelector(state => state.category);
    
    useEffect(() => {
        dispatch(getLegalCategory.request());
        dispatch(getStoryCategory.request());
    }, [])
    
    let Category = [];
    
    const legalCategory = useSelector(state => state.category.legal);
    const storyCategory = useSelector(state => state.category.story);
    
    if (props.categoryType === "story") {
        Category = storyCategory.filter(Category => Category._id=== props.category)[0];
    }
    
    if (props.categoryType === "legal") {
        Category = legalCategory.filter(Category => Category._id === props.category)[0];
    }
    
    { loadingCategory === true && <LoadingProgress /> }
    
    
    if (Category === undefined) {
        return <LoadingProgress />;
    }
    
    return (
        <div>
            <Chip className={classes.chip} color="primary" avatar={<Avatar>En</Avatar>} label={Category.category_name.en} />
            <Chip className={classes.chip} color="primary" avatar={<Avatar>हिं</Avatar>} label={Category.category_name.hi} />
        </div>
    )
}

CategoryChip.propTypes = {
    category:PropTypes.string,
    categoryType:PropTypes.string
}

export default CategoryChip;