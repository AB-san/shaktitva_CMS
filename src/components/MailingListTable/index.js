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

export default function MailingListTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>_id</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Updated At</TableCell>
                        <TableCell align="right">E-Mail</TableCell>
                        <TableCell align="right">Send Email</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.list.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell component="th" scope="row">
                                {item._id}
                            </TableCell>
                            <TableCell align="right"><Date date={item.createdAt} /></TableCell>
                            <TableCell align="right"><Date date={item.updatedAt} /></TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right"><Button variant="contained" color="primary">
                                Send
                            </Button></TableCell>
                            <TableCell align="right"><Button variant="contained" color="secondary">
                                Delete
                            </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}