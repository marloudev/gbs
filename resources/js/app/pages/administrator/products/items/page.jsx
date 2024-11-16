import React, { useEffect } from "react";
import AdministratorLayout from "../../administrator-layout";
import ItemsCreateSection from "./sections/items-create-section";
import TableSection from "./sections/items-table-section";
import store from "@/store/store";
import { get_items_thunk } from "../redux/products-thunk";
import PaginateSection from "./sections/paginate-section";

export default function ItemsPage({ auth }) {

  useEffect(()=>{
    store.dispatch(get_items_thunk())
  },[])
    return (
        <AdministratorLayout user={auth.user}>
            <ItemsCreateSection />
            <br />
            <TableSection />
            <PaginateSection />
        </AdministratorLayout>
    );
}
