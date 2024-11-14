import {
    create_carts_service,
    delete_cart_item_service,
    edit_cart_item_service,
    get_add_to_carts_service,
} from "@/services/carts-service";
import { add_sales_service } from "../../../../services/sales-service";
import { appSlice } from "../../../redux/app-slice";
import { cashierSlice } from "./cashier-slice";
import moment from "moment";

export function get_cart_thunk() {
    return async function (dispatch, getState) {
        const receipt_id = localStorage.getItem("receipt_id");
        const response = await get_add_to_carts_service(receipt_id);
        dispatch(cashierSlice.actions.setCart(response));
    };
}

export function delete_cart_item_thunk(id) {
    return async function (dispatch, getState) {
        const response = await delete_cart_item_service(id);
        dispatch(cashierSlice.actions.setCart(response));
    };
}

export function edit_cart_item_thunk(data) {
    return async function (dispatch, getState) {
        const response = await edit_cart_item_service(data);
        dispatch(cashierSlice.actions.setCart(response));
    };
}

export function addCartThunk(product) {
    return async function (dispatch, getState) {
        // getState().cashier.cart
        if ((await product).status == "success") {
            if (!localStorage.getItem("receipt_id")) {
                localStorage.setItem(
                    "receipt_id",
                    moment().format("MMDDYYYYHHmmss"),
                );
            }

            const randomId = Math.floor(
                1000000000 + Math.random() * 9000000000,
            );
            const response = await create_carts_service({
                receipt_id: localStorage.getItem("receipt_id"),
                barcode: (await product).data.barcode,
                randomId: randomId,
                quantity: (await product).data.quantity,
                price: (await product).data.price,
                total: (await product).data.price,
                capital: (await product).data.capital,
                supply_barcode: (await product).data?.item_product?.item?.barcode??0
            });

            dispatch(cashierSlice.actions.setCart(response.data));
            dispatch(cashierSlice.actions.setSearch(""));
        } else {
            dispatch(cashierSlice.actions.setSearch(""));
        }
    };
}

export function createPaymentThunk() {
    return async function (dispatch, getState) {
        dispatch(cashierSlice.actions.setLoading(true));
        dispatch(
            appSlice.actions.setToastStatus({
                status: "loading",
                message: "Loading...",
            }),
        );
        const payment = getState().cashier.payment;
        const cart = getState().cashier.cart;
        const data = { payment, cart };
        try {
            await add_sales_service(data);
            await dispatch(cashierSlice.actions.setIsPrint(true));
            setTimeout(() => {
                dispatch(cashierSlice.actions.setIsPrint(false));
            }, 1000);
            await dispatch(cashierSlice.actions.setLoading(false));
            await dispatch(cashierSlice.actions.resetPayment());
            await dispatch(
                appSlice.actions.setToastStatus({
                    status: "success",
                    message: "Created Success!",
                }),
            );
            localStorage.clear();
        } catch (error) {
            dispatch(cashierSlice.actions.setLoading(false));
            dispatch(
                appSlice.actions.setToastStatus({
                    status: "error",
                    message: error.response.data.message,
                }),
            );
        }
    };
}
