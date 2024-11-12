import React, { useEffect, useState } from "react";
import DrawerAction from "../../../../layouts/components/drawer-action";
import { useDispatch, useSelector } from "react-redux";
import { setProductForm, setProducts } from "../redux/products-slice";
import store from "../../../../../store/store";
import { createProductThunk, editProductThunk, getAllProductsThunk } from "../redux/products-thunk";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Close } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { PencilIcon } from "@heroicons/react/24/outline";
import { get_products_service } from "@/services/products-service";
export default function ProductsEditSection({ data }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { productForm } = useSelector((state) => state.products);
    const { toastStatus } = useSelector((state) => state.app);
    
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    const search = parsedUrl.searchParams.get("search");

    useEffect(() => {
        if (open) {
            dispatch(setProductForm({
                ...productForm,
                id:data.id,
                barcode: data.barcode,
                description: data.description,
                quantity: data.quantity,
                price: data.price,
            }))
        }
    }, [open]);

    useEffect(() => {
        if (toastStatus.status == 'success') {
            setOpen(false)
        }
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault()
        store.dispatch(editProductThunk())
        store.dispatch(getAllProductsThunk(get_products_service(page, search??'')));
    }

    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>
               
            <PencilIcon className='h-6' />
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
                        className=" flex flex-col w-full">
                        <div className='flex-none'>
                            <div className='text-2xl font-bold'>
                                Update Products
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Barcode
                                    </label>
                                    <input
                                        required
                                        value={productForm.barcode ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            barcode: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="barcode"
                                        type="text"
                                        placeholder="Input Barcode" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Description
                                    </label>
                                    <input
                                        required
                                        value={productForm.description ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            description: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="description"
                                        type="text"
                                        placeholder="Input Description" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Quantity
                                    </label>
                                    <input
                                        required
                                        value={productForm.quantity ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            quantity: e.target.value
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="quantity"
                                        type="number"
                                        placeholder="Input Quantity" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Price
                                    </label>
                                    <input
                                        required
                                        value={productForm.price ?? ""}
                                        onChange={(e) => dispatch(setProductForm({
                                            ...productForm,
                                            price: e.target.value.replace(/[^0-9.]/g, '')
                                        }))}
                                        className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="text"
                                        placeholder="Input Price" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full flex-none'>
                            {/* <button className='bg-red-500 hover:bg-red-400 p-3 w-full rounded-md text-white font-bold'>Submit</button> */}
                            <Button className="w-full" type="submit" variant="contained">Submit</Button>
                        </div>
                    </form>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
