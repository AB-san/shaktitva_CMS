import React from 'react';
//Material-ui Components
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  makeStyles
} from '@material-ui/core';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  card: {
    height: '100%',
    width: '100%',
  },
  heroContent: {
    backgroundColor: "#242B2E",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

const NgoCard = (props) => {
  const details = props.details;
  // console.log(details)
  const classes = useStyles();
  return (
    <Grid item key={props.index} md={12}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Heroes"
            height="140"
            image={details.ngo_image}
            title="NGOs"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {details.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {details.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Link to={`/ngo/${details._id}`}>
            Learn More
          </Link>
        </CardActions>
      </Card>
    </Grid>

  )
}

export default NgoCard;