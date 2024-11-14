import React, { useEffect, useState } from "react";
import DrawerAction from "../../../../../layouts/components/drawer-action";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/products-slice";
import store from "../../../../../../store/store";
import { create_receives_thunk, createProductThunk, get_items_by_id_thunk, get_receives_thunk } from "../../redux/products-thunk";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Close } from "@mui/icons-material";
import { TextField } from "@mui/material";
export default function ProductsCreateSection() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [search, setSearch] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const { item } = useSelector((state) => state.products);
    const { toastStatus } = useSelector((state) => state.app);
    const [form, setForm] = useState({})
    useEffect(() => {
        if (toastStatus.status == "success") {
            setOpen(false);
        }
    }, [toastStatus.status]);

    async function submitData(e) {
        e.preventDefault();
        setLoading2(true)
        try {
            await store.dispatch(create_receives_thunk({
                ...form,
                ...item,
                item_count: form.quantity,
                quantity: (item?.quantity ?? 0),
                total_quantity: (item?.quantity ?? 0) * (form?.quantity ?? 0)
            }))
            await store.dispatch(get_receives_thunk());
            setLoading2(false)
            setOpen(false);
        } catch (error) {
            setLoading2(false)
        }
    }
    useEffect(() => {
        if (open) {
            setForm({});
            setSearch(null)
        }
    }, [open]);


    async function submitSearch(e) {
        e.preventDefault()
        setLoading(true)
        try {
            await store.dispatch(get_items_by_id_thunk(search))
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!item) {
            setSearch(null)
        }
    }, [item])
    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Product Order Item
            </Button>
            <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
                <Box className="h-[93vh] w-full" role="presentation">
                    <div className="flex flex-col w-full">
                        <div className="w-full flex items-end justify-end p-4">
                            <Button
                                onClick={() => setOpen(false)}
                                variant="contained"
                            >
                                <Close />
                            </Button>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <div className="w-1/4 flex items-end justify-end px-3 ">
                                <div
                                    className=" flex flex-col w-full h-full gap-4">
                                    <div className="flex-none">
                                        <div className="text-2xl font-bold">
                                            Create Product Order Item
                                        </div>


                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Item Name</TableCell>
                                                    <TableCell align="right">{item?.name}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Quantity</TableCell>
                                                    <TableCell align="right">{item?.quantity}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Total Quantity</TableCell>
                                                    <TableCell align="right">{(item?.quantity ?? 0) * (form?.quantity ?? 0)}</TableCell>
                                                </TableRow>
                                            </TableHead>
                                        </Table>
                                    </div>
                                    {
                                        !loading && item == null && <div className="text-red-500">
                                            Item not found!
                                        </div>
                                    }
                                    <div className="flex flex-1 flex-col gap-4 w-full">
                                        <form onCutCapture={submitSearch} onSubmit={submitSearch}>
                                            <TextField
                                                className="w-full"
                                                required
                                                value={search ?? ""}
                                                onChange={(e) =>
                                                    setSearch(e.target.value)
                                                }
                                                id="barcode"
                                                label={loading ? 'Loading...' : "Item Barcode"}
                                                variant="outlined"
                                            />
                                        </form>

                                        <form
                                            onSubmit={submitData}
                                        >
                                            <TextField
                                                required
                                                type="number"
                                                className="w-full"
                                                value={form.quantity ?? ""}
                                                onChange={(e) => setForm({
                                                    ...form,
                                                    quantity:
                                                        e.target.value.replace(
                                                            /[^0-9.]/g,
                                                            "",
                                                        ),
                                                })
                                                }
                                                id="quantity"
                                                label="Count Item"
                                                variant="outlined"
                                            />
                                            {
                                                form.quantity != 0 && item != null && form.quantity && <div className="w-full flex-none mt-3">
                                                    <Button
                                                        disabled={loading2}
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                        className="w-full"
                                                    >
                                                        Submit
                                                    </Button>
                                                </div>
                                            }

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
