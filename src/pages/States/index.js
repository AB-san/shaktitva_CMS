import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components
import {
    Typography,
    Container,
    makeStyles,
    TextField,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Autocomplete } from '@material-ui/lab';

import { Heading } from '../../components/index'
import { getEnglishStates, getHindiStates } from '../../store/action/states.actions';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100vw',
    },
    heroContent: {
        backgroundColor: "#242B2E",
        padding: theme.spacing(18, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const StatesSec = () => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    const { loadingStatesDetails } = useSelector(state => state.states);
    console.log(loadingStatesDetails);

    useEffect(() => {
        lang === "en" ? dispatch(getEnglishStates.request()) : dispatch(getHindiStates.request());
    }, [lang])

    const StatesDetails = lang === "hi" ? useSelector(state => state.states.states_hi) : useSelector(state => state.states.states_en);
    console.log(StatesDetails);
    
    return (
        <div className={classes.heroContent}>
            <Container>
                <Heading text="States" />
                <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
                    {loadingStatesDetails === false && StatesDetails.length > 0 ? `States loaded ${StatesDetails.length}` : "Loading..."}
                </Typography>
                <Autocomplete
                    id="combo-box-demo"
                    options={StatesDetails}
                    getOptionLabel={(option) => option.state}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search Box" variant="outlined" />}
                />
                {StatesDetails.map(StateDetail =>
                    <Accordion expanded={expanded === StateDetail.state} onChange={handleChange(StateDetail.state)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{StateDetail.state}</Typography>
                            <Typography className={classes.secondaryHeading}> Cities Count : {StateDetail.cities.length}</Typography>
                        </AccordionSummary>
                        {StateDetail.cities.map(city => (
                            <AccordionDetails>
                                <Typography>
                                    {city}
                                </Typography>
                            </AccordionDetails>))}
                    </Accordion>
                )}
            </Container>
        </div>
    );
}
export default StatesSec