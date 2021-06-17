import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

const TextBox = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Typography  variant="h5" align="center" color="textSecondary" paragraph>
                {props.text}
            </Typography>
        </div>);
}

export default TextBox;