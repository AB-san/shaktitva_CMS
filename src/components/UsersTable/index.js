import React from 'react';
import {
    Button,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core'
import {UserDetailedRoute} from '../../utils/constants';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import DetailsIcon from '@material-ui/icons/Details';
import { Date } from '../index'
import { Link as RouterLink } from 'react-router-dom';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function UsersTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">D.O.B.</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Updated At</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="center">Details</TableCell>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Ban</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {/* //TODO:Add filter method */}
                    {props.users.map((user,index) => (
                        <TableRow key={user._id}>
                            <TableCell component="th" scope="row">
                                {index+1}
                            </TableCell>
                            <TableCell align="right">{user.username} </TableCell>
                            <TableCell align="right">{user.name} </TableCell>
                            <TableCell align="right">{user.state} </TableCell>
                            <TableCell align="right"><Date date={user.date_of_birth}/></TableCell>
                            <TableCell align="right"><Date date={user.createdAt}/></TableCell>
                            <TableCell align="right"><Date date={user.updatedAt}/></TableCell>
                            <TableCell align="right">{user.phone} </TableCell>
                            <TableCell align="right"><Button variant="contained" color="primary" component={RouterLink} to={`${UserDetailedRoute}/${user._id}`}>
                                <DetailsIcon />
                            </Button></TableCell>
                            <TableCell align="right"><Button variant="contained" color="primary">
                                <EditIcon />
                            </Button></TableCell>
                            <TableCell align="right"><Button variant="contained" color="secondary">
                                <BlockIcon />
                            </Button></TableCell>
                            <TableCell align="right"><Button variant="contained" color="secondary">
                                <DeleteIcon />
                            </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}