import React, { useState } from "react";
import FormFieldInput from "../../../components/Input";
import store from "./../../../../store/store";
import { get_specific_product_service } from "../../../../services/products-service";
import { addCartThunk } from "../redux/cashier-thunk";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/cashier-slice";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function CashierScannerSection({ inputRef }) {
    const { search } = useSelector((state) => state.cashier);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    async function submitSearch(e) {
        setLoading(true);
        e.preventDefault();
        await store.dispatch(
            addCartThunk(get_specific_product_service(search)),
        );
        setLoading(false);
    }
    function getSearch(e) {
        dispatch(setSearch(e.target.value));
    }
    return (
        <div className="m-10">
            <div onCutCapture={submitSearch} onSubmit={submitSearch}>
              
                <Paper
                    component="form"
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                >
                    <InputBase
                        name="search"
                        onChange={getSearch}
                        inputRef={inputRef}
                        value={search}
                        autoFocus={true}
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={`${loading ? "Loading..." : "Scanning Item"} `}
                        inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    );
}
