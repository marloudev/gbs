import React, { useRef, useState } from "react";
import FormFieldInput from "../../../components/Input";
import store from "./../../../../store/store";
import { get_specific_product_service } from "../../../../services/products-service";
import { addCartThunk } from "../redux/cashier-thunk";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/cashier-slice";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useHotkeys } from "react-hotkeys-hook";

export default function CashierScannerSection() {
    const { search } = useSelector((state) => state.cashier);
    const inputRef = useRef(null);
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
    useHotkeys("f", () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus on the input field
        }
    });
    useHotkeys('arrowup', () => {
        if (inputRef.current) {
            inputRef.current.blur(); // Focus on the input field
        }
      });
    
      // Use hotkey for 'Arrow Down' to focus on the input field (or another element)
      useHotkeys('arrowdown', () => {
        if (inputRef.current) {
            inputRef.current.blur(); // Focus on the input field
        }
      });
      function handleKeyDown(e) {
        // Arrow keys (left, up, right, down) should not trigger input change
        if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
            inputRef.current.blur();
            e.preventDefault(); // Prevent default behavior of the arrow keys
        }
    }
    return (
        <div className="m-10">
            <div onCutCapture={submitSearch} onSubmit={submitSearch}>
                <Paper
                    component="form"
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                >
                    <InputBase
                        inputRef={inputRef}
                        type="number"
                        name="search"
                        onChange={getSearch}
                        value={search}
                        autoFocus={true}
                        onKeyDown={handleKeyDown} 
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
