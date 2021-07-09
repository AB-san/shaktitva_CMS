import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Typography,
    Container,
    makeStyles
} from '@material-ui/core';

import { Heading,LoadingProgress,UsersTable } from '../../components/index'
import { getUsers } from '../../store/action/users.actions';

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
    const { loadingUsers } = useSelector(state => state.users);
    useEffect(() => {
        dispatch(getUsers.request());
    }, [])

    const Users = useSelector(state => state.users.users);
    console.log(Users);
    if (loadingUsers === true) {
        return <LoadingProgress />
    }

    
    return (
        <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Users Page
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    This is the Users Page
                </Typography>
                <UsersTable users={Users}/>
            </Container>
        </div>);
};

export default Users;