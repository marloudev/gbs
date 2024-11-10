import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UpdateSection from './update-section';
// import DeleteSection from './delete-section';
import { useSelector } from "react-redux";
import moment from "moment";
import store from "@/store/store";
import { getAllBranches } from "../redux/account-thunk";
import { Link } from "@mui/material";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    const { accounts } = useSelector((state) => state.accounts);
    React.useEffect(() => {
        store.dispatch(getAllBranches())
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Fullname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Contact #</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts?.map((res, i) => {
                        const dob = moment(res.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>
                                <Link href={"/administrator/accounts/" + res.id} className="font-medium text-gray-800">{res.name}</Link>
                                </TableCell>
                                <TableCell>{res.email}</TableCell>
                                <TableCell>{res.role}</TableCell>
                                <TableCell>{res.contact}</TableCell>
                                <TableCell>{res.status}</TableCell>
                                <TableCell align="right">
                                    ss
                                    {/* <ModalOptionSection data={res} /> */}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
