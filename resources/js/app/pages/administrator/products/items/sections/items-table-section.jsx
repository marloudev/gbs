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
// import ProductsEditSection from "./products-edit-section";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    const { items } = useSelector((state) => state.products);
    console.log('products',items)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item ID</TableCell>
                        <TableCell>Barcode</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Unit of Measurement</TableCell>
                        <TableCell>Capital</TableCell>
                        <TableCell>IsVat</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.data?.map((res, i) => {
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
                                <TableCell>GB-{res.item_id}</TableCell>
                                <TableCell>{res.barcode}</TableCell>
                                <TableCell>{res.name}</TableCell>
                                <TableCell>{res.description}</TableCell>
                                <TableCell>{res.uom}</TableCell>
                                <TableCell>{res.capital}</TableCell>
                                <TableCell align="right">
                                    {/* <ModalOptionSection data={res} /> */}
                                    {/* <ProductsEditSection data={res} /> */}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
