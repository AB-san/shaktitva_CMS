import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components

import {
  Typography,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import { StoryCard, Heading, NgoCard } from '../../components/index'
import { getEnglishNgoDetails, getHindiNgoDetails } from '../../store/action/NGO.actions';

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
const NGO = () => {

  const dispatch = useDispatch();
  const lang = useSelector(state => state.lang);
  const { loadingNgoDetails } = useSelector(state => state.NGO);
  const ngoDetails = lang === "hi" ? useSelector(state => state.NGO.NGO_hi) : useSelector(state => state.NGO.NGO_en);
  
  useEffect(() => {
    lang === "en" ? dispatch(getEnglishNgoDetails.request()) : dispatch(getHindiNgoDetails.request());
  }, [lang])
  console.log(ngoDetails)
  const classes = useStyles();
  if (ngoDetails === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <div className={classes.heroContent}>
      <Container >
        <Heading text="NGO Page" />
        <Typography variant="h5" align="center" style={{ color: "#fff" }} paragraph>
          {loadingNgoDetails === false && ngoDetails.length > 0 ? `Stories loaded ${ngoDetails.length}` : "Loading..."}
        </Typography>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {ngoDetails.length > 0 && ngoDetails.map((NGO, index) => {
              return (
                <NgoCard index={index} details={NGO} />);
            })}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default NGO;