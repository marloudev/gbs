import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductForm } from "../../redux/products-slice";
import {
    delete_items_product_thunk,
    get_items_thunk,
    update_items_thunk,
} from "../../redux/products-thunk";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Add, Close, Delete, Edit } from "@mui/icons-material";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import store from "@/store/store";
import moment from "moment";
import { setNotification } from "@/app/redux/app-slice";
import ItemProductDeleteSection from "./item-product-delete-section";

export default function ItemsDeleteSection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { toastStatus } = useSelector((state) => state.app);

    const [form, setForm] = useState({
        items: [],
    });

    useEffect(() => {
        if (open && data) {
            setForm({
                id: data.id,
                barcode: data.barcode,
                name: data.name,
                description: data.description,
                uom: data.uom,
                quantity: data.quantity,
                capital: data.capital,
                price: data.product.price,
                percent_selling_price: data.percent_selling_price,
                discount: data.discount,
                isVat: data.isVat,
                items: [
                    ...data.items.map((res) => ({
                        ...res,
                        price: res.product.price,
                        capital: res.product.capital,
                    })),
                ],
            });
        }
    }, [open]);
    console.log("datasssssss", form);

    useEffect(() => {
        if (toastStatus.status === "success") {
            setOpen(false);
        }
    }, [toastStatus.status]);

    const handleInputChange = (index, field, value) => {
        setForm((prevForm) => {
            const updatedItems = [...prevForm.items];
            updatedItems[index] = {
                ...updatedItems[index],
                [field]: value,
            };
            return { ...prevForm, items: updatedItems };
        });
    };

    function handleInputChangeParent(field, value) {
        setForm({
            ...form,
            [field]: value,
        });
    }

    const addItem = () => {
        setForm((prevForm) => ({
            ...prevForm,
            items: [
                ...prevForm.items,
                {
                    barcode: "",
                    name: "",
                    description: "",
                    uom: "Box",
                    quantity: 0,
                    capital: 0,
                    percent_selling_price: 0,
                    discount: 0,
                    isVat: 0,
                },
            ],
        }));
    };

    const submitData = async (e) => {
        e.preventDefault();
        if (window.confirm("You would like to continue?")) {
            // setLoading(true);
            try {
                await store.dispatch(
                    update_items_thunk({
                        ...form,
                        item_id: moment().format("MMDDYYYYHHmmss"),
                    }),
                );
                    await store.dispatch(get_items_thunk());
                   await dispatch(
                        setNotification({
                            open: true,
                            type: "success",
                            message: "Created Successfully",
                        }),
                    );
                // window.location.reload()
                await setOpen(false);
                await setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (open) {
            dispatch(setProductForm({}));
        }
    }, [open, dispatch]);
    const units = [
        "Carton",
        "Case",
        "Bag",
        "Tray",
        "Can",
        "Roll",
        "Sheet",
        "Plastic",
        "Ream",
        "Bottle",
        "Sack",
        "Kilo",
        "1/4",
        "1/2",
        "3/4",
        "Grams",
        "Each",
        "Dozen",
        "Half Dozen",
        "Pack",
        "Small",
        "Medium",
        "Large",
    ];
    return (
        <div>
            <Button
                color="info"
                variant="contained"
                onClick={() => setOpen(true)}
            >
                <Edit />
            </Button>
            <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
                <Box
                    className="h-[93vh] flex items-start justify-center"
                    role="presentation"
                >
                    <div className="flex flex-col gap-4 max-w-7xl">
                        <div className="px-4 text-3xl font-bold">
                            UPDATE ITEM
                        </div>
                        <div className="w-full flex items-center justify-between p-4">
                            <Button variant="contained" onClick={addItem}>
                                <Add /> Add Item
                            </Button>
                            <Button
                                onClick={() => setOpen(false)}
                                variant="outlined"
                            >
                                <Close /> Close
                            </Button>
                        </div>
                        <form
                            onSubmit={submitData}
                            className="flex flex-col w-full min-h-[80vh]  p-4"
                        >
                            <div className="flex-1">
                                <div className="flex flex-col gap-4 mb-4">
                                    <div className="text-xl font-semibold">
                                        PARENT ITEM
                                        {/* (Supply) */}
                                    </div>
                                    <div className="flex gap-4 w-full">
                                        <TextField
                                            className="w-full"
                                            required
                                            value={form.barcode}
                                            onChange={(e) =>
                                                handleInputChangeParent(
                                                    "barcode",
                                                    e.target.value,
                                                )
                                            }
                                            label="Barcode"
                                            variant="outlined"
                                        />
                                        <TextField
                                            className="w-full"
                                            value={form.name}
                                            onChange={(e) =>
                                                handleInputChangeParent(
                                                    "name",
                                                    e.target.value,
                                                )
                                            }
                                            label="Brand Name"
                                            variant="outlined"
                                        />
                                        <TextField
                                            className="w-full"
                                            required
                                            value={form.description}
                                            onChange={(e) =>
                                                handleInputChangeParent(
                                                    "description",
                                                    e.target.value,
                                                )
                                            }
                                            label="Description"
                                            variant="outlined"
                                        />
                                        {form.uom && (
                                            <FormControl required fullWidth>
                                                <InputLabel>
                                                    Unit of Measurement
                                                </InputLabel>
                                                <Select
                                                    label="Unit of Measurement"
                                                    value={form.uom}
                                                    onChange={(e) =>
                                                        handleInputChangeParent(
                                                            "uom",
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    {units.map((unit) => (
                                                        <MenuItem
                                                            key={unit}
                                                            value={unit}
                                                        >
                                                            {unit}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        )}

                                        <TextField
                                            className="w-full"
                                            required
                                            value={form.quantity}
                                            onChange={(e) =>
                                                handleInputChangeParent(
                                                    "quantity",
                                                    e.target.value.replace(
                                                        /[^0-9.]/g,
                                                        "",
                                                    ),
                                                )
                                            }
                                            label="Selling Quantity"
                                            variant="outlined"
                                        />
                                        <TextField
                                            className="w-full"
                                            required
                                            value={form.price}
                                            onChange={(e) =>
                                                handleInputChangeParent(
                                                    "price",
                                                    e.target.value.replace(
                                                        /[^0-9.]/g,
                                                        "",
                                                    ),
                                                )
                                            }
                                            label="Selling Price"
                                            variant="outlined"
                                        />
                                        {form.capital && (
                                            <TextField
                                                className="w-full"
                                                required
                                                value={form.capital}
                                                onChange={(e) =>
                                                    handleInputChangeParent(
                                                        "capital",
                                                        e.target.value.replace(
                                                            /[^0-9.]/g,
                                                            "",
                                                        ),
                                                    )
                                                }
                                                label="Capital"
                                                variant="outlined"
                                            />
                                        )}

                                        {/* <TextField
                                        className="w-full"
                                        required
                                        value={form.discount}
                                        onChange={(e) =>
                                            handleInputChangeParent(
                                               
                                                "discount",
                                                e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    "",
                                                ),
                                            )
                                        }
                                        label="Discount"
                                        variant="outlined"
                                    /> */}
                                    </div>
                                </div>

                                <div className="text-xl font-semibold">
                                    CHILDREN ITEM
                                    {/* (Product) */}
                                </div>
                                {form.items.map((item, index) => {
                                    return (
                                        <>
                                            <div
                                                key={index}
                                                className="flex flex-col gap-4 mb-4"
                                            >
                                                <div className="text-xl font-semibold flex items-center justify-between">
                                                    <div>Item {index + 1}</div>
                                                    <ItemProductDeleteSection
                                                        setOpen={setOpen}
                                                        data={item}
                                                    />
                                                </div>
                                                <div className="flex gap-4 w-full">
                                                    <TextField
                                                        type="number"
                                                        className="w-full"
                                                        required
                                                        value={item.barcode}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "barcode",
                                                                e.target.value,
                                                            )
                                                        }
                                                        label="Barcode"
                                                        variant="outlined"
                                                    />
                                                    <TextField
                                                        className="w-full"
                                                        value={item.name}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "name",
                                                                e.target.value,
                                                            )
                                                        }
                                                        label="Brand Name"
                                                        variant="outlined"
                                                    />
                                                    <TextField
                                                        className="w-full"
                                                        required
                                                        value={item.description}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "description",
                                                                e.target.value,
                                                            )
                                                        }
                                                        label="Description"
                                                        variant="outlined"
                                                    />

                                                    <FormControl fullWidth>
                                                        <InputLabel>
                                                            Unit of Measurement
                                                        </InputLabel>
                                                        <Select
                                                            label="Unit of Measurement"
                                                            value={item.uom}
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    index,
                                                                    "uom",
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                        >
                                                            {units.map(
                                                                (unit) => (
                                                                    <MenuItem
                                                                        key={
                                                                            unit
                                                                        }
                                                                        value={
                                                                            unit
                                                                        }
                                                                    >
                                                                        {unit}
                                                                    </MenuItem>
                                                                ),
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        className="w-full"
                                                        required
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "quantity",
                                                                e.target.value.replace(
                                                                    /[^0-9.]/g,
                                                                    "",
                                                                ),
                                                            )
                                                        }
                                                        label="Selling Quantity"
                                                        variant="outlined"
                                                    />
                                                    {/* <TextField
                                        
                                        className="w-full"
                                        required
                                        value={item.capital}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "capital",
                                                e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    "",
                                                ),
                                            )
                                        }
                                        label="Capital"
                                        variant="outlined"
                                    /> */}
                                                    <TextField
                                                        className="w-full"
                                                        required
                                                        value={item.price}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "price",
                                                                e.target.value.replace(
                                                                    /[^0-9.]/g,
                                                                    "",
                                                                ),
                                                            )
                                                        }
                                                        label="Selling Price"
                                                        variant="outlined"
                                                    />
                                                    {/* <TextField
                                        className="w-full"
                                        required
                                        value={item.percent_selling_price}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "percent_selling_price",
                                                e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    "",
                                                ),
                                            )
                                        }
                                        label="Percent Selling Price"
                                        variant="outlined"
                                    /> */}

                                                    <TextField
                                                        className="w-full"
                                                        required
                                                        value={item.capital}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "capital",
                                                                e.target.value.replace(
                                                                    /[^0-9.]/g,
                                                                    "",
                                                                ),
                                                            )
                                                        }
                                                        label="Capital"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <Button
                                disabled={loading}
                                size="large"
                                type="submit"
                                variant="contained"
                                className="w-full mt-4"
                            >
                                UPDATE
                            </Button>
                        </form>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
