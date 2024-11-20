import store from "@/store/store";
import { Button } from "@mui/material";
import React, { useState } from "react";
import {
    delete_items_product_thunk,
    get_items_thunk,
} from "../../redux/products-thunk";
import { Delete } from "@mui/icons-material";

export default function ItemProductDeleteSection({ data, setOpen }) {
    const [loading, setLoading] = useState(false);
    const removeItem = async (item) => {
        setLoading(true);
        try {
            await store.dispatch(delete_items_product_thunk(data.id));
            await store.dispatch(get_items_thunk());
            setLoading(false);
            setOpen(false);
        } catch (error) {
            setLoading(false);
        }
    };
    return (
        <Button
            disabled={loading}
            variant="outlined"
            onClick={() => removeItem(data)}
        >
            <Delete /> Remove
        </Button>
    );
}
