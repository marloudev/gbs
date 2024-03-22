import { searchSlice } from "./search-slice";

export function set_search_product_thunk(products) {
    return async function (dispatch, getState) {
        dispatch(searchSlice.actions.setData((await products).data));
    };
}