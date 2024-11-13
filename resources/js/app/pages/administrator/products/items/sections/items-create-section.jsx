import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductForm } from "../../redux/products-slice";
import {
    create_items_thunk,
    createProductThunk,
    get_items_thunk,
} from "../../redux/products-thunk";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Add, Close, Delete } from "@mui/icons-material";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import store from "@/store/store";
import moment from "moment";

export default function ItemsCreateSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { toastStatus } = useSelector((state) => state.app);

    const [form, setForm] = useState({
        items: [
            {
                barcode: "",
                name: "",
                description: "",
                uom: "Box",
                quantity: 0,
                capital: 0,
                price: 0,
                percent_selling_price: 0,
                discount: 0,
                isVat: 0,
            },
        ],
    });

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

    const removeItem = (index) => {
        setForm((prevForm) => ({
            ...prevForm,
            items: prevForm.items.filter((_, i) => i !== index),
        }));
    };

    const submitData = async (e) => {
        e.preventDefault();
        if (window.confirm("You want to continue.")) {
            setLoading(true);
            try {
                await store.dispatch(
                    create_items_thunk({
                        ...form,
                        item_id: moment().format("MMDDYYYYHHmmss"),
                    }),
                );
                await store.dispatch(get_items_thunk());
                setForm({
                    items: [
                        {
                            barcode: "",
                            name: "",
                            description: "",
                            uom: "Box",
                            quantity: 0,
                            capital: 0,
                            price: 0,
                            percent_selling_price: 0,
                            discount: 0,
                            isVat: 0,
                        },
                    ],
                });
                setOpen(false);
                setLoading(false);
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
        "Bottle",
        "Kilo",
        "Grams",
        "Each",
        "Dozen",
        "Pack",
    ];
    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Create Item
            </Button>
            <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
                <Box
                    className="h-[93vh] flex items-start justify-center"
                    role="presentation"
                >
                    <div className="flex flex-col gap-4 max-w-7xl">
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
                            <div className="flex flex-col gap-4 mb-4">
                                <div className="text-xl font-semibold">
                                    PARENT ITEM
                                </div>
                                <div className="flex gap-4 w-full">
                                    <TextField
                                        className="w-full"
                                        required
                                        value={form.items[0].barcode}
                                        onChange={(e) =>
                                            handleInputChange(
                                                0,
                                                "barcode",
                                                e.target.value,
                                            )
                                        }
                                        label="Barcode"
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="w-full"
                                        required
                                        value={form.items[0].name}
                                        onChange={(e) =>
                                            handleInputChange(
                                                0,
                                                "name",
                                                e.target.value,
                                            )
                                        }
                                        label="Product Name"
                                        variant="outlined"
                                    />
                                    <TextField
                                        className="w-full"
                                        required
                                        value={form.items[0].description}
                                        onChange={(e) =>
                                            handleInputChange(
                                                0,
                                                "description",
                                                e.target.value,
                                            )
                                        }
                                        label="Description"
                                        variant="outlined"
                                    />
                                    <FormControl required fullWidth>
                                        <InputLabel>
                                            Unit of Measurement
                                        </InputLabel>
                                        <Select
                                            label="Unit of Measurement"
                                            value={form.items[0].uom}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    0,
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
                                    {/* <TextField
                                        className="w-full"
                                        required
                                        value={form.items[0].quantity}
                                        onChange={(e) =>
                                            handleInputChange(
                                                0,
                                                "quantity",
                                                e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    "",
                                                ),
                                            )
                                        }
                                        label="Quantity"
                                        variant="outlined"
                                    /> */}
                                    <TextField
                                        className="w-full"
                                        required
                                        value={form.items[0].capital}
                                        onChange={(e) =>
                                            handleInputChange(
                                                0,
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
                                    {/* <TextField
                                        className="w-full"
                                        required
                                        value={
                                            form.items[0].percent_selling_price
                                        }
                                        onChange={(e) =>
                                            handleInputChange(
                                                0,
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
                                    {/* <TextField
                                        className="w-full"
                                        required
                                        value={form.items[0].discount}
                                        onChange={(e) =>
                                            handleInputChange(
                                                0,
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
                            </div>
                            {form.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-4 mb-4"
                                >
                                    <div className="text-xl font-semibold flex items-center justify-between">
                                        <div>Item {index + 1}</div>
                                        {index != 0 && (
                                            <Button
                                                variant="outlined"
                                                onClick={() =>
                                                    removeItem(index)
                                                }
                                            >
                                                <Delete /> Remove
                                            </Button>
                                        )}
                                    </div>
                                    <div className="flex gap-4 w-full">
                                        <TextField
                                            disabled={index == 0}
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
                                            disabled={index == 0}
                                            className="w-full"
                                            required
                                            value={item.name}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    index,
                                                    "name",
                                                    e.target.value,
                                                )
                                            }
                                            label="Product Name"
                                            variant="outlined"
                                        />
                                        <TextField
                                            disabled={index == 0}
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
                                                disabled={index == 0}
                                                label="Unit of Measurement"
                                                value={item.uom}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        index,
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
                                            label="Quantity"
                                            variant="outlined"
                                        />
                                        {/* <TextField
                                            disabled={index == 0}
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
                                            label="Price"
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
                                            value={item.discount}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    index,
                                                    "discount",
                                                    e.target.value.replace(
                                                        /[^0-9.]/g,
                                                        "",
                                                    ),
                                                )
                                            }
                                            label="Discount"
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                            ))}
                            <Button
                                disabled={loading}
                                size="large"
                                type="submit"
                                variant="contained"
                                className="w-full mt-4"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
