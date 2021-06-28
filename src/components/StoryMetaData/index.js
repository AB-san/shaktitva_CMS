import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import Date from '../Date/index';
import { CategoryChip,StatusChip } from '../index'

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
            <StatusChip status={props.Status} />
            <Date date={props.DOP} />
        </div>);
}
MetaData.propType = {
    Category:PropTypes.string,
    Org:PropTypes.string,
    DOP:PropTypes.string,
    Status:PropTypes.string
}
export default MetaData;
