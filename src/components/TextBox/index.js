import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 2),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

const TextBox = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            <div dangerouslySetInnerHTML={{__html: props.text}}></div>
            </Typography>
        </div>);
}
TextBox.propTypes ={
    text:PropTypes.string
}
export default TextBox;