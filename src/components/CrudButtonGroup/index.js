 import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
const CRUDButtonGroup = () => {
    return (
        <ButtonGroup>
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
            >
                Create
            </Button>
            <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                Read
            </Button>
            <Button
                variant="contained"
                color="yellow"
                startIcon={<SaveIcon />}
            >
                Update
            </Button>
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
export default CRUDButtonGroup;