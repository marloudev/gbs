import React, { useEffect, useState } from "react";
import ProductsTableSection from "./sections/products-table-section";
import AdministratorLayout from "../../administrator-layout";
import TableSection from "./sections/table-section";
import store from "@/store/store";
import { get_warehouses_thunk } from "./../redux/products-thunk";
import PaginateSection from "./sections/paginate-section";
import SearchSection from "./sections/search-section";

export default function SuppliesPage({ auth }) {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    const search = parsedUrl.searchParams.get("search");

    useEffect(() => {
        store.dispatch(get_warehouses_thunk());
    }, []);

    return (
        <AdministratorLayout user={auth.user}>
            {/* <ProductsCreateSection /> */}
            <div className="my-4">
                <SearchSection />
            </div>
            <TableSection />
            <PaginateSection />
        </AdministratorLayout>
    );
}
