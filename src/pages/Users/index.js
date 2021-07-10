import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Typography,
    Container,
    makeStyles,
    TextField,
    Grid,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { LoadingProgress, UsersTable } from '../../components/index'
import { getUsers } from '../../store/action/users.actions';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

const Users = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { loadingUsers } = useSelector(state => state.users);
    useEffect(() => {
        dispatch(getUsers.request());
    }, [])

    const Users = useSelector(state => state.users.users);

    if (loadingUsers === true) {
        return <LoadingProgress />
    }


    return (
        <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Users Page
                </Typography>
                <Grid item xs={12}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={Users}
                        getOptionLabel={(user) => user.name}
                        style={{ padding:"2rem",color: "#fff" }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </Grid>
                <UsersTable users={Users} />
            </Container>
        </div>);
};

export default Users;