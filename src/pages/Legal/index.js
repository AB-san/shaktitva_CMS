import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components

import {
  Typography,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import { Heading, AllCard } from '../../components/index'
import { getEnglishLegal, getHindiLegal } from '../../store/action/legal.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const Legal = () =>{
    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    const { loadingLegalDetails } = useSelector(state => state.legal);
    
    
    useEffect(() => {
      lang === "en" ? dispatch(getEnglishLegal.request()) : dispatch(getHindiLegal.request());
    }, [lang])
    
    const legalDetails = lang === "hi" ? useSelector(state => state.legal.legal_hi) : useSelector(state => state.legal.legal_en);
  
    const classes = useStyles();
    
    return(
    <div className={classes.heroContent}>
      <Container >
        <Heading text="Legal Page" />
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingLegalDetails === false && legalDetails.length > 0 ? `Legal Stories loaded ${legalDetails.length}` : "Loading..."}
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {legalDetails.length > 0 && legalDetails.map((Law, index) => {
              return (
                <AllCard index={index} details={Law} cardType="legal" />);
            })}
          </Grid>
        </Container>
      </Container>
    </div>
     );
};

export default Legal;