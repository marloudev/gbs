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
import ProductsEditSection from "./products-edit-section";
import { Chip } from "@mui/material";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    const { supplies } = useSelector((state) => state.products);
    console.log("supplies", supplies);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Barcode</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Quantity</TableCell>
                        {/* <TableCell>Price</TableCell> */}
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {supplies?.data?.map((res, i) => {
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
                                <TableCell>GB-{res.barcode}</TableCell>
                                <TableCell>{res.description}</TableCell>
                                <TableCell>
                                    <Chip
                                        color={
                                            res.quantity <= 2
                                                ? "error"
                                                : "success"
                                        }
                                        label={`${res.uom} ${res.quantity}`}
                                        variant="outlined"
                                    />
                                </TableCell>
                                {/* <TableCell>{res.price}</TableCell> */}
                                <TableCell>
                                    {/* <ModalOptionSection data={res} /> */}
                                    <ProductsEditSection data={res} />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
