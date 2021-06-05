import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
  }));
const NGO = () =>{
    const classes = useStyles();
    return(
        <div className={classes.heroContent}>
        <Container>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              NGO Page
            </Typography>
     <Typography variant="h5" align="center" color="textSecondary" paragraph>
     This is the NGO Page
     </Typography>
     </Container>
     </div>);
};

export default NGO;