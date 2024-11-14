import React, { useEffect, useState } from "react";
import ProductsTableSection from "./sections/products-table-section";
import AdministratorLayout from "../../administrator-layout";
import TableSection from "./sections/table-section";
import store from "@/store/store";
import { get_receives_thunk,  } from "./../redux/products-thunk";
import ProductsCreateSection from "./sections/products-create-section";
import PaginateSection from "./sections/paginate-section";
import SearchSection from "./sections/search-section";

export default function OrdersPage({ auth }) {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    const search = parsedUrl.searchParams.get("search");

    console.log(window.location);
    useEffect(() => {
        store.dispatch(get_receives_thunk());
    }, [page,search]);

    return (
        <AdministratorLayout user={auth.user}>
            <ProductsCreateSection />
            <div className="my-4">
                <SearchSection />
            </div>
            <TableSection />
            <PaginateSection />
        </AdministratorLayout>
    );
}
