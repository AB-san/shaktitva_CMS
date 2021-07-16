import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 4, 4, 4),
        marginBottom: '10px'
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

const TextBox = ({text}) => {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
            <div dangerouslySetInnerHTML={{__html: text}}></div>
            </Typography>
        </div>);
}
TextBox.propTypes ={
    text:PropTypes.string.isRequired
}
export default TextBox;