import React from 'react';

//Material-ui Components
import {
    Typography,
    Container,
    Grid,
    makeStyles
  } from '@material-ui/core';

  import { Heading } from '../../components/index'
  
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },
    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(20, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
  }));
   
  const SignUp = () =>{
      const classes = useStyles();
    
    return(
    <div className={classes.heroContent}>
      <Container >
        <Heading text="Sign Up" />

      </Container>
    </div>
     );
};

export default SignUp;