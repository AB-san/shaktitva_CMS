import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import Date from '../Date/index';
import { CategoryChip,StatusChip } from '../index'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(4, 4, 4, 4),
        marginBottom: '4px'
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
            <Typography variant="h6" align="right" color="textSecondary" paragraph>
                Published By : {props.Org}
                <StatusChip status={props.Status} />
                <Date title="Published On" date={props.DOP} />
            </Typography>
            
        </div>);
}
MetaData.propType = {
    Category:PropTypes.string.isRequired,
    Org:PropTypes.string.isRequired,
    DOP:PropTypes.string.isRequired,
    Status:PropTypes.string.isRequired
}
export default MetaData;
