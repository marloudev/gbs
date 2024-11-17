import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import store from "@/store/store";
import {
    get_receives_thunk,
    get_warehouses_thunk,
    pullout_item_thunk,
} from "../../redux/products-thunk";
import { TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Close } from "@mui/icons-material";

export default function PulloutItemSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [form, setForm] = React.useState({
        pullout_count: 0,
    });
    const [loading, setLoading] = React.useState(false);
    function makeNonNegative(num) {
        if (isNaN(Math.floor(num) < 0 ? 0 : Math.floor(num))) {
            return 0;
        } else {
            return Math.floor(num) < 0 ? 0 : Math.floor(num);
        }
    }
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
    };
    const remaining = isNaN(data.quantity - (form?.pullout_count ?? 0))
        ? 0
        : data.quantity - (form?.pullout_count ?? 0);
    async function pullout_item(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                pullout_item_thunk({
                    ...data,
                    ...form,
                    count_remaining: data?.item_count - form.pullout_count,
                    remaining_quantity: remaining,
                    status: "Received",
                }),
            );
            store.dispatch(get_warehouses_thunk());
            setOpen(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    console.log("datadatadata", data);

    return (
        <div>
            <Button
                variant="contained"
                disabled={data.quantity == 0}
                onClick={handleOpen}
            >
                PULLOUT
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <Typography
                            id="modal-modal-title"
                            className="py-5"
                            variant="h6"
                            component="h2"
                        >
                            Are you sure you want to pull out this item?
                        </Typography>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Name</TableCell>
                                    <TableCell align="right">
                                        {data?.brand}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell align="right">
                                        {data.quantity}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Pull Out Count</TableCell>
                                    <TableCell align="right">
                                        {isNaN(form?.pullout_count ?? 0)
                                            ? 0
                                            : (form?.pullout_count ?? 0)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Remaining</TableCell>
                                    <TableCell align="right">
                                        {remaining}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                        <div className="mt-5">
                            <TextField
                                className="w-full"
                                required
                                type="number"
                                value={form.pullout_count ?? ""}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        pullout_count: parseInt(e.target.value),
                                    })
                                }
                                id="pullout_count"
                                label="Number of Item"
                                variant="outlined"
                            />
                        </div>
                        <div className="w-full flex items-end justify-end mt-12 gap-5">
                            <Button
                                variant="outlined"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                disabled={
                                    remaining < 0 ||
                                    form.pullout_count == "" ||
                                    loading
                                }
                                variant="contained"
                                onClick={pullout_item}
                            >
                                Confirm
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
