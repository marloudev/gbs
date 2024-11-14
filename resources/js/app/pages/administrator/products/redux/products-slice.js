import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productForm: {},
        loading: false,
        items: [],
        item: {},
        receives: [],
        warehouses: [],
        supplies: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProductForm: (state, action) => {
            state.productForm = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setItem: (state, action) => {
            state.item = action.payload;
        },
        setReceives: (state, action) => {
            state.receives = action.payload;
        },
        setWarehouses: (state, action) => {
            state.warehouses = action.payload;
        },
        setSupplies: (state, action) => {
            state.supplies = action.payload;
        },
    },
});
export const { setProducts, setRecipes, setProductForm, setItems, setItem, setReceives, setWarehouses,setSupplies } =
    productsSlice.actions;

export default productsSlice.reducer;
