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

import { getMailingList } from '../../store/action/mailingList.actions';
import { MailingListTable , LoadingProgress } from '../../components/index'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

const MailingList = () => {
    const dispatch = useDispatch();
    const { loadingMailingList } = useSelector(state => state.profilePic);
    const classes = useStyles();
    useEffect(() => {
        dispatch(getMailingList.request());
    }, [])
    const MailingList = useSelector(state => state.mailingList.mailingList);
    console.log(MailingList);
    if (loadingMailingList === true) {
        return <LoadingProgress />
    }
    return (
        <div className={classes.heroContent}>
            <Container>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Mailing List Page
                </Typography>
                <Grid item xs={12}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={MailingList}
                        getOptionLabel={(email) => email.email}
                        style={{ padding:"2rem",color: "#fff" }}
                        autoComplete="true"
                        autoHighlight="true"
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />
                        }
                    />
                </Grid>
                <MailingListTable list={MailingList} />
            </Container>
        </div>);
};

export default MailingList;