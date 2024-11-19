import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../../../../store/store";
import {
    get_supplies_thunk,
    update_supplies_thunk,
} from "../../redux/products-thunk";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Close, Create } from "@mui/icons-material";
import { TextField } from "@mui/material";
export default function ProductsEditSection({ data }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const { toastStatus } = useSelector((state) => state.app);
    const [loading, setLoading] = useState(false);

    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    const search = parsedUrl.searchParams.get("search");

    useEffect(() => {
        if (open) {
            setForm({
                ...form,
                id: data.id,
                barcode: data.barcode,
                description: data.description,
                quantity: data.quantity,
                price: data.price,
            });
        }
    }, [open]);

    useEffect(() => {
        if (toastStatus.status == "success") {
            setOpen(false);
        }
    }, [toastStatus.status]);
    async function submitData(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(update_supplies_thunk(form));
            await store.dispatch(get_supplies_thunk());
            setOpen(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>
                <Create />
            </Button>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box className=" w-96" role="presentation">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="w-full flex items-end justify-end p-4">
                            <Button
                                onClick={() => setOpen(false)}
                                variant="contained"
                            >
                                <Close />
                            </Button>
                        </div>
                        <div className="w-full flex items-end justify-end px-3">
                            <form
                                onSubmit={submitData}
                                className=" flex flex-col w-full"
                            >
                                <div className="flex-none">
                                    <div className="text-2xl font-bold">
                                        Update Products
                                    </div>
                                </div>
                                <div className="flex flex-col h-[85vh] justify-between mt-5 w-full">
                                    <div className="flex flex-col gap-4">
                                        <TextField
                                            className="w-full"
                                            required
                                            value={form.barcode ?? ""}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    barcode: e.target.value,
                                                })
                                            }
                                            id="barcode"
                                            label="Barcode"
                                            variant="outlined"
                                        />
                                        <TextField
                                            className="w-full"
                                            required
                                            value={form.description ?? ""}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    description: e.target.value,
                                                })
                                            }
                                            id="description"
                                            label="Description"
                                            variant="outlined"
                                        />
                                        <TextField
                                            type="number"
                                            className="w-full"
                                            required
                                            value={form.quantity ?? ""}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    quantity: e.target.value,
                                                })
                                            }
                                            id="quantity"
                                            label="Quantity"
                                            variant="outlined"
                                        />
                                        {/* <TextField
                                            type="number"
                                            className="w-full"
                                            required
                                            value={form.price ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setProductForm({
                                                        ...form,
                                                        price: e.target.value,
                                                    }),
                                                )
                                            }
                                            id="price"
                                            label="Price"
                                            variant="outlined"
                                        /> */}
                                        {/* <button className='bg-red-500 hover:bg-red-400 p-3 w-full rounded-md text-white font-bold'>Submit</button> */}
                                    </div>
                                    <Button
                                        disabled={loading}
                                        className="w-full"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
