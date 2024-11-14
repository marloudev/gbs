import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import moment from "moment";
import PulloutItemSection from "./pullout-item-section";

export default function TableSection() {
    const { warehouses } = useSelector((state) => state.products);
    console.log('receivesss', warehouses)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Barcode</TableCell>
                        <TableCell>Brand Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Total Quantity</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {warehouses?.data?.map((res, i) => {
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
                                <TableCell>GB-{res?.barcode}</TableCell>
                                <TableCell>{res.brand}</TableCell>
                                <TableCell>{res.description}</TableCell>
                                <TableCell>{res.quantity}</TableCell>
                                <TableCell >
                                    <PulloutItemSection data={res} />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
