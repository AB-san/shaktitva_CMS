import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Typography,
    Container,
    makeStyles,
    Paper,
} from '@material-ui/core';

import { Date, LoadingProgress } from '../../components/index'
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

    const Config = useSelector(state => state.config.config)[0];
    if (loadingConfig === true || Config === undefined) {
        return <LoadingProgress />
    }
    return (
        <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Config Page
                </Typography>
                <Paper>
                <Typography variant="h1" align="center" color="textSecondary" paragraph>
                    {Config.maintainenanceFlag ? "true":"false"}
                </Typography>
                <Typography variant="h1" align="center" color="textSecondary" paragraph>
                    {Config.maintainenanceDuration}
                </Typography>
                <Typography variant="h1" align="center" color="textSecondary" paragraph>
                    {Config.forceUpdateVersion}
                </Typography>
                <Typography align="center" color="textSecondary" paragraph>
                <Date date = {Config.createdAt} />
                </Typography>
                <Typography align="center" color="textSecondary" paragraph>
                <Date date = {Config.updatedAt} />
                </Typography>
                </Paper>
            </Container>
        </div>);
};

export default Users;