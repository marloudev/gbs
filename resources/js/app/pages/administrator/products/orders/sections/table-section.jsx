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
import ReceivedItemSection from "./received-item-section";
import AdministratorDeleteProduct from "./products-delete-section";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    const { receives } = useSelector((state) => state.products);
    console.log("receivesss", receives);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Barcode</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Item Count</TableCell>
                        <TableCell>Unit Of Measurement</TableCell>
                        <TableCell>Capital</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total Received Quantity</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {receives?.data?.map((res, i) => {
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
                                <TableCell>GB-{res.item?.barcode}</TableCell>
                                <TableCell>{res.item?.name} {res.item?.description}</TableCell>
                                <TableCell>{res.item_count}</TableCell>
                                <TableCell>{res.item?.uom}</TableCell>
                                <TableCell>{res.item?.capital}</TableCell>
                                <TableCell>{res.quantity}</TableCell>
                                <TableCell>{res.total_quantity}</TableCell>
                                <TableCell>{res.status}</TableCell>
                                <TableCell>
                                    <div className="flex gap-3">
                                        {res.status == "Pending" && (
                                            <ReceivedItemSection data={res} />
                                        )}
                                        <AdministratorDeleteProduct
                                            data={res}
                                        />
                                    </div>
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
