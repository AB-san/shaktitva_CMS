import React from 'react';

//Material-ui Components
import {
    Typography,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    makeStyles,
} from '@material-ui/core';

import { TextBox, CategoryChip, LoadingProgress } from '../index'

//React h5 Audio Player
import AudioPlayer from 'react-h5-audio-player';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100vw',
    },
    card: {
        height: '100%',
        minHeight: '200px',
        width: '100%',
        marginBottom: '20px'
    },
    cardMedia: {
        height: '100%',
        minHeight: '200px',
        objectFit: 'cover'
    },
    heroContent: {
        backgroundColor: "#242B2E",
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        margin: theme.spacing(1, 0.5, 1),
    }
}));


const AllCard = (props) => {
    const details=props.details;
    const { flash_card : descriptionSTR } = details;
    const { brief_text : descriptionLEG } = details;
    const { description : descriptionNGO } = details;
    console.log(details);
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid container key={props.index}>

                <Grid item xs={6}>
                        <CardMedia
                            className={classes.cardMedia}
                            alt="Heroes"
                            image={props.image}
                            title="Heroes"
                        />

                </Grid>

                <Grid item xs={6}>

                    <CardContent>

                            {/* //TODO:Combine first 2 cases */}
                            <div>
                                {descriptionSTR && <Typography gutterBottom variant="h5" component="h2">
                                    {details.heading}
                                </Typography>}
                                {descriptionLEG && <Typography gutterBottom variant="h5" component="h2">
                                    {details.heading}
                                </Typography>}
                                {descriptionNGO && <Typography gutterBottom variant="h5" component="h2">
                                    {details.name}
                                </Typography>}

                                {descriptionSTR && <div dangerouslySetInnerHTML={{__html: descriptionSTR}}></div>}
                                {descriptionLEG && <div dangerouslySetInnerHTML={{__html: descriptionLEG}}></div>}
                                {descriptionNGO && <div dangerouslySetInnerHTML={{__html: descriptionNGO}}></div>}
                            </div>

                    </CardContent>
                    
                    <CardActions>
                    
                        { descriptionSTR &&
                    
                            <Grid container style={{ flexDirection: "row-reverse" }}>
                    
                                <Grid item>
                    
                                    <Button color="primary" variant="outlined" component={RouterLink} to={`/story/${details.id}`}>
                                        View More
                                    </Button>
                    
                                </Grid>
                    
                            </Grid>}
                    
                        { descriptionLEG &&
                    
                            <Grid container style={{ flexDirection: "row-reverse" }}>
                    
                                <Grid item>
                                    {details.misuse_text != null && details.misuse_text.length > 0 &&
                    
                                        <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={`/legal/misuse/${details._id}`}>
                                            View Misuse
                                        </Button>}
                                </Grid>
                    
                                <Grid item>
                    
                                    <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={`/legal/${details._id}`}>
                                        View Detailed
                                    </Button>
                    
                                </Grid>
                    
                                <Grid item>
                    
                                    {details.misuse_text != null && details.example_text.length > 0 &&
                    
                                        <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={`/legal/example/${details._id}`}>
                                            View Example
                                        </Button>}
                    
                                </Grid>
                    
                                <Grid item xs={12}>
                    
                                    <AudioPlayer
                                        src={details.podcast_url}
                                        autoPlay={false} />
                                </Grid>
                    
                            </Grid>}
                    
                        { descriptionNGO &&
                    
                            <Grid container style={{ flexDirection: "row-reverse" }}>
                    
                                <Grid item>
                    
                                    <Button color="primary" variant="outlined" component={RouterLink} to={`/ngo/${details._id}`}>
                                        View More
                                    </Button>
                    
                                </Grid>
                    
                            </Grid>}
                    
                    </CardActions>
                
                </Grid>
            
            </Grid>
        
        </Card>

    )
}

export default AllCard;