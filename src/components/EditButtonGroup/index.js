import React from 'react';
import PropTypes from 'prop-types'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import {Button,ButtonGroup} from '@material-ui/core';
const EditButtonGroup = (props) => {
    return (
        <ButtonGroup>
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
            >
                Edit
            </Button>
            {props.status === "0" && <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                Publish
            </Button>}
            {props.status === "1" && <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                UnPublish
            </Button>}
            {props.status === "2" && <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                Save as Draft
            </Button>}
            {props.status === "4" && <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                PlaceHolder
            </Button>}
            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
        </ButtonGroup>
    );
}

EditButtonGroup.propTypes ={
    status:PropTypes.string
}
export default EditButtonGroup;