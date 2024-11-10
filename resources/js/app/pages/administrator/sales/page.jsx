import React, { useEffect, useState } from "react";
import AdministratorSalesTableSection from "./sections/administrator-sales-table-section";
import AdministratorLayout from "../administrator-layout";
import TableSection from "./sections/table-section";
import store from "@/store/store";
import { getSalesThunk } from "./redux/sales-thunk";

export default function SalesPage({ auth }) {
    const [page, setPage] = useState(1);
    const [searching, setSearching] = useState("");

    useEffect(() => {
        store.dispatch(getSalesThunk(page, searching));
    }, [page]);
    return (
        <AdministratorLayout user={auth.user}>
            {/* <AdministratorSalesTableSection /> */}
            <TableSection />
        </AdministratorLayout>
    );
}
