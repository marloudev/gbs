import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";
import ItemUpdateSection from "./item-update-section";
import ItemsDeleteSection from "./items-delete-section";

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    console.log("row", row);
    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell component="th" scope="row">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>{" "}
                    {row.barcode}
                </TableCell>
                {/* <TableCell>{row.barcode}</TableCell> */}
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.uom}</TableCell>
                <TableCell>₱ {row.capital}</TableCell>
                <TableCell></TableCell>
                <TableCell>
                    <div className="flex gap-3">
                        <ItemUpdateSection data={row} />
                        <ItemsDeleteSection data={row} />
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={8}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box className=" w-full py-5">
                            <Typography variant="h6">List of Item</Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        {/* <TableCell>Item ID</TableCell> */}
                                        <TableCell>Barcode</TableCell>
                                        <TableCell>Brand Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>
                                            Unit of Measurement
                                        </TableCell>
                                        <TableCell>Selling Quantity</TableCell>
                                        <TableCell>Selling Price</TableCell>
                                        <TableCell>Capital</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((res, i) => {
                                        console.log('resres',res)
                                        return (
                                            <TableRow key={i}>
                                                {/* <TableCell>{res.item_id}</TableCell> */}
                                                <TableCell>{res.barcode}</TableCell>
                                                <TableCell>{res.name}</TableCell>
                                                <TableCell>
                                                    {res.description}
                                                </TableCell>
                                                <TableCell>{res.uom}</TableCell>
                                                <TableCell>
                                                    {res.quantity}
                                                </TableCell>
                                                <TableCell>
                                                ₱  {res?.product?.price??''}
                                                </TableCell>
                                                <TableCell>
                                                ₱   {res?.product?.capital??''}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function TableSection() {
    const { items } = useSelector((state) => state.products);
    console.log("products", items);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableBody>
                    <TableRow>
                        {/* <TableCell>Item ID</TableCell> */}
                        <TableCell>Barcode</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Unit of Measurement</TableCell>
                        <TableCell>Capital</TableCell>
                        <TableCell>IsVat</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    {items?.data?.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
