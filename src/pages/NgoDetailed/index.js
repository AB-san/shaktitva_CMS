import React,{useEffect} from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getEnglishNgoDetails, getHindiNgoDetails } from '../../store/action/NGO.actions';
import {
    TextBox,
    Heading,
    EditButtonGroup,
    Date
  } from '../../components/index'
const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: "#242B2E",
    padding: theme.spacing(15, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const NgoDetailed = () => {
  const lang = useSelector(state => state.lang);
  const dispatch = useDispatch();
  const ngoDetails = lang === "hi" ? useSelector(state => state.NGO.NGO_hi) : useSelector(state => state.NGO.NGO_en);
  useEffect(() => {
    lang === "en" ? dispatch(getEnglishNgoDetails.request()) : dispatch(getHindiNgoDetails.request());
  }, [lang]);
  const params = useParams();
  const NgoID = params.NgoID;
  const specificNgo = ngoDetails.filter(Ngo => Ngo._id === NgoID)[0];
  console.log(specificNgo);
  const classes = useStyles();
  if (specificNgo === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <div className={classes.heroContent}>
      <Container>
        <Heading text={specificNgo.name} />
        <EditButtonGroup status="4"/>
        <TextBox text={specificNgo.description} />
        
        <TextBox text={specificNgo.address} />
        
        {specificNgo.states.map(NgoState=><TextBox text={NgoState}/>)}
        
        {specificNgo.categories.map(NgoCategory=><TextBox text={NgoCategory}/>)}
        
        {specificNgo.cities.map(NgoCity=><TextBox text={NgoCity}/>)}
        
        <TextBox text = {specificNgo.helpline_number} />
        
        <Date title="Created at" date={specificNgo.createdAt} />
        
        <Date title="Updated at" date={specificNgo.updatedAt} /> 
        
      </Container>
    </div>
    );
}

export default NgoDetailed;