import React from 'react';

//Material-ui Components
import {
    Chip,
    Avatar,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    }
}))


const CategoryChip = (props) => {
    const classes = useStyles();
    return (
        //TODO: Change Avatar as per condition
        <div>
            {props.status==="0" && <Chip className={classes.chip} color="primary" avatar={<Avatar>Un</Avatar>} label="Unpublished" />}
            {props.status==="1" &&<Chip className={classes.chip} color="primary" avatar={<Avatar>Pub</Avatar>} label="Published" />}
            {props.status==="2" &&<Chip className={classes.chip} color="secondary" avatar={<Avatar>D</Avatar>} label="Draft" />}
            {props.status>2 &&<Chip className={classes.chip} color="primary" avatar={<Avatar>O</Avatar>} label="Placeholder" />}            
        </div>
    )
}

export default CategoryChip;