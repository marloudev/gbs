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
import AdministratorShowSalesItemSection from "./administrator-show-sales-item-section";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    const { sales } = useSelector((state) => state.sales);
    console.log('sales',sales)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Sales ID</TableCell>
                        <TableCell>Subtotal</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Tax</TableCell>
                        <TableCell>Change</TableCell>
                        <TableCell>Tenders</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Sold At</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sales?.data?.map((res, i) => {
                 
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>GB-{res.receipt_id}</TableCell>
                                <TableCell>{res.subtotal}</TableCell>
                                <TableCell>{res.discount}</TableCell>
                                <TableCell>{res.tax}</TableCell>

                                <TableCell>{res.change}</TableCell>
                                <TableCell>{res.tenders}</TableCell>
                                <TableCell>{res.total}</TableCell>
                                <TableCell>
                                    {moment(res?.created_at).format("LLL")}
                                </TableCell>
                                <TableCell>
                                    <AdministratorShowSalesItemSection
                                        id={res.id}
                                        data={res}
                                    />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
