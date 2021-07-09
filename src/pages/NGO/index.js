import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
//Material-ui Components

import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  Typography,
  Container,
  Grid,
  makeStyles,
  TextField
} from '@material-ui/core';

import { Heading, AllCard,LoadingProgress } from '../../components/index'
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

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
];

const NGO = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.lang);
  const { loadingNgoDetails } = useSelector(state => state.NGO);
  
  const ngoDetails = lang === "hi" ? useSelector(state => state.NGO.NGO_hi) : useSelector(state => state.NGO.NGO_en);
  
  useEffect(() => {
    lang === "en" ? dispatch(getEnglishNgoDetails.request()) : dispatch(getHindiNgoDetails.request());
  }, [lang])
  
  if(loadingNgoDetails === true){
    <LoadingProgress />
  }
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
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300,color: "#fff" }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
          {/* End hero unit */}
          <Grid container spacing={4}>
            {ngoDetails.length > 0 && ngoDetails.map((NGO, index) => {
              return (
                <AllCard index={index} cardType="NGO" image={NGO.ngo_image} details={NGO} />);
            })}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default NGO;