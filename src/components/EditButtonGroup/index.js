import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
                color="primary"
                startIcon={<SaveIcon />}
            >
                Publish
            </Button>}
            {props.status === "1" && <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
            >
                UnPublish
            </Button>}
            {props.status === "2" && <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
            >
                Save as Draft
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
export default EditButtonGroup;