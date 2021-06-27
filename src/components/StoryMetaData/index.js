import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Date from '../Date/index';
import {CategoryChip} from '../index'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

const MetaData = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <CategoryChip category={props.Category} categoryType="story" />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Organisation : {props.Org}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Status : {props.Status}
            </Typography>
            <Date date={props.DOP} />
        </div>);
}
export default MetaData;