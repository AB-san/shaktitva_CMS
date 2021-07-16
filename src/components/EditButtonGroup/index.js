import React from 'react';
import PropTypes from 'prop-types'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import {Button,ButtonGroup} from '@material-ui/core';

//FIXME: reduce code repetition
const EditButtonGroup = ({status}) => {
    return (
        <ButtonGroup>
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
            >
                Edit
            </Button>
            {status === "0" && <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                Publish
            </Button>}
            {status === "1" && <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                UnPublish
            </Button>}
            {status === "2" && <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                Save as Draft
            </Button>}
            {status === "4" && <Button
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
    status:PropTypes.string.isRequired
}
export default EditButtonGroup;