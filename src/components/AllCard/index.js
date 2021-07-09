import React from 'react';
import PropTypes from 'prop-types';
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

import { CategoryChip } from '../index'

import {
    StoryDetailedRoute,
    LegalDetailedRoute,
    LegalMisuseRoute,
    LegalExampleRoute,
    NGODetailedRoute
} from '../../utils/constants'
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
    const details = props.details;
    console.log(props)
    if(props.cardType === "Story"){
    var { heading:heading, category_id: category, flash_card: description } = details;}
    if(props.cardType === "Legal"){
    var { heading: heading,brief_text: description } = details;}
    if(props.cardType === "NGO"){
    var { name: heading ,description: description } = details;}
    const classes = useStyles();
    console.log(details);

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
                        
                                                
                        <div>
                            <Typography gutterBottom variant="h5" component="h2">
                                {heading}
                            </Typography>
                            {/* <CategoryChip category={category} categoryType={props.cardType} /> */}
                            <div dangerouslySetInnerHTML={{ __html: description }}></div>
                            </div>

                    </CardContent>

                    <CardActions>


                        {(props.cardType==="Story" || props.cardType==="NGO") &&

                            <Grid container style={{ flexDirection: "row-reverse" }}>

                                <Grid item>

                                    <Button color="primary" variant="outlined" component={RouterLink} to={StoryDetailedRoute}>
                                        View More
                                    </Button>

                                </Grid>

                            </Grid>}

                        {props.cardType==="Legal" &&

                            <Grid container style={{ flexDirection: "row-reverse" }}>

                                <Grid item>
                                    {details.misuse_text != null && details.misuse_text.length > 0 &&

                                        <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={LegalMisuseRoute}>
                                            View Misuse
                                        </Button>}
                                </Grid>

                                <Grid item>

                                    <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={LegalDetailedRoute}>
                                        View Detailed
                                    </Button>

                                </Grid>

                                <Grid item>

                                    {details.misuse_text != null && details.example_text.length > 0 &&

                                        <Button className={classes.heroButtons} color="primary" variant="outlined" component={RouterLink} to={LegalExampleRoute}>
                                            View Example
                                        </Button>}

                                </Grid>

                                <Grid item xs={12}>

                                    <AudioPlayer
                                        src={details.podcast_url}
                                        autoPlay={false} />
                                </Grid>

                            </Grid>}

                        {/* {props.cardType==="NGO" &&

                            <Grid container style={{ flexDirection: "row-reverse" }}>

                                <Grid item>

                                    <Button color="primary" variant="outlined" component={RouterLink} to={NGODetailedRoute}>
                                        View More
                                    </Button>

                                </Grid>

                            </Grid>} */}

                    </CardActions>

                </Grid>

            </Grid>

        </Card>

    )
}

AllCard.propTypes = {
    index:PropTypes.number,
    image:PropTypes.string,
    //story
    details:PropTypes.shape({
        flash_card:PropTypes.string,
        heading:PropTypes.string,
        category_id:PropTypes.string,
      }),
    //legal
    details:PropTypes.shape({
        brief_text:PropTypes.string,
        heading:PropTypes.string,
        category:PropTypes.string,
        misuse_text:PropTypes.string,
        example_text:PropTypes.string,
      }),
    //NGO
    details:PropTypes.shape({
        name:PropTypes.string,
        description:PropTypes.string,
    })
}

export default AllCard;