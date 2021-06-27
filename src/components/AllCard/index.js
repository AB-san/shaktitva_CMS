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

import { TextBox, CategoryChip } from '../index'

//React h5 Audio Player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

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

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid container key={props.index}>

                <Grid item xs={6}>
                    {props.cardType === "story" &&
                        <CardMedia
                            className={classes.cardMedia}
                            alt="Heroes"
                            image={props.story.images[0]}
                            title="Heroes"
                        />
                    }

                    {props.cardType === "legal" &&
                        <CardMedia
                            component="img"
                            alt="Heroes"
                            height="600"
                            image={props.details.preview_image}
                            title="Law"
                        />}

                    {props.cardType === "NGO" &&
                        <CardMedia
                            className={classes.cardMedia}
                            alt="Heroes"
                            image={props.details.ngo_image}
                            title="NGOs"
                        />
                    }
                </Grid>

                <Grid item xs={6}>

                    <CardContent>
                        {props.cardType === "story" &&

                            <div>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.story.heading}
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.story.flash_card}
                                </Typography>
                            </div>
                        
                        }

                        {props.cardType === "legal" &&
                            <div>
                        
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.details.heading}
                                </Typography>
                        
                                <CategoryChip category={props.details.category} categoryType={props.cardType} />
                        
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.details.brief_text}
                                </Typography>
                        
                            </div>
                        }

                        {props.cardType === "NGO" &&
                        
                            <div>
                        
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.details.name}
                                </Typography>
                        
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.details.description}
                                </Typography>
                        
                            </div>
                        }
                    </CardContent>
                    
                    <CardActions>
                    
                        {props.cardType === "story" &&
                    
                            <Grid container style={{ flexDirection: "row-reverse" }}>
                    
                                <Grid item>
                    
                                    <Button color="primary" variant="outlined" component={RouterLink} to={`/story/${props.story.id}`}>
                                        View More
                                    </Button>
                    
                                </Grid>
                    
                            </Grid>}
                    
                        {props.cardType === "legal" &&
                    
                            <Grid container style={{ flexDirection: "row-reverse" }}>
                    
                                <Grid item>
                                    {props.details.misuse_text != null && props.details.misuse_text.length > 0 &&
                    
                                        <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={`/legal/misuse/${props.details._id}`}>
                                            View Misuse
                                        </Button>}
                                </Grid>
                    
                                <Grid item>
                    
                                    <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={`/legal/${props.details._id}`}>
                                        View Detailed
                                    </Button>
                    
                                </Grid>
                    
                                <Grid item>
                    
                                    {props.details.misuse_text != null && props.details.example_text.length > 0 &&
                    
                                        <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={`/legal/example/${props.details._id}`}>
                                            View Example
                                        </Button>}
                    
                                </Grid>
                    
                                <Grid item xs={12}>
                    
                                    <AudioPlayer
                                        src={props.details.podcast_url}
                                        autoPlay={false} />
                    
                                </Grid>
                    
                            </Grid>}
                    
                        {props.cardType === "NGO" &&
                    
                            <Grid container style={{ flexDirection: "row-reverse" }}>
                    
                                <Grid item>
                    
                                    <Button color="primary" variant="outlined" component={RouterLink} to={`/ngo/${props.details._id}`}>
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