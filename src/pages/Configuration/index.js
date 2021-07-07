import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Typography,
    Container,
    makeStyles
} from '@material-ui/core';

import { Heading, LoadingProgress } from '../../components/index'
import { getConfig } from '../../store/action/config.actions';

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
    const dispatch = useDispatch();
    const { loadingConfig } = useSelector(state => state.config);
    useEffect(() => {
        dispatch(getConfig.request());
    }, [])

    const Config = useSelector(state => state.config.config);
    console.log(Config);
    if (loadingConfig === true) {
        return <LoadingProgress />
    }
    return (
        <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Config Page
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    This is the Users Page
                </Typography>
            </Container>
        </div>);
};

export default Users;