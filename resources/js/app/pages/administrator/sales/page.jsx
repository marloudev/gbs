import React, { useEffect, useState } from "react";
import AdministratorSalesTableSection from "./sections/administrator-sales-table-section";
import AdministratorLayout from "../administrator-layout";
import TableSection from "./sections/table-section";
import store from "@/store/store";
import { getSalesThunk } from "./redux/sales-thunk";
import SearchSection from "./sections/search-section";
import PaginateSection from "./sections/paginate-section";

export default function SalesPage({ auth }) {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    const search = parsedUrl.searchParams.get("search");

    useEffect(() => {
        store.dispatch(getSalesThunk(page, search??''));
    }, [page,search]);
    return (
        <AdministratorLayout user={auth.user}>
            {/* <AdministratorSalesTableSection /> */}
            <div className="my-4">
                <SearchSection />
            </div>
            <TableSection />
            <PaginateSection />
        </AdministratorLayout>
    );
}
