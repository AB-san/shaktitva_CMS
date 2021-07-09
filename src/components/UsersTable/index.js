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
import { Date } from '../index'
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
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Block</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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
                            <TableCell align="right"><Button variant="contained" color="primary">
                                Edit
                            </Button></TableCell>
                            <TableCell align="right"><Button variant="contained" color="secondary">
                                Block
                            </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}