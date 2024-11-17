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
import { Link } from "@mui/material";

export default function AccountDetailsTableSection() {
    const { account_details } = useSelector((state) => state.account_details);

    function peso_format(amount) {
        let formattedAmount = new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
        }).format(amount);
        return formattedAmount;
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date Collected</TableCell>
                        <TableCell>Cashier Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Total Amount</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {account_details?.daily_sales?.map((res, i) => {
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
                                    <div
                                        // href={
                                        //     "/administrator/accounts/" + res.id
                                        // }
                                        className="font-medium text-gray-800"
                                    >
                                        {res.sale_date}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {" "}
                                    {account_details?.cashier?.name ?? ""}
                                </TableCell>
                                <TableCell>
                                    {" "}
                                    {account_details?.cashier?.email ?? ""}
                                </TableCell>
                                <TableCell>
                                    {" "}
                                    {peso_format(res.daily_total)}
                                </TableCell>
                                <TableCell>
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
