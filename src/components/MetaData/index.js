import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
      backgroundColor: theme.palette.background.paper,
      // padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
      marginTop: theme.spacing(4),
  }
}));

const MetaData =(props)=>{
  console.log(props);
  const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Typography  variant="h5" align="center" color="textSecondary" paragraph>
                Category : {props.Category}
            </Typography>
            <Typography  variant="h5" align="center" color="textSecondary" paragraph>
                Organisation : {props.Org}
            </Typography>
            <Typography  variant="h5" align="center" color="textSecondary" paragraph>
                Status : {props.Status}
            </Typography>
            <Typography  variant="h5" align="center" color="textSecondary" paragraph>
                Date of Publish : {props.DOP}
            </Typography>
        </div>);
}
export default MetaData;