import React, { useEffect, useState } from "react";
import AdministratorLayout from "../../administrator-layout";
import TableSection from "./sections/table-section";
import store from "@/store/store";
import { getAllProductsThunk } from "../redux/products-thunk";
import { get_products_service } from "@/services/products-service";
import ProductsCreateSection from "./sections/products-create-section";
import PaginateSection from "./sections/paginate-section";
import SearchSection from "./sections/search-section";

export default function PricingPage({ auth }) {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    const search = parsedUrl.searchParams.get("search");

    console.log(window.location);
    useEffect(() => {
        store.dispatch(getAllProductsThunk(get_products_service(page, search??'')));
    }, [page,search]);

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
