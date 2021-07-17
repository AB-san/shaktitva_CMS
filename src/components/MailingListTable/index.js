import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
import { useDispatch} from "react-redux";
import {
    Table,
    TableHead,
    TableContainer,
    TableRow,
    TableCell,
    TableBody,
    Button,
    makeStyles,
    Paper
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import { Date } from '../index'
import { useEffect } from 'react';
import { deleteEmail } from '../../store/action/mailingList.actions';
// import {DELETE_MAILING_LIST} from '../../store/action/mailingList.actions';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//         field: 'email',
//         headerName: 'E-Mail',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'createdAt',
//         headerName: 'Created At',
//         width: 150,
//         editable: true,
//     },
//     {
//         field: 'updatedAt',
//         headerName: 'Updated At',
//         type: 'number',
//         width: 110,
//         editable: true,
//     },
//     // {
//     //     field: 'send',
//     //     headerName: 'Send EMail',
//     //     width: 110,
//     //     editable: true,
//     // },
//     // {
//     //     field: 'delete',
//     //     headerName: 'Delete Email',
//     //     width: 110,
//     //     editable: true,
//     // },
// ];


export default function MailingListTable(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
<<<<<<< Updated upstream

    const deleteEntry = (id) => {
        alert(id);
        dispatch(deleteEmail.request(id));
=======
    const deleteEntry = (index) => {
        const data = {id:index}
        alert(index);
        dispatch(deleteEmail.request(index));
>>>>>>> Stashed changes
        // console.log(index);
    };
    // return (
    //     <div style={{ height: 400, width: '100%' }}>
    //         <DataGrid
    //             rows={props.list}
    //             columns={columns}
    //             pageSize={1}
    //             checkboxSelection
    //             disableSelectionOnClick
    //         />
    //     </div>
    // );
    // }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>index</TableCell>
                        <TableCell align="right">E-Mail</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Updated At</TableCell>
                        <TableCell align="right">Send Email</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.list.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right"><Date date={item.createdAt} /></TableCell>
                            <TableCell align="right"><Date date={item.updatedAt} /></TableCell>
                            <TableCell align="right"><Button variant="contained" color="primary">
                                <SendIcon />
                            </Button></TableCell>
                            <TableCell align="right">
                            <Button variant="contained" color="secondary" onClick={()=>deleteEntry(item._id)}>
                                <DeleteIcon />
                            </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}