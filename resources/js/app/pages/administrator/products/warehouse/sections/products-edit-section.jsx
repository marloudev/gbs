import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductForm, setProducts } from "../../redux/products-slice";
import store from "../../../../../../store/store";
import {
    editProductThunk,
    getAllProductsThunk,
} from "../../redux/products-thunk";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Close, Create } from "@mui/icons-material";
import { PencilIcon } from "@heroicons/react/24/outline";
import { get_products_service } from "@/services/products-service";
import { TextField } from "@mui/material";
export default function ProductsEditSection({ data }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { productForm } = useSelector((state) => state.products);
    const { toastStatus } = useSelector((state) => state.app);

    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    const search = parsedUrl.searchParams.get("search");

    useEffect(() => {
        if (open) {
            dispatch(
                setProductForm({
                    ...productForm,
                    id: data.id,
                    barcode: data.barcode,
                    description: data.description,
                    quantity: data.quantity,
                    price: data.price,
                }),
            );
        }
    }, [open]);

    useEffect(() => {
        if (toastStatus.status == "success") {
            setOpen(false);
        }
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault();
        store.dispatch(editProductThunk());
        store.dispatch(
            getAllProductsThunk(get_products_service(page, search ?? "")),
        );
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
                                            value={productForm.barcode ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setProductForm({
                                                        ...productForm,
                                                        barcode: e.target.value,
                                                    }),
                                                )
                                            }
                                            id="barcode"
                                            label="Barcode"
                                            variant="outlined"
                                        />
                                        <TextField
                                            className="w-full"
                                            required
                                            value={
                                                productForm.description ?? ""
                                            }
                                            onChange={(e) =>
                                                dispatch(
                                                    setProductForm({
                                                        ...productForm,
                                                        description:
                                                            e.target.value,
                                                    }),
                                                )
                                            }
                                            id="description"
                                            label="Description"
                                            variant="outlined"
                                        />
                                        <TextField
                                            type="number"
                                            className="w-full"
                                            required
                                            value={productForm.quantity ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setProductForm({
                                                        ...productForm,
                                                        quantity:
                                                            e.target.value,
                                                    }),
                                                )
                                            }
                                            id="quantity"
                                            label="Quantity"
                                            variant="outlined"
                                        />
                                        <TextField
                                            type="number"
                                            className="w-full"
                                            required
                                            value={productForm.price ?? ""}
                                            onChange={(e) =>
                                                dispatch(
                                                    setProductForm({
                                                        ...productForm,
                                                        price: e.target.value,
                                                    }),
                                                )
                                            }
                                            id="price"
                                            label="Price"
                                            variant="outlined"
                                        />{" "}
                                        {/* <button className='bg-red-500 hover:bg-red-400 p-3 w-full rounded-md text-white font-bold'>Submit</button> */}
                                    </div>
                                    <Button
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
