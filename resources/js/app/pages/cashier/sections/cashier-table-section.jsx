import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import CashierEditModal from "./cashier-edit-modal";
import CashierDeleteSection from "./cashier-delete-section";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CashierTableSection({ inputRef }) {
    const myElementRefs = useRef([]);
    const { cart } = useSelector((state) => state.cashier);

    const [selectedRow, setSelectedRow] = useState(0);
    const [id, setId] = useState(0);

    console.log("cart", cart);

    useEffect(() => {
        const myElement = myElementRefs.current[selectedRow];
        const handleKeyPress = (event) => {
            if (event.key === "ArrowUp" && selectedRow > 0) {
                setId(myElement?.id);
                setSelectedRow((prevRow) => prevRow - 1);
            } else if (
                event.key === "ArrowDown" &&
                selectedRow < cart.length - 1
            ) {
                setId(myElement?.id);
                setSelectedRow((prevRow) => prevRow + 1);
            }
        };
        if (myElement?.id) {
            setId(myElement?.id);
        }
        window.addEventListener("keydown", handleKeyPress);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [selectedRow, cart]);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = cart;

    return (
        <>
            <TableContainer component={Paper}>
                <Table   size="small" aria-label="a dense table">
                    <TableHead >
                        <TableRow>
                            <TableCell>Item ID</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((res, i) => (
                            <TableRow
                                id={res.randomId}
                                ref={(el) => (myElementRefs.current[i] = el)}
                                className={`${selectedRow === i ? "bg-gray-300" : ""}`}
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {res.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {res.quantity}
                                </TableCell>
                                <TableCell>
                                    {" "}
                                    {res.product.description}
                                </TableCell>
                                <TableCell> ₱ {res.price}</TableCell>
                                <TableCell> ₱ {res.total}</TableCell>
                                <TableCell>
                                    <div className="flex gap-3">
                                        {selectedRow == i ? (
                                            <CashierEditModal
                                                inputRef={inputRef}
                                                selectedRow={selectedRow}
                                                index={i}
                                                data={res}
                                            />
                                        ) : (
                                            <button className="font-medium text-gray-800  ">
                                                <PencilIcon className="h-6 text-blue-500" />
                                            </button>
                                        )}

                                        {selectedRow == i ? (
                                            <CashierDeleteSection
                                                selectedRow={selectedRow}
                                                index={i}
                                                data={res}
                                            />
                                        ) : (
                                            <button className="font-medium text-gray-800 ">
                                                <TrashIcon className="h-6 text-red-500" />
                                            </button>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
