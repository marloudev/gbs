import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductForm, setProducts } from "../../redux/products-slice";
import store from "../../../../../../store/store";
import { createProductThunk } from "../../redux/products-thunk";

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
export default function ProductsCreateSection() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { productForm } = useSelector((state) => state.products);
    const { toastStatus } = useSelector((state) => state.app);

    useEffect(() => {
        if (toastStatus.status == "success") {
            setOpen(false);
        }
    }, [toastStatus.status]);

    function submitData(e) {
        e.preventDefault();
        store.dispatch(createProductThunk());
    }
    useEffect(() => {
        if (open) {
            dispatch(setProductForm({}));
        }
    }, [open]);

    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Create Product
            </Button>
            <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
                <Box className="h-[90vh] w-full" role="presentation">
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
                                className=" flex flex-col w-full h-full gap-4"
                            >
                                <div className="flex-none">
                                    <div className="text-2xl font-bold">
                                        Create Products
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-4 w-full">
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
                                        required
                                        value={productForm.description ?? ""}
                                        onChange={(e) =>
                                            dispatch(
                                                setProductForm({
                                                    ...productForm,
                                                    description: e.target.value,
                                                }),
                                            )
                                        }
                                        id="description"
                                        label="Description"
                                        variant="outlined"
                                    />
                                    <TextField
                                        required
                                        value={productForm.quantity ?? ""}
                                        onChange={(e) =>
                                            dispatch(
                                                setProductForm({
                                                    ...productForm,
                                                    quantity:
                                                        e.target.value.replace(
                                                            /[^0-9.]/g,
                                                            "",
                                                        ),
                                                }),
                                            )
                                        }
                                        id="quantity"
                                        label="Quantity"
                                        variant="outlined"
                                    />
                                    <TextField
                                        required
                                        value={productForm.price ?? ""}
                                        onChange={(e) =>
                                            dispatch(
                                                setProductForm({
                                                    ...productForm,
                                                    price: e.target.value.replace(
                                                        /[^0-9.]/g,
                                                        "",
                                                    ),
                                                }),
                                            )
                                        }
                                        id="price"
                                        label="Price"
                                        variant="outlined"
                                    />
                                </div>
                                <div className="w-full flex-none">
                                    <Button
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        className="w-full"
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
