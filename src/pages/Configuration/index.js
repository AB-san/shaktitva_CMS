import React from 'react';
import {
    Typography,
    Container,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

const Users = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Users Page
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    This is the Users Page
                </Typography>
            </Container>
        </div>);
};

export default Users;