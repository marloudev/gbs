import React, { useEffect } from "react";
import AdministratorLayout from "../../administrator-layout";
import ItemsCreateSection from "./sections/items-create-section";
import TableSection from "./sections/items-table-section";
import store from "@/store/store";
import { get_items_thunk } from "../redux/products-thunk";
import PaginateSection from "./sections/paginate-section";
import SearchSection from "./sections/search-section";
import { useDispatch } from "react-redux";
import { setItems } from "../redux/products-slice";

export default function ItemsPage({ auth }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setItems([]));
        store.dispatch(get_items_thunk());
    }, []);
    return (
        <AdministratorLayout user={auth.user}>
            <ItemsCreateSection />
            <br />
            <SearchSection />
            <br />
            <TableSection />
            <PaginateSection />
        </AdministratorLayout>
    );
}
